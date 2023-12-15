const input = document.querySelector('#fruit');
const suggestionsContainer = document.querySelector('.suggestions-container');



const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	let lowerStr = str.toLowerCase()
	fruit.filter((val) =>{
		if(val.toLowerCase().indexOf(lowerStr) != -1)
		results.push(val)
		})
	// TODO
	return results;
}



function searchHandler(e) {
	const inputVal = e.target.value
	const results = search(inputVal)
	showSuggestions(results,inputVal)
	
}

function showSuggestions(results, inputVal){
	if(suggestionsContainer.firstElementChild != null){
		suggestionsContainer.firstElementChild.remove()
	}
	const ul = document.createElement('ul')
	ul.classList.add('suggestions-menu')
	suggestionsContainer.append(ul)
	if(inputVal.length > 0){
	results.forEach((val)=>{
		const li = document.createElement('li')
		li.innerText = val
		li.classList.add('suggestions')
		ul.appendChild(li)
	}) 
}
	
}

function useSuggestion(e) {
	let fruitClicked = e.target
	input.value = fruitClicked.innerText
	suggestionsContainer.firstElementChild.remove()
	

	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestionsContainer.addEventListener('click', useSuggestion);

