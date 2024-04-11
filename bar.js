let input  = document.querySelector('.IngIn');
let addBtn  = document.querySelector('.btn');
let ing  = document.querySelector('.ing');

//Add button disabled
input.addEventListener('keyup', () => {
    if(input.value.trim() !== 0){
        addBtn.classList.add('active');
    }
    else{
        addBtn.classList.remove('active');
    }

});

//Add ing

addBtn.addEventListener('click', () => { 
    if(input.value.trim() !== 0){
        let newIng = document.createElement('div');
        newIng.classList.add('Ing');
        newIng.innerHTML = `<p>${input.value}</p> <div class = "item-btn"><i class = "remove"></i></div>`;
        ing.appendChild(newIng);
        input.value = ' ';
    }

});