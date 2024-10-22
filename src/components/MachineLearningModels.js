import React, { useState } from "react";

const MachineLearningModels = () => {
    // State to track which models have their performance displayed
    const [performanceVisible, setPerformanceVisible] = useState(Array(6).fill(false));

    // Create an array of models with their descriptions and performance info
    const models = [
        {
            title: "Naive Bayes",
            description: "A simple probabilistic classifier based on applying Bayes' theorem with strong independence assumptions between features.",
            performance: "Precision: 43% Recall: 96% f1-score: 60%",
            image: require('../images/naive_bayes_icon.png'),
            performanceImage: require('../images/naive_bayes_cm.png'), // Add your performance image
        },
        {
            title: "Logistic Regression",
            description: "A linear model used for binary classification that predicts the probability of an event occurring by fitting data to a logistic curve.",
            performance: "Precision: 50% Recall: 94% f1-score: 65%",
            image: require('../images/logistic_regression_icon.png'),
            performanceImage: require('../images/logistic_regression_cm.png'), // Add your performance image
        },
        {
            title: "Decision Trees",
            description: "A model that splits data into subsets based on feature values, forming a tree structure where each node represents a decision rule.",
            performance: "Precision: 94% Recall: 99% f1-score: 96%",
            image: require('../images/decision_tree_icon.png'),
            performanceImage: require('../images/decision_tree_cm.png'), // Add your performance image
        },
        {
            title: "Random Forest",
            description: "An ensemble method that builds multiple decision trees and combines their outputs to improve accuracy and reduce overfitting.",
            performance: "Precision: 99% Recall: 99% f1-score: 99%",
            image: require('../images/random_forest_icon.png'),
            performanceImage: require('../images/random_forest_cm.png'), // Add your performance image
        },
        {
            title: "Neural Network 3 Layers",
            description: "A neural network with an input layer, one hidden layer, and an output layer, used for approximating complex functions in classification or regression.",
            performance: "Precision: 86% Recall: 99% f1-score: 92%",
            image: require('../images/neural_network_icon.png'),
            performanceImage: require('../images/nn3_cm.png'), // Add your performance image
        },
        {
            title: "Neural Network 4 Layers",
            description: "A neural network with an input layer, two hidden layers, and an output layer, offering more capacity for learning complex patterns in data.",
            performance: "Precision: 83% Recall: 99% f1-score: 90%",
            image: require('../images/neural_network_icon.png'),
            performanceImage: require('../images/nn4_cm.png'), // Add your performance image
        },
    ];

    // Function to toggle performance visibility
    const togglePerformance = (index) => {
        setPerformanceVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = !newVisibility[index]; // Toggle the current index
            return newVisibility;
        });
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>MACHINE LEARNING MODELS</h1>
            <div style={styles.boxContainer}>
                {models.map((model, index) => (
                    <div key={index} style={styles.box}>
                        <h3 style={styles.boxTitle}>{model.title}</h3>
                        <p>{performanceVisible[index] ? model.performance : model.description}</p>
                        <img
                            src={performanceVisible[index] ? model.performanceImage : model.image}
                            alt={'Error loading image'}
                            style={styles.image}
                        />
                        <div>
                        <button onClick={() => togglePerformance(index)} style={styles.button}>
                            Performance
                        </button>
                        </div>
                    </div>
                ))}
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
        minHeight: '100vh',
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
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        width: '100%',
        maxWidth: '1200px',
    },
    box: {
        flex: '0 0 calc(33.333% - 20px)',
        margin: '10px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        margin: '10px auto',
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
};

export default MachineLearningModels;
