let input  = document.querySelector('.IngIn');
let addBtn  = document.querySelector('.btn');
let ings  = document.querySelector('.ingredietns');
var ingsList  = [];

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
        localStorage.setItem('ings_string', ings_string);
        /**input.value = '';**/
    }
    else {
        alert("empty");
    }
}
function load() { 
    var retList = JSON.parse(localStorage.getItem('ings_string'));
    retList.forEach(item => {
        let newIng = document.createElement('div');
        newIng.classList.add('ing');
        newIng.innerHTML = `
        <p>${item}</p> 
        <div class = "item-btn"> 
            <i class="fa-solid fa-circle-xmark"></i> 
        </div>
        <br>`;
        ings.appendChild(newIng);
    });
}

ings.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-circle-xmark')){
        e.target.parentElement.parentElement.remove();
    }

})