const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModal = document.querySelector('.modal_close')

const openModal = () => {
	modal.style.display = 'block'
	document.body.style.overflow = 'hidden'
}

const closeModalBtn = () => {
	modal.style.display = 'none'
	document.body.style.overflow = ''
}

setTimeout(openModal, 10000)

let ModalOpen = false;
window.addEventListener('scroll', () => {
	const scrollPosition = window.scrollY;
	const documentHeight = window.innerHeight;
	const clientHeight = document.body.clientHeight;
	const bottomThreshold = clientHeight - documentHeight - 0;
	if (scrollPosition >= bottomThreshold && !ModalOpen) {
		openModal();
		ModalOpen = true;
	}
});

modalTrigger.onclick = () => openModal()
closeModal.onclick = () => closeModalBtn()
modal.onclick = (event) => event.target === modal && closeModalBtn()

// Post Data

const form = document.querySelector('form')

const postData = () => {
	form.addEventListener('submit', (event) => {
		event.preventDefault()
		const request = new XMLHttpRequest()
		request.open("POST", "server.php")
		request.setRequestHeader('Content-type', 'application/json')

		const formData = new formData(form)
		const obj = {}
		formData.forEach(item, i => {
			obj[i] = item
		});
		const json = 

		request.send()
	})
}

postData(form)