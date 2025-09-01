alert ('Boas vindas ao jogo número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt (Math.random() * numeroMaximo +1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1; 

//enquanto o chute não for igual ao n.s.
while (chute != numeroSecreto) {
      chute = prompt (`Escolha um número de 1 a ${numeroMaximo}`);
      // se chute for igual a número secreto
     if (chute == numeroSecreto) {
         break;
     } else {
    if (chute > numeroSecreto) {
        alert (`número secreto menor que ${chute}`);
    } else {
     alert (`número secreto maior que ${chute}`);
     }
    // tentativas = tentativas + 1
    tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'; 
alert (`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);

//if (tentativas > 1) {
//alert (`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else { 
  //  alert (`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}