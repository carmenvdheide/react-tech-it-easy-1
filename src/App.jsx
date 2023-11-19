import './App.css';
import soldTvs from "./helpers/numberOfSoldTvs.js";
import purchasedTvs from "./helpers/numberOfPurchasedtvs.js";
import toBeSoldTvs from "./helpers/numberTvsToBeSold.js";
import stringNameBestSellingTv from "./helpers/stringNameBestSellingTv.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import formatBestSellingPrice from "./helpers/priceTv.js";
import formatBestSellingScreenSize from "./helpers/screenSize.js"
import tvBrands from "./helpers/tvBrands.js";
import priceTv from "./helpers/priceTv.js";
import screenSize from "./helpers/screenSize.js";
import showAllTv from "./helpers/showAllTvSpecs.jsx";
import sortMostSold from "./helpers/sortMostSold.js"
import sortPrice from "./helpers/sortPrice.js"
import sortRefreshRate from "./helpers/sortSports.js";


function App() {
    function mostSoldFirst() {
        // console.log("Meest verkocht eerst")
        sortMostSold(inventory);
    }

    function mostCheapFirst() {
        // console.log("Goedkoopste eerst")
        sortPrice(inventory)
    }

    function bestForSportsFirst() {
        // console.log("Meest geschikt voor sport eerst")
        sortRefreshRate(inventory)
    }


    return (
        <>
            <div className="outer-container">
                <div className='inner-container'>
                    <h1>Tech it easy dashboard</h1>
                    <h2>Verkoopoverzicht</h2>
                    <section className="salesOverview">

                        <div className="allTiles">
                            <article className="numberOfProductsTile numberSold">
                                <p className="numberOfProductsDescription">Aantal verkochte producten</p>
                                <p className="numberOfProducts">{soldTvs}</p>
                            </article>
                            <article className="numberOfProductsTile numberPurchased">
                                <p className="numberOfProductsDescription">Aantal ingekochte producten</p>
                                <p className="numberOfProducts">{purchasedTvs}</p>
                            </article>
                            <article className="numberOfProductsTile numberToBeSold">
                                <p className="numberOfProductsDescription">Aantal te verkopen producten</p>
                                <p className="numberOfProducts">{toBeSoldTvs(soldTvs, purchasedTvs)}</p>
                            </article>
                        </div>
                    </section>

                    <h2>Best verkochte tv</h2>

                    <section className="bestSellingTv">
              <span className="imgBestSellingTv">
                  <img src="https://image.coolblue.nl/max/500x500/products/1786196" alt="samsung tv"/>
              </span>
                        <article className="informationBestSellingTv">
                            <p className="nameBestSellingTv">{stringNameBestSellingTv(bestSellingTv.brand, bestSellingTv.type, bestSellingTv.name)}</p>
                            <p className="priceBestSellingTv">{formatBestSellingPrice(bestSellingTv.price)}</p>
                            <p className="sizeBestSellingTv">{formatBestSellingScreenSize(bestSellingTv.availableSizes)}</p>
                            <div className="icons">
                                <img src="src/assets/check.png" alt="check"/>
                                <p>wifi</p>
                                <img src="src/assets/minus.png" alt="not-icon"/>
                                <p>Speech</p>
                                <img src="src/assets/check.png" alt="check"/>
                                <p>hdr</p>
                                <img src="src/assets/check.png" alt="check"/>
                                <p>bluetooth</p>
                                <img src="src/assets/minus.png" alt="not-icon"/>
                                <p>ambilight</p>
                            </div>
                        </article>
                    </section>

                    <h2>Alle tvs</h2>

                    <div className="buttons">
                        <button type="button" onClick={mostSoldFirst}>Meest verkocht eerst</button>
                        <button type="button" onClick={mostCheapFirst}>Goedkoopste eerst</button>
                        <button type="button" onClick={bestForSportsFirst}>Meest geschikt voor sport eerst</button>
                    </div>
                    {/*<ul>*/}
                    {/*    {tvBrands.map((brand) => {*/}
                    {/*        return <li>{brand}</li>*/}
                    {/*    })}*/}
                    {/*</ul>*/}

                    <ul className="tv-list">
                        {showAllTv(inventory)}
                    </ul>
                </div>
            </div>
        </>
    )
}


export default App
