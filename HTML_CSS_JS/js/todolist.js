document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const addButton = document.getElementById('add-button');
    const todolist = document.getElementById('todo-list');

    addButton.addEventListener('click', add);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            add();
        }
    });

    function add() {
        const inputValue = input.value.trim();

        if (inputValue !== '') {
            const li = document.createElement('li');
            li.textContent = inputValue;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Deletar";
            deleteButton.className = "delete";
            deleteButton.style.backgroundColor = "red";
            deleteButton.addEventListener('click', () => {
                todolist.removeChild(li);
            });

            li.appendChild(deleteButton);
            todolist.append(li);

            input.value = '';

            validaFormularia();
        }
    }

    function validaFormularia() {
        const radios = document.querySelectorAll('input[name="option"]');
        let radioChecked = false;

        radios.forEach((radio) => {
            if (radio.checked) {
                radioChecked = true;
            }
        });

        if (!radioChecked) {
            alert('Selecione todas as opções');
        }
    }
});
