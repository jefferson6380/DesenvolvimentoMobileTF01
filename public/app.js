

document.addEventListener("DOMContentLoaded", async () => {

    const toDos = [
        "Estudar HTML semântico",
        "Praticar CSS básico",
        "Revisar seletores CSS",
        "Montar página com Flexbox"
    ];

    const buttonElement = document.getElementsByClassName("btn")[0];
    const toDoListElement = document.getElementById("list-wrapper");

    //criando <ul></ul> para armazenar as <li></li>
    const ulElement = document.createElement("ul")
    toDoListElement.appendChild(ulElement)//adicionando ul como filho da section

    //função para criar botão de excluir, o argumento da função será o texto do toDo ou do input
    function botaoExcluir (textToDo){
        const liElement = document.createElement("li")
        liElement.innerText = textToDo
        
        const buttonDeleteElement = document.createElement("button")
        buttonDeleteElement.innerHTML = '<strong>X</strong>'

        buttonDeleteElement.addEventListener("click", (event) =>{
            liElement.remove();
        });

        liElement.append(" ", buttonDeleteElement)

        ulElement.appendChild(liElement)
    }

    //loop para percorrer a lista toDos
    toDos.forEach(toDo => {
        
        botaoExcluir(toDo) // adiciona um botao excluir para cada todo
    })
   

    //validando campo input
    buttonElement.addEventListener("click", (event) => {
        event.preventDefault();

        const inputElement = document.getElementById("list-add")
        const valueInputElement = inputElement.value

        //se verdadeiro, o if vai parar a função addEventListener no return
        if(valueInputElement === "") {
            return;
        }

        botaoExcluir(valueInputElement) //passa o value do input como argumento da função
        inputElement.value = "" //limpa o campo do input
    });
});