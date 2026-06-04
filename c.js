function gerarCurriculo(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();

    if (nome === "") {
        alert("Digite seu nome.");
        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    // Atualiza os dados na tela
    document.getElementById("nomeCurriculo").innerText = nome;
    document.getElementById("emailCurriculo").innerText = email;
    document.getElementById("telefoneCurriculo").innerText = telefone;
    
    document.getElementById("formacoesCurriculo").innerText = document.getElementById("formacoes").value;
    document.getElementById("experienciaCurriculo").innerText = document.getElementById("experiencia").value;
    document.getElementById("habilidadesCurriculo").innerText = document.getElementById("habilidades").value;
}

function baixarPDF() {
    const nome = document.getElementById("nome").value.trim() || "Curriculo";
    
    // Captura apenas o conteúdo do currículo, ignorando o título da section e o botão
    const elemento = document.getElementById("conteudo-curriculo");

    // Configurações aprimoradas para um PDF bonito e formal
    const opcoes = {
        margin: [15, 15, 15, 15], // Margem de 15mm em todos os lados
        filename: `${nome}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { 
            scale: 2, // Uma escala 2 já é suficiente para alta qualidade sem pesar muito
            useCORS: true,
            backgroundColor: "#ffffff" // Força o fundo branco no print
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(opcoes).from(elemento).save();
}

function alternarModoEscuro() {
    document.body.classList.toggle("modo-escuro");
    
    const icone = document.getElementById("btnModoEscuro");
    if (document.body.classList.contains("modo-escuro")) {
        icone.innerText = "☀️";
    } else {
        icone.innerText = "🌙";
    }

    localStorage.setItem(
        "modoEscuro",
        document.body.classList.contains("modo-escuro")
    );
}

// Verifica preferência salva
if (localStorage.getItem("modoEscuro") === "true") {
    document.body.classList.add("modo-escuro");
    document.getElementById("btnModoEscuro").innerText = "☀️";
}

// Salva digitação em tempo real (Auto-save no formulário)
const campos = document.querySelectorAll("input, textarea");
campos.forEach(campo => {
    campo.value = localStorage.getItem(campo.id) || "";
    campo.addEventListener("input", () => {
        localStorage.setItem(campo.id, campo.value);
    });
});

// Atualização em tempo real do currículo abaixo
const idsSincronizados = ["nome", "email", "telefone", "formacoes", "experiencia", "habilidades"];
idsSincronizados.forEach(id => {
    document.getElementById(id).addEventListener("input", function () {
        const targetId = id + "Curriculo";
        const element = document.getElementById(targetId);
        if(element) element.innerText = this.value;
    });
});