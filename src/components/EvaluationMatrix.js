import React, { useState } from 'react';

const EvaluationMatrix = () => {
    const [showMatrixImage, setShowMatrixImage] = useState(false); // State to toggle between image and text content

    // Function to toggle the state
    const toggleMatrix = () => {
        setShowMatrixImage((prevShowMatrix) => !prevShowMatrix); // Toggle between showing the image and the box/text
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>RANDOM FOREST EVALUATION</h1>
            
            {showMatrixImage ? (
                // Display the confusion matrix image
                <img src={require('../images/random_forest_optimization.png')} alt="Confusion Matrix" style={styles.image} />
            ) : (
                // Display the original text and box content when not showing the image
                <div style={styles.matrixContainer}>
                    
                    <div style={styles.matrixGrid}>
                        <div style={styles.cell}>
                            <p style={styles.greenText}>Legitimate transactions predicted as legitimate</p>
                            <p style={styles.cellNumber}>182,509</p>
                        </div>
                        <div style={styles.cell}>
                            <p style={styles.redText}>Legitimate transactions predicted as fraudulent</p>
                            <p style={styles.cellNumber}>48</p>
                        </div>
                        <div style={styles.cell}>
                            <p style={styles.redText}>Fraudulent transactions predicted as legitimate</p>
                            <p style={styles.cellNumber}>1</p>
                        </div>
                        <div style={styles.cell}>
                            <p style={styles.greenText}> Fraudulent transactions predicted as fraudulent</p>
                            <p style={styles.cellNumber}>17,142</p>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={toggleMatrix} style={styles.button}>
                {showMatrixImage ? 'Show Confusion Matrix' : 'Show Optimization'}
            </button>
        </div>
    );
};

// Styles for the component
const styles = {
    container: {
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 60%, rgba(178, 255, 255, 0.6) 100%)',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '20px',
        color: '#000',
        fontFamily: 'system-ui',
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    matrixContainer: {
        display: "flex",
        justifyContent: "center", // Add this to center horizontally
        alignItems: "center", // Add this to align vertically
        width: "100%",
        maxWidth: "1200px", // Ensure the container has enough width to fit the matrix and annotations
        gap: "20px", // Space between the matrix and annotations
    },
    matrixGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
        gap: "20px",
        border: "2px solid #000",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
    },
    cell: {
        textAlign: "center",
        padding: "10px",
        border: "1px solid #000",
        borderRadius: "5px",
        backgroundColor: "#fff",
    },
    cellNumber: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginTop: "10px",
    },
    leftAnnotations: {
        textAlign: "right",
        marginRight: "20px",
    },
    rightAnnotations: {
        textAlign: "left",
        marginLeft: "20px",
    },
    greenText: {
        color: "green",
        fontSize: "0.9rem",
        fontWeight: "bold",
    },
    redText: {
        color: "red",
        fontSize: "0.9rem",
        fontWeight: "bold",
    },
    labelContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "500px",
        marginTop: "20px",
    },
    image: {
        maxWidth: '50%',  // Adjust this percentage to control the width
        height: 'auto',   // Ensures the aspect ratio is maintained
        border: '2px solid #000',
        borderRadius: '10px',
        padding: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
};


export default EvaluationMatrix;
