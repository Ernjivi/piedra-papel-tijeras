// 0,1,2 | piedra, papel, tijer
let results = ['piedra', 'papel', 'tijera']

// Math.random()
const rockPaperScissor = () => Math.floor(Math.random() * 3);
// function rockPaperScissor(){...}

let player1 = rockPaperScissor();
let player2 = rockPaperScissor();

console.log('Player1: ', results[player1], 'Player2: ', results[player2])

if(player1 > player2 && player1 - player2 !== 2){
   console.log('Gana Player1');
} else if(player2 > player1 && player2 - player1 !== 2){
  console.log('Gana Player2');
} else{
  console.log('Empate');
}




