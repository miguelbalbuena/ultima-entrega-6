import React from "react";
import {Input, All, Label, Checklist, Checklist1, Sub, Text, Buttonvalue} from "./styles";

function InputEntradaSaida({ setNewItem, addItemToList }) {
  return (
    <body>
      <All><div>
        <label>Adicionar produtos</label>
        <br></br>
        <Input><input
          onChange={(evento) => setNewItem(evento.target.value)}
          placeholder="Entrada de produtos"
          type="text"
        ></input>
        <button onClick={addItemToList}>Adicionar</button>
      </div>
      <div class="input">
        <label>Retirar produtos</label>
        <br></br>
        <input
          onChange={(evento) => setNewItem(evento.target.value)}
          placeholder="Saída de produtos"
          type="text"
        ></input>
        <button onClick={addItemToList}>Retirar</button>
      </div></Input>
      <div>
        <h2>Checklist</h2>
        <label>Encomendas de ingredientes já feitas:</label>
        <br></br>
        <textarea></textarea>
      </div></All>
    </body>
  );
}

export default InputEntradaSaida;
