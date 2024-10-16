from flask import Flask, request, jsonify, render_template, redirect, url_for
from models.Customer import Customer
from models.Location import Location

import requests
import folium
import time
import math

import joblib
import os
import pandas as pd
import numpy as np
import sqlite3

def calculate_median(transaction_amounts):
    return np.median(transaction_amounts) if transaction_amounts else 0

def haversine(lat1, lon1, lat2, lon2):
    # Radius of the Earth in kilometers
    R = 6371.0

    # Convert degrees to radians
    lat1 = math.radians(lat1)
    lon1 = math.radians(lon1)
    lat2 = math.radians(lat2)
    lon2 = math.radians(lon2)

    # Differences in latitudes and longitudes
    dlat = lat2 - lat1
    dlon = lon2 - lon1

    # Haversine formula
    a = math.sin(dlat / 2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

    # Distance in kilometers
    distance = R * c

    return distance

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        model_path = 'models/RF.pkl'
        if os.path.exists(model_path):
            model = joblib.load(model_path)
            print("Model loaded successfully.")
            print("Model",  model)
        else:
            print(f"Model not found at {model_path}")
        
        # Process custmer data from database
        conn = sqlite3.connect('database.db')
        cur = conn.cursor()
        try:
            # Get data from form
            distance_from_home = float(request.form.get('distance_from_home'))
            distance_last_transaction = float(request.form.get('distance_last_transaction'))
            ratio_median_purchase_price = float(request.form.get('ratio_median_purchase_price'))
            repeat_retailer = int(request.form.get('repeat_retailer'))
            used_chip = int(request.form.get('used_chip'))
            used_pin = int(request.form.get('used_pin'))
            online_order = int(request.form.get('online_order'))
            # Processing
            data = [distance_from_home, distance_last_transaction, ratio_median_purchase_price, repeat_retailer, used_chip, used_pin, online_order]

            # Insert into database
            cur.execute('''
                INSERT INTO transactions (distance_from_home, distance_last_transaction, ratio_median_purchase_price, repeat_retailer, used_chip, used_pin, online_order) 
                VALUES (?, ?, ?, ?, ?, ?, ?)
                ''', data)
            conn.commit()
            print("Data inserted successfully")

            scaler_minmax = [1063.723672, 11851,104565, 267.80292, 1, 1, 1, 1]
            feature_names = ['distance_from_home', 'distance_from_last_transaction', 'ratio_to_median_purchase_price', 'repeat_retailer', 'used_chip', 'used_pin_number', 'online_order']
            input_data = pd.DataFrame([data], columns=feature_names)
            # Normalization
            input_data_scaled = input_data.copy()
            for i, feature in enumerate(feature_names):
                if scaler_minmax[i] != 0:  # Avoid division by zero
                    input_data_scaled[feature] = input_data[feature] / scaler_minmax[i]
            # Prediction
            prediction = model.predict(input_data_scaled)    
            prediction = prediction.tolist()[0]
            print("prediction: ",  prediction)
            if prediction == 0.0:
                result = 'Alright youre good'
            else:
                result = 'That looks like a fraud to me'
            return render_template('index.html', prediction=result, database_result = 'Successful database entry')
        
        except Exception as e:
            print("Error: ", e)
            return render_template('index.html', prediction='Error processing data', database_result = 'Unsuccessfully database entry')
    
    return render_template('index.html')

@app.route('/data')
def data():
    conn = sqlite3.connect("database.db")
    # store all the rows
    conn.row_factory = sqlite3.Row

    cur = conn.cursor()
    cur.execute("SELECT * FROM transactions")
    rows = cur.fetchall()
    conn.close()
    return render_template("data.html", rows = rows)

@app.route('/clear_transactions', methods=['POST'])
def clear_transactions():
    conn = sqlite3.connect('database.db')
    cur = conn.cursor()
    
    try:
        cur.execute('DELETE FROM transactions')
        conn.commit()
        print("All transaction records cleared")

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        conn.close()
    
    return redirect(url_for('index'))

@app.route('/register_card', methods=['GET', 'POST'])
def register_card():
    #get details from register_card.html
    if request.method == 'POST':
        conn = sqlite3.connect('database.db')
        cur = conn.cursor()

        try:
            data = request.get_json()
            name = data.get('name')
            userAddress = data.get('userAddress')
            annual_income = data.get('annual_income')

            #User information, API call nominatim to get longitude and latitude
            BASE_URL = "https://nominatim.openstreetmap.org/search?format=json"
            headers = {"User-Agent": "TestFraudDetection"}

            response = requests.get(f"{BASE_URL}&q={userAddress}", headers=headers)
            data = response.json()
            latitude = data[0].get('lat')
            longitude = data[0].get('lon')
            # user_location = float(latitude), float(longitude)
            
            cust_loc_data = [userAddress, float(longitude), float(latitude)]

            #Insert user location data
            cur.execute('''INSERT INTO locations(name, longitude, latitude)
                        VALUES(?, ?, ?)
                        ''', cust_loc_data)
            conn.commit()
            print("Customer location data successfully inserted")

            #Get location ID to link to customer DB as FK.
            cur.execute('''
            SELECT id FROM locations WHERE name = ?''', (userAddress, ))
            location_id = cur.fetchone()[0]
            print(f"Customer location id: {location_id}")
            
            customer_data = [name, annual_income, location_id]

            #Enter a customer record with location id as foreign key
            cur.execute('''
                INSERT INTO customers (name, annual_income, location_id) 
                VALUES (?, ?, ?)
                ''', customer_data)
            conn.commit()
            print("Data inserted successfully")

        except Exception as e:
            print("Error: ", e)
            return jsonify({"error": str(e)})
        
        return render_template('register_card.html')
    return render_template('register_card.html')

            # m = folium.Map(location=user_location, zoom_start=15, width=800, height=400)
            # folium.Marker(location=[latitude, longitude], popup=userAddress).add_to(m)

            # time.sleep(1)

            # seller location1
        #     response2 = requests.get(f"{BASE_URL}&q={sellerLocation}", headers=headers)
        #     data2 = response2.json()
            
        #     print(sellerLocation)

        #     latitude2 = data2[0].get('lat')
        #     longitude2 = data2[0].get('lon')
        #     seller_location = float(latitude2), float(longitude2)
        #     # print(seller_location)

        #     #Distance between user and seller
        #     distance_difference = haversine(float(latitude), float(longitude), float(latitude2), float(longitude2))
        #     print("distance difference: ", distance_difference)

        #     folium.Marker(location=[latitude2, longitude2], popup=sellerLocation).add_to(m)
        #     folium.PolyLine((user_location, seller_location), popup=f"{distance_difference:.2f}km").add_to(m)

        #     # Check if chip or pin
        #     if chipOrPin == "Chip":
        #         used_chip = 1
        #         used_pin = 0
        #     else:
        #         used_chip = 0
        #         used_pin = 1
            

            # map_filename = f"static/{name}_map.html"
            # m.save(map_filename)
            # conn.close()
            # # map_html = m._repr_html_()
            # return jsonify({"map_url": map_filename})

        # except Exception as e:
        #     print("Error: ", e)
        #     return jsonify({"error": str(e)})

    # return render_template('register_card.html')

@app.route('/add_transaction', methods=["GET", "POST"])
def add_transaction():
    if request.method == "POST":
        conn = sqlite3.connect('database.db')
        cur = conn.cursor()
        try:
            data = request.get_json()
            name = data.get("name")
            sellerLocation = data.get("sellerLocation")
            amount = data.get("amount")
            chipOrPin = data.get("chipOrPin")
            onlineOrder = data.get("onlineOrder")
            
            #User information
            BASE_URL = "https://nominatim.openstreetmap.org/search?format=json"
            headers = {"User-Agent": "TestFraudDetection"}

            response = requests.get(f"{BASE_URL}&q={sellerLocation}", headers=headers)
            data = response.json()
            latitude = data[0].get('lat')
            longitude = data[0].get('lon')
            # seller_location = float(latitude), float(longitude)
            seller_loc_data = [sellerLocation, float(longitude), float(latitude)]

            # Check if location already exists
            cur.execute('''SELECT * FROM locations WHERE name = ? AND longitude = ? AND latitude = ?''', (sellerLocation, float(longitude), float(latitude)))
            existing_location = cur.fetchone()
            if existing_location is None:
                cur.execute('''INSERT INTO locations(name, longitude, latitude)
                            VALUES(?, ?, ?)
                            ''', seller_loc_data)
                conn.commit()
                print("Transaction location data successfully inserted")
            # retrieve location id
            cur.execute('''SELECT id FROM locations WHERE name =? AND longitude = ? AND latitude = ?''', (sellerLocation, float(longitude), float(latitude)))
            seller_location_id = int(cur.fetchone()[0])
            print("seller location id: ", seller_location_id)

            #Deriving chip or pin used data
            if chipOrPin == "Chip":
                used_chip = 1
                used_pin = 0
            else:
                used_chip = 0
                used_pin = 1
            print("used chip: ", used_chip)
            print("used_pin: ", used_pin)

            #Deriving online order data
            if onlineOrder == "Yes":
                online_order = 1
            else:
                online_order = 0
            print("online order: ", online_order)
            print("name: ", name)

            # retrieve customer id
            cur.execute('''SELECT id FROM customers WHERE name = ?''', (name,))
            customer_id = int(cur.fetchone()[0])
            print("customer id: ", customer_id)

            # Insert transaction record into database
            cur.execute('''INSERT INTO transactions (transaction_amount, used_chip, used_pin, online_order, customer_id, location_id) VALUES (?, ?, ?, ?, ?, ?)''', 
                        (amount, used_chip, used_pin, online_order, customer_id, seller_location_id))
            conn.commit()
            print('Successfully logged transaction details')
            
            # Calculate the distance between the customer's home location and the transaction location
            cur.execute('''
                SELECT c.id, c.name, c.location_id AS home_location_id,
                    t.location_id AS transaction_location_id,
                    l1.longitude AS home_longitude, l1.latitude AS home_latitude,
                    l2.longitude AS transaction_longitude, l2.latitude AS transaction_latitude
                FROM transactions t
                JOIN customers c ON t.customer_id = c.id
                JOIN locations l1 ON c.location_id = l1.id
                JOIN locations l2 ON t.location_id = l2.id
            ''')
            transactions = cur.fetchall()
            for trans in transactions:
                customer_id = int(trans[0])

                transaction_location_id = int(trans[3])

                home_lon = float(trans[4])
                home_lat = float(trans[5])
                trans_lon = float(trans[6])
                trans_lat = float(trans[7])
                dist_from_home = haversine(home_lat, home_lon, trans_lat, trans_lon)
                
                # Update the transaction log with the calculated distance
                cur.execute('''
                    UPDATE transactions
                    SET dist_from_home = ?
                    WHERE customer_id = ? AND location_id = ?
                ''', (dist_from_home, customer_id, transaction_location_id))
            conn.commit()

            #Calculate the distance between current transaction and previous transaction
            cur.execute('''
                SELECT t.id, t.customer_id, t.location_id, l.longitude, l.latitude
                FROM transactions t
                JOIN locations l ON t.location_id = l.id
                ORDER BY t.customer_id, t.id 
                ''')
        
            transactions = cur.fetchall()
            print("transactions: ", transactions)
            print("")
            previous_transaction = None
            for trans in transactions:
                transaction_id = int(trans[0])
                customer_id = int(trans[1])
                curr_lon = float(trans[3])
                curr_lat = float(trans[4])

                if previous_transaction and previous_transaction[1] == customer_id:
                    print("prv_transaction: ", previous_transaction)
                    print("prv_transaction[1]: ", previous_transaction[1])

                    prev_lon = previous_transaction[3]
                    prev_lat = previous_transaction[4]

                    print("prev_lon: ", prev_lon)
                    print("prev_lat: ", prev_lat)

                    # Calculate distance between current and previous transaction location
                    dist_from_last_transaction = haversine(prev_lat, prev_lon, curr_lat, curr_lon)

                    # # Update the transaction log with the calculated distance
                    # cur.execute('''
                    #     UPDATE transactions
                    #     SET dist_from_last_transaction = ?
                    #     WHERE id = ?
                    # ''', (dist_from_last_transaction, transaction_id))
                
                elif previous_transaction == None:
                    dist_from_last_transaction = 0

                print("dist from last trans: ", dist_from_last_transaction)
                # Update the transaction log with the calculated distance
                cur.execute('''
                    UPDATE transactions
                    SET dist_from_last_transaction = ?
                    WHERE id = ?
                ''', (dist_from_last_transaction, transaction_id))

                previous_transaction = trans
            conn.commit()

            #Populate repeat retailer information
            cur.execute('SELECT id, customer_id, location_id FROM transactions ORDER BY id ASC')
            transactions = cur.fetchall()

            for trans in transactions:
                transaction_id = int(trans[0])
                customer_id = int(trans[1])
                location_id = int(trans[2])

                # Check if the same customer has transacted at the same location before this transaction
                cur.execute('''
                    SELECT COUNT(*) 
                    FROM transactions 
                    WHERE customer_id = ? AND location_id = ? AND id < ?
                ''', (customer_id, location_id, transaction_id))
                
                repeat_count = int(cur.fetchone()[0])

                # If the repeat count is greater than 0, it's a repeat transaction (set repeat_retailer to 1)
                repeat_retailer = 1 if repeat_count > 0 else 0

                # Update the repeat_retailer field for the current transaction
                cur.execute('''
                    UPDATE transactions 
                    SET repeat_retailer = ?
                    WHERE id = ?
                ''', (repeat_retailer, transaction_id))

            conn.commit()

            #Populate ratio to median price
            # Fetch all transactions ordered by customer and transaction id (chronologically)
            cur.execute('''
                SELECT t.id, t.transaction_amount, t.customer_id, c.annual_income
                FROM transactions t
                JOIN customers c ON t.customer_id = c.id
                ORDER BY t.customer_id, t.id
            ''')
            transactions = cur.fetchall()

            customer_transactions = {}

            for trans in transactions:
                transaction_id = int(trans[0])
                transaction_amount = float(trans[1])
                customer_id = int(trans[2])
                annual_income = float(trans[3])
                
                # If this is the first transaction for the customer, use the income-based median
                if customer_id not in customer_transactions:
                    # First transaction, calculate median as annual_income / 12
                    median_spending = (annual_income / 12)/30  # Monthly income divided by 30 days
                    customer_transactions[customer_id] = [transaction_amount]  # Start list of customer's transactions
                else:
                    # Calculate median based on previous transactions for this customer
                    previous_transactions = customer_transactions[customer_id]
                    median_spending = calculate_median(previous_transactions)
                    customer_transactions[customer_id].append(transaction_amount)

                # Calculate the ratio of transaction amount to median spending
                ratio_to_median_spendings = transaction_amount / median_spending if median_spending != 0 else 0

                # Update the ratio_to_median_spendings field for the current transaction
                cur.execute('''
                    UPDATE transactions
                    SET ratio_to_median_spendings = ?
                    WHERE id = ?
                ''', (ratio_to_median_spendings, transaction_id))

            conn.commit()

            # Populate prediction
            #Load model
            model_path = 'models/RF.pkl'
            if os.path.exists(model_path):
                model = joblib.load(model_path)
                print("Model loaded successfully.")
                print("Model",  model)
            else:
                print(f"Model not found at {model_path}")
            
            cur.execute('''SELECT * FROM transactions''')
            transactions = cur.fetchall()
            scaler_minmax = [1063.723672, 11851,104565, 267.80292, 1, 1, 1, 1]
            feature_names = ['distance_from_home', 'distance_from_last_transaction', 'ratio_to_median_purchase_price', 'repeat_retailer', 'used_chip', 'used_pin_number', 'online_order']

            for trans in transactions:
                transaction_id = trans[0]
                transaction_amount = trans[1]
                used_chip = trans[2]
                used_pin = trans[3]
                online_order = trans[4]
                customer_id = trans[5]
                location_id = trans[6]
                dist_from_home = trans[7]
                dist_from_last_transaction = trans[8]
                repeat_retailer = trans[9]
                ratio_to_median_spendings = trans[10]

                #Cont from here
                input_data = [dist_from_home, dist_from_last_transaction, ratio_to_median_spendings, repeat_retailer, used_chip, used_pin, online_order]
                result = [x / y for x, y in zip(input_data, scaler_minmax)]
                input_records = pd.DataFrame([result], columns=feature_names)
                prediction = model.predict(input_records)
                prediction = prediction.tolist()[0]
                if prediction == 0.0:
                    result = 'legitimate'
                else:
                    result = 'fraudulent'
                
                print(prediction, transaction_id)
                cur.execute('''UPDATE transactions
                            SET prediction = ?
                            WHERE id = ?
                            ''', (int(prediction), transaction_id))
                conn.commit()
            conn.close()

            #     input_data = [dist_from_home, dist_from_last_transaction, ratio_to_median_spendings, repeat_retailer, used_chip, used_pin, online_order]
            #     print(input_data)
            #     scaler_minmax = [1063.723672, 11851,104565, 267.80292, 1, 1, 1, 1]
            #     feature_names = ['distance_from_home', 'distance_from_last_transaction', 'ratio_to_median_purchase_price', 'repeat_retailer', 'used_chip', 'used_pin_number', 'online_order']
            #     input_records = pd.DataFrame([input_data], columns=feature_names)

            #     #Normalization
            #     input_records_scaled = input_records.copy()
            #     for i, feature in enumerate(feature_names):
            #         if scaler_minmax[i] != 0: # Avoid division by zero
            #             input_records_scaled[feature] = input_records[feature]/scaler_minmax[i]

            #     transaction_id_list.append(transaction_id)
            # print("transaction_id_list: ", transaction_id_list)

            # # Prediction
            # prediction = model.predict(input_records_scaled)
            # print("model predictions list: ", prediction.tolist())
            # prediction = prediction.tolist()[0]
            # print("prediction: ",  prediction)
            # if prediction == 0.0:
            #     result = 'Alright youre good'
            # else:
            #     result = 'That looks like a fraud to me'
            # print(result)

            # for n in transaction_id_list:
            #     print("trans_id: ", n)
            # #Insert prediction into transaction table
            #     cur.execute('''UPDATE transactions
            #                 SET prediction = ?
            #                 WHERE id = ?
            #                 ''', (int(prediction), n))
            #     # return render_template('index.html', prediction=result, database_result = 'Successful database entry')
            # conn.close()

            return render_template("add_transaction.html")

        except Exception as e:
                print("Error: ", e)
                return jsonify({"error": str(e)})
        

    return render_template('add_transaction.html')

@app.route('/summary')
def summary():
    # plotting table
    try:
        conn = sqlite3.connect("database.db")
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute('''
        SELECT transactions.id AS transaction_id, 
            c.name AS cust_name, 
            transaction_amount, 
            used_chip, 
            used_pin, 
            online_order, 
            l.name AS loc_name,
            cl.name AS cust_home_location,
            dist_from_home, 
            dist_from_last_transaction, 
            repeat_retailer, 
            ratio_to_median_spendings, 
            prediction 
        FROM transactions
        JOIN customers c ON transactions.customer_id = c.id
        JOIN locations l ON transactions.location_id = l.id
        JOIN locations cl ON c.location_id = cl.id
        ''')
        rows = cur.fetchall()
        conn.close()

    #     cust_home_location = set()
    #     transaction_locations = []
    #     predictions = []
    #     transaction_amounts = []
    #     for row in rows:
    #         cust_home_location.add(row['cust_home_location'])
    #         transaction_locations.append(row['loc_name'])
    #         if int(row['prediction']) == 1:
    #             predictions.append('Flagged Fraudulent')
    #         else:
    #             predictions.append('Flagged Legitimate')
    #         transaction_amounts.append(row['transaction_amount'])

    #     cust_home_location = list(cust_home_location)[0]
    #     print(transaction_locations)
    #     BASE_URL = "https://nominatim.openstreetmap.org/search?format=json"
    #     headers = {"User-Agent": "TestFraudDetection"}

    #     response = requests.get(f"{BASE_URL}&q={cust_home_location}", headers=headers)
    #     data = response.json()
    #     latitude = data[0].get('lat')
    #     longitude = data[0].get('lon')
    #     home_loc = float(latitude), float(longitude)
    #     print(home_loc)

    #     m = folium.Map(location=home_loc, zoom_start=15, width=800, height=400)
    #     folium.Marker(location=home_loc, popup=cust_home_location).add_to(m)
    #     prev_loc = home_loc

    #     for i, (loc, prediction, transaction_amounts) in enumerate(zip(transaction_locations, predictions, transaction_amounts), start=1):
    #         response = requests.get(f"{BASE_URL}&q={loc}", headers=headers)
    #         data = response.json()
    #         latitude = data[0].get('lat')
    #         longitude = data[0].get('lon')
    #         transaction_loc = float(latitude), float(longitude)
    #         folium.Marker(location=transaction_loc, popup=loc).add_to(m)
    #         folium.PolyLine([prev_loc, transaction_loc], popup=f"Transaction {i}: {haversine(prev_loc[0], prev_loc[1], transaction_loc[0], transaction_loc[1]):.2f}km<br>${transaction_amounts:.2f}<br>{prediction}").add_to(m)
    #         prev_loc = transaction_loc
    #         time.sleep(1)

    #     map_filename = f"static/map.html"
    #     m.save(map_filename)
    #     return render_template("summary.html", rows=rows, map_url=map_filename)
        return render_template("summary.html", rows=rows)
    except Exception as e:
        return jsonify({"error": str(e)})
    
    # except Exception as e:
    #     print("Error: ", e)
    #     return jsonify({"error": str(e)})

@app.route('/get_map')
def get_map():
    try:
        # Fetch transaction and customer home locations and generate map
        conn = sqlite3.connect("database.db")
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute('''
        SELECT transactions.id AS transaction_id, 
            c.name AS cust_name, 
            transaction_amount, 
            used_chip, 
            used_pin, 
            online_order, 
            l.name AS loc_name,
            cl.name AS cust_home_location,
            dist_from_home, 
            dist_from_last_transaction, 
            repeat_retailer, 
            ratio_to_median_spendings, 
            prediction 
        FROM transactions
        JOIN customers c ON transactions.customer_id = c.id
        JOIN locations l ON transactions.location_id = l.id
        JOIN locations cl ON c.location_id = cl.id
        ''')
        rows = cur.fetchall()
        conn.close()

        cust_home_location = set()
        transaction_locations = []
        predictions = []
        transaction_amounts = []
        for row in rows:
            cust_home_location.add(row['cust_home_location'])
            transaction_locations.append(row['loc_name'])
            predictions.append('Flagged Fraudulent' if int(row['prediction']) == 1 else 'Flagged Legitimate')
            transaction_amounts.append(row['transaction_amount'])

        cust_home_location = list(cust_home_location)[0]
        BASE_URL = "https://nominatim.openstreetmap.org/search?format=json"
        headers = {"User-Agent": "TestFraudDetection"}

        response = requests.get(f"{BASE_URL}&q={cust_home_location}", headers=headers)
        data = response.json()
        latitude = data[0].get('lat')
        longitude = data[0].get('lon')
        home_loc = float(latitude), float(longitude)

        m = folium.Map(location=home_loc, zoom_start=15, width=800, height=400)
        folium.Marker(location=home_loc, popup=cust_home_location).add_to(m)
        prev_loc = home_loc

        for i, (loc, prediction, transaction_amount) in enumerate(zip(transaction_locations, predictions, transaction_amounts), start=1):
            response = requests.get(f"{BASE_URL}&q={loc}", headers=headers)
            data = response.json()
            latitude = data[0].get('lat')
            longitude = data[0].get('lon')
            transaction_loc = float(latitude), float(longitude)
            folium.Marker(location=transaction_loc, popup=loc).add_to(m)
            folium.PolyLine([prev_loc, transaction_loc], popup=f"Transaction {i}: {transaction_loc}").add_to(m)
            prev_loc = transaction_loc
            # time.sleep(1)

        map_filename = f"static/map.html"
        m.save(map_filename)
        
        return jsonify({"map_url": map_filename})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)