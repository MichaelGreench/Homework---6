let InputFormadd = document.querySelector('.input');
let ButtonAdd = document.querySelector('.btn');
let UlListadd = document.querySelector('.ullist');

ButtonAdd.addEventListener('click', function () {
    let value = InputFormadd.value;
    let li = document.createElement('li');
let deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', function(){
    li.remove();
})

    li.textContent = value;

    li.appendChild(deleteButton);

    UlListadd.appendChild(li);

    InputFormadd.value = ' ';
})

document.querySelector('.Delete').addEventListener('click',function(x){
    UlListadd.innerHTML = ' ';
})