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
const Location = lazy(() => import("./screens/Location"));
const Machine = lazy(() => import("./screens/Machine"));
const Type = lazy(() => import("./screens/Type"));
const MoveDetail = lazy(() => import("./screens/MoveDetail"));
const ItemDetail = lazy(() => import("./screens/ItemDetail"));
const LocationDetail = lazy(() => import("./screens/LocationDetail"));
const MachineDetail = lazy(() => import("./screens/MachineDetail"));
const TypeDetail = lazy(() => import("./screens/TypeDetail"));

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
          <Route path="/location" element={<Location/>} />
          <Route path="/machine" element={<Machine/>} />
          <Route path="/type" element={<Type/>} />
          <Route path="/pokemon/:id" element={<PokemonDetail/>} />
          <Route path="/item/:id" element={<ItemDetail/>} />
          <Route path="/move/:id" element={<MoveDetail/>} />
          <Route path="/location/:id" element={<LocationDetail/>} />
          <Route path="/machine/:id" element={<MachineDetail/>} />
          <Route path="/type/:id" element={<TypeDetail/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;