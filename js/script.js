const entrar = document.querySelector('.btn-entrar')
const toggle = document.getElementById('toggle-theme')

if (entrar) {
    entrar.addEventListener('click', function(event) {
        event.preventDefault()

        window.location.href = 'dashboard.html'
    })
}


if(toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark')
    })
}