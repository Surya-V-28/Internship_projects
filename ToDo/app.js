



let buttonadd = document.getElementById("buttontoDo");
let textgot = document.getElementById('valueUser');
let container = document.getElementById('container-todo-list');

buttonadd.addEventListener('click', function () {
      if(textgot.value =='') {
            
      }
      else {
      console.log("welcome to the india");
     let classlistofchild = document.createElement('div');
     classlistofchild.classList.add('list-p-tags');
     let icon = document.createElement('div');
     let paragraph = document.createElement('p');
     let deletes = document.createElement('div');
     icon.innerHTML ='<i class="fa-regular fa-circle icons-sperete"></i>';
     paragraph.classList.add("ptaginnotes");
     deletes.innerHTML  ='<i class="fa-solid fa-trash icons-sperete"></i>';
     paragraph.innerHTML =  textgot.value;

     classlistofchild.appendChild(icon);
     classlistofchild.appendChild(paragraph);
     classlistofchild.appendChild(deletes);
     container.appendChild(classlistofchild);
     icon.addEventListener('click', function() {
      paragraph.style.textDecoration ='line-through';
      icon.innerHTML='<i class="fa-regular fa-circle-check icons-sperete"></i>';
     });

     deletes.addEventListener('click',function () {
      container.removeChild(classlistofchild);
     })



     textgot.value ='';
}
}
);