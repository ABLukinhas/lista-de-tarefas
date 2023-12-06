let task = document.getElementById("task");
let tarefas = document.getElementById("tarefas");
let finalizadas = document.getElementById("finalizadas");

function clq() {
    let nItem = document.createElement("li")  //criei um elemento

    nItem.textContent = task.value; //botei o valor de task dentro do elemento novo

    tarefas.appendChild(nItem); //botei o elemento novo dentro da ul com id tarefa

    task.value = ""; // deixa o valor de task vazio depois de usar

    task.focus();   // sempre foca logo apos escrever

    let nItem2 = document.createElement("button")  // criei outro elemento

    tarefas.appendChild(nItem2)   // botei dentro da ul com o id tarefas


    // dei nome e classe  
    nItem2.innerHTML = "finalizar";
    nItem2.className = "BTfinalizar"
    
    nItem.appendChild(nItem2)
    
    }
    function finalizarTarefa(tarefa) {
        tarefa.removeChild(tarefa.childNodes[1]); // Vai remover o botão de finalizar a tarefa
        document.getElementById("finalizadas").appendChild(tarefa); // vai finalizar as tarefas pendentes e leva-las para a parte de excluir a tarefa
        nItem2.addEventListener("click", function() {
            finalizarTarefa(task); // Estou adicionando um evento de click no botão
        });
    }
    function excluirTarefa(tarefa) {
        tarefa.remove(); // Vai remover a tarefa de finalizadas
    }

 




task.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        clq();
    }
})