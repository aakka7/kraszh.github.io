let input  = document.querySelector('.IngIn');
let addBtn  = document.querySelector('.btn');
let ings  = document.querySelector('.ingredietns');

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
function saveI() {
    var ingsList = [];
    if(input.value.trim() != 0){
        let newIng = document.createElement('div');
        newIng.classList.add('ing');
        newIng.innerHTML = `
        <p>${input.value}</p> 
        <div class = "item-btn"> 
            <i class="fa-solid fa-circle-xmark"></i> 
        </div>
        <br>`;
        ings.appendChild(newIng);
        ingsList.push(item.value);
        var ings_string = JSON.stringify(ingsList);
        localStorage.setItem("ings_string", ings_string);
        input.value = '';
    }
    else {
        alert("empty");
    }
}
addBtn.addEventListener('click', () => { 
    if(input.value.trim() != 0){
        let newIng = document.createElement('div');
        newIng.classList.add('ing');
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

ings.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-circle-xmark')){
        e.target.parentElement.parentElement.remove();
    }

})