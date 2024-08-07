const prompt = require("prompt-sync")();
const crudAula = require("./aula.js");
const crudAluno = require("./aluno.js");
let nextAlunoAula = 1;
const alunoAulas = [];

const lerIndice = (mensagem) => {
  const valor = prompt(mensagem);
  const numero = parseInt(valor);
  if (isNaN(numero)) {
    console.log("Valor inválido. Por favor, insira um número.");
    return lerIndice(mensagem);
  }
  return numero;
};

const idInvalido = (idalunoAulas) => {
  return !alunoAulas.some(
    (alunoAula) => alunoAula.idalunoAulas === idalunoAulas
  );
};

function listaralunoAula() {
  if (alunoAulas.length === 0) {
    console.log("Nenhuma aula cadastrada.");
  } else {
    alunoAulas.forEach((aula) => {
      console.log(
        `ID: ${aula.idalunoAulas} - ID aula: ${aula.idaula} - ID aluno: ${aula.idaluno}`
      );
    });
  }
}

const modeloaula = () => {
  let alunoAula = { idalunoAulas: nextAlunoAula++ };

  while (true) {
    crudAula.listaralunoAula();
    const idalunoAula = lerIndice("Qual é o ID do aula? ");
    if (crudAula.idInvalido(idaula)) {
      console.log("ID de aula inválido.");
    } else {
      alunoAula.idaula = idaula;
      break;
    }
  }

  while (true) {
    crudAluno.listaraluno();
    const idaluno = lerIndice("Qual é o ID da aluno? ");
    if (crudAluno.idInvalido(idaluno)) {
      console.log("ID de aluno inválido.");
    } else {
      alunoAula.idaluno = idaluno;
      break;
    }
  }

  return alunoAula;
};

const criaralunoAula = () => {
  const alunoAula = modeloaula();
  alunoAulas.push(alunoAula);
  console.log("aula criada com sucesso.");
};

const atualizaralunoAula = () => {
  while (true) {
    if (alunoAulas.length === 0) {
      console.log("Lista de alunoAulas está vazia.");
      break;
    }

    listaralunoAula();

    const idalunoAulas = lerIndice(
      "Qual é o ID da aula que deseja atualizar? "
    );

    if (idInvalido(idalunoAulas)) {
      console.log("ID inválido.");
    } else {
      const aulaIndex = alunoAulas.findIndex(
        (alunoAula) => alunoAula.idalunoAulas === idalunoAulas
      );
      const aulaAtualizada = modeloaula();
      aulaAtualizada.idalunoAulas = idalunoAulas; // Mantém o mesmo ID
      alunoAulas[aulaIndex] = aulaAtualizada;
      console.log("aula atualizada com sucesso.");
      break;
    }
  }
};

const removeralunoAula = () => {
  while (true) {
    if (alunoAulas.length === 0) {
      console.log("Lista de alunoAulas está vazia.");
      break;
    }

    listaralunoAula();

    const idalunoAulas = lerIndice("Qual é o ID da aula que deseja remover? ");

    if (idInvalido(idalunoAulas)) {
      console.log("ID inválido.");
    } else {
      const aulaIndex = alunoAulas.findIndex(
        (aula) => aula.idalunoAulas === idalunoAulas
      );
      alunoAulas.splice(aulaIndex, 1);
      console.log("aula removida com sucesso.");
      break;
    }
  }
};

module.exports = {
  criaralunoAula,
  atualizaralunoAula,
  removeralunoAula,
  listaralunoAula,
  idInvalido,
};
