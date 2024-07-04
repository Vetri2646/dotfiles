import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Questionnaire from './Questionnaire';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/questionnaire" element={<Questionnaire />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
