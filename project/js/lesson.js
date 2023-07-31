// REG EXP
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
	if (regExp.test(phoneInput.value)) {
		phoneResult.innerHTML = 'OK'
		phoneResult.style.color = 'green'
	} else {
		phoneResult.innerHTML = 'NOT OK'
		phoneResult.style.color = 'red'
	}
}

// TAB SLIDER
const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')
let interval
let index

const hideTabContent = () => {
	tabContent.forEach(i => {
		i.style.display = 'none'
	})
	tabs.forEach((i) => {
		i.classList.remove('tab_content_item_active')
	})
}

const showTabContent = (i = 0) => {
	tabContent[i].style.display = 'block'
	tabs[i].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent(index)

const tabAuto = (i = 0) => {
	if (interval) {
		clearInterval(interval)
	}
	interval = setInterval(() => {
		i++
		if (i > tabs.length - 1) {
			i = 0
		}
		hideTabContent()
		showTabContent(i)
	}, 3000)
}

tabsParent.onclick = (event) => {
	const targetElement = event.target
	if (targetElement.classList.contains('tab_content_item')) {
		tabs.forEach((tab, tabIndex) => {
			if (targetElement === tab) {
				hideTabContent()
				showTabContent(tabIndex)
			}
		})
	}
}

tabAuto(index)

// WEATHER REPORT
const cityName = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = 'e417df62e04d3b1b111abeab19cea714'

const citySearch = async () => {
	try {
		cityName.oninput = async (e) => {
			const response = await fetch(`${BASE_URL}?q=${cityName.value}&appid=${apiKey}`)
			const data = await response.json()
				city.innerHTML = data?.name || 'Город не найден...'
				temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + '&deg;C' : '...'
		}
	} catch (e) {
		console.error('Виноват JS рараб');
	}	
}

citySearch()