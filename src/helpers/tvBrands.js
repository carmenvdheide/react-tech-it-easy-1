import {inventory} from "../constants/inventory.js";

let tvBrands = []

for (let i = 0; i < inventory.length; i++) {
    tvBrands.push(inventory[i].brand)
}

console.log(tvBrands)



export default tvBrands