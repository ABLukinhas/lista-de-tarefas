let task = document.getElementById("task");
let tarefas = document.getElementById("tarefas");
let finalizadas = document.getElementById("finalizadas");

function clq() {
    let nItem = document.createElement("li"); // criei um li
    nItem.textContent = task.value; // botei o valor do meu input dentro da li
    tarefas.appendChild(nItem); //botei o li que tem a task dentro do ul com o id tarefas

    let nItem2 = document.createElement("button"); // criei um button

    //dei nome e class pro button
    nItem2.innerHTML = "Finalizar";
    nItem2.className = "BTfinalizar";
    nItem.appendChild(nItem2);// botei o button dentro da li junto com tudo

    nItem2.addEventListener("click", function() { // dei uma funçao pra o click do button
        finalizarTarefa(nItem);
    });

    task.value = "";//para limpar o input depois de usar
    task.focus(); // para focar no input depois de usar
}

function finalizarTarefa(tarefa) {
    let button = tarefa.querySelector("button"); // ele vai achar o botao de finalizar
    button.remove(); // e vai remover logo depois de finalizar 

    let deleteButton = document.createElement("button"); // criei um botao

    // criei um nome uma class
    deleteButton.innerHTML = "Excluir";
    deleteButton.className = "BTexcluir";
    tarefa.appendChild(deleteButton); // botei o button de delete dentro do ul

    finalizadas.appendChild(tarefa); // tarefas dentro de finalizadas pra quando aperta finalizadas ficar so o botão de delete e a tarefa na ul

    deleteButton.addEventListener("click", function() {
        excluirTarefa(tarefa); // dei a funçao de click para o button
    });
}

function excluirTarefa(tarefa) {
    tarefa.remove();  // vai excluir a tarefa finalizada
}

task.addEventListener("keypress", (e) => {
    if (e.key === "Enter") { //   dando a ordem de  quando aperta "Enter" selecionar 
        clq();
    }
});
