import React from "react";

const ProposedSolution = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>BUSINESS SOLUTION</h1>
            <div style={styles.boxContainer}>
                <div style={styles.box}>
                    <h3 style={styles.boxTitle}>Solution: Dynamic Fraud Scoring Implementation</h3>
                    <p>Implement a system that adapts based on customer's transaction behaviors. For instance,
                        if the customer frequently travels for work or is known to make high-value purchases from
                        various locations, the alogrithm should reduce the weight of distance related features.
                    </p>
                    <h3 style={styles.boxTitle}>How: <br></br>Real-time Location Tracking</h3>
                    <p>Tracking (with customer consent) via mobile app to cross-reference cardholder's actual location and transaction location.</p>
                    
                    <h3 style={styles.boxTitle}>Customer Travel Notification</h3>
                    <p></p>
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
    },
    image: {
        maxWidth: '100%', // Ensures the image doesn't exceed the container's width
        height: '65%', // Keeps the aspect ratio intact
    },
    image2: {
        maxWidth: '70%', // Ensures the image doesn't exceed the container's width
        height: '70%', // Keeps the aspect ratio intact

    },
};

export default ProposedSolution;