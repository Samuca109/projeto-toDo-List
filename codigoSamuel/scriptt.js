let toDoList = []

let button = document.getElementById('button')

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
})

// Funçao de conexao para sempre adicionar
function conexao(){
    let conexao = document.getElementById('lista')
    conexao.innerHTML = ''
}


//Mostrar no html
function mostrarHtml(){

    conexao()

    toDoList.forEach(function(item){
        document.querySelector('#lista').innerHTML += `
        <li id="li"> 
        <div>
        ${item.res2} 
        ${item.res1}

                <button class="botaojs">❌
                 </button>
            
        </li>
    `
    })
}

        //        REMOVER    */  

function limparToDoList(){
    let limpar = document.querySelector('#lista')
    limpar.innerHTML = ''
}

const botao = document.querySelector('.botaojs')
botao.addEventListener('click', function(e){
    e.preventDefault()
    botao.classList = 
    window.alert('deu certo')
})

// botao remover
/*const botaojs = document.querySelector('.botaojs')
botaojs.addEventListener('click', () => {
    const ul = document.querySelector('#lista')
    if(ul.classList){
        ul.remove()
    }
})*/

        


