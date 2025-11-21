let tasks = [];
function addTask() {
    let name = document.getElementById("taskName").value;
    let deadline = document.getElementById("taskDeadline").value;
    let priority = document.getElementById("taskPriority").value;

    if (!name.trim() || !deadline) {
        alert("Nama tugas dan deadline harus diisi!");
        return;
    }

    tasks.push({
        name: name,
        deadline: deadline,
        priority: priority,
        done: false
    });

    document.getElementById("taskName").value = "";
    document.getElementById("taskDeadline").value = "";
    document.getElementById("taskPriority").value = "Medium";

    renderTasks();
}

function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((t, i) => {
        list.innerHTML += `
        <li class="${t.done ? 'done' : ''}">
            <span>${t.name} - ${t.deadline} - ${t.priority}</span>
            <div>
                <button onclick="toggleDone(${i})">✔</button>
                <button onclick="deleteTask(${i})" style="background:red">✖</button>
            </div>
        </li>`;
    });
}

function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function sortByDeadline() {
    tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    renderTasks();
}

function sortByPriority() {
    const order = { High: 1, Medium: 2, Low: 3 };
    tasks.sort((a, b) => order[a.priority] - order[b.priority]);
    renderTasks();
}

function getAiSuggestion() {
    let input = document.getElementById("aiInput").value;
    if (!input.trim()) {
        alert("Masukkan data tugas!");
        return;
    }

    // Placeholder sementara
    document.getElementById("aiResult").innerText =
        "(Contoh AI) Prioritaskan tugas dengan deadline terdekat dan tingkat prioritas tertinggi.";
}


