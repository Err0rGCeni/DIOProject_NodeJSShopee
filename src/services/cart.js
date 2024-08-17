// Adição de Item
export async function addItem(userCart, item) {
    userCart.push(item)
}

// Deletar Item
export async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name ===  name)

    if (index != -1) {
        userCart.splice(index, 1)
    }

}

// Remover Item (diminuir)
export async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name ===  item.name)
    if (indexFound === -1) {
        console.log("Item não encontrado.")
    } else if (userCart[indexFound].qtdy > 1) {
        userCart[indexFound].qtdy -=  1
    } else if (userCart[indexFound].qtdy === 1) {
        userCart.splice(indexFound, 1)
    }
}

// Calcular Total
export async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) =>
        total + item.subtotal()
        , 0)
    console.log("Total: ", result)
}

export async function displayCart(userCart) {
    console.log("Shopee cart list: ")
    userCart.forEach((item, index) => {
        console.log(`${index+1}: ${item.name} - R$ ${item.price} | ${item.qtdy} | Subtotal: ${item.subtotal()}`)        
    });
}
