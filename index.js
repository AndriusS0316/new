



let sk = 20485; // is skaiciaus pavertimas i stringa

while (sk > 0) {
    let skaitmuo = sk % 10 + 48;
    console.log(skaitmuo);
    sk = (sk - sk % 10) / 10
}

let tekstas = "20485"; // is stringo pavertimas i skaiciu

let rez = 0;

for (let i = 0; i < tekstas.length; i++) {
    // console.log(tekstas.charCodeAt(i));
    let skaitmuo = tekstas.charCodeAt(i) - 48;
    rez += skaitmuo;
}

console.log(rez);
let sk1 = rez + 1;
console.log(sk1);


sk1 = tekstas + 1;



// Aleksandro sprendimas

// let sk = 20485; // 0x5005
// let str = "a" + sk;
// // "a" + 20485
// // "a" + "20485"
// // "a20485"
// console.log(sk);
// console.log(str);
/*
"0" - 48
"1" - 49
"2" - 50
"3" - 51
"4" - 52
"5" - 53
"6" - 54
"7" - 55
"8" - 56
"9" - 57
*/
// let sk = 20485;
// while (sk > 0) {
// let skaitmuo = sk % 10 + 48;
// console.log(skaitmuo);
// sk = (sk - sk % 10) / 10;
// }


// let tekstas = "20485";
// let rez = parseInt(tekstas);


// let rez = 0;
// for (let i = 0; i < tekstas.length; i++) {
// rez *= 10;
// let skaitmuo = tekstas.charCodeAt(i) - 48;
// rez += skaitmuo;
// }


// console.log(rez);
// let sk = rez + 1;
// console.log(sk);