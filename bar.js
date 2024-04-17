let input  = document.querySelector('.ingIn');
let addBtn  = document.querySelector('.btn');
let ings  = document.querySelector('.ingredietns');

//Add ing
function saveI() {
    if(input.value.includes(',')){
        var arr = input.value.split(',');
        for(element in arr){
            loadNsave(arr[element]);
        }
        input.placeholder = '    Add Ingredient';
        input.value = '';
    }
    else if(input.value.trim() != 0){
        loadNsave(input.value);
    }
    else 
        input.placeholder = '**! Empty Field !**';
}

function load() { 
    var retList = JSON.parse(localStorage.getItem('ings_string'));
    if(retList.length >= 1){
        for(item in retList) {
            newHtml(retList[item]);
        }
    }
}

ings.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-circle-xmark')){
        e.target.parentElement.parentElement.remove();
        reBuild();
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
        newHtml(food);
        reBuild();
        input.placeholder = '    Add Ingredient';
        input.value = '';
    }
    else{
        input.placeholder = '**! Repeated value !**';
        input.value = '';
    }
}

function newHtml(val){
    let newIng = document.createElement('div');
        newIng.classList.add('ing');
        newIng.innerHTML = `
        <p>${val}</p> 
        <div class = "item-btn"> 
            <input type = "button" class="in" value = "${val}"><i class = "fa-solid fa-circle-xmark"></i></input>
        </div>`;
        ings.appendChild(newIng);
}

function reBuild(){
    var tempList = [];
    document.querySelectorAll('[class = "in"]').forEach(item => {
        tempList.push(item.value);
    });
    localStorage.setItem('ings_string', JSON.stringify(tempList));
}

function cont() {
    window.location.href = "recpage.html";
}