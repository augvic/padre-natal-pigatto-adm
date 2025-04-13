

import { db } from "../../firebase/firebase-config.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";


try {
    console.log("Salvando reunião...");

    await setDoc(doc(db, 'reuniao', `${data_reuniao}`), {
      data_reuniao,
      presidente,
      canticoInicial,
      oracaoInicial,

      temaDiscurso,
      oradorDiscurso,
      oradorJoias,
      leitorBiblia,

      tipoParte1,
      parte1Principal,
      parte1Morador,
      tipoParte2,
      parte2Principal,
      parte2Morador,
      tipoParte3,
      parte3Principal,
      parte3Morador,
      tipoParte4,
      parte4Principal,
      parte4Morador,

      canticoMeio,
      discursoVidaCristao,
      oradorDiscursoVidaCristao,
      discursoNecessidades,
      oradorNecessidades,

      estudoBiblico,
      leitor_livro,
      canticoFinal,
      oracaoFinal
    });

    console.log("Reunião salva com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar reunião:", error);
  }