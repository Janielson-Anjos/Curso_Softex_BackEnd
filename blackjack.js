// var carta1 = 8;
// var carta2 = 9;
// var somaDasCartas = carta1 + carta2;


// if (somaDasCartas > 21){
//     console.log('Banca Ganhou');
// }

// console.log('voce ganhou, seu numero foi:', somaDasCartas);

var cartaUsuario1 = Math.floor(11* Math.random());
var cartaUsuario2 = Math.floor(11* Math.random());
var somaDasCartasUsuario = cartaUsuario1 + cartaUsuario2;

var cartaMesa1 = Math.floor(11* Math.random());
var cartaMesa2 = Math.floor(11* Math.random());
var somaDasCartasMesa = cartaMesa1 + cartaMesa2;

if (somaDasCartasUsuario <= 21 && somaDasCartasUsuario > somaDasCartasMesa){
    console.log('Voce ganhou, a soma das suas cartas foi:', somaDasCartasUsuario);
    console.log('A soma das suas cartas da mesa foi:', somaDasCartasMesa);
}else{
    console.log('Mesa Ganhou, a soma das cartas foi: ', somaDasCartasMesa);
    console.log('a soma das suas cartas foi:', somaDasCartasUsuario);
};


