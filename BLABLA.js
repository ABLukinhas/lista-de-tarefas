let task = document.getElementById("task");
let tarefas = document.getElementById("tarefas");
let finalizadas = document.getElementById("finalizadas");

function clq() {
    let nItem = document.createElement("li") 

    //criei um elemento

    nItem.textContent = task.value;

    //botei o valor de task dentro do elemento novo

    tarefas.appendChild(nItem);

     //botei o elemento novo dentro da ul com id tarefa

    task.value = "";

    // deixa o valor de task vazio depois de usar

    task.focus(); 

    // sempre foca logo apos escrever

    let nItem2 = document.createElement("button") 

    // criei outro elemento

    tarefas.appendChild(nItem2)
    
     // botei dentro da ul com o id tarefas
} 
task.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        clq();
    }
})