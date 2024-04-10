let input  = document.querySelector('.IngIn');
let addBtn  = document.querySelector('.btn');
let ing  = document.querySelector('.ing');

input.addEventListener('keyup', () => {
    if(input.ariaValueMax.trim() !== 0){
        addBtn.classList.add('active');
    }
    else{
        addBtn.classList.remove('active');
    }

})