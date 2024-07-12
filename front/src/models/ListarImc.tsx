import { useEffect, useState } from "react";
import { aluno } from "../models/aluno";


function ListarImc() {
  const [tarefas, setTarefas] = useState<aluno[]>([]);

  useEffect(() => {
    carregarImc();
  }, []);

  function carregarImc() {
    //FETCH ou AXIOS
    fetch("http://localhost:5000/Imc/listar")
      .then((resposta) => resposta.json())
      .then((tarefas: aluno[]) => {
        console.table(tarefas);
        setTarefas(tarefas);
      });
  }
}