import React, { useState } from "react";
import Header from "../../Componentes/Header";
import InputEntradaSaida from "../Componentes/Input";
import Registrados from "../Componentes/Registrados";

function PaginaHome() {
  const [newItem, setNewItem] = useState("");
  const [arrayDeTodos, setArrayDeTodos] = useState([]);

  function addItemToList() {
    console.log(newItem);

    const newToDo = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setArrayDeTodos((arrayAntigo) => {
      return [...arrayAntigo, newToDo];
    });
  }

  return (
    <div>
      <Header></Header>
      <InputEntradaSaida
        setNewItem={setNewItem}
        addItemToList={addItemToList}
      ></InputEntradaSaida>
      <Registrados arrayDeTodos={arrayDeTodos}></Registrados>
    </div>
  );
}

export default PaginaHome;
