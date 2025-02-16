import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./screens/Home";
import PokemonDetail from "./screens/PokemonDetail";

// lazy imports for code splitting
const About = lazy(() => import("./screens/About"));
const Pokemon = lazy(() => import("./screens/Pokemon"));
const Item = lazy(() => import("./screens/Item"));
const Move = lazy(() => import("./screens/Move"));
const MoveDetail = lazy(() => import("./screens/MoveDetail"));
const ItemDetail = lazy(() => import("./screens/ItemDetail"));

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/about" element={<About/>} />
          <Route path="/pokemon" element={<Pokemon/>} />
          <Route path="/item" element={<Item/>} />
          <Route path="/move" element={<Move/>} />
          <Route path="/pokemon/:id" element={<PokemonDetail/>} />
          <Route path="/item/:id" element={<ItemDetail/>} />
          <Route path="/move/:id" element={<MoveDetail/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;