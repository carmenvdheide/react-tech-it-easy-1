import {inventory} from "../constants/inventory.js";


function sortMostSold(inventory){

    inventory.sort((a, b) => {
        return b.sold - a.sold;
    })

    console.log(inventory);

    // for (let i = 0; i < inventory.length; i++) {
    //     console.log("after sort",inventory[i]);
    // }

}



export default sortMostSold;


