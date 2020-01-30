// Capturar o evento de submit do formulário
const form = document.querySelector('#formulario');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }
    if(!altura){
        setResultado('Altura inválido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

/* 
MENOR QUE 18,5 MAGREZA
ENTRE 18,5 E 24,9 NORMAL
ENTRE 25,0 E 29,9 SOBREPESO
ENTRE 30,0 E 39,9 OBESIDADE 
MAIOR QUE 40,0 OBESIDADE GRAVE
*/

// Nível do IMC
function getNivelImc(imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso',
    'Obesidade', 'Obesidade Grave'];

    if(imc > 39.9) return nivel[4];
    if(imc >= 30) return nivel[3];
    if(imc >= 25) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}

// Convertendo o peso
function getImc(peso, altura) {
    const imc = peso/altura**2;
    return imc.toFixed(2);
}

// Criar elemento p para o Resultado
function criarParagrafo() {
    const p = document.createElement('p');
    return p;
}

// Resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criarParagrafo();

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}