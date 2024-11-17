import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          About
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="/contact" end
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//NavLink — это компонент React Router, который используется для создания ссылок с возможностью их стилизации в зависимости от того, активен ли маршрут. Это расширенная версия <Link>.

// end dlya tochnogo sovpadeniya
