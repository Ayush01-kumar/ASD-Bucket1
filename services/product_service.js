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

// POST: create a product
async function createProduct(data) {
    const products = await getAllProducts()

    const newProduct = {
        id: products.length + 1,
        ...data
    }

    products.push(newProduct)

    await writeProducts(products)

    return newProduct
}

// PUT: replace a product
async function replaceProduct(id, data) {
    const products = await getAllProducts()

    const index = products.findIndex(
        item => item.id === Number(id)
    )

    if (index === -1) {
        return null
    }

    products[index] = {
        id: Number(id),
        ...data
    }

    await writeProducts(products)

    return products[index]
}