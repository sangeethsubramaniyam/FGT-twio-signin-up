import axios from 'axios';

// Use this for Android emulator
const API_URL = 'http://192.168.232.2:3000'; // For Android emulator
// Use this for iOS simulator or when using the device's IP address
// const API_URL = 'http://192.168.x.x:3000';  // Replace x.x.x.x with your local network IP

// Signup function to register the user
export const signup = async (username, email, password) => {
    try {
        console.log(`Attempting to call signup endpoint: ${API_URL}/signup`);
        console.log('Payload:', { username, email, password });
        
        // Making a POST request to the signup API
        const response = await axios.post(`${API_URL}/signup`, {
            username,
            email,
            password
        });
        
        // Log the response from the server
        console.log('Signup response:', response.data);
        return response.data; // Return the response from the API
    } catch (error) {
        // Catch any errors during the signup process
        console.error('Error in signup function:', error.message);
        throw error; // Throw error to be handled later
    }
};

// Login function to authenticate the user
export const login = async (email, password) => {
    try {
        console.log(`Attempting to call login endpoint: ${API_URL}/login`);
        
        // Making a POST request to the login API
        const response = await axios.post(`${API_URL}/login`, { email, password });
        
        // Log the response from the server
        console.log('Login response:', response.data);
        return response.data; // Return the response from the API
    } catch (error) {
        // Catch any errors during the login process
        console.error('Login error:', error.message);
        throw error; // Throw error to be handled later
    }
};
