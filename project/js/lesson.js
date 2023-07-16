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
	setInterval(() => {
		i++
		if (i > tabs.length - 1) {
			i = 0
		}
		hideTabContent()
		showTabContent(i)
	} ,3000)
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
