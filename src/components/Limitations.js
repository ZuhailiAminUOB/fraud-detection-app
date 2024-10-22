import React from "react";

const Limitations = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>LIMITATIONS</h1>
            <div style={styles.boxContainer}>
                <div style={styles.box}>
                    <h3 style={styles.boxTitle}>Feature Limitations</h3>
                    <p>In real-world conditions, fraudulent transactions are based
                    on many other features such as transaction time, frequency, etc. </p>
                    <h3 style={styles.boxTitle}>Generalization to Real-world Scenario</h3>
                    <p>Transaction patterns and fraud tactics vary across regions, industries, and over time.</p>
                    <h3 style={styles.boxTitle}>Dataset Imbalance</h3>
                    <p>Fraud detection dataset typically suffer from class imbalance with fraudulent transactions being rare compared to legitimate ones.</p>
                </div>
                <div style={styles.box}>
                    <h3 style={styles.boxTitle}>Dynamic Nature of Fraud</h3>
                    <p>Kaggle dataset may not capture emerging fraud tactics. Models trained on outdated dataset become less effective overtime.</p>
                    <h3 style={styles.boxTitle}>Bias and Ethical Concerns</h3>
                    <p>Bias may be introduced based on geography, spending, or online behavior. Example, people who spend more overseas are more likely to trigger a fraud alert.
                        This leads to unfair treatment of certain customer groups.
                    </p>

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

export default Limitations;