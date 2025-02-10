document.getElementById("add-button").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");

        // Créer un élément de liste
        const listItem = document.createElement("li");

        // Créer le texte de la tâche
        listItem.textContent = taskText;

        // Créer un bouton pour supprimer la tâche
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        // Vider le champ de saisie
        taskInput.value = "";
    }
}
