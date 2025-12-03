document.addEventListener('DOMContentLoaded', () => {
    // 1. Criar os botões dinamicamente no HTML
    const container = document.createElement('div');
    container.className = 'acessibilidade-container';
    
    container.innerHTML = `
        <button id="btn-aumentar" class="btn-acessibilidade" title="Aumentar Fonte">
            A+
        </button>
        <button id="btn-diminuir" class="btn-acessibilidade" title="Diminuir Fonte">
            A-
        </button>
    `;
    
    document.body.appendChild(container);

    // Recuperar preferência salva
    if (localStorage.getItem('altoContraste') === 'true') {
        document.body.classList.add('alto-contraste');
    }

    // 3. Lógica do Tamanho da Fonte
    let tamanhoAtual = 100; // Porcentagem
    const btnAumentar = document.getElementById('btn-aumentar');
    const btnDiminuir = document.getElementById('btn-diminuir');

    function atualizarFonte() {
        document.body.style.fontSize = `${tamanhoAtual}%`;
    }

    btnAumentar.addEventListener('click', () => {
        if (tamanhoAtual < 150) {
            tamanhoAtual += 10;
            atualizarFonte();
        }
    });

    btnDiminuir.addEventListener('click', () => {
        if (tamanhoAtual > 70) {
            tamanhoAtual -= 10;
            atualizarFonte();
        }
    });
});