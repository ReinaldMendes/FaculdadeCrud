const prompt = require("prompt-sync")();
const crudTurno = require("./turno.js");
let nextCursoId = 1;
const cursos = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome.trim() === "";

const idInvalidoCurso = (idcurso) => {
  return !cursos.some((curso) => curso.idcurso === idcurso);
};

function listarcurso() {
  if (cursos.length === 0) {
    console.log("Nenhum curso cadastrado.");
  } else {
    cursos.forEach((curso) => {
      console.log(
        `ID: ${curso.idcurso} - Nome: ${curso.nome} - Horas Totais: ${curso.horasT} - ID turno: ${curso.idTurno}`
      );
    });
  }
}

const modelo = () => {
  let curso = { idcurso: nextCursoId++ };

  while (true) {
    curso.nome = prompt("Qual é o nome do curso? ").trim();
    if (nomeInvalido(curso.nome)) {
      console.log("O nome do curso não pode ser vazio.");
    } else {
      break;
    }
  }

  while (true) {
    curso.horasT = prompt("Qual é o total de horas do curso? ").trim();
    if (nomeInvalido(curso.horasT)) {
      console.log("As horas do curso não pode ser vazio.");
    } else {
      break;
    }
  }

  while (true) {
    crudTurno.listarturno();
    const idTurno = lerIndice("Qual é o ID do Turno? ");
    if (crudTurno.idInvalido(idTurno)) {
      console.log("ID de Turno inválido.");
    } else {
      curso.idTurno = idTurno;
      break;
    }
  }

  return curso;
};

const criarcurso = () => {
  const curso = modelo();
  cursos.push(curso);
  console.log("curso criado com sucesso.");
};

const atualizarcurso = () => {
  while (true) {
    if (cursos.length === 0) {
      console.log("Lista de cursos está vazia.");
      break;
    }

    listarcurso();

    const idcurso = lerIndice("Qual é o ID do curso que deseja atualizar? ");

    if (idInvalidoCurso(idcurso)) {
      console.log("ID inválido.");
    } else {
      const cursoIndex = cursos.findIndex((curso) => curso.idcurso === idcurso);
      const cursoAtualizado = modelo();
      cursoAtualizado.idcurso = idcurso; // Mantém o mesmo ID
      cursos[cursoIndex] = cursoAtualizado;
      console.log("curso atualizado com sucesso.");
      break;
    }
  }
};

const removercurso = () => {
  while (true) {
    if (cursos.length === 0) {
      console.log("Lista de cursos está vazia.");
      break;
    }

    listarcurso();

    const idcurso = lerIndice("Qual é o ID do curso que deseja remover? ");

    if (idInvalidoCurso(idcurso)) {
      console.log("ID inválido.");
    } else {
      const cursoIndex = cursos.findIndex((curso) => curso.idcurso === idcurso);
      cursos.splice(cursoIndex, 1);
      console.log("curso removido com sucesso.");
      break;
    }
  }
};

module.exports = {
  criarcurso,
  atualizarcurso,
  removercurso,
  listarcurso,
  idInvalidoCurso,
};
