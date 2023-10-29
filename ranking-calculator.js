
function calculateLevel(victories, defeats) {
  const wins = victories - defeats;
  let level;

  if (victories < 10) {
    level = 'Ferro';
  } else if (victories >= 11 && victories <= 20) {
    level = 'Bronze';
  } else if (victories >= 21 && victories <= 50) {
    level = 'Prata';
  } else if (victories >= 51 && victories <= 80) {
    level = 'Ouro';
  } else if (victories >= 81 && victories <= 90) {
    level = 'Diamante';
  } else if (victories >= 91 && victories <= 100) {
    level = 'Lendário';
  } else {
    level = 'Imortal';
  }

  return `O jogador tem ${wins} vitórias e está no nível ${level}`;
}

// Exemplo de uso:
const victories = 70;
const defeats = 30;
const result = calculateLevel(victories, defeats);
console.log(result); // Saída: "O Herói tem um saldo de 40 e está no nível de Ouro"

