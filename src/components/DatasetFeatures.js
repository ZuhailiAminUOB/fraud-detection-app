import React from 'react';

const DatasetFeatures = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>FEATURES</h1>
            <div style={styles.boxContainer}>
                <div style={styles.box}>
                    <h3 style={styles.boxTitle}>Distance</h3>
                    <p style={styles.boxText}>Distance from home</p>
                    <p style={styles.boxText}>Distance from last transaction</p>

                </div>
                <div style={styles.box}>
                    <h3 style={styles.boxTitle}>Amount</h3>
                    <p style={styles.boxText}>Ratio to median purchase price</p>
                </div>
                <div style={styles.box}>
                    <h3 style={styles.boxTitle}>Transaction Details</h3>
                    <p style={styles.boxText}>Used chip</p>
                    <p style={styles.boxText}>Used Pin Number</p>
                    <p style={styles.boxText}>Repeat Retailer</p>
                </div>
                <div style={styles.box}>
                    <h3 style={styles.boxTitle}>Online Order</h3>
                    <p style={styles.boxText}>Online or offline transaction</p>
                </div>
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
        backgroundColor: '#f0f0f0', // Background color of the box
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
    },
};

export default DatasetFeatures;
