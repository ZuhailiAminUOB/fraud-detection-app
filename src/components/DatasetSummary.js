import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DatasetSummary = () => {
    // Initial chart data (Original State)
    const originalData = {
        labels: ['Credit Card Transactions'],
        datasets: [
            {
                label: 'Legitimate',
                data: [912597],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Fraudulent',
                data: [87403],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                
            },
        ],
    };

    // Processed data after balancing (New State)
    const processedData = {
        labels: ['Credit Card Transactions'],
        datasets: [
            {
                label: 'Legitimate',
                data: [69960], // Updated value after processing
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Fraudulent',
                data: [69960],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Text descriptions
    const originalDescription = 'The dataset is imbalanced.';
    const processedDescription ='Undersampling is done to remove the skewness.';
    const originalDescription2 = '0.095% of the transactions are fraudulent.';
    const processedDescription2 = 'Feeding balanced data into a Machine Learning model reduces biasness, resulting in a more robust model.';

    // State to toggle between original and processed data
    const [isProcessed, setIsProcessed] = useState(false);
    const [chartData, setChartData] = useState(originalData);
    const [description, setDescription] = useState(originalDescription);
    const [description2, setDescription2] = useState(originalDescription2);

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Credit Card Transactions',
            },
        },
    };

    // Toggle handler for the button
    const handleToggleData = () => {
        if (isProcessed) {
            // If already processed, revert to original state
            setChartData(originalData);
            setDescription(originalDescription);
            setDescription2(originalDescription2);
            setIsProcessed(false); // Reset to original state
        } else {
            // If not processed, change to processed data
            setChartData(processedData);
            setDescription(processedDescription);
            setDescription2(processedDescription2);
            setIsProcessed(true); // Set to processed state
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Dataset</h1>
            <div style={styles.content}>
                <div style={styles.chartContainer}>
                    <Bar data={chartData} options={options} />
                </div>
                <div style={styles.details}>
                    <div style={styles.detailBox}>
                        <h2 style={styles.legitimate}>{chartData.datasets[0].data[0].toLocaleString()}</h2>
                        <p>LEGITIMATE</p>
                        <p>{description}</p>
                    </div>
                    <div style={styles.divider}></div>
                    <div style={styles.detailBox}>
                        <h2 style={styles.fraudulent}>{chartData.datasets[1].data[0].toLocaleString()}</h2>
                        <p>FRAUDULENT</p>
                        <p>{description2}</p>
                    </div>
                </div>
            </div>
            <button onClick={handleToggleData} style={styles.button}>
                {isProcessed ? 'Review Original Dataset' : 'Process Unbalanced Data'}
            </button>
        </div>
    );
};

// Styles
const styles = {
    container: {
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 60%, rgba(178, 255, 255, 0.6) 100%)',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '20px',
        color: '#000',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        flexDirection: 'row',
    },
    chartContainer: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
    },
    detailBox: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    legitimate: {
        fontSize: '3rem',
        color: 'rgba(75, 192, 192, 1)',
    },
    fraudulent: {
        fontSize: '3rem',
        color: 'rgba(255, 99, 132, 1)',
    },
    divider: {
        width: '80%',
        height: '1px',
        backgroundColor: '#000',
        margin: '20px 0',
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

export default DatasetSummary;
