const prompt = require("prompt-sync")();
let nextSalaId = 1;
const salas = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome.trim() === "";

const idInvalido = (idSala) => {
  return !salas.some((sala) => sala.idSala === idSala);
};

function listarsala() {
  if (salas.length === 0) {
    console.log("Nenhum sala cadastrado.");
  } else {
    salas.forEach((sala) => {
      console.log(`ID: ${sala.idSala} - Nome: ${sala.nome}`);
    });
  }
}

const modelosala = () => {
  let sala = { idSala: nextSalaId++ };

  while (true) {
    sala.nome = prompt("Qual é o nome da sala? ").trim();
    if (nomeInvalido(sala.nome)) {
      console.log("O nome da sala não pode ser vazio.");
    } else {
      break;
    }
  }

  return sala;
};

const criarsala = () => {
  const sala = modelosala();
  salas.push(sala);
  console.log("sala criada com sucesso.");
};

const atualizarsala = () => {
  while (true) {
    if (salas.length === 0) {
      console.log("Lista de salas está vazia.");
      break;
    }

    listarsala();

    const idSala = lerIndice("Qual é o ID da sala que deseja atualizar? ");

    if (idInvalido(idSala)) {
      console.log("ID inválido.");
    } else {
      const salaIndex = salas.findIndex((sala) => sala.idSala === idSala);
      const salaAtualizado = modelosala();
      salaAtualizado.idSala = idSala; // Mantém o mesmo ID
      salas[salaIndex] = salaAtualizado;
      console.log("sala atualizada com sucesso.");
      break;
    }
  }
};

const removersala = () => {
  while (true) {
    if (salas.length === 0) {
      console.log("Lista de salas está vazia.");
      break;
    }

    listarsala();

    const idSala = lerIndice("Qual é o ID da sala que deseja remover? ");

    if (idInvalido(idSala)) {
      console.log("ID inválido.");
    } else {
      const salaIndex = salas.findIndex((sala) => sala.idSala === idSala);
      salas.splice(salaIndex, 1);
      console.log("sala removida com sucesso.");
      break;
    }
  }
};

module.exports = {
  criarsala,
  atualizarsala,
  removersala,
  listarsala,
  idInvalido,
};
