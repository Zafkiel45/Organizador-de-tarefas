const container = document.querySelector('#container');
const sidebar = document.querySelector('#sidebar');
sidebar.style.height = `${container.clientHeight}px`;

// =====================================================================================

const button_program_visible = document.querySelector('#button_program_visible');
const button_rotina_visible  = document.querySelector('#button_rotina_visible');
const container_task  = document.querySelector('#container_task');
const container_task2 = document.querySelector('#container_task_2');

const task    = document.querySelector('#list_task');
const task_2  = document.querySelector('#list_task_2');
const button_program = document.querySelector('#button_program');
const button_rotina  = document.querySelector('#button_rotina');
const remove_button  = document.querySelector('#button_remove')
const key = 'task'

// =====================================================================================
button_program_visible.addEventListener('click', function(){
    if(container_task.style.zIndex == 0){
        container_task.style.zIndex = `1`
        container_task2.style.zIndex = `0`
    }
})
button_rotina_visible.addEventListener('click', function(){
    if(container_task2.style.zIndex == 0){
        container_task2.style.zIndex = `1`
        container_task.style.zIndex = `0`
    }
})
// =====================================================================================

button_program.addEventListener('click', function(){
    let input = document.querySelector('#task');
    if(!input.value){
        alert('Digite uma Task e tente Novamente')
    } else if(validade()){
        alert('Já existe uma task com este nome')
    }else {
        let armazenamento = JSON.parse(localStorage.getItem(key) || '[]')
        armazenamento.push({
            nome: input.value,
            type: "programação"
        })
        localStorage.setItem(key, JSON.stringify(armazenamento))
        mostrarTask()
    }
    input.value = ''
})
button_rotina.addEventListener('click', function(){
    let input = document.querySelector('#task');

    if(!input.value){
        alert('Digite uma Task e tente Novamente')
    } else {
        let armazenamento = JSON.parse(localStorage.getItem(key) || '[]')
        armazenamento.push({
            nome: input.value,
            type: "rotina"
        })
        localStorage.setItem(key, JSON.stringify(armazenamento))
        mostrarTask()
    }
    input.value = ''
})
function mostrarTask(){
    task.innerHTML = ''
    task_2.innerHTML = ''
    let armazenamento = JSON.parse(localStorage.getItem(key) || '[]')
    for(let c = 0; c < armazenamento.length; c++){
        let li = document.createElement('li');
        li.classList.add('item_task');
        if(armazenamento[c].type == 'programação'){
            task.appendChild(li)
            li.innerHTML = `${armazenamento[c]['nome']}<button class="check"><img src="./assets/svg/check.svg></button>`
        } else if(armazenamento[c].type == 'rotina') {
            task_2.appendChild(li)
            li.innerHTML = `${armazenamento[c]['nome']}<button class="check"><img src="./Assets/SVG/check.svg"></button>`
        }
    }
    const button_task = document.querySelectorAll('.check');
    button_task.forEach(function(button, index){
        button.addEventListener('click', function(){
            removeTask(armazenamento[index].nome, armazenamento[index].type)
        })
    })
}

remove_button.addEventListener('click', function(){
    localStorage.removeItem(key)
    mostrarTask()
})

function removeTask(itemStorage, itemType){
    let armazenamento = JSON.parse(localStorage.getItem(key) || '[]')
    let idx = armazenamento.findIndex(function(storage){
        return (storage.nome == itemStorage && storage.type == itemType);
    })
    armazenamento.splice(idx, 1);
    localStorage.setItem(key, JSON.stringify(armazenamento))
    mostrarTask()
}

function validade(){
    let armazenamento = JSON.parse(localStorage.getItem(key) || '[]')
    let input = document.querySelector('#task').value;
    let validate = armazenamento.find(function(validação){
        return validação.nome == input
    })
    return !validate ? false:true
}
mostrarTask()

