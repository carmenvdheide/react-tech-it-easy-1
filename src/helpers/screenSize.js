import {bestSellingTv} from "../constants/inventory.js";


function formatBestSellingScreenSize(availableSizes) {
    let availableScreenSizesArray = []
    for (let i = 0; i < availableSizes.length; i++) {
        availableScreenSizesArray[i] = availableSizes[i] + " inch (" + Math.round(availableSizes[i]*2.54) + "cm)"
    }
    return availableScreenSizesArray.join(" | ")
}

export default formatBestSellingScreenSize




