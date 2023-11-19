import {inventory} from "../constants/inventory.js";
import stringNameBestSellingTv from "./stringNameBestSellingTv.js";
import priceTv from "./priceTv.js";
import screenSize from "./screenSize.js";
import check from "../assets/check.png"
import minus from "../assets/minus.png"


function showAllTv(inventory) {

    return inventory.map((tv) => {

        console.log(tv);

        return (
            <article className="all-tv-container">
                    <span className='img-tv'>
                        <img src={tv.sourceImg} alt="tv image"/>
                    </span>
                <div className='information-tv'>
                    <h1 className='name-tv'>{stringNameBestSellingTv(tv.brand, tv.type, tv.name)}</h1>
                    <p className='price-tv'>{priceTv(tv.price)}</p>
                    <p className='sizes-tv'>{screenSize(tv.availableSizes)}</p>

                    <ul className="option-list">
                        {tv.options.map((option) => {
                            return (
                                <>
                                    {
                                        <img className="option-icon" src={option.applicable ? check : minus} alt=""/>
                                    }
                                    <li className="option-name">{option.name}</li>
                                </>
                            )
                        })}
                    </ul>


                </div>
            </article>
        )
    })


}

export default showAllTv;


