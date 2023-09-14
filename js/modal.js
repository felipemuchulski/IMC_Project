export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal-wrapper h2.title'),
    btnClose: document.querySelector('.modal-wrapper button.close'),
    open(){
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open');
    },

}

Modal.btnClose.onclick = () => {
    Modal.close();
}

window.addEventListener('keydown', handleKeydown);

function handleKeydown (event) {
    if(event === 'Escape') {
        Modal.close();
    }
}
