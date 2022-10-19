let toDoList = []

// Adicionar
let form = document.getElementById('form')
form.addEventListener('submit', function(e){
  
    e.preventDefault()

    let input = document.getElementById('input').value 

    if(input.length){
        toDoList.push({
            res1: input,
            res2: toDoList.length
        })

        document.querySelector('#input').value = ""
        document.querySelector('#input').focus()
        mostrarHtml()
    } 
    const guardaLength = `${item.res2}`
})

// Funçao de conexao para sempre adicionar
function conexao(){
    let conexao = document.getElementById('lista')
    conexao.innerHTML = ''
}


//Mostrar no html
function mostrarHtml(){

    toDoList.forEach(function(item){
        document.querySelector('#lista').innerHTML += `
        <li id="li" class="flex justify-between w-full border items-center border-radius p-1 mb-1" > 
        <div id="dados">
        ${item.res1}
                   <button id="botaojs">❌
                     </button>
         </div>        
        </li>
    `
    const botao = document.querySelector("#botaojs")
    const li = document.querySelector('#li')
    const div = document.querySelector('#dados')
      botao.addEventListener('click', function(){
        li.remove()
    }) 
     })

        }