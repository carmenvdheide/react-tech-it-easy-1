import './App.css';
import soldTvs from "./helpers/numberOfSoldTvs.js";
import purchasedTvs from "./helpers/numberOfPurchasedtvs.js";
import toBeSoldTvs from "./helpers/numberTvsToBeSold.js";

function App() {
  return (
      <>
          <h1>Tech it easy dashboard</h1>
          <section className="salesOverview">
              <h2>Verkoopoverzicht</h2>
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
                <p className="numberOfProductsDescription">Aantal te verkopen  producten</p>
                <p className="numberOfProducts">{toBeSoldTvs(soldTvs, purchasedTvs)}</p>
              </article>
              </div>
            </section>
      </>
  )
}



export default App
