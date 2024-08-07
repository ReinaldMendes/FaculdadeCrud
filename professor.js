const prompt = require("prompt-sync")();
let nextProfessorId = 1;
const professores = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome.trim() === "";

const idInvalido = (idProfessor) => {
  return !professores.some(
    (professor) => professor.idProfessor === idProfessor
  );
};

function listarprofessor() {
  if (professores.length === 0) {
    console.log("Nenhum professor cadastrado.");
  } else {
    professores.forEach((professor) => {
      console.log(`ID: ${professor.idProfessor} - Nome: ${professor.nome}`);
    });
  }
}

const modeloprofessor = () => {
  let professor = { idProfessor: nextProfessorId++ };

  while (true) {
    professor.nome = prompt("Qual é o nome do professor? ").trim();
    if (nomeInvalido(professor.nome)) {
      console.log("O nome do professor não pode ser vazio.");
    } else {
      break;
    }
  }

  return professor;
};

const criarprofessor = () => {
  const professor = modeloprofessor();
  professores.push(professor);
  console.log("professor criado com sucesso.");
};

const atualizarprofessor = () => {
  while (true) {
    if (professores.length === 0) {
      console.log("Lista de professores está vazia.");
      break;
    }

    listarprofessor();

    const idProfessor = lerIndice(
      "Qual é o ID do professor que deseja atualizar? "
    );

    if (idInvalido(idProfessor)) {
      console.log("ID inválido.");
    } else {
      const professorIndex = professores.findIndex(
        (professor) => professor.idProfessor === idProfessor
      );
      const professorAtualizado = modeloprofessor();
      professorAtualizado.idProfessor = idProfessor; // Mantém o mesmo ID
      professores[professorIndex] = professorAtualizado;
      console.log("professor atualizado com sucesso.");
      break;
    }
  }
};

const removerprofessor = () => {
  while (true) {
    if (professores.length === 0) {
      console.log("Lista de professores está vazia.");
      break;
    }

    listarprofessor();

    const idProfessor = lerIndice(
      "Qual é o ID do professor que deseja remover? "
    );

    if (idInvalido(idProfessor)) {
      console.log("ID inválido.");
    } else {
      const professorIndex = professores.findIndex(
        (professor) => professor.idProfessor === idProfessor
      );
      professores.splice(professorIndex, 1);
      console.log("professor removido com sucesso.");
      break;
    }
  }
};

module.exports = {
  criarprofessor,
  atualizarprofessor,
  removerprofessor,
  listarprofessor,
  idInvalido,
};
