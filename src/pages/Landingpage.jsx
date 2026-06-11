import LandingPageCarousel from "../Components/LandingPageCarousel";
import useFetch from "../../hooks/useFetch";
import Scrolls from "./Scrolls";

export default function Landingpage() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  if (loading) {
    return <h1 className="text-center text-2xl mt-10">Loading...</h1>;
  }

  if (error) {
    return (
      <h1 className="text-center text-2xl mt-10 text-red-500">
        Something went wrong
      </h1>
    );
  }

  const categorizedProducts = {};

  data.products.forEach((product) => {
    if (!categorizedProducts[product.category]) {
      categorizedProducts[product.category] = [];
    }

    categorizedProducts[product.category].push(product);
  });

  return (
    <div className="flex flex-col gap-8 pb-10">
      <LandingPageCarousel />

      {Object.entries(categorizedProducts).map(([category, products]) => (
        <Scrolls key={category} title={category} data={products} />
      ))}
    </div>
  );
}
