const getProducts = () => {
    return fetch('https://server-prueba-g4mc.onrender.com/api/products')
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.error("Error fetching products: ", error);
    });
};

const getProductById = (productId) => {
    return fetch(`https://server-prueba-g4mc.onrender.com/api/products/${productId}`)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.error("Error fetching product by ID: ", error);
    }); 
};   

const addProduct = (newProduct) => {
    return fetch('https://server-prueba-g4mc.onrender.com/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.error("Error adding new product: ", error);
    });
};

const deleteProductById = (productId) => {
    return fetch(`https://server-prueba-g4mc.onrender.com/api/products/${productId}`, {
        method: 'DELETE'
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.error("Error deleting product: ", error);
    });
};

const setProductById = (productId, updatedProduct) => {
    return fetch(`https://server-prueba-g4mc.onrender.com/api/products/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.error("Error deleting product: ", error);
    }); 
};

export { getProducts, getProductById , addProduct , deleteProductById , setProductById};