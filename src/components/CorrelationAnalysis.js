import React from "react";

const CorrelationAnalysis = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>CORRELATION ANALYSIS</h1>
            <div style={styles.imageContainer}>
                <img 
                    src={require('../images/correlation_analysis.png')} 
                    alt="Correlation Analysis" 
                    style={styles.image} 
                />
            </div>
            <p style={styles.description}>
                Correlation analysis is performed to visualize how well the target value can be explained by each feature.
                <br></br>
                The correlation coefficient between distance from home and fraud is <strong>0.210199</strong>.
                <br></br>
                <br></br>
                <strong>Explanation</strong>
                <br></br>
                This suggests that as the distance from a customer’s home increases, the likelihood of a transaction being flagged as fraudulent slightly increases. However, the relationship is not strong enough to be a sole predictor, meaning other factors also play significant roles in identifying fraudulent activity.
            </p>
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
    boxHover: {
        transform: 'scale(1.05)', // Slightly enlarge the box
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Darker shadow on hover
    },
    boxTitle: {
        marginBottom: '10px', // Space below title
        fontSize: '1rem', // Title font size
    },
    boxText: {
        margin: '5px 0', // Space between paragraphs
        fontSize: '1rem', // Paragraph font size
    },
    imageContainer: {
        marginTop: '5px',
        width: '90%',
        height: '50%', // Allow height to adjust based on the aspect ratio of the image
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        backgroundColor: '#f4f4f4',
        boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)',
    },
    image: {
        maxWidth: '100%', // Ensures the image doesn't exceed the container's width
        height: 'auto', // Keeps the aspect ratio intact
        objectFit: 'contain', // Ensure image stays within the div and scales proportionately
    },
};

export default CorrelationAnalysis;