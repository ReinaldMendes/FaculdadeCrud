const prompt = require("prompt-sync")();
const crudCurso = require("./curso.js");
let nextAlunoId = 1;
const alunos = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome.trim() === "";

const idInvalidoaluno = (idaluno) => {
  return !alunos.some((aluno) => aluno.idaluno === idaluno);
};

function listaraluno() {
  if (alunos.length === 0) {
    console.log("Nenhum aluno cadastrado.");
  } else {
    alunos.forEach((aluno) => {
      console.log(
        `ID: ${aluno.idaluno} - Nome: ${aluno.nome}- ID Curso: ${aluno.idCurso}`
      );
    });
  }
}

const modelo = () => {
  let aluno = { idaluno: nextAlunoId++ };

  while (true) {
    aluno.nome = prompt("Qual é o nome do aluno? ").trim();
    if (nomeInvalido(aluno.nome)) {
      console.log("O nome do aluno não pode ser vazio.");
    } else {
      break;
    }
  }

  while (true) {
    crudCurso.listarcurso();
    const idCurso = lerIndice("Qual é o ID do Turno? ");
    if (crudCurso.idInvalidoCurso(idCurso)) {
      console.log("ID de Turno inválido.");
    } else {
      aluno.idCurso = idCurso;
      break;
    }
  }

  return aluno;
};

const criaraluno = () => {
  const aluno = modelo();
  alunos.push(aluno);
  console.log("aluno criado com sucesso.");
};

const atualizaraluno = () => {
  while (true) {
    if (alunos.length === 0) {
      console.log("Lista de alunos está vazia.");
      break;
    }

    listaraluno();

    const idaluno = lerIndice("Qual é o ID do aluno que deseja atualizar? ");

    if (idInvalidoaluno(idaluno)) {
      console.log("ID inválido.");
    } else {
      const alunoIndex = alunos.findIndex((aluno) => aluno.idaluno === idaluno);
      const alunoAtualizado = modelo();
      alunoAtualizado.idaluno = idaluno; // Mantém o mesmo ID
      alunos[alunoIndex] = alunoAtualizado;
      console.log("aluno atualizado com sucesso.");
      break;
    }
  }
};

const removeraluno = () => {
  while (true) {
    if (alunos.length === 0) {
      console.log("Lista de alunos está vazia.");
      break;
    }

    listaraluno();

    const idaluno = lerIndice("Qual é o ID do aluno que deseja remover? ");

    if (idInvalidoaluno(idaluno)) {
      console.log("ID inválido.");
    } else {
      const alunoIndex = alunos.findIndex((aluno) => aluno.idaluno === idaluno);
      alunos.splice(alunoIndex, 1);
      console.log("aluno removido com sucesso.");
      break;
    }
  }
};

module.exports = {
  criaraluno,
  atualizaraluno,
  removeraluno,
  listaraluno,
  idInvalidoaluno,
};
