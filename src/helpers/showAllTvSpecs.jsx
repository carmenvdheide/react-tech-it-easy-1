import {inventory} from "../constants/inventory.js";
import stringNameBestSellingTv from "./stringNameBestSellingTv.js";
import priceTv from "./priceTv.js";
import screenSize from "./screenSize.js";


    function showAllTv(inventory) {

        return inventory.map((tv) => {

            console.log(tv);

            return (
                <div className="all-tv-container">
                    <span><img src={tv.sourceImg} alt="tv image"/></span>
                    <h1>{stringNameBestSellingTv(tv.brand, tv.type, tv.name)}</h1>
                    <p>{priceTv(tv.price)}</p>
                    <p>{screenSize(tv.availableSizes)}</p>
                </div>
            )
        })


    }

    export default showAllTv;


