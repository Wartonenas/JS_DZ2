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
const request = async () => {
	const response = await fetch('../json/user.json')
	const data = await response.json() 
	data.forEach(obj => {
		console.log(obj);
	})
}

request()
// Convertor
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')
const yuan = document.querySelector('#yuan')
const yen = document.querySelector('#yen')

const convert = async (input, conc1, conc2, conc3, conc4) => {
	input.oninput = async () => {
		try {
			const response = await fetch(`../json/convertor.json`)
			const data = await response.json()
			if (input === som) {
				conc1.value = (input.value * data.somUsd).toFixed(2);
				conc2.value = (input.value * data.somEuro).toFixed(2)
				conc3.value = (input.value * data.somYuan).toFixed(2)
				conc4.value = (input.value * data.somYen).toFixed(2)
			} else if (input === usd) {
				conc1.value = (input.value * data.usdSom).toFixed(2);
				conc2.value = (input.value * data.usdEuro).toFixed(2)
				conc3.value = (input.value * data.usdYuan).toFixed(2)
				conc4.value = (input.value * data.usdYen).toFixed(2)
			} else if (input === euro) {
				conc1.value = (input.value * data.euroSom).toFixed(2);
				conc2.value = (input.value * data.euroUsd).toFixed(2)
				conc3.value = (input.value * data.euroYuan).toFixed(2)
				conc4.value = (input.value * data.euroYen).toFixed(2)
			} else if (input === yuan) {
				conc1.value = (input.value * data.yuanSom).toFixed(2);
				conc2.value = (input.value * data.yuanUsd).toFixed(2)
				conc3.value = (input.value * data.yuanEuro).toFixed(2)
				conc4.value = (input.value * data.yuanYen).toFixed(2)
			} else if (input === yen) {
				conc1.value = (input.value * data.yenSom).toFixed(2);
				conc2.value = (input.value * data.yenUsd).toFixed(2)
				conc3.value = (input.value * data.yenEuro).toFixed(2)
				conc4.value = (input.value * data.yenYuan).toFixed(2)
			}
			if (input.value === '') {
				conc1.value = ''
				conc2.value = ''
				conc3.value = ''
				conc4.value = ''
			}
		} catch (e) {
			console.error('Виноват JS рараб');
		}
	}
}

convert(som, usd, euro, yuan, yen)
convert(usd, som, euro, yuan, yen)
convert(euro, som, usd, yuan, yen)
convert(yuan, som, usd, euro, yen)
convert(yen, som, usd, euro, yuan)

// Card Switcher
const card = document.querySelector('.card')
const btnNext = document.querySelector('#next')
const btnPrev = document.querySelector('#prev')
let count = 1

const switcher = async () => {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
		const data = await response.json()
		card.innerHTML = `
				<p>${data.title || 1}</p>
				<p style="color:${data.completed ? 'green' : 'red'}">${data.completed}</p>
				<span>${data.id}</span>
				`
	} catch (e) {
		console.error('Виноват JS рараб');
	}
}

btnNext.onclick = () => {
	count++
	if (count === 201) {
		count = 1
	}
	switcher()
}
btnPrev.onclick = () => {
	count--
	if (count === 0) {
		count = 200
	}
	switcher()
}

switcher(count)

const postsLog = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await response.json()
		console.log(data);
	} catch (e) {
		console.error('Виноват JS рараб');
	}
}
postsLog()