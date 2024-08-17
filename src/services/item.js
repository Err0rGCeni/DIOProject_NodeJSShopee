// Criar item com subtotal certo
export default async function createItem(name, price, qtdy) {
    return {
        name,
        price,
        qtdy,
        subtotal: () => price * qtdy
    }
}
