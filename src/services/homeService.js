import api from './api';

const homeService = {
    getSliders: async () => {
        const response = await api.get('/slider');
        return response.data;
    },
};

export default homeService;