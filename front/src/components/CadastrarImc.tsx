import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Imc } from "../models/Imc";


function CadastrarImc() {
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ImcId, setImcId] = useState("");
    const [imc, setimc] = useState<Imc[]>([]);
  
    useEffect(() => {
      carregarImc();
    }, []);
}

function carregarImc() {
    throw new Error("Function not implemented.");
}





export default CadastrarImc;
