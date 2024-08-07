const prompt = require("prompt-sync")();

const turno = require("./turno.js");
const sala = require("./sala.js");
const professor = require("./professor.js");
const curso = require("./curso.js");
const materia = require("./materia.js");
const aula = require("./aula.js");
const aluno = require("./aluno.js");
const alunoAula = require("./aluno_aula.js");
const menuPrincipal = () => {
  console.log(`
        GERENCIAMENTO DE FACULDADE
        `);

  while (true) {
    console.log(`
                  ESCOLHA O MÓDULO QUE QUER GERENCIAR:
                  
                  1 - TURNO
                  2 - PROFESSOR
                  3 - CURSO
                  4 - SALA
                  5 - MATERIA
                  6 - AULA
                  7 - ALUNO
                  8 - ALUNO_AULA
                  9 - SAIR
                  `);

    const opcaoModulo = parseInt(prompt(": "));

    switch (opcaoModulo) {
      case 1:
        menuturno();
        break;
      case 2:
        menuprofessor();
        break;
      case 3:
        menucurso();
        break;
      case 4:
        menusala();
        break;
      case 5:
        menumateria();
        break;
      case 6:
        menuaula();
        break;
      case 7:
        menualuno();
        break;
      case 8:
        menualuno_aula();
        break;
      case 9:
        process.exit();
        break;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menusala = () => {
  console.log("GERENCIAMENTO DE SALA");
  while (true) {
    console.log(`
                1 - CADASTRAR SALA
                2 - LISTAR SALAS
                3 - ATUALIZAR SALA
                4 - EXCLUIR SALA
                5 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        sala.criarsala();
        break;
      case 2:
        sala.listarsala();
        break;
      case 3:
        sala.atualizarsala();
        break;
      case 4:
        sala.removersala();
        break;
      case 5:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuprofessor = () => {
  console.log("GERENCIAMENTO DE professor");
  while (true) {
    console.log(`
                1 - CADASTRAR professor
                2 - LISTAR professorES
                3 - ATUALIZAR professor
                4 - EXCLUIR professor
                5 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        professor.criarprofessor();
        break;
      case 2:
        professor.listarprofessor();
        break;
      case 3:
        professor.atualizarprofessor();
        break;
      case 4:
        professor.removerprofessor();
        break;

      case 5:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuturno = () => {
  console.log("GERENCIAMENTO DE turno");
  while (true) {
    console.log(`
              1 - CADASTRAR turno
              2 - LISTAR turnoS
              3 - ATUALIZAR turno
              4 - EXCLUIR turno
              5 - SAIR
              `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        turno.criar();
        break;
      case 2:
        turno.listarturno();
        break;
      case 3:
        turno.atualizar();
        break;
      case 4:
        turno.remover();
        break;

      case 5:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};
const menucurso = () => {
  console.log("GERENCIAMENTO DE curso");
  while (true) {
    console.log(`
                1 - CADASTRAR curso
                2 - LISTAR curso
                3 - ATUALIZAR curso
                4 - EXCLUIR curso
                5 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        curso.criarcurso();
        break;
      case 2:
        curso.listarcurso();
        break;
      case 3:
        curso.atualizarcurso();
        break;
      case 4:
        curso.removercurso();
        break;

      case 5:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};
const menumateria = () => {
  console.log("GERENCIAMENTO DE materia");
  while (true) {
    console.log(`
                  1 - CADASTRAR materia
                  2 - LISTAR materia
                  3 - ATUALIZAR materia
                  4 - EXCLUIR materia
                  5 - SAIR
                  `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        materia.criarmateria();
        break;
      case 2:
        materia.listarmateria();
        break;
      case 3:
        materia.atualizarmateria();
        break;
      case 4:
        materia.removermateria();
        break;
      case 5:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuaula = () => {
  console.log("GERENCIAMENTO DE AULA");
  while (true) {
    console.log(`
                  1 - CADASTRAR AULA
                  2 - LISTAR AULAS
                  3 - ATUALIZAR AULA
                  4 - EXCLUIR AULA
                  5 - SAIR
                  `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        aula.criaraula();
        break;
      case 2:
        aula.listaraula();
        break;
      case 3:
        aula.atualizaraula();
        break;
      case 4:
        aula.removeraula();
        break;
      case 5:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menualuno = () => {
  console.log("GERENCIAMENTO DE ALUNO");
  while (true) {
    console.log(`
                  1 - CADASTRAR ALUNO
                  2 - LISTAR ALUNOS
                  3 - ATUALIZAR ALUNO
                  4 - EXCLUIR ALUNO
                  5 - SAIR
                  `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        aluno.criaraluno();
        break;
      case 2:
        aluno.listaraluno();
        break;
      case 3:
        aluno.atualizaraluno();
        break;
      case 4:
        aluno.removeraluno();
        break;
      case 5:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menualuno_aula = () => {
  console.log("GERENCIAMENTO DE ALUNO_AULA");
  while (true) {
    console.log(`
                  1 - CADASTRAR ALUNO_AULA
                  2 - LISTAR ALUNO_AULAS
                  3 - ATUALIZAR ALUNO_AULA
                  4 - EXCLUIR ALUNO_AULA
                  5 - SAIR
                  `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        alunoAula.criaralunoAula();
        break;
      case 2:
        alunoAula.listaralunoAula();
        break;
      case 3:
        alunoAula.atualizaralunoAula();
        break;
      case 4:
        alunoAula.removeralunoAula();
        break;
      case 5:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

menuPrincipal();
