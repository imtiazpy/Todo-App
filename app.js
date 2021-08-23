let doneCount = 0;

function addTask(taskInput, taskContainer) {
    const taskList = document.getElementById(taskContainer);
    const task = document.getElementById(taskInput);
    const div = document.createElement('div');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    p.innerText = task.value;
    btn.innerText = 'Done';

    btn.classList.add('border', 'border-green-600', 'bg-green-600', 'text-black', 'rounded-lg', 'px-4', 'w-3/4', 'ml-4', 'mt-4', 'done-btn');
    div.classList.add('border', 'border-green-600', 'rounded-lg', 'text-center', 'w-full', 'p-2', 'single-task')

    div.appendChild(p);
    div.appendChild(btn);

    taskList.appendChild(div);
    task.value = '';
}

function buttonListener() {
    const doneBtns = document.getElementsByClassName('done-btn');

    for (doneBtn of doneBtns) {
        doneBtn.addEventListener('click', function (e) {
            e.target.parentNode.style.color = 'red'

            if (e.target.innerText == 'Done') {
                e.target.innerText = 'Completed'
                e.target.disabled = true;
                doneCount++;
                updateResult();
            }
        })
    }
}

function updateResult() {
    const totalTask = document.getElementById('total-task');
    const doneTask = document.getElementById('done-task');
    const undoneTask = document.getElementById('undone-task');

    const taskList = document.getElementById('task-list');

    const totalTaskCount = parseInt(taskList.childElementCount);

    totalTask.innerText = totalTaskCount;
    doneTask.innerText = doneCount;
    undoneTask.innerText = totalTaskCount - doneCount;
}

function filterTask(searchKey) {
    const taskList = document.getElementsByClassName('single-task');

    for (task of taskList) {
        if (task.innerText.toLowerCase().includes(searchKey)) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    }
}



document.getElementById('search-input').addEventListener('input', function (e) {
    const searchKey = e.target.value.toLowerCase();
    filterTask(searchKey)
})



document.getElementById('add-btn').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    if (taskInput.value == '') {
        alert("Please add Task");
    } else {
        addTask('task-input', 'task-list')
        buttonListener()
        updateResult()
    }
})

