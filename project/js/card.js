const URL = 'https://jsonplaceholder.typicode.com/posts'
const cardContain = document.querySelector('.contain')

const cardUse = async () => {
	try {
		const response = await fetch(URL)
		const data = await response.json()
		data.forEach(cardData => {
			const cardEl = document.createElement("div")
			cardEl.classList.add("card")
			const imageEl = document.createElement("img")
			imageEl.src = "../img/user.png"
			const titleEl = document.createElement("h2")
			titleEl.textContent = cardData.title
			const bodyEl = document.createElement("p")
			bodyEl.textContent = cardData.body
			cardEl.appendChild(imageEl)
			cardEl.appendChild(titleEl)
			cardEl.appendChild(bodyEl)
			cardContain.appendChild(cardEl)
		});
	} catch (e) {
		console.error('Виноват JS разраб');
	}
}

cardUse()

