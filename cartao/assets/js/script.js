document.addEventListener('DOMContentLoaded', function() {
    // Inicializar QR Code
    generateQRCode();
    
    // Adicionar evento ao botão de salvar contato
    document.getElementById('save-contact').addEventListener('click', function() {
        downloadVCard();
    });
    
    // Adicionar animações aos elementos
    addAnimations();
});

/**
 * Gera o QR Code com o link para o cartão digital
 */
function generateQRCode() {
    const qrcodeContainer = document.getElementById('qrcode');
    
    if (qrcodeContainer) {
        // Limpar conteúdo anterior, se houver
        qrcodeContainer.innerHTML = '';
        
        // Obter a URL atual para o QR Code
        const currentUrl = window.location.href;
        
        // Criar o QR Code
        new QRCode(qrcodeContainer, {
            text: currentUrl,
            width: 128,
            height: 128,
            colorDark: '#1C1C1C',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}

/**
 * Cria e faz o download do arquivo VCard (.vcf)
 */
function downloadVCard() {
    // Dados da empresa para o VCard
    const companyName = 'Meireles Assessoria Contábil';
    const phone = '+5500000000000'; // Substitua pelo número real
    const email = 'contato@meirelescontabil.com.br';
    const website = 'https://www.meirelescontabil.com.br';
    const address = 'Endereço da Empresa'; // Substitua pelo endereço real
    
    // Criar conteúdo do VCard
    const vCardContent = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${companyName}`,
        `ORG:${companyName}`,
        `TEL;TYPE=WORK,VOICE:${phone}`,
        `EMAIL;TYPE=WORK:${email}`,
        `URL:${website}`,
        `ADR;TYPE=WORK:;;${address}`,
        'END:VCARD'
    ].join('\n');
    
    // Criar o arquivo para download
    const blob = new Blob([vCardContent], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    
    // Criar link de download e clicar automaticamente
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'meireles_contabil.vcf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    // Limpar
    setTimeout(() => {
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
    }, 100);
    
    // Feedback visual
    showToast('Contato salvo com sucesso!');
}

/**
 * Adiciona animações aos elementos da página
 */
function addAnimations() {
    // Animação para o logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        logo.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

/**
 * Exibe uma mensagem toast na tela
 * @param {string} message - Mensagem a ser exibida
 */
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(function() {
            toast.classList.remove('show');
        }, 3000);
    }
}
    // As animações já estão definidas no CSS com delays

/**
 * Exibe uma mensagem toast
 * @param {string} message - Mensagem a ser exibida
 */
function showToast(message) {
    // Verificar se já existe um toast
    let toast = document.querySelector('.toast');
    
    // Se não existir, criar um novo
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
        
        // Estilizar o toast
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = 'rgba(28, 28, 28, 0.9)';
        toast.style.color = '#FFFFFF';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '50px';
        toast.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        toast.style.zIndex = '1000';
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
    }
    
    // Definir a mensagem e exibir o toast
    toast.textContent = message;
    toast.style.opacity = '1';
    
    // Esconder o toast após 3 segundos
    setTimeout(() => {
        toast.style.opacity = '0';
        
        // Remover o toast do DOM após a animação
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Detectar quando a página é carregada via compartilhamento
window.addEventListener('load', function() {
    // Verificar se há parâmetros na URL que indicam compartilhamento
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('shared')) {
        // Mostrar uma mensagem de boas-vindas personalizada
        showToast('Bem-vindo ao cartão digital da Meireles Contábil!');
    }
});