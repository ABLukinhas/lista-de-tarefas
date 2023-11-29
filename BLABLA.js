function clq() {
    task = document.getElementById("task").value
    nItem = document.createElement("li")
    nItem.textcontent = task
    document.getElementById("tarefas").appendChild(nItem)
}