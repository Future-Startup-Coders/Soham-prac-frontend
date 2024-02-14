const form= document.getElementById("form")
const table= document.getElementById("table")

let todolist=[];
const submit=document.getElementById("submitBtn")
function submit_form(event){
    event.preventDefault();

    const task=form.elements[0].value
    todolist.push(task)

    const row=table.insertRow(-1);
    row.insertCell(0).innerText=todolist.length

    row.insertCell(1).innerText=todolist[todolist.length-1]

}
submit.addEventListener( "click", submit_form)


