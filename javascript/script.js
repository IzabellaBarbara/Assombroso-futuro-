document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){
    if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != "" ){
    alert("Prontinho! Você será incluída no grupo de planejamento e ação coletiva!")
    }else{
        alert("Por favor, preencha os campos nome, email e telefone!")
    }
}