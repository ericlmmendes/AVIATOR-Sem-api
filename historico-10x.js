// historico-10x.js
const dados = [
  { hora: "13:22", multiplicador: 10.85 }, { hora: "13:16", multiplicador: 548.78 }, { hora: "13:14", multiplicador: 40.90 },
  { hora: "12:58", multiplicador: 249.68 }, { hora: "12:57", multiplicador: 19.28 }, { hora: "12:47", multiplicador: 1171.92 },
  // ... (todos os outros acima de 10x)
].sort((a, b) => b.hora.localeCompare(a.hora));

// Reutiliza funções do 2x.js
export { getTodos, getPorHora, getMedia, getMediana, getMax, getMin, getEstatisticas } from './historico-2x.js';
export default { getTodos, getPorHora, getEstatisticas };