import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

const Layout = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Outlet /> {/* Здесь будут отображаться вложенные маршруты */}
    </main>
  </div>
);

const Home = () => <h2>Welcome to the Home Page!</h2>;
const About = () => <h2>This is the About Page.</h2>;
const Contact = () => <h2>Contact us at contact@example.com.</h2>;

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;


//<Link to="home" />, <Link to="about" />, <Link to="contact" />:
//Это ссылки, которые при клике обновляют URL без перезагрузки страницы и загружают соответствующий контент.

//<Route path="/" element={<Layout />}>:
//Базовый маршрут с компонентом Layout, который содержит <Outlet /> для отображения вложенных маршрутов.

//<Outlet />:
//Место, куда React Router рендерит вложенные маршруты, такие как Home, About, и Contact.
