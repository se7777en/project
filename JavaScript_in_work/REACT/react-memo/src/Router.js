import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

export default App;


// Переход между страницами:

// Клик по ссылке <Link to="/about"> обновит URL в браузере на /about и отобразит компонент About, без перезагрузки страницы.
// Как работает без перезагрузки:

// React Router перехватывает изменения URL и динамически рендерит нужный компонент.
// Браузер остаётся на текущей странице, а React просто обновляет DOM.
// Почему это удобно?

// Улучшает производительность, так как нет необходимости заново загружать всю страницу.
// Позволяет создавать плавные переходы между страницами.