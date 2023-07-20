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
	if (positionX < 446 && positionY === 0) {
		positionX += 1
		childBlock.style.left = `${positionX}px`
		setTimeout(move), 1
	} else if (positionX === 446 && positionY < 446) {
		positionY += 1
		childBlock.style.top = `${positionY}px`
		setTimeout(move), 1
	} else if (positionX > 0 && positionY === 446) {
		positionX -= 1
		childBlock.style.left = `${positionX}px`
		setTimeout(move), 1
	} else if (positionX === 0 && positionY > 0) {
		positionY -= 1
		childBlock.style.top = `${positionY}px`
		setTimeout(move), 1
	}
}

move()

// STOPWATH
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
const seconds = document.querySelector('#seconds')

let second = 0
let interval

function startTimer() {
	second++
	seconds.innerHTML = `${second}`
}

start.onclick = () => {
	clearInterval(interval)
	interval = setInterval(startTimer, 1000)
}
stop.onclick = () => {
	clearInterval(interval)
}
reset.onclick = () => {
	clearInterval(interval)
	seconds.innerHTML = 0
	second = 0
}

// ДЗ 4, ЧАСТЬ 2
const request = new XMLHttpRequest()
request.open('GET', '../json/user.json')
request.setRequestHeader('Content-type', 'aplication/json')
request.send()
request.addEventListener('load', () => {
	const data = JSON.parse(request.response)
	data.forEach(obj => {
		console.log(obj);
	});
})

