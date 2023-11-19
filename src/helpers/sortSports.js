function sortRefreshRate(inventory){

    inventory.sort((a, b) => {
        return b.refreshRate - a.refreshRate;
    })

    console.log(inventory);

    // for (let i = 0; i < inventory.length; i++) {
    //     console.log("after sort",inventory[i]);
    // }

}

export default sortRefreshRate
