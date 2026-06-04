const idsCampos = ["nome", "email", "telefone", "objetivo", "formacoes", "formacao", "experiencia", "habilidades"];

function salvarDados() {
    idsCampos.forEach(id => {
        const campo = document.getElementById(id);
        if (campo) localStorage.setItem(id, campo.value);
    });
}

function carregarDados() {
    idsCampos.forEach(id => {
        const campo = document.getElementById(id);
        if (campo && localStorage.getItem(id)) {
            campo.value = localStorage.getItem(id);
        }
    });
    
    if (localStorage.getItem('modoEscuro') === 'true') {
        document.body.classList.add('modo-escuro');
        const btn = document.getElementById('btnModoEscuro');
        if (btn) btn.innerHTML = "☀️";
    }
}

document.addEventListener('input', salvarDados);
document.addEventListener('DOMContentLoaded', carregarDados);

function gerarCurriculo(event) {
    if (event) event.preventDefault();

    // Captura os dados do formulário de forma segura
    const nome = document.getElementById('nome')?.value.trim() || "SEU NOME COMPLETO";
    const email = document.getElementById('email')?.value.trim() || "seuemail@exemplo.com";
    const telefone = document.getElementById('telefone')?.value.trim() || "(00) 00000-0000";
    
    const objetivoCampo = document.getElementById('objetivo');
    const objetivo = objetivoCampo ? objetivoCampo.value.trim() : "";

    const formacaoCampo = document.getElementById('formacoes') || document.getElementById('formacao');
    const formacoes = formacaoCampo ? formacaoCampo.value.trim() : "";

    const experienciaCampo = document.getElementById('experiencia');
    const experiencia = experienciaCampo ? experienciaCampo.value.trim() : "";

    const habilidadesCampo = document.getElementById('habilidades');
    const habilidades = habilidadesCampo ? habilidadesCampo.value.trim() : "";

    const areaCurriculo = document.getElementById('curriculo');
    if (!areaCurriculo) {
        alert("Erro técnico: Não foi encontrada a div com id='curriculo' no seu HTML.");
        return;
    }

    areaCurriculo.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <p style="color: #28a745; font-weight: bold; font-size: 16px; margin: 0 0 10px 0;">✓ Pré-visualização gerada com sucesso! Confira abaixo:</p>
        </div>

        <div id="bloco-documento-pdf" style="background-color: #ffffff !important; color: #000000 !important; padding: 20mm 15mm !important; font-family: Arial, sans-serif !important; max-width: 180mm; margin: 0 auto !important; text-align: left !important; box-shadow: 0 0 15px rgba(0,0,0,0.2); border-radius: 4px; box-sizing: border-box !important;">
            
            <div style="text-align: center !important; margin-bottom: 35px !important; border-bottom: 1px solid #dddddd !important; padding-bottom: 15px !important;">
                <h1 style="font-size: 24px !important; text-transform: uppercase !important; margin: 0 0 6px 0 !important; color: #000000 !important; font-weight: bold !important; letter-spacing: 0.5px !important;">${nome}</h1>
                <p style="font-size: 13px !important; margin: 0 !important; color: #333333 !important; font-weight: normal !important;">
                    ${telefone} &nbsp;|&nbsp; ${email}
                </p>
            </div>

            ${objetivo ? `
            <div style="margin-bottom: 25px !important; page-break-inside: avoid !important;">
                <h2 style="font-size: 14px !important; border-left: 4px solid #000000 !important; padding-left: 10px !important; text-transform: uppercase !important; margin: 0 0 10px 0 !important; color: #000000 !important; font-weight: bold !important; letter-spacing: 0.5px !important;">Objetivo</h2>
                <p style="white-space: pre-line !important; font-size: 13px !important; color: #222222 !important; margin: 0 !important; padding-left: 14px !important; text-align: justify !important; line-height: 1.6 !important;">${objetivo}</p>
            </div>
            ` : ''}

            ${formacoes ? `
            <div style="margin-bottom: 25px !important; page-break-inside: avoid !important;">
                <h2 style="font-size: 14px !important; border-left: 4px solid #000000 !important; padding-left: 10px !important; text-transform: uppercase !important; margin: 0 0 10px 0 !important; color: #000000 !important; font-weight: bold !important; letter-spacing: 0.5px !important;">Formação Acadêmica</h2>
                <p style="white-space: pre-line !important; font-size: 13px !important; color: #222222 !important; margin: 0 !important; padding-left: 14px !important; line-height: 1.6 !important;">${formacoes}</p>
            </div>
            ` : ''}

            ${experiencia ? `
            <div style="margin-bottom: 25px !important; page-break-inside: avoid !important;">
                <h2 style="font-size: 14px !important; border-left: 4px solid #000000 !important; padding-left: 10px !important; text-transform: uppercase !important; margin: 0 0 10px 0 !important; color: #000000 !important; font-weight: bold !important; letter-spacing: 0.5px !important;">Experiência Profissional</h2>
                <p style="white-space: pre-line !important; font-size: 13px !important; color: #222222 !important; margin: 0 !important; padding-left: 14px !important; line-height: 1.6 !important;">${experiencia}</p>
            </div>
            ` : ''}

            ${habilidades ? `
            <div style="margin-bottom: 25px !important; page-break-inside: avoid !important;">
                <h2 style="font-size: 14px !important; border-left: 4px solid #000000 !important; padding-left: 10px !important; text-transform: uppercase !important; margin: 0 0 10px 0 !important; color: #000000 !important; font-weight: bold !important; letter-spacing: 0.5px !important;">Habilidades</h2>
                <p style="white-space: pre-line !important; font-size: 13px !important; color: #222222 !important; margin: 0 !important; padding-left: 14px !important; line-height: 1.6 !important;">${habilidades}</p>
            </div>
            ` : ''}

        </div>
        
        <div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
            <button id="btnBaixar" onclick="baixarPDFComSeguranca()" style="padding: 15px 40px; font-size: 18px; background-color: #28a745; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.15); transition: 0.2s;">
                Salvar e Baixar em PDF
            </button>
        </div>
    `;

    areaCurriculo.scrollIntoView({ behavior: 'smooth' });
}

function baixarPDFComSeguranca() {
    const alvoPDF = document.getElementById('bloco-documento-pdf');
    if (!alvoPDF) {
        alert("Erro ao coletar o documento. Por favor, clique em Gerar novamente.");
        return;
    }

    const nomeUsuario = document.getElementById('nome')?.value.trim() || "Curriculo";
    const nomeLimpoDoArquivo = nomeUsuario.replace(/[^a-zA-Z0-9]/g, "_") + "_Curriculo.pdf";
    const posicaoAtualDoScroll = window.scrollY;
    window.scrollTo(0, 0);
    const configuracoes = {
        margin: [12, 12, 12, 12],
        filename: nomeLimpoDoArquivo,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true,
            backgroundColor: '#ffffff',
            scrollY: 0,
            scrollX: 0
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(configuracoes).from(alvoPDF).save().then(() => {
        window.scrollTo(0, posicaoAtualDoScroll);
    }).catch((erro) => {
        console.error("Falha no download:", erro);
        window.scrollTo(0, posicaoAtualDoScroll);
    });
}

function alternarModoEscuro() {
    document.body.classList.toggle('modo-escuro');
    const isEscuro = document.body.classList.contains('modo-escuro');
    localStorage.setItem('modoEscuro', isEscuro); 
    const btn = document.getElementById('btnModoEscuro');
    if (btn) btn.innerHTML = isEscuro ? "☀️" : "🌙";
}