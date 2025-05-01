import api from './api';

const productService = {
    getAll: async () => {
        const response = await api.get('/product');
        return response.data;
    },
    getById: async (id) => {
        const response = await api.get(`/product/${id}`);
        return response.data;
    },
};

export default productService;