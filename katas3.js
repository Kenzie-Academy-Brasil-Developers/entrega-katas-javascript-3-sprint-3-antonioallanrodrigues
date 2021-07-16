const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(resultado) {

    const resultadoFinal = document.createTextNode(resultado);
    const elementoP = document.createElement('p');
    elementoP.appendChild(resultadoFinal);
    document.body.appendChild(elementoP);
}

function kata1() {
    // implemente o código do kata 1 aqui

    let resultado = "";

    for (let i = 1; i <= 25; i++) {
        resultado = resultado + i + " , ";
    }
    return resultado;
}

const cabecalho1 = document.createElement("h1");
cabecalho1.innerHTML = "Kata 1";
document.body.appendChild(cabecalho1);
showResults(kata1());



function kata2() {
    // implemente o código do kata 2 aqui

    let resultado = "";

    for (let i = 25; i >= 1; i--) {
        resultado = resultado + i + " , ";
    }
    return resultado;
}

const cabecalho2 = document.createElement("h1");
cabecalho2.innerHTML = "Kata 2";
document.body.appendChild(cabecalho2);
showResults(kata2());

function kata3() {
    // implemente o código do kata 3 aqui

    let resultado = "";

    for (let i = -1; i >= -25; i--) {
        resultado = resultado + i + " , ";
    }
    return resultado;

}

const cabecalho3 = document.createElement("h1");
cabecalho3.innerHTML = "Kata 3";
document.body.appendChild(cabecalho3);
showResults(kata3());

function kata4() {
    // implemente o código do kata 4 aqui

    let resultado = "";

    for (let i = -25; i <= -1; i++) {
        resultado = resultado + i + " , ";
    }
    return resultado;
}

const cabecalho4 = document.createElement("h1");
cabecalho4.innerHTML = "Kata 4";
document.body.appendChild(cabecalho4);
showResults(kata4());

function kata5() {
    // implemente o código do kata 5 aqui

    let resultado = "";
    for (let i = 25; i >= -25; i--) {
        if (i % 3 !== 0) {
            resultado = resultado + i + " , ";
        }
    }
    return resultado
}

const cabecalho5 = document.createElement("h1");
cabecalho5.innerHTML = "Kata 5";
document.body.appendChild(cabecalho5);
showResults(kata5());

function kata6() {
    // implemente o código do kata 6 aqui

    let resultado = "";
    for (let i = 3; i <= 100; i++) {
        if (i % 3 == 0) {
            resultado = resultado + i + " , ";
        }
    }
    return resultado
}


const cabecalho6 = document.createElement("h1");
cabecalho6.innerHTML = "Kata 6";
document.body.appendChild(cabecalho6);
showResults(kata6());

function kata7() {
    // implemente o código do kata 7 aqui

    let resultado = "";
    for (let i = 3; i <= 100; i++) {
        if (i % 7 == 0) {
            resultado = resultado + i + " , ";
        }
    }
    return resultado
}

const cabecalho7 = document.createElement("h1");
cabecalho7.innerHTML = "Kata 7";
document.body.appendChild(cabecalho7);
showResults(kata7());

function kata8() {
    // implemente o código do kata 8 aqui

    let resultado = "";
    for (let i = 100; i >= 3; i--) {
        if (i % 7 == 0 || i % 3 == 0) {
            resultado = resultado + i + " , ";
        }
    }
    return resultado
}

const cabecalho8 = document.createElement("h1");
cabecalho8.innerHTML = "Kata 8";
document.body.appendChild(cabecalho8);
showResults(kata8());

function kata9() {
    // implemente o código do kata 9 aqui

    let resultado = " ";

    for (let i = 5; i <= 100; i++) {
        if (i % 2 !== 0) {
            if (i % 5 == 0) {
                resultado = resultado + i + " , ";
            }
        }

    }
    return resultado
}

const cabecalho9 = document.createElement("h1");
cabecalho9.innerHTML = "Kata 9";
document.body.appendChild(cabecalho9);
showResults(kata9());

function kata10() {
    // implemente o código do kata 10 aqui

    let resultado = " ";

    for (let i = 0; i < sampleArray.length; i++) {
        resultado = resultado + sampleArray[i] + " , ";
    }

    return resultado
}

const cabecalho10 = document.createElement("h1");
cabecalho10.innerHTML = "Kata 10";
document.body.appendChild(cabecalho10);
showResults(kata10());

function kata11() {
    // implemente o código do kata 11 aqui

    let resultado = " ";

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 == 0) {
            resultado = resultado + sampleArray[i] + " , ";
        }
    }

    return resultado
}

const cabecalho11 = document.createElement("h1");
cabecalho11.innerHTML = "Kata 11";
document.body.appendChild(cabecalho11);
showResults(kata11());

function kata12() {
    // implemente o código do kata 12 aqui

    let resultado = " ";

    for (i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 !== 0) {
            resultado = resultado + sampleArray[i] + " , ";
        }
    }

    return resultado
}

const cabecalho12 = document.createElement("h1");
cabecalho12.innerHTML = "Kata 12";
document.body.appendChild(cabecalho12);
showResults(kata12());

function kata13() {
    // implemente o código do kata 13 aqui

    let resultado = " ";

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 == 0) {
            resultado = resultado + sampleArray[i] + " , ";
        }
    }

    return resultado
}

const cabecalho13 = document.createElement("h1");
cabecalho13.innerHTML = "Kata 13";
document.body.appendChild(cabecalho13);
showResults(kata13());

function kata14() {
    // implemente o código do kata 14 aqui

    let resultado = " ";

    for (let i = 0; i < sampleArray.length; i++) {

        resultado = resultado + (sampleArray[i] ** 2) + " , ";

    }

    return resultado
}

const cabecalho14 = document.createElement("h1");
cabecalho14.innerHTML = "Kata 14";
document.body.appendChild(cabecalho14);
showResults(kata14());

function kata15() {
    // implemente o código do kata 15 aqui

    let resultado = 0;

    for (let i = 1; i <= 20; i++) {
        resultado = resultado + i
    }

    return resultado
}

const cabecalho15 = document.createElement("h1");
cabecalho15.innerHTML = "Kata 15";
document.body.appendChild(cabecalho15);
showResults(kata15());

function kata16() {
    // implemente o código do kata 16 aqui

    let resultado = 0;

    for (let i = 0; i < sampleArray.length; i++) {
        resultado = resultado + sampleArray[i];
    }

    return resultado
}

const cabecalho16 = document.createElement("h1");
cabecalho16.innerHTML = "Kata 16";
document.body.appendChild(cabecalho16);
showResults(kata16());

function kata17() {
    // implemente o código do kata 17 aqui

    var resultado = 1000;

    for (let i = 0; i < sampleArray.length; i++) {

        if (resultado > sampleArray[i]) {
            resultado = sampleArray[i];
        }

    }

    return resultado

}

const cabecalho17 = document.createElement("h1");
cabecalho17.innerHTML = "Kata 17";
document.body.appendChild(cabecalho17);
showResults(kata17());

function kata18() {
    // implemente o código do kata 18 aqui

    let resultado = 0;

    for (i = 0; i < sampleArray.length; i++) {

        if (resultado < sampleArray[i]) {
            resultado = sampleArray[i];
        }

    }

    return resultado
}

const cabecalho18 = document.createElement("h1");
cabecalho18.innerHTML = "Kata 18";
document.body.appendChild(cabecalho18);
showResults(kata18());

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}