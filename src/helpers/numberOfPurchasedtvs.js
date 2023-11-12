import {bestSellingTv, inventory} from "../constants/inventory.js";

function purchasedTvs() {
    let numberOriginalStock = 0
    for (let i = 0; i < inventory.length; i++) {
        numberOriginalStock = numberOriginalStock + inventory[i].originalStock
    }
    return numberOriginalStock + bestSellingTv.originalStock
}
 export default purchasedTvs();