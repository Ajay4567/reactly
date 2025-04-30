/** @typedef {{ id: number, name: string, description: string, price: number, stock: number }} Product */

const productService = {
    getProducts: async (apiClient, page = 1, pageSize = 10, search = '') => {
        try {
            const response = await apiClient.get('products', {
                params: { page, pageSize, search },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getProductById: async (apiClient, id) => {
        try {
            const response = await apiClient.get(`products/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default ProductService;