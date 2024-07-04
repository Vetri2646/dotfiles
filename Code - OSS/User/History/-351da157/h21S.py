import pandas as pd
import numpy as np
import random
from faker import Faker

fake = Faker()

def generate_fake_data(num_records):
    data = []
    for _ in range(num_records):
        full_name = fake.name()
        address = fake.address()
        pan_number = fake.bothify(text='?????#????')
        company_name = fake.company()
        current_salary = random.randint(20000, 80000)
        previous_salary = current_salary - random.randint(2000, 10000)
        owns_house = random.choice(['Yes', 'No'])
        rent_amount = 0 if owns_house == 'Yes' else random.randint(5000, 20000)
        grocery_expense = random.randint(2000, 8000)
        current_emis = random.randint(0, 5000)
        date_previous_hike = fake.date_between(start_date='-1y', end_date='today')
        estimated_next_hike = fake.date_between(start_date='today', end_date='+1y')
        bank_name = random.choice(['XYZ Bank', 'ABC Bank', 'DEF Bank', 'GHI Bank', 'JKL Bank', 'MNO Bank', 'PQR Bank', 'STU Bank'])
        mall_visits = random.randint(0, 5)
        mall_spend = random.randint(500, 3000)
        other_expenses = random.randint(2000, 5000)
        eligible = random.choice(['Yes', 'No'])
        loan_amount = random.randint(50000, 300000) if eligible == 'Yes' else 0
        repayment_period = random.choice([12, 18, 24, 30, 36]) if eligible == 'Yes' else 0
        emi_amount = (loan_amount / repayment_period) if eligible == 'Yes' else 0

        record = [full_name, address, pan_number, company_name, current_salary, previous_salary, owns_house, rent_amount, grocery_expense, current_emis, date_previous_hike, estimated_next_hike, bank_name, mall_visits, mall_spend, other_expenses, eligible, loan_amount, repayment_period, emi_amount]
        data.append(record)
    
    columns = ['Full_Name', 'Address', 'PAN_Number', 'Company_Name', 'Current_Salary', 'Previous_Salary', 'Owns_House', 'Rent_Amount', 'Grocery_Expense', 'Current_EMIs', 'Date_Previous_Hike', 'Estimated_Next_Hike', 'Bank_Name', 'Mall_Visits', 'Mall_Spend', 'Other_Expenses', 'Eligible', 'Loan_Amount', 'Repayment_Period', 'EMI_Amount']
    df = pd.DataFrame(data, columns=columns)
    return df

# Generate a dataset with 1000 records
dataset = generate_fake_data(1000)
dataset.to_csv('micro_credit_data.csv', index=False)
