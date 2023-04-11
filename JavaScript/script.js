const container = document.querySelector('#container');
const sidebar = document.querySelector('#sidebar');
sidebar.style.height = `${container.clientHeight}px`;

// =====================================================================================

const button_program_visible = document.querySelector('#button_program_visible');
const button_rotina_visible  = document.querySelector('#button_rotina_visible');
const container_task  = document.querySelector('#container_task');
const container_task2 = document.querySelector('#container_task_2');

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
