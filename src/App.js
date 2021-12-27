import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import EliminarCompositor from "./EliminarCompositor";

function Compositores(props) {
  return props.compositores.map((compositor) => <li>{compositor.nombre}</li>);
}

function Cabecera() {
  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/eliminar">Eliminar</Link>
      </nav>
    </header>
  );
}

function App() {
  const [input, setInput] = useState("");
  const [compositores, setCompositores] = useState([
    {
      nombre: 'Wolfgang Amadeus Mozart',
      fecha: 1756,
      canciones: ['Symphonie Nr 40', 'Don Giovanni'],
    },
    {
      nombre: 'Ludwig van Beethoven',
      fecha: 1770,
      canciones: ['Symphonie No.5', 'Piano Sonata No.32'],
    },
    {
      nombre: 'Johann Sebastian Bach',
      fecha: 1685,
      canciones: ['Vivace', 'Largo ma non tanto'],
    },
  ]);

  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ul>
                <Compositores compositores={compositores} />
              </ul>

              <div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  onClick={() => {
                    let array = compositores;
                    array.push({ nombre: input });

                    setCompositores(array);
                    setInput("");
                  }}
                >
                  Escribir
                </button>
              </div>
            </>
          }
        />
        <Route
          path="/eliminar"
          element={
            <EliminarCompositor
              compositores={compositores}
              setCompositores={setCompositores}
            />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
