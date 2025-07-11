function Enviar() {
    const nomeCompleto = document.getElementById('nome');
    const email = document.getElementById('email');
    const cidade = document.getElementById('cidade');
    const texto = document.getElementById('texto');
    const checkboxs = document.querySelectorAll('.especialidade');
    const aniversario = document.getElementById('aniversario');

    // Limpar os errors anteriores
    [nomeCompleto, email, cidade, texto].forEach(el => el.classList.remove('erro'));

    let formularioValido = true

    if(nomeCompleto.value.trim() === '') {
        nomeCompleto.classList.add('erro');
        formularioValido = false;
    }
    if(email.value.trim() === '') {
        email.classList.add('erro');
        formularioValido = false;
    }
    if(cidade.value.trim() === '') {
        cidade.classList.add('erro');
        formularioValido = false;
    }
    if(texto.value.trim() === '') {
        texto.classList.add('erro');
        formularioValido = false;
    }
    if(aniversario.value.trim() === '') {
        aniversario.classList.add('erro');
        formularioValido = false;
    }
    if(formularioValido) {
        alert('Formulário enviado com sucesso!');
    }else {
        alert('Por favor, preencha os campus!')
    }

    // Verificar se o checkbox está marcado
    const checkboxMarcado = Array.from(checkboxs).some(cb => cb.checked);
    
    if(!checkboxMarcado) {
        alert('Selecione pelo menos a sua especialidade.');
        formularioValido = false
    }
}