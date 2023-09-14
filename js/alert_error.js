export const AlertError = {
    alerta: document.querySelector('.alert-error'),
    open(){
        AlertError.alerta.classList.add(`open`)
    },
    close() {
        AlertError.alerta.classList.remove('open')
    }
}
