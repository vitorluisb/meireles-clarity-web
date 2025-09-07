/**
 * Efeito de fundo animado para o cartão digital
 * Este script cria e anima formas no fundo da página
 */

document.addEventListener('DOMContentLoaded', function() {
    // Criar o container para o efeito de fundo animado dentro do card
    const mainCard = document.querySelector('.main-card');
    
    if (mainCard && !mainCard.querySelector('.animated-bg')) {
        // Remover o container existente no body se houver
        const oldBg = document.querySelector('body > .animated-bg');
        if (oldBg) {
            oldBg.remove();
        }
        
        // Criar novo container dentro do card
        const animatedBg = document.createElement('div');
        animatedBg.className = 'animated-bg';
        
        // Inserir como primeiro filho do card para ficar atrás do conteúdo
        mainCard.insertBefore(animatedBg, mainCard.firstChild);
        
        // Criar formas animadas
        createAnimatedShapes(animatedBg);
    }
    
    // Inicializar o efeito de mouse parallax
    initMouseParallax();
});

/**
 * Cria formas animadas no fundo
 * @param {HTMLElement} container - O elemento container para as formas
 */
function createAnimatedShapes(container) {
    // Número de formas a serem criadas
    const numShapes = 5;
    
    // Cores possíveis para as formas (tons de laranja/vermelho)
    const colors = [
        'rgba(255, 107, 53, 0.15)',
        'rgba(255, 145, 77, 0.12)',
        'rgba(255, 87, 34, 0.1)',
        'rgba(255, 61, 0, 0.08)',
        'rgba(255, 183, 77, 0.1)'
    ];
    
    // Criar as formas
    for (let i = 0; i < numShapes; i++) {
        const shape = document.createElement('div');
        shape.className = 'animated-bg-shape';
        
        // Tamanho menor para caber dentro do card (entre 50px e 150px)
        const size = Math.floor(Math.random() * 100) + 50;
        
        // Posição aleatória dentro do card
        const posX = Math.floor(Math.random() * 80) + 10; // 10% a 90%
        const posY = Math.floor(Math.random() * 80) + 10; // 10% a 90%
        
        // Estilo da forma
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${posX}%`;
        shape.style.top = `${posY}%`;
        shape.style.background = colors[i % colors.length];
        
        // Duração da animação mais rápida para o card (entre 10s e 20s)
        const duration = Math.floor(Math.random() * 10) + 10;
        shape.style.animationDuration = `${duration}s`;
        
        // Atraso da animação aleatório
        const delay = Math.floor(Math.random() * 3);
        shape.style.animationDelay = `${delay}s`;
        
        // Adicionar a forma ao container
        container.appendChild(shape);
    }
}

/**
 * Inicializa o efeito parallax com o movimento do mouse
 */
function initMouseParallax() {
    const mainCard = document.querySelector('.main-card');
    const shapes = document.querySelectorAll('.main-card .animated-bg-shape');
    const container = document.querySelector('.main-card .animated-bg');
    
    if (!container || shapes.length === 0 || !mainCard) return;
    
    // Evento de movimento do mouse sobre o card
    mainCard.addEventListener('mousemove', function(e) {
        // Obter as dimensões e posição do card
        const rect = mainCard.getBoundingClientRect();
        
        // Calcular a posição relativa do mouse dentro do card (0-1)
        const mouseX = (e.clientX - rect.left) / rect.width;
        const mouseY = (e.clientY - rect.top) / rect.height;
        
        shapes.forEach((shape, index) => {
            // Fator de movimento diferente para cada forma (menor para não sair do card)
            const moveFactor = (index + 1) * 5;
            
            // Calcular a nova posição baseada no movimento do mouse
            const moveX = (mouseX - 0.5) * moveFactor;
            const moveY = (mouseY - 0.5) * moveFactor;
            
            // Aplicar a transformação
            shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
    
    // Resetar a posição quando o mouse sai do card
    mainCard.addEventListener('mouseleave', function() {
        shapes.forEach(shape => {
            shape.style.transform = 'translate(0, 0)';
        });
    });
}

// Adicionar efeito de partículas flutuantes
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o elemento particles-js existe
    if (document.getElementById('particles-js')) {
        // Configurar as partículas se a biblioteca particles.js estiver disponível
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 30,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#FF6B35'
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: 0.3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#FF6B35',
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: true,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 0.5
                            }
                        },
                        push: {
                            particles_nb: 3
                        }
                    }
                },
                retina_detect: true
            });
        }
    }
});