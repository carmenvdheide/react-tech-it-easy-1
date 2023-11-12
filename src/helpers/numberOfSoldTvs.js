import {inventory, bestSellingTv} from "../constants/inventory.js";

function soldTvs() {
    let numberInventory = 0
    for (let i = 0; i < inventory.length; i++) {
        numberInventory = numberInventory + inventory[i].sold
    }
    return numberInventory + bestSellingTv.sold
}

export default soldTvs();
