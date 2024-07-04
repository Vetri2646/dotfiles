import React, { useState } from 'react';
import axios from 'axios';
import './Questionnaire.css';

function Questionnaire() {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        panNumber: '',
        company: '',
        currentSalary: '',
        previousSalary: '',
        ownsHouse: false,
        rentAmount: '',
        groceryExpense: '',
        currentEMIs: '',
        previousHikeDate: '',
        nextHikeDate: '',
        bankName: '',
        mallVisits: '',
        // Add more fields as needed
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/questionnaire', formData);
            setSuccess('Details submitted successfully');
            setError('');
        } catch (error) {
            setError('Submission failed');
            setSuccess('');
        }
    };

    return (
        <div className="questionnaire-container">
            <h2>Personal Details</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                />
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                />
                <input
                    type="text"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleChange}
                    placeholder="PAN Number"
                    required
                />
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    required
                />
                <input
                    type="number"
                    name="currentSalary"
                    value={formData.currentSalary}
                    onChange={handleChange}
                    placeholder="Current Salary"
                    required
                />
                <input
                    type="number"
                    name="previousSalary"
                    value={formData.previousSalary}
                    onChange={handleChange}
                    placeholder="Previous Salary"
                    required
                />
                <label>
                    <input
                        type="checkbox"
                        name="ownsHouse"
                        checked={formData.ownsHouse}
                        onChange={handleChange}
                    />
                    Owns a house?
                </label>
                {!formData.ownsHouse && (
                    <input
                        type="number"
                        name="rentAmount"
                        value={formData.rentAmount}
                        onChange={handleChange}
                        placeholder="Rent Amount"
                        required
                    />
                )}
                <input
                    type="number"
                    name="groceryExpense"
                    value={formData.groceryExpense}
                    onChange={handleChange}
                    placeholder="Grocery Expense"
                    required
                />
                <input
                    type="number"
                    name="currentEMIs"
                    value={formData.currentEMIs}
                    onChange={handleChange}
                    placeholder="Current EMIs"
                    required
                />
                <input
                    type="date"
                    name="previousHikeDate"
                    value={formData.previousHikeDate}
                    onChange={handleChange}
                    placeholder="Previous Hike Date"
                    required
                />
                <input
                    type="date"
                    name="nextHikeDate"
                    value={formData.nextHikeDate}
                    onChange={handleChange}
                    placeholder="Estimated Next Hike Date"
                    required
                />
                <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    placeholder="Bank Name"
                    required
                />
                <input
                    type="number"
                    name="mallVisits"
                    value={formData.mallVisits}
                    onChange={handleChange}
                    placeholder="Mall Visits per Month"
                    required
                />
                {/* Add more fields as needed */}
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Questionnaire;
