import sqlite3

conn = sqlite3.connect('database.db')
print("Connected to database successfully")
cur = conn.cursor()

cur.execute('DROP TABLE IF EXISTS locations')
print("Location tabled dropped successfully")
cur.execute('''
CREATE TABLE locations(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    longitude FLOAT,
    latitude FLOAT)
''')

cur.execute('DROP TABLE IF EXISTS customers')
print('Customer table dropped successfully')
cur.execute('''
CREATE TABLE customers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    annual_income FLOAT,
    location_id INTEGER,
    FOREIGN KEY (location_id) REFERENCES locations(id)
        ON DELETE SET NULL ON UPDATE CASCADE)
    ''')
print("Successfully created customer table")


cur.execute('DROP TABLE IF EXISTS transactions')
print("Transactions table dropped successfully")
cur.execute('''
CREATE TABLE transactions(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    transaction_amount FLOAT,
    used_chip INTEGER,
    used_pin INTEGER,
    online_order INTEGER,
    customer_id INTEGER,
    location_id INTEGER,
    dist_from_home FLOAT DEFAULT NULL,
    dist_from_last_transaction FLOAT DEFAULT NULL,
    repeat_retailer INTEGER DEFAULT NULL,
    ratio_to_median_spendings FLOAT DEFAULT NULL,
    prediction INTEGER DEFAULT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (location_id) REFERENCES locations(id) ON DELETE SET NULL ON UPDATE CASCADE)
''')

conn.close()