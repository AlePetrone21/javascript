var num = [4, 2, 5, 3]

console.log(`Nosso vetor é ${num}`);
console.log(`Nossa chave 1 é ${num[1]}`);

num[4] = 8
console.log(`Adicionando na posição 3 fica ${num}`);

num.push(7)
console.log(`Adicionando o 7 utilizando o push fica ${num}`);

console.log(`O comprimento dessa váriavel é de ${num.length}`);

console.log(`Deixando essa váriavel em forma crescente ${num.sort()}`);
var pos = num.indexOf(6)
if (pos == -1){
    console.log('O valor 5 não foi encontrado');
} else {
    console.log(`O valor "5"está na posição ${pos}`);
}
