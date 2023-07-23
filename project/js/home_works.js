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

// Convertot

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')
const yuan = document.querySelector('#yuan')
const yen = document.querySelector('#yen')

const convert = (input, conc1, conc2, conc3, conc4) => {
	input.oninput = () => {
		const request = new XMLHttpRequest()
		request.open('GET', '../json/convertor.json')
		request.setRequestHeader('Content-type', 'application/json')
		request.send()
		request.onload = () => {
			const response = JSON.parse(request.response)
			if (input === som) {
				conc1.value = (input.value * response.somUsd).toFixed(4);
				conc2.value = (input.value * response.somEuro).toFixed(4)
				conc3.value = (input.value * response.somYuan).toFixed(4)
				conc4.value = (input.value * response.somYen).toFixed(4)
			} else if (input === usd) {
				conc1.value = (input.value * response.usdSom).toFixed(4);
				conc2.value = (input.value * response.usdEuro).toFixed(4)
				conc3.value = (input.value * response.usdYuan).toFixed(4)
				conc4.value = (input.value * response.usdYen).toFixed(4)
			} else if (input === euro) {
				conc1.value = (input.value * response.euroSom).toFixed(4);
				conc2.value = (input.value * response.euroUsd).toFixed(4)
				conc3.value = (input.value * response.euroYuan).toFixed(4)
				conc4.value = (input.value * response.euroYen).toFixed(4)
			} else if (input === yuan) {
				conc1.value = (input.value * response.yuanSom).toFixed(4);
				conc2.value = (input.value * response.yuanUsd).toFixed(4)
				conc3.value = (input.value * response.yuanEuro).toFixed(4)
				conc4.value = (input.value * response.yuanYen).toFixed(4)
			} else if (input === yen) {
				conc1.value = (input.value * response.yenSom).toFixed(4);
				conc2.value = (input.value * response.yenUsd).toFixed(4)
				conc3.value = (input.value * response.yenEuro).toFixed(4)
				conc4.value = (input.value * response.yenYuan).toFixed(4)
			}
			if (input.value === '') {
				conc1.value = ''
				conc2.value = ''
				conc3.value = ''
				conc4.value = ''
			}
		}
	}
}

convert(som, usd, euro, yuan, yen)
convert(usd, som, euro, yuan, yen)
convert(euro, som, usd, yuan, yen)
convert(yuan, som, usd, euro, yen)
convert(yen, som, usd, euro, yuan)
