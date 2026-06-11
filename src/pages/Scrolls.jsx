export default function Scrolls({ title, data }) {
  return (
    <div className="w-[95%] mx-auto">
      <h1 className="font-bold text-2xl capitalize mb-4">
        Best Deals in {title}
      </h1>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {data.map((entry) => (
          <div
            key={entry.id}
            className="w-80 shrink-0 bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 flex items-center justify-center overflow-hidden">
              <img
                src={entry.thumbnail}
                alt={entry.title}
                className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h2 className="font-semibold text-lg mt-3 line-clamp-2">
              {entry.title}
            </h2>

            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
              {entry.description}
            </p>

            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-green-600">
                ${entry.price}
              </span>

              <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                {entry.discountPercentage}% OFF
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
