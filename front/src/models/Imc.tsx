import { aluno } from "../models/aluno"


export interface Imc {
  tarefaId?: string;
  titulo: string;
  descricao: string;
  status?: string;
  categoriaId: string;
  categoria?: Imc;
  criadoEm?: string;
}


