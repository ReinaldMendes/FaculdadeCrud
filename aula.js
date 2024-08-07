const prompt = require("prompt-sync")();
const crudProfessor = require("./professor.js");
const crudMateria = require("./materia.js");
const crudSala = require("./sala.js");
let nextAulaId = 1;
const aulas = [];

const lerIndice = (mensagem) => {
  const valor = prompt(mensagem);
  const numero = parseInt(valor);
  if (isNaN(numero)) {
    console.log("Valor inválido. Por favor, insira um número.");
    return lerIndice(mensagem);
  }
  return numero;
};

const idInvalido = (idaulas) => {
  return !aulas.some((aula) => aula.idaulas === idaulas);
};

function listaraula() {
  if (aulas.length === 0) {
    console.log("Nenhuma aula cadastrada.");
  } else {
    aulas.forEach((aula) => {
      console.log(
        `ID: ${aula.idaulas} - ID Professor: ${aula.idProfessor} - ID materia: ${aula.idMateria} - ID sala: ${aula.idsala}`
      );
    });
  }
}

const modeloaula = () => {
  let aula = { idaulas: nextAulaId++ };

  while (true) {
    crudProfessor.listarprofessor();
    const idProfessor = lerIndice("Qual é o ID do Professor? ");
    if (crudProfessor.idInvalido(idProfessor)) {
      console.log("ID de Professor inválido.");
    } else {
      aula.idProfessor = idProfessor;
      break;
    }
  }

  while (true) {
    crudMateria.listarmateria();
    const idMateria = lerIndice("Qual é o ID da materia? ");
    if (crudMateria.idInvalido(idMateria)) {
      console.log("ID de materia inválido.");
    } else {
      aula.idMateria = idMateria;
      break;
    }
  }

  while (true) {
    crudSala.listarsala();
    const idsala = lerIndice("Qual é o ID da sala? ");
    if (crudSala.idInvalido(idsala)) {
      console.log("ID da sala inválido.");
    } else {
      aula.idsala = idsala;
      break;
    }
  }

  return aula;
};

const criaraula = () => {
  const aula = modeloaula();
  aulas.push(aula);
  console.log("aula criada com sucesso.");
};

const atualizaraula = () => {
  while (true) {
    if (aulas.length === 0) {
      console.log("Lista de aulas está vazia.");
      break;
    }

    listaraula();

    const idaulas = lerIndice("Qual é o ID da aula que deseja atualizar? ");

    if (idInvalido(idaulas)) {
      console.log("ID inválido.");
    } else {
      const aulaIndex = aulas.findIndex((aula) => aula.idaulas === idaulas);
      const aulaAtualizada = modeloaula();
      aulaAtualizada.idaulas = idaulas; // Mantém o mesmo ID
      aulas[aulaIndex] = aulaAtualizada;
      console.log("aula atualizada com sucesso.");
      break;
    }
  }
};

const removeraula = () => {
  while (true) {
    if (aulas.length === 0) {
      console.log("Lista de aulas está vazia.");
      break;
    }

    listaraula();

    const idaulas = lerIndice("Qual é o ID da aula que deseja remover? ");

    if (idInvalido(idaulas)) {
      console.log("ID inválido.");
    } else {
      const aulaIndex = aulas.findIndex((aula) => aula.idaulas === idaulas);
      aulas.splice(aulaIndex, 1);
      console.log("aula removida com sucesso.");
      break;
    }
  }
};

module.exports = {
  criaraula,
  atualizaraula,
  removeraula,
  listaraula,
  idInvalido,
};
