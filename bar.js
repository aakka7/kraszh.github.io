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

function addList(str){
    var arr = str.split(', ');
    console.log(arr);
    for(element in arr){
        arr[element] = arr[element].trim().toUpperCase();
        var checkList = JSON.parse(localStorage.getItem('ings_string'));
        if(!checkList.includes(input.value)){   
            let newIng = document.createElement('div');
            newIng.classList.add('ing');
            newIng.innerHTML = `
            <p>${arr[element]}</p> 
            <div class = "item-btn"> 
                <input type = "button" class="in" value = "${arr[element]}"><i class = "fa-solid fa-circle-xmark"></i></input>
            </div>`;
            ings.appendChild(newIng);
            /** Rebuilds the list in case something was removed **/
            var tempList = [];
            document.querySelectorAll('[class = "in"]').forEach(item => {
                tempList.push(item.value);
            });
            var tempString = JSON.stringify(tempList);
            console.log(tempString);
            localStorage.setItem('ings_string', JSON.stringify(tempList));
        }
    }
    input.placeholder = '    Add Ingredient';
    input.value = '';
}
//Add ing
function saveI() {
    if(input.value.includes(',')){
        addList(input.value);
    }
    else if(input.value.trim() != 0){
        input.value = input.value.trim();
        input.value = input.value.toUpperCase();
        var checkList = JSON.parse(localStorage.getItem('ings_string'));
        if(!checkList.includes(input.value)){    
            let newIng = document.createElement('div');
            newIng.classList.add('ing');
            newIng.innerHTML = `
            <p>${input.value}</p> 
            <div class = "item-btn"> 
                <input type = "button" class="in" value = "${input.value}"><i class = "fa-solid fa-circle-xmark"></i></input>
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