const senhaGerada = document.getElementById('senhaGerada');

const chkMin = document.getElementById('chkMinusculas');
const chkMai = document.getElementById('chkMaiuscula');
const chkSimb = document.getElementById('chkSimbolos');
const quantidade = document.getElementById('quantCar');
const chkNumeros = document.getElementById('chkNUmeros');

const btn = document.getElementById('btnGera');

btn.addEventListener('click', () =>{
    senhaGerada.innerHTML = gera();
});

function gera(){
    const res = geraSenha(        
        quantidade.value,
        chkMai.checked,
        chkMin.checked,
        chkNumeros.checked,
        chkSimb.checked
    );
    return res || 'Nada selecionado'
}



const  rand = (max, min) => Math.floor(Math.random()*(max-min)+min);

const numero = () => String.fromCharCode(rand(48,58));
const Maiusculo = () => String.fromCharCode(rand(91,65));
const Minuscula = () => String.fromCharCode(rand(122,97));
const Simbolos =() => Simb[rand(0, Simb.length)];

const Simb ='!@#$%ˆ&*';

function geraSenha(quant, mais, min, num, simb){
    const senha = [];
    quant = Number(quant);

    for(let i=0;i<quant-1;i++){
        mais && senha.push(Maiusculo());
        min && senha.push(Minuscula());
        num && senha.push(numero());
        simb && senha.push(Simbolos());
    }
    return senha.join('').slice(0,quant);
}

//geraSenha(10, true,true,true,true);
//console.log(res);
