const products = [
    { 
        id: 1, 
        name: "Cartera 1", 
        description: "Cartera 100% cuero en colores varios y detalles en metal", 
        stock: 30, 
        image: '/image/cuero1.jpg',
        price: 110,
        category: 'carteras'
    },
    { 
        id: 2, 
        name: "Billetera 2", 
        description: "Billetera 100% cuero animal en colores varios", 
        stock: 20, 
        image: '/image/cuero2.jpg',
        price: 180,
        category: 'billeteras'
    },
    { 
        id: 3, 
        name: "Bolso 3", 
        description: "Bolso 100% cuero en colores varios y detalles en metal", 
        stock: 10, 
        image: '/image/cuero3.jpg',
        price: 322,
        category: 'bolsos'
    },
    { 
        id: 4, 
        name: "Cartera 4", 
        description: "Cartera 100% cuero en colores varios y detalles en metal",
        stock: 30, 
        image: '/image/cuero1.jpg',
        price: 120,
        category: 'carteras'
    },
    { 
        id: 5,  
        name: "Billetera 5", 
        description: "Billetera 100% cuero animal en colores varios", 
        stock: 20, 
        image: '/image/cuero2.jpg',
        price: 230,
        category: 'billeteras'
    },
    { 
        id: 6, 
        name: "Bolso 6", 
        description: "Bolso 100% cuero en colores varios y detalles en metal", 
        stock: 10, 
        image: '/image/cuero3.jpg',
        price: 245,
        category: 'bolsos'
    },
        { 
        id: 7, 
        name: "Cartera 7", 
        description: "Cartera 100% cuero en colores varios y detalles en metal", 
        stock: 30, 
        image: '/image/cuero1.jpg',
        price: 310,
        category: 'carteras'
    },
    { 
        id: 8,  
        name: "Billetera 8", 
        description: "Billetera 100% cuero animal en colores varios", 
        stock: 20, 
        image: '/image/cuero2.jpg',
        price: 150,
        category: 'billeteras'
    },
    { 
        id: 9,
        name: "Bolso 9", 
        description: "Bolso 100% cuero en colores varios y detalles en metal", 
        stock: 10, 
        image: '/image/cuero3.jpg',
        price: 310,
        category: 'bolsos'
    },
        { 
        id: 10,
        name: "Bolso 4", 
        description: "Bolso 100% cuero en colores varios y detalles en metal", 
        stock: 10, 
        image: '/image/cuero3.jpg',
        price: 290,
        category: 'bolsos'
    },
];


export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProductById = (productId) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => { 
            const product = products.find((productData) => productData.id === Number(productId));
            resolve(product);
        }, 1000);
    });
};

export default products;