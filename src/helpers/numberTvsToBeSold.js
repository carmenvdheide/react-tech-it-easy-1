import soldTvs from "./numberOfSoldTvs.js";
import purchasedTvs from "./numberOfPurchasedtvs.js";

function toBeSoldTvs(soldTvs, purchasedTvs) {
    return purchasedTvs - soldTvs
}


export default toBeSoldTvs