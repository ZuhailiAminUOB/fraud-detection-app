import React, { useState } from 'react';

const DatasetFeatures = () => {
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [hoveredFeature, setHoveredFeature] = useState(null); // Track the hovered feature

    const handleFeatureClick = (feature) => {
        setSelectedFeature(feature);
    };

    const handleMouseEnter = (feature) => {
        setHoveredFeature(feature); // Set the feature being hovered over
    };

    const handleMouseLeave = () => {
        setHoveredFeature(null); // Clear the hovered feature when the mouse leaves
    };

    const featureImages = {
        'Distance from home': require('../images/distribution_of_distance_from_home.png'),
        'Distance from last transaction': require('../images/distribution_of_distance_from_last_transaction.png'),
        'Ratio to median purchase price': require('../images/distribution_of_ratio_to_median_purchase_price.png'),
        'Used chip': require('../images/distribution_of_used_chip.png'),
        'Used Pin Number': require('../images/distribution_of_used_pin_number.png'),
        'Repeat Retailer': require('../images/distribution_of_repeat_retailer.png'),
        'Online or offline transaction': require('../images/distribution_of_online_order.png')
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>FEATURES</h1>
            <p>Click on each feature to visualize the distribution against fraud.</p>
            <div style={styles.boxContainer}>
                <div style={styles.box}>
                    <h3 style={styles.boxTitle}>Distance</h3>
                    <p
                        style={hoveredFeature === "Distance from home" ? styles.boxTextHover : styles.boxText}
                        onClick={() => handleFeatureClick("Distance from home")}
                        onMouseEnter={() => handleMouseEnter("Distance from home")}
                        onMouseLeave={handleMouseLeave}
                    >
                        Distance from home
                    </p>
                    <p
                        style={hoveredFeature === "Distance from last transaction" ? styles.boxTextHover : styles.boxText}
                        onClick={() => handleFeatureClick("Distance from last transaction")}
                        onMouseEnter={() => handleMouseEnter("Distance from last transaction")}
                        onMouseLeave={handleMouseLeave}
                    >
                        Distance from last transaction
                    </p>
                </div>
                <div style={styles.box}>
                    <h3 style={styles.boxTitle}>Amount</h3>
                    <p
                        style={hoveredFeature === "Ratio to median purchase price" ? styles.boxTextHover : styles.boxText}
                        onClick={() => handleFeatureClick("Ratio to median purchase price")}
                        onMouseEnter={() => handleMouseEnter("Ratio to median purchase price")}
                        onMouseLeave={handleMouseLeave}
                    >
                        Ratio to median purchase price
                    </p>
                </div>
                <div style={styles.box}>
                    <h3 style={styles.boxTitle}>Transaction Details</h3>
                    <p
                        style={hoveredFeature === "Used chip" ? styles.boxTextHover : styles.boxText}
                        onClick={() => handleFeatureClick("Used chip")}
                        onMouseEnter={() => handleMouseEnter("Used chip")}
                        onMouseLeave={handleMouseLeave}
                    >
                        Used chip
                    </p>
                    <p
                        style={hoveredFeature === "Used Pin Number" ? styles.boxTextHover : styles.boxText}
                        onClick={() => handleFeatureClick("Used Pin Number")}
                        onMouseEnter={() => handleMouseEnter("Used Pin Number")}
                        onMouseLeave={handleMouseLeave}
                    >
                        Used Pin Number
                    </p>
                    <p
                        style={hoveredFeature === "Repeat Retailer" ? styles.boxTextHover : styles.boxText}
                        onClick={() => handleFeatureClick("Repeat Retailer")}
                        onMouseEnter={() => handleMouseEnter("Repeat Retailer")}
                        onMouseLeave={handleMouseLeave}
                    >
                        Repeat Retailer
                    </p>
                </div>
                <div style={styles.box}>
                    <h3 style={styles.boxTitle}>Online Order</h3>
                    <p
                        style={hoveredFeature === "Online or offline transaction" ? styles.boxTextHover : styles.boxText}
                        onClick={() => handleFeatureClick("Online or offline transaction")}
                        onMouseEnter={() => handleMouseEnter("Online or offline transaction")}
                        onMouseLeave={handleMouseLeave}
                    >
                        Online or offline transaction
                    </p>
                </div>
            </div>
            
            {/* Render the selected image */}
            <div style={styles.imageContainer}>
                {selectedFeature && (
                    <img
                        src={featureImages[selectedFeature]}
                        alt={selectedFeature}
                        style={styles.image}
                    />
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 60%, rgba(178, 255, 255, 0.6) 100%)',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '20px',
        color: '#000',
        fontFamily: 'system-ui',
    },
    boxContainer: {
        display: 'flex',
        justifyContent: 'space-between', // Evenly space out boxes
        width: '100%', // Full width for the boxes
        maxWidth: '1000px', // Optional: Max width for better spacing
    },
    box: {
        flex: 1, // Each box takes equal space
        margin: '10px', // Space between boxes
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px', // Rounded corners
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Optional shadow
        textAlign: 'center', // Center text
    },
    boxTitle: {
        marginBottom: '10px', // Space below title
        fontSize: '1rem', // Title font size
    },
    boxText: {
        margin: '5px 0', // Space between paragraphs
        fontSize: '1rem', // Paragraph font size
        cursor: 'pointer', // Make it look clickable
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease', // Smooth transition for hover
    },
    boxTextHover: {
        transform: 'scale(1.05)', // Slightly increase size on hover
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Darker shadow on hover
        color: '#007BFF', // Change color on hover (optional)
    },
    imageContainer: {
        marginTop: '10px',
        width: '45%',
        height: '45%', // Allow height to adjust based on the aspect ratio of the image
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        backgroundColor: '#f4f4f4',
    },
    image: {
        maxWidth: '60%', // Ensures the image doesn't exceed the container's width
        height: 'auto', // Keeps the aspect ratio intact
        objectFit: 'contain', // Ensure image stays within the div and scales proportionately
    },
};

export default DatasetFeatures;
