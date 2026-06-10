import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header>Hello I am the header</Header>
        <main className="grow">
          <Outlet />
        </main>
        <Footer>Hello I am the footer</Footer>
      </div>
    </>
  );
}
