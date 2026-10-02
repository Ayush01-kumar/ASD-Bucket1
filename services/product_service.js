const {
    getAllProducts,
    getProductById,
    writeProducts
} = require('../database/data.js')

// GET all products
async function getProducts() {
    const products = await getAllProducts()
    return products
}

// GET one product
async function getProduct(id) {
    const product = await getProductById(id)
    return product
}