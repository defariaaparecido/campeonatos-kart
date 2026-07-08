// ============================================================
// Lista de campeonatos exibidos no site
// ============================================================
// Cada campeonato precisa de 3 informações:
//   id      -> identificador único, sem espaços e sem acentos
//   nome    -> nome que aparece no menu (pode ter espaços/acentos)
//   arquivo -> nome exato do arquivo .xlsm enviado para o GitHub
//
// IMPORTANTE: antes de enviar cada planilha para o GitHub, renomeie
// o arquivo para o nome indicado no campo "arquivo" abaixo (o mesmo
// nome que já foi usado no Super Master Pro).
// ============================================================

const CAMPEONATOS = [
  {
    id: "super-master-pro",
    nome: "Super Master Pro 2026",
    arquivo: "super-master-pro.xlsm"
  },
  {
    id: "super-master-series",
    nome: "Super Master Series 2026",
    arquivo: "super-master-series.xlsm"
  },
  {
    id: "super-quinta-pro",
    nome: "Super Quinta Pro 2026",
    arquivo: "super-quinta-pro.xlsm"
  },
  {
    id: "super-quinta-series",
    nome: "Super Quinta Series 2026",
    arquivo: "super-quinta-series.xlsm"
  },
  {
    id: "super-domingo-pro",
    nome: "Super Domingo Pro 2026",
    arquivo: "super-domingo-pro.xlsm"
  },
  {
    id: "super-domingo-series",
    nome: "Super Domingo Series 2026",
    arquivo: "super-domingo-series.xlsm"
  }

  /*
  ,{
    id: "id-do-campeonato",
    nome: "Nome do Campeonato 2026",
    arquivo: "nome-do-arquivo.xlsm"
  }
  */
];
