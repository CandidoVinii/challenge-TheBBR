import FilterHeader from "../components/FilterHeader";
import ListProducts from "../components/ListProducts";

export default function MainScreen() {
  return (
    <div>
      <header>
        <div>
          <h1>The Brooklyn Brothers Shop</h1>
        </div>
        <div>
          <FilterHeader />
        </div>
      </header>
      <main>
        <ListProducts />
      </main>
      <footer>
        Desenvolvido com muito Amor
      </footer>
    </div>
  )
}