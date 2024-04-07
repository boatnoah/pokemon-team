import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout.jsx";
import CreatePokemon from "./components/CreatePokemon.jsx";
import Gallery from "./components/Gallery.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} path="/" element={<App />} />
        <Route index={true} path="/create" element={<CreatePokemon />} />
        <Route index={true} path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
