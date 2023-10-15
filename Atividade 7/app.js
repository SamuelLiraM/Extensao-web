function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var dataNascimento = document.getElementById("data_nascimento").value;
    var endereco = document.getElementById("endereco").value;
    var uf = document.getElementById("uf").value;
    var cep = document.getElementById("cep").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    if (nome === "" || cpf === "" || dataNascimento === "" || endereco === "" || uf === "" || cep === "" || email === "" || telefone === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }
    return true;
}        
   