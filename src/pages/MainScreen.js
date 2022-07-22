import FilterHeader from "../components/FilterHeader";
import ListProducts from "../components/ListProducts";

export default function MainScreen() {
  return (
    <div className="bg-zinc-700 w-screen">
      <header className="border-b-2 border-[#de528c] h-16 flex items-center justify-center">
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          The
          <span className="ml-2 mr-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#de528c] relative inline-block">
            <span className="relative text-white">Brooklyn</span>
          </span>
          Brothers
        </blockquote>
      </header>
      <div className="flex items-center mt-6 justify-center">
        <FilterHeader />
      </div>
      <main className="flex items-center justify-center">
        <ListProducts />
      </main>
      <footer className="border-t-2 border-[#de528c] rounded-t-sm mt-10 flex justify-center">
        <h2 className="text-slate-900 font-semibold italic ">
          Desenvolvido com muito ❤
        </h2>
      </footer>
    </div>
  )
}