import createItem from './services/item.js'
import * as cartServ from './services/cart.js';

const myCart = [];
const myWishList = [];

console.log("Welcome to Shopee Cart!")

const item1 = await createItem("Mini Ferrari", 20.90, 5);
const item2 = await createItem("Micro Ferrari", 19.99, 3);

await cartServ.addItem(myCart, item1)
await cartServ.addItem(myCart, item2)
await cartServ.addItem(myWishList, item2)

await cartServ.removeItem(myCart, item2)

//await cartServ.calculateTotal(myWishList)
await cartServ.calculateTotal(myCart)
await cartServ.displayCart(myCart)

await cartServ.deleteItem(myCart, item2.name)
await cartServ.calculateTotal(myCart)
