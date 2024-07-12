import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { aluno } from "../components/aluno";


function Cadastraraluno(): void {
  const navigate = useNavigate();
  const [titulo, setAlterar] = useState("");
  const [listar, setlistar] = useState("");
  const [categoriaId, setalunoId] = useState("");
  const [aluno, setaluno] = useState<aluno[]>([]);

  useEffect(() => {
    carregaralunos();
  }, []);

}
function carregaralunos() {
    throw new Error("Function not implemented.");
}

function carregaraluno() {
    //FETCH ou AXIOS
    fetch("http://localhost:5000/categoria/listar")
      .then((resposta) => resposta.json())
      .then((aluno: aluno[]) => {
        setaluno(aluno);
      });
  }
function setaluno(aluno: aluno[]) {
    throw new Error("Function not implemented.");
}



export default Cadastraraluno;