import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <header>Hello I am the header</header>
      <main>
        <Outlet />
      </main>
      <footer>Hello I am the footer</footer>
    </>
  );
}
