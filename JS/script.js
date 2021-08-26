const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#input-peso');
    const inputAltura = e.target.querySelector('#input-altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false)
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false)
        return;
    }

    const imc = getImc(peso, altura);
    const resultadoImc = getResultadoImc(imc);

    const msg = `Seu IMC é ${imc} (${resultadoImc}).`;

    setResultado(msg, true);
});

function getResultadoImc (imc) {
    const resultadoImc = ['Abaixo do peso', 'Peso normal',
    'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2',
    'Obesidade grau 3'];

if (imc >= 39.9) return resultadoImc[5];
if (imc >= 34.9) return resultadoImc[4];
if (imc >= 29.9) return resultadoImc[3];
if (imc >= 24.9) return resultadoImc[2];
if (imc >= 18.5) return resultadoImc[1];
if (imc <= 18.) return resultadoImc[0];    
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

function criaP (className) {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    
    const p = criaP();

    if (isValid) { 
        p.classList.add('resultado-certo');
    } else {
        p.classList.add('resultado-errado');
    }

    p.innerHTML = msg;

    resultado.appendChild(p);
}

