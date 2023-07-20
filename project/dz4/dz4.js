const wrapper = document.querySelector('.wrapper') 
const request = new XMLHttpRequest()
request.open('GET', '../json/user.json')
request.setRequestHeader('Content-type', 'aplication/json')
request.send()
request.addEventListener('load', () => {
	const data = JSON.parse(request.response)
	data.forEach((people) => {
		const cardPeople = document.createElement('div')
		cardPeople.setAttribute('class', 'card')
		cardPeople.innerHTML = `
		<h2>${people.name}</h2>
		<span>${people.age}</span>
		`
		wrapper.appendChild(cardPeople)
	})
})