const prompt = require("prompt-sync")();
const crudCurso = require("./curso.js");
let nextUserId = 1;
const materias = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome.trim() === "";

const idInvalido = (idMateria) => {
  return !materias.some((materia) => materia.idMateria === idMateria);
};

function listarmateria() {
  if (materias.length === 0) {
    console.log("Nenhum materia cadastrada.");
  } else {
    materias.forEach((materia) => {
      console.log(
        `ID: ${materia.idMateria} - Nome: ${materia.nome} - Horas Totais: ${materia.horasT} - ID curso: ${materia.idcurso}`
      );
    });
  }
}

const modelo = () => {
  let materia = { idMateria: nextUserId++ };

  while (true) {
    materia.nome = prompt("Qual é o nome da materia? ").trim();
    if (nomeInvalido(materia.nome)) {
      console.log("O nome da materia não pode ser vazio.");
    } else {
      break;
    }
  }

  while (true) {
    materia.horasT = prompt("Qual é o total de horas da materia? ").trim();
    if (nomeInvalido(materia.horasT)) {
      console.log("As horas da materia não pode ser vazio.");
    } else {
      break;
    }
  }

  while (true) {
    crudCurso.listarcurso();
    const idcurso = lerIndice("Qual é o ID do curso? ");
    if (crudCurso.idInvalidoCurso(idcurso)) {
      console.log("ID de curso inválido.");
    } else {
      materia.idcurso = idcurso;
      break;
    }
  }

  return materia;
};

const criarmateria = () => {
  const materia = modelo();
  materias.push(materia);
  console.log("materia criado com sucesso.");
};

const atualizarmateria = () => {
  while (true) {
    if (materias.length === 0) {
      console.log("Lista de materias está vazia.");
      break;
    }

    listarmateria();

    const idMateria = lerIndice(
      "Qual é o ID do materia que deseja atualizar? "
    );

    if (idInvalido(idMateria)) {
      console.log("ID inválido.");
    } else {
      const materiaIndex = materias.findIndex(
        (materia) => materia.idMateria === idMateria
      );
      const materiaAtualizado = modelo();
      materiaAtualizado.idMateria = idMateria; // Mantém o mesmo ID
      materias[materiaIndex] = materiaAtualizado;
      console.log("materia atualizado com sucesso.");
      break;
    }
  }
};

const removermateria = () => {
  while (true) {
    if (materias.length === 0) {
      console.log("Lista de materias está vazia.");
      break;
    }

    listarmateria();

    const idMateria = lerIndice("Qual é o ID do materia que deseja remover? ");

    if (idInvalido(idMateria)) {
      console.log("ID inválido.");
    } else {
      const materiaIndex = materias.findIndex(
        (materia) => materia.idMateria === idMateria
      );
      materias.splice(materiaIndex, 1);
      console.log("materia removido com sucesso.");
      break;
    }
  }
};

module.exports = {
  criarmateria,
  atualizarmateria,
  removermateria,
  listarmateria,
  idInvalido,
};
