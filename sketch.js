let xJogador = [20, 20, 20, 20];
let yJogador = [50, 150, 250, 350];
let jogador = ["🌪","🌧","❄","🫧"];
let contagem = jogador.length;
let teclas = ["a","s","d","f"];

 function setup() {
 createCanvas(400, 400);
}

  function draw() {

 defineTela();
 mostraJogadores();
 desenhaChegada();
 defineVencedor();
}
 
  function defineTela(){
  if(focused == true){
  background('rgb(24,123,207)');}  
  else {
  background('#159706BF');
 }
}
  function mostraJogadores(){
 
 textSize(30);
 for(let i = 0; i < contagem; i ++){
   text(jogador[i], xJogador[i], yJogador[i]);
 }
 }    

   function desenhaChegada(){
   fill("white");
   rect(350, 0, 10, 400); 
   fill("black");
   for (let yAtual= 0; yAtual < 400; yAtual += 20){
   rect(350, yAtual, 10, 10);}
   }
   function defineVencedor(){
   textAlign(CENTER, CENTER);
   for(let i = 0; i < contagem; i ++){ 
   if(xJogador [i]> 350) {
   text( jogador[i] + "Venceu!", width/2, height/2);
   noLoop();
   }
   }
   }


 function keyReleased() {
 for (let i = 0; i < contagem; i ++) {
 if(key == teclas[i]){
   xJogador [i] += random (20);
 }
 }
 }