function sortPrice(inventory){

    inventory.sort((a, b) => {
        return a.price - b.price;
    })

    console.log(inventory);

    // for (let i = 0; i < inventory.length; i++) {
    //     console.log("after sort",inventory[i]);
    // }

}

export default sortPrice