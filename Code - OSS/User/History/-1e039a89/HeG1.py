import pandas as pd
import numpy as np
df = pd.read_csv('micro_credit_data.csv')
# print(df.head())
from sklearn.preprocessing import LabelEncoder, StandardScaler
data.dropna(inplace=True)

# Encode categorical variables
label_encoders = {}
for column in ['Owns_House', 'Eligible']:
    label_encoders[column] = LabelEncoder()
    data[column] = label_encoders[column].fit_transform(data[column])

# Scale numerical features
scaler = StandardScaler()
numerical_features = ['Current_Salary', 'Previous_Salary', 'Rent_Amount', 'Grocery_Expense', 'Current_EMIs', 'Mall_Spend', 'Other_Expenses']
data[numerical_features] = scaler.fit_transform(data[numerical_features])
