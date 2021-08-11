



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



