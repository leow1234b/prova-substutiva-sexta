import { useEffect, useState } from "react";
import { aluno } from "../models/aluno";


function ListarTarefas() {
  const [tarefas, setTarefas] = useState<aluno[]>([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  function carregarTarefas() {
    //FETCH ou AXIOS
    fetch("http://localhost:5000/tarefas/listar")
      .then((resposta) => resposta.json())
      .then((tarefas: aluno[]) => {
        console.table(tarefas);
        setTarefas(tarefas);
      });
  }
}