const apiUrl = 'http://example.com/api';

const getProducts = async () => {
    const response = await fetch(`${apiUrl}/products`);
    const data = await response.json();
    return data;
};

const getProductById = async (id) => {
    const response = await fetch(`${apiUrl}/products/${id}`);
    const data = await response.json();
    return data;
};

export {
    getProducts,
    getProductById,
};