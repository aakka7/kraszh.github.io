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
    if(input.value.includes(',')){
        var arr = input.value.split(', ');
        for(element in arr){
            loadNsave(arr[element]);
        }
        input.placeholder = '    Add Ingredient';
        input.value = '';
    }
    else if(input.value.trim() != 0){
        loadNsave(input.value);
    }
    else {
        input.placeholder = '**! Empty Field !**';
    }
}

function load() { 
    var retList = JSON.parse(localStorage.getItem('ings_string'));
    if(retList.length >= 1){
        for(item in retList) {
            let newIng = document.createElement('div');
            newIng.classList.add('ing');
            newIng.innerHTML = `
            <p>${retList[item]}</p> 
            <div class = "item-btn"> 
                <input type = "button" class="in" value = "${retList[item]}"><i class = "fa-solid fa-circle-xmark"></i> </input> 
            </div>`;
            ings.appendChild(newIng);
        }
    }
}

ings.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-circle-xmark')){
        e.target.parentElement.parentElement.remove();
        
        var tempList = [];
        document.querySelectorAll('[class = "in"]').forEach(item => {
            tempList.push(item.value);
        });
        var tempString = JSON.stringify(tempList);
        localStorage.setItem('ings_string', JSON.stringify(tempList));
    }

})

function clearI() {
    localStorage.removeItem('ings_string');
    var ingsList = [];
    localStorage.setItem('ings_string', JSON.stringify(ingsList));
    location.reload();
}

function loadNsave(food){
    food = food.trim().toUpperCase();
    var checkList = JSON.parse(localStorage.getItem('ings_string'));
    if(!checkList.includes(food)){   
        let newIng = document.createElement('div');
        newIng.classList.add('ing');
        newIng.innerHTML = `
        <p>${food}</p> 
        <div class = "item-btn"> 
            <input type = "button" class="in" value = "${food}"><i class = "fa-solid fa-circle-xmark"></i></input>
        </div>`;
        ings.appendChild(newIng);
        /** Rebuilds the list in case something was removed **/
        var tempList = [];
        document.querySelectorAll('[class = "in"]').forEach(item => {
            tempList.push(item.value);
        });
        var tempString = JSON.stringify(tempList);
        localStorage.setItem('ings_string', JSON.stringify(tempList));
        input.placeholder = '    Add Ingredient';
        input.value = '';
    }
    else{
        input.placeholder = '**! Repeated value !**';
        input.value = '';
    }
}