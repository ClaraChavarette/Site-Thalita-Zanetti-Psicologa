// SLIDER INICIAL

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont >3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}




// REQUISIÇÃO DO FORMULARIO


const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Valide as informações do formulário aqui
    // Envie uma requisição para o servidor aqui
    alert('Sua consulta foi agendada!');
    form.reset();
});

