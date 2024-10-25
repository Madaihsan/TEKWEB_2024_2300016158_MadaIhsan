document.getElementById('background-color-1').addEventListener('change', function() {
    const selectedColor = this.value;
    document.body.style.backgroundColor = selectedColor;
});


document.getElementById('font-size-slider').addEventListener('input', function(event) {
    const allText = document.querySelectorAll('body, body *');
    allText.forEach(function(element) {
        element.style.fontSize = event.target.value + 'px';
    });
});

document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


document.getElementById('change-font').addEventListener('change', function(event) {
    const allText = document.querySelectorAll('body, body *');
    allText.forEach(function(element) {
        element.style.fontFamily = event.target.value;
    });
});

const projectList = document.getElementById('project-list');
const addProjectButton = document.getElementById('add-project');

// Function to create a new list item with Edit and Delete buttons
function createListItem(projectName, projectUrl) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${projectUrl}" target="_blank">${projectName}</a> <button class="edit">Edit</button> <button class="delete">Delete</button>`;

    // Add edit functionality
    li.querySelector('.edit').addEventListener('click', function() {
        const newName = prompt('Edit project name:', projectName);
        if (newName) {
            li.querySelector('a').textContent = newName;
        }
        const newUrl = prompt('Edit project URL:', projectUrl);
        if (newUrl) {
            li.querySelector('a').setAttribute('href', newUrl);
        }
    });

    // Add delete functionality
    li.querySelector('.delete').addEventListener('click', function() {
        li.remove();
    });

    return li;
}

// Event listener for Add Project button
addProjectButton.addEventListener('click', function() {
    const newProjectName = prompt('Enter new project name:');
    if (newProjectName) {
        const newProjectUrl = prompt('Enter project URL:');
        if (newProjectUrl) {
            const newProject = createListItem(newProjectName, newProjectUrl);
            projectList.appendChild(newProject);
        }
    }
});

// Attach edit and delete events to existing list items
document.querySelectorAll('.Project ul li').forEach(li => {
    const projectName = li.querySelector('a').textContent.trim();
    const projectUrl = li.querySelector('a').getAttribute('href');

    // Edit functionality for existing items
    li.querySelector('.edit').addEventListener('click', function() {
        const newName = prompt('Edit project name:', projectName);
        if (newName) {
            li.querySelector('a').textContent = newName;
        }
        const newUrl = prompt('Edit project URL:', projectUrl);
        if (newUrl) {
            li.querySelector('a').setAttribute('href', newUrl);
        }
    });

    // Delete functionality for existing items
    li.querySelector('.delete').addEventListener('click', function() {
        li.remove();
    });
});
const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

addTodoButton.addEventListener('click', function() {
    const task = todoInput.value.trim();

    if (!task) {
        alert("Inputan tidak boleh kosong!"); // Tampilkan alert jika inputan kosong
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" class="check-task">
        <span>${task}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;

    // Menambahkan fungsi checklist
    li.querySelector('.check-task').addEventListener('change', function() {
        li.classList.toggle('completed'); // Tambah class completed untuk coret
    });

    // Menambahkan fungsi edit
    li.querySelector('.edit').addEventListener('click', function() {
        const newTask = prompt('Edit task:', task);
        if (newTask) {
            li.querySelector('span').textContent = newTask;
        }
    });

    // Menambahkan fungsi edit pada double-click
    li.querySelector('span').addEventListener('dblclick', function() {
        editTask(li.querySelector('span'));
    });

    // Menambahkan fungsi delete
    li.querySelector('.delete').addEventListener('click', function() {
        li.remove();
    });

    todoList.appendChild(li); // Menambahkan item baru ke daftar
    todoInput.value = ''; // Mengosongkan input setelah menambah tugas

    // Fungsi untuk mengedit tugas
    function editTask(element) {
    const currentTask = element.textContent; // Ambil teks saat ini
    const newTask = prompt('Edit task:', currentTask); // Tanyakan untuk nama tugas baru

    if (newTask && newTask.trim() !== '') { // Pastikan input tidak kosong
        element.textContent = newTask; // Update teks dengan tugas baru
    }
}
});

