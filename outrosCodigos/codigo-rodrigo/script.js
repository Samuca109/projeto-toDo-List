let toDoList = []

	//A funçao /*updateToDoList*/ é criada no final 
get("#form").addEventListener("submit", function(e){
	e.preventDefault()
	const inputValue = get("#input").value
	
	if(inputValue.length){
		// Aqui mostra o caminho de onde ele vai ficar guardado
		toDoList.push({
			id: toDoList.length,
			name: inputValue
		})
		// Limpa automaticamente o texto quando sobe ele pra lista
		get("#input").value = ""
		updateToDoList()
	}
})

function get(element){
	return document.querySelector(element)
}

		/*Apagar*/
//Aqui é onde limpa,onde apaga e onde adiciona tambem 
function cleanToDoList(){
	document.querySelector("#toDoList").innerHTML = ''
}

//proibindo palavras repetidas 
function removeToDo(element){
	//Aqui é tambem para a pessoa nao colocar as mesmas palavras repetidas  
	element.addEventListener("click", function(){
		const dataId = element.parentElement.getAttribute("data-id") // aqui é so o id da div que aparece no update toDoList
		toDoList = toDoList.filter(function(item){
			return item.id != dataId
		})

		updateToDoList()			
	})
}

//Aqui adiciona em lista (codigo abaixo), aqui é so como vai aparecer no html,por isso sempre chama essa funçao
function updateToDoList(){

	cleanToDoList()

	toDoList.forEach(function(item){
		document.querySelector("#toDoList").innerHTML += // aqui é o removeTodo
		`
			<li class="flex justify-between w-full border items-center border-radius p-1 mb-1">
				${item.name}
				<div data-id="${item.id}">
					<span class="removeToDo cuor-pointer">❌</span>
				</button>
			</li>
		`
		// usar o span pra agrupamento de linhas e textos
	})
	
	//Aqui remove 
	// Aqui localiza o removeToDo do span da class
	// Vai executar a funçao removetodo para cada elemento do span
	document.querySelectorAll(".removeToDo").forEach(function(element){
		removeToDo(element)
	})
}
// Pode-se guardar dentro da funçao simplesmente nao precisa estar em uma variavel dependendo da situaçao,usando o document

//Bisu criar funçoes diferentes e chama-las em outras funçoes



