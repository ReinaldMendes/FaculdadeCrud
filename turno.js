// Turno:
//  nome
//  inicio
//  termino

// Curso:
//  nome
//  horas_totais
//  id_turno: relacionar com turno

// Matéria:
//  nome
//  hora_totais
//  id_curso: relacionar com curso

// Aluno:
//  nome
//  id_curso: relacionar com curso

// Professor:
//  nome

// Sala
//  numero

// Aula:
//  id_professor: relacionar com professor
//  id_materia: relacionar com matéria
//  id_sala: relacionar com sala

// Aluno_Aula:
//  id_aula: relacionar com aula
//  id_aluno: relacionar com aluno

const prompt = require("prompt-sync")();

let nextUserId = 1;
const turnos = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome.trim() === "";

const idInvalido = (idTurno) => {
  return !turnos.some((turno) => turno.idTurno === idTurno);
};

function listarturno() {
  if (turnos.length === 0) {
    console.log("Nenhuma turno cadastrada.");
  } else {
    turnos.forEach((turno) => {
      console.log(
        `ID: ${turno.idTurno} - Nome : ${turno.nome} - Inicio : ${turno.inicio} - Termino : ${turno.termino} `
      );
    });
  }
}

const modelo = () => {
  let turno = { idTurno: nextUserId++ };

  while (true) {
    turno.nome = prompt("Qual é o nome do turno? ").trim();
    if (nomeInvalido(turno.nome)) {
      console.log("A turno não pode ser vazio");
    } else {
      break;
    }
  }
  while (true) {
    turno.inicio = prompt("Qual é o Horario de inicio do turno? ").trim();
    if (nomeInvalido(turno.inicio)) {
      console.log("O horario não pode ser vazio");
    } else {
      break;
    }
  }
  while (true) {
    turno.termino = prompt("Qual é o Horario de termino do turno? ").trim();
    if (nomeInvalido(turno.termino)) {
      console.log("O horario não pode ser vazio");
    } else {
      break;
    }
  }
  return turno;
};

const criar = () => {
  const turno = modelo();
  turnos.push(turno);
  console.log("turno criada com sucesso");
};

const atualizar = () => {
  while (true) {
    if (turnos.length == 0) {
      console.log("Lista de turnos está vazia");
      break;
    }

    listarturno();

    const idTurno = lerIndice("Qual é o ID do turno que deseja atualizar? ");

    if (idInvalido(idTurno)) {
      console.log("ID inválido");
    } else {
      const turnoIndex = turnos.findIndex((turno) => turno.idTurno === idTurno);
      const turnoAtualizado = modelo();
      turnoAtualizado.idTurno = idTurno; // Mantém o mesmo ID
      turnos[turnoIndex] = turnoAtualizado;
      console.log("turno atualizada com sucesso");
      break;
    }
  }
};

const remover = () => {
  while (true) {
    if (turnos.length == 0) {
      console.log("Lista de turnosestá vazia");
      break;
    }

    listarturno();

    const idTurno = lerIndice("Qual é o ID da turno que deseja remover? ");

    if (idInvalido(idTurno)) {
      console.log("ID inválido");
    } else {
      const turnoIndex = turnos.findIndex((turno) => turno.idTurno === idTurno);
      turnos.splice(turnoIndex, 1);
      console.log("turno removida com sucesso");
      break;
    }
  }
};

module.exports = {
  criar,
  atualizar,
  remover,
  listarturno,
  idInvalido,
};
