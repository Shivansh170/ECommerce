import { MoveRight, ShoppingCart } from "lucide-react";
export default function Header() {
  return (
    <header className="bg-amber-300 px-3 py-2 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <div className="w-10 h-10 bg-orange-400 flex justify-center items-center rounded-full">
          <h1 className="text-xl text-white">SL</h1>
        </div>
        <h1 className="text-gray-600 font-semibold text-xl">Shoppe</h1>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search for an item or category"
          className="text-gray-700 placeholder-gray-400 bg-white px-3 py-1 rounded-l-lg w-64 outline-none"
        />
        <button className="flex items-center justify-center py-1 text-white bg-orange-400 px-1 rounded-r-lg hover:bg-white hover:text-orange-400">
          <MoveRight size={24} />
        </button>
      </div>
      <button className="flex items-center">
        <h1 className="font-semibold">Orders</h1>
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center absolute -top-2 -right-2 p-2">
            <span className="text-sm text-white font-semibold">0</span>
          </div>
          <ShoppingCart size={28} />
        </div>
      </button>
    </header>
  );
}
