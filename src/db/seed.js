import db from "./db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
    { 
        id: 1, 
        name: "Tote Bag Aurora", 
        description: "Cartera amplia de cuero vacuno graneado con compartimento para notebook y herrajes bañados en níquel.", 
        stock: 15, 
        image: '/image/tote-aurora.jpg',
        price: 145,
        category: 'carteras'
    },
    { 
        id: 2, 
        name: "Billetera Slim Pocket", 
        description: "Billetera minimalista de cuero liso con sistema de protección RFID y capacidad para 6 tarjetas.", 
        stock: 45, 
        image: '/image/billetera-slim.jpg',
        price: 45,
        category: 'billeteras'
    },
    { 
        id: 3, 
        name: "Bolso de Viaje 'Overnight'", 
        description: "Bolso de gran capacidad ideal para escapadas de fin de semana. Cuero curtido vegetal de alta resistencia.", 
        stock: 8, 
        image: '/image/bolso-overnight.jpg',
        price: 280,
        category: 'bolsos'
    },
    { 
        id: 4, 
        name: "Mini Bag Verona", 
        description: "Cartera pequeña tipo bandolera con correa desmontable y cierre metálico reforzado.",
        stock: 22, 
        image: '/image/mini-bag-verona.jpg',
        price: 85,
        category: 'carteras'
    },
    { 
        id: 5,  
        name: "Billetera Zip Around", 
        description: "Diseño clásico con cierre perimetral, monedero interno y espacio para documentos personales.", 
        stock: 30, 
        image: '/image/billetera-zip.jpg',
        price: 65,
        category: 'billeteras'
    },
    { 
        id: 6, 
        name: "Bolso Matero 'Tradición'", 
        description: "Bolso rígido diseñado para el set de mate, forrado en tela impermeable y reforzado en la base.", 
        stock: 12, 
        image: '/image/bolso-matero.jpg',
        price: 110,
        category: 'bolsos'
    },
    { 
        id: 7, 
        name: "Cartera Hobo Luna", 
        description: "Forma anatómica de cuero gamuzado soft. Ideal para un look casual y cómodo.", 
        stock: 10, 
        image: '/image/hobo-luna.jpg',
        price: 125,
        category: 'carteras'
    },
    { 
        id: 8,  
        name: "Tarjetero Nomad", 
        description: "Ultradelgado, confeccionado en cuero premium. Ideal para llevar en el bolsillo delantero.", 
        stock: 50, 
        image: '/image/tarjetero-nomad.jpg',
        price: 35,
        category: 'billeteras'
    },
    { 
        id: 9,
        name: "Mochila Urban Leather", 
        description: "Mochila de diseño urbano con correas acolchadas y múltiples bolsillos organizadores.", 
        stock: 14, 
        image: '/image/mochila-urban.jpg',
        price: 195,
        category: 'bolsos'
    },
    { 
        id: 10,
        name: "Bolso Deportivo Elite", 
        description: "Combina cuero y loneta de alta densidad. Compartimento separado para calzado.", 
        stock: 7, 
        image: '/image/bolso-deportivo.jpg',
        price: 210,
        category: 'bolsos'
    },
    { 
        id: 11, 
        name: "Cartera Satchel Oxford", 
        description: "Estructura rígida de estilo vintage con solapa y broche imantado. Un clásico atemporal.", 
        stock: 18, 
        image: '/image/satchel-oxford.jpg',
        price: 160,
        category: 'carteras'
    },
    { 
        id: 12,  
        name: "Billetera Fold Clásica", 
        description: "Billetera de cuero grabado con doble compartimento para billetes y espacio para fotos.", 
        stock: 25, 
        image: '/image/billetera-fold.jpg',
        price: 55,
        category: 'billeteras'
    }
];

const seedProducts = async () => {
    try {
        const productsRef = collection(db, 'products');

        for (const product of products) {
            const { id, ...productData } = product; // Extraer el id del producto
            await addDoc(productsRef, productData);
            console.log('Productos agregados exitosamente');
        }
    } catch (error) {
        console.error('Error al agregar productos: ', error);
    }
};

seedProducts();