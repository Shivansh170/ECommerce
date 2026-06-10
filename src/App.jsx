import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Layout from "./Components/Layout";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<h1>Hello I am the about page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
