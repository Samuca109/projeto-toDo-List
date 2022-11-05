const toDoList = []
const ul = document.querySelector('#lista')



const form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const inputValue = document.querySelector('#input').value
    if(inputValue){
    
        adicionar(inputValue)
    }
    document.querySelector('#input').focus()
    document.querySelector('#input').value = ""
})



const adicionar = (text) => {
  
    /*
     * O createElement cria e o appendChild adiciona        
     *  O classLista.add() é para adicionar uma classe ao botão 
        * ul esta global na segunda linha
     */



    const li = document.createElement('li')
    ul.appendChild(li)

    const h3 = document.createElement("h3")
    h3.innerText = text
    h3.classList.add('h3')
    li.appendChild(h3)

    const botaoE = document.createElement('button')
    botaoE.innerHTML = '✏'
    botaoE.classList.add('botao-editar')
    li.appendChild(botaoE)

    const botaoR = document.createElement('button')
    botaoR.classList.add('botao-excluir')
    botaoR.innerHTML = '❌'
    li.appendChild(botaoR)

    const botaoF = document.createElement('button')
    botaoF.classList.add('botao-riscado')
    botaoF.innerHTML = 'FEITO'
    li.appendChild(botaoF) 

}



document.addEventListener('click', (e) => {

    /*
     * o target é uma propriedade de js que pega o elemento principal
     * Consegue ja ver no conole.log sem o list ul no caso o elemento pai ele serve para mostrar no html
     * o elementoClick tem que receber o li para poder remover no exato que voce clicar
     * o closest apenas localiza de outra forma
     */

    const elementoClick = e.target
    const li = elementoClick.closest("li")
    const text = elementoClick.closest("h3")
    let editar;

    /* função remover*/ 
    if(elementoClick.classList.contains("botao-excluir")){
       li.remove()
    }

    /* Função finalizada*/
    if(elementoClick.classList.contains("botao-riscado")){
        text.classList.toggle("done")
    }

    /*funçao editar*/
        if(elementoClick.classList.contains("botao-editar")){
            li.innerHTML += ` 
                <form id="form2">
                <input type="text" id="input2">
                <button type="submit" id="botao_edit2">  ✅ </button>
                </button> 
                </form>
            `
            editInput()
        }

})

function editInput(){

    const input2 = document.querySelector('#input2').value
    const li = document.querySelector('li')

    if(li){
        li.innerHTML = input2
    }       
     
}