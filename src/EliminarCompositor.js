import { useState } from "react";

function EliminarCompositor(props) {
  const [eliminar, setEliminar] = useState("");

  function eliminarCompositor(nombre) {
    let array = props.compositores;
    let array2 = array.filter((compositor) => compositor.nombre != nombre);
    if (array.length !== array2.length) {
      props.setCompositores(array2);
      setEliminar("");
    }
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={eliminar}
          onChange={(e) => setEliminar(e.target.value)}
        />
        <button onClick={() => eliminarCompositor(eliminar)}>Eliminar</button>
      </div>
    </>
  );
}

export default EliminarCompositor;
