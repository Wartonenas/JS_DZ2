// GMAIL CHECKER
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gimalResult = document.querySelector('#gmail_result')
const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g

gmailButton.onclick = () => {
	if (regExp.test(gmailInput.value)) {
		gimalResult.innerHTML = 'OK' 
		gimalResult.style.color = 'green'
	} else {
		gimalResult.innerHTML = 'NOT OK' 
		gimalResult.style.color = 'red'
	}
}

// MOVE BLOCK
const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
	if (positionX <= 446 & positionY === 0) {
		positionX += 1
		childBlock.style.left = `${positionX}px`
		setTimeout(move), 1
	}
}

move()
