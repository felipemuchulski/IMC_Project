export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.screen_two .title span'),
    btnClose: document.querySelector('.screen_two button.close'),
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
    if(event.key === 'Escape') {
        Modal.close();
    }
}
