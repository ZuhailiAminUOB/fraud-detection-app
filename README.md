# 💳 Fraud Detection App

The **Fraud Detection App** analyzes credit card transactions to determine whether they are fraudulent or legitimate, leveraging advanced AI methodologies to enhance banking security and reduce financial losses.

---

## 📋 Table of Contents

1. [About the Project](#about-the-project)
2. [Key Features](#key-features)
3. [Research Analysis](#research-analysis)
4. [AI Methodology](#ai-methodology)
5. [Risk Management](#risk-management)
6. [Limitations](#limitations)
7. [About Us](#about-us)

---

## 🔍 About the Project

### 🎯 Project Purpose

This project aims to design and implement a real-time fraud detection system that uses advanced AI techniques to identify and prevent fraudulent banking activities.

#### 🏆 Goals:
- Enhance fraud detection by analyzing transaction patterns across regions.
- Build a scalable, adaptive system that continuously learns and updates.

### 🚨 Problem Statement

Traditional fraud detection systems struggle to adapt to evolving fraud tactics, resulting in financial risks for banks and customers. This project provides a dynamic and region-specific solution to mitigate these risks effectively.

---

## ✨ Key Features

The **Fraud Detection App** uses advanced features to classify transactions as "Fraud" or "No Fraud":

- 🏠 **Distance from Home:** Analyzes the distance between the customer's home and the transaction location.
- 📍 **Distance from Last Transaction:** Compares the distance between the current and previous transactions.
- 💸 **Ratio to Median Purchase Price:** Measures how the transaction amount deviates from the customer's median purchase value.
- 🛍️ **Repeat Retailer:** Identifies whether the transaction occurred with a retailer previously used.
- 💳 **Chip Utilization:** Checks if a chip-enabled card was used.
- 🔐 **PIN Number Usage:** Indicates whether a PIN was used for the transaction.
- 🌐 **Online Order:** Specifies if the transaction was an online purchase.

---

## 📚 Research Analysis

### 🤔 Why is AI Fraud Detection Important?

Fraudulent tactics are becoming more sophisticated, making traditional methods ineffective. AI enables real-time analysis of vast datasets, identifying complex patterns and unusual activities to prevent financial losses and protect customer trust.

### 📈 Findings from Research

Our research highlights the vulnerabilities of traditional methods and the advantages of AI in adapting to evolving fraud patterns. Key case studies include:

- 💰 **Money Laundering Detection:** $195,000 blocked using data analytics at UOB.
- 🔍 **Investment Scam Prevention:** $500,000 saved by identifying suspicious transfers.
- 🌍 **International Scam Alerts:** $370,000 recovered via cross-border cooperation.
- 🏢 **Corporate Fraud Activities:** Over $1.28 million seized from fake corporate accounts.

### 👥 Stakeholders' Impact

This system benefits banks, businesses, and customers by:
- Reducing fraud-related financial losses.
- Enhancing trust and customer satisfaction.
- Ensuring compliance with regulatory standards.

---

## 🧠 AI Methodology

### 📊 Dataset Overview

- **Legitimate Transactions:** 912,597  
- **Fraudulent Transactions:** 87,403 (0.095%)

### 🔑 Key Steps

1. **Data Normalization:** Applied Min-Max Scaler to normalize features.
2. **Train-Test Split:** Partitioned dataset for model evaluation.
3. **Correlation Analysis:** Identified key predictors such as "Distance from Home."

### 🏅 Models Used

| Model                    | Accuracy | Precision | Recall | F1-Score |
|--------------------------|----------|-----------|--------|----------|
| Naive Bayes              | 89%      | 43%       | 96%    | 60%      |
| Decision Tree (depth=4)  | 99%      | 94%       | 99%    | 96%      |
| Random Forest (trees=5)  | 100%     | 100%      | 100%   | 100%     |
| Logistic Regression      | 91%      | 50%       | 94%    | 65%      |
| Neural Network (3 layers)| 99%      | 86%       | 100%   | 92%      |

---

## ⚠️ Risk Management

### 🔎 Identified Risks:

- **False Positives/Negatives:** Mitigate using balanced datasets and feedback loops.
- **Regulatory Non-Compliance:** Conduct regular audits and monitor legal changes.
- **Data Breaches:** Apply multi-layered security measures and penetration testing.

---

## 🚧 Limitations

- **Dataset Imbalance:** Fraudulent transactions are rare, requiring careful sampling techniques.
- **Dynamic Nature of Fraud:** Models may need frequent retraining to adapt to new tactics.
- **Bias Concerns:** Potential geographical or behavioral biases in fraud detection.

---

## 🏦 About Us

### 🌟 UOB Fraud Detection Web Application

We are a group of five passionate individuals—**Zuhaili**, **Peh Shin**, **Si Hui**, **Kheng Liang**, and **Pravina**—participating in the **UOB Technology Development Programme 2024**. Our mission is to create an innovative **AI Fraud Detection Web Application** as part of our Capstone project.

### 🎓 About the Programme

The **UOB Technology Development Programme** is designed to cultivate emerging talent in technology within the banking sector. Participants gain essential skills through structured training, hands-on project experience, and mentorship from industry professionals.

---

💡 *As fresh graduates eager to make an impact in the tech industry, we are committed to delivering an impactful fraud detection solution that enhances banking security.*

