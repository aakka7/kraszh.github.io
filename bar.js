let input  = document.querySelector('.IngIn');
let addBtn  = document.querySelector('.btn');
let ing  = document.querySelector('.ing');

//Add button disabled
input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active');
    }
    else{
        addBtn.classList.remove('active');
    }

})

//Add ing

addBtn.addEventListener('click', () => { 
    if(input.value.trim() != 0){
        let newIng = document.createElement('div');
        newIng.classList.add('Ing');
        newIng.innerHTML = `
        <p>${input.value}</p> 
        <div class = "item-btn"> 
            <i class="fa-solid fa-circle-xmark"></i> 
        </div>
        <br>`;
        ings.appendChild(newIng);
        input.value = '';
    }
    else {
        alert("empty");
    }
})

tasks.addEventListener('click', (e) = > {
    if(e.target.classList.contains('fa-solid fa-circle-xmark')){
        e.target.parentElement.parentElement.remove();
    }

})