// ===== FORMULÁRIO DE CADASTRO =====
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const msg = document.getElementById("msg");

    if (email === "" || senha === "") {
        msg.style.display = "block";
        msg.textContent = "Preencha todos os campos!";
    } else {
        msg.style.display = "block";
        msg.textContent = "Cadastro realizado com sucesso!";
        
        // Redireciona após 1.5s
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    }
});


// ===== MOSTRAR / OCULTAR SENHA =====
const campoSenha = document.getElementById("senha");
const toggleSenha = document.getElementById("toggleSenha");

toggleSenha.addEventListener("click", () => {
    if (campoSenha.type === "password") {
        campoSenha.type = "text";
        toggleSenha.classList.remove("bx-hide");
        toggleSenha.classList.add("bx-show");
    } else {
        campoSenha.type = "password";
        toggleSenha.classList.remove("bx-show");
        toggleSenha.classList.add("bx-hide");
    }
});
