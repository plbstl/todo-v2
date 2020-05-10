const add = document.querySelector('#add'),
	list = document.querySelector('.list'),
	newTodo = document.querySelector('#add input'),
	searchBox = document.querySelector('#search input'),
	search = document.querySelector('#search'),
	todo = document.querySelector('.todo')

//	ADD TODO FUNCTION
const addTodo = todo => {
	const html = `<li class="todo mx-1 my-3 p-2"> ${todo} </li>`
	list.innerHTML += html
}

//	SEARCH TODO FUNCTION
const filterTodos = term => {
	// when they dont match
	Array.from(list.children)
		.filter(todo => !todo.textContent.toLowerCase().includes(term))
		.forEach(result => result.classList.add('d-none'))

	// when they do match
	Array.from(list.children)
		.filter(todo => todo.textContent.toLowerCase().includes(term))
		.forEach(result => result.classList.remove('d-none'))

	// when there is no match
	if (Array.from(list.children).filter(child => !child.classList.contains('d-none')).length === 0) {
		document.querySelector('.no-todo').classList.remove('d-none')
	} // 'no todo found' disappears
	else {
		document.querySelector('.no-todo').classList.add('d-none')
	}
}

// search todo
search.addEventListener('submit', e => e.preventDefault())
searchBox.addEventListener('keyup', () => {
	const term = searchBox.value.trim().toLowerCase()
	filterTodos(term)
})

// add todo
add.addEventListener('submit', e => {
	e.preventDefault()
	addTodo(newTodo.value)
	add.reset()
})

// scroll to top and bottom
document.querySelector('span.scroll-to-top').addEventListener('click', () => scrollTo(0,0))
document.querySelector('span.scroll-to-bottom').addEventListener('click', () => scrollTo(0, 10000000))

// hide and unhide the list
document.querySelector('#toggle').addEventListener('click', () => document.querySelector('section').classList.toggle('d-none'))

// exit intro screen
setTimeout(() => {
	document.querySelector('main').removeAttribute('class')
}, 3000)