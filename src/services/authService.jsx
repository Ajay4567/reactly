// Auth Service
/** @typedef {{ username: string, password: string }} LoginCredentials */
/** @typedef {{ username: string, password: string, email: string }} RegisterCredentials */
/** @typedef {{ token: string }} AuthResponse */
const authService = {
    /** @param {LoginCredentials} credentials @returns {Promise<AuthResponse>} */
    login: async (credentials) => {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    },
    /** @param {RegisterCredentials} credentials @returns {Promise<AuthResponse>} */
    register: async (credentials) => {
        const response = await api.post('/auth/register', credentials);
        return response.data;
    },
};