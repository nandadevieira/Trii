document.getElementById("orcamentoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let inputs = document.querySelectorAll("input, select, textarea");
    let valido = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            valido = false;
            input.style.borderColor = "red";
        } else {
            input.style.borderColor = "#ccc";
        }
    });

    if (valido) {
        console.log("Formulário válido"); 
        let mensagemSucesso = document.getElementById("mensagemSucesso");
        if (mensagemSucesso) {
            mensagemSucesso.style.display = "block";
            console.log("Mensagem de sucesso exibida"); 
            setTimeout(() => {
                document.getElementById("orcamentoForm").reset();
                mensagemSucesso.style.display = "none";
            }, 3000);
        } else {
            console.log("Elemento mensagemSucesso não encontrado"); 
        }
    } else {
        console.log("Formulário inválido"); 
    }
});

document.getElementById("telefone").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 11) value = value.slice(0, 11); 
    
    if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else if (value.length > 0) {
        value = value.replace(/^(\d{0,2})/, "($1");
    }

    e.target.value = value;
});
