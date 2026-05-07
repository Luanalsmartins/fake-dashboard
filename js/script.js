const entrar = document.querySelector('.btn-entrar')
const data = document.getElementById('data-atual')
const toggle = document.getElementById('toggle-theme')
const ctx = document.getElementById('grafico')


// Tela de login
if (entrar) {
    entrar.addEventListener('click', function(event) {
        event.preventDefault()

        window.location.href = 'dashboard.html'
    })
}

// Data de hoje no Dashboard
if (data) {
    const hoje = new Date()
    
    data.innerHTML = hoje.toLocaleDateString('pt-BR')
}

// Dark mode 
if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark')
    })
}

// Gráfico
if (ctx) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
            datasets: [
                {
                    label: 'Receitas',
                    data: [5000, 6000, 5500, 7000, 8000],
                    backgroundColor: '#e1ffe1'
                },
                {
                    label: 'Despesas',
                    data: [3000, 3500, 4000, 4500, 5000],
                    backgroundColor: '#ffd1d1'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            title: {
                display: true,
                text: 'Receitas x Despesas'
            },
            scales: {
                y: {
                    grid: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
            
        }
    })
}