import React from "react";
import { Registro } from "./styles";

function Registrados({ arrayDeTodos }) {
  return (
    <Registro>
      <div>
        {arrayDeTodos.map((item) => {
          return (
            <div key={item.id}>
              - {item.value}
              <button>Adicionado</button>
              <button>Retirado</button>
            </div>
          );
        })}
      </div>
    </Registro>
  );
}

export default Registrados;
