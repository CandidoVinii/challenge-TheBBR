import FilterHeader from "../components/FilterHeader";
import ListProducts from "../components/ListProducts";

export default function MainScreen() {
  return (
    <div>
      <header>
        <div className="rounded-sm bg-zinc-800 h-20 flex items-center justify-center">
          <h1 className="bg-[#e53262] w-fit h-fit rounded-md text-3xl font-bold underline">
            The Brooklyn Brothers Shop</h1>
        </div>
        <div className="flex items-center justify-center">
          <FilterHeader />
        </div>
      </header>
      <main className="flex items-center justify-center">
        <ListProducts />
      </main>
      <footer className="bg-[#e53262] border-black border-2 mt-10 flex justify-center">
        Desenvolvido com muito Amor
      </footer>
    </div>
  )
}