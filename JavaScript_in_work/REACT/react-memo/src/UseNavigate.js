import React from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about", { state: { message: "Hello from Home!" } });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
};

const About = () => {
  const location = useLocation();

  return (
    <div>
      <h1>About Page</h1>
      <p>{location.state?.message || "No message provided"}</p>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// useNavigate — это хук из React Router, который используется для программной навигации между маршрутами без необходимости использовать компонент <Link>. Он особенно полезен, когда нужно выполнить переход на другой маршрут после выполнения определённых действий (например, отправки формы, клика по кнопке или выполнения логики).
