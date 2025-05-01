import api from './api';

const authService = {
    login: async (credentials) => {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    },
    register: async (credentials) => {
        const response = await api.post('/auth/register', credentials);
        return response.data;
    },
    sendOtp: async (mobileOrEmail) => {
        const response = await api.post('/Auth/send-otp', { mobileOrEmail });
        return response.data;
    },
    verifyOtp: async (mobileOrEmail, otp) => {
        const response = await api.post('/auth/verify-otp', { mobileOrEmail, otp });
        return response.data;
    },
};

export default authService;