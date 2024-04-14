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
        
        var tempList = [];
        document.querySelectorAll('[class = "ing"]').forEach(item => {
            tempList.push(item);
        });
        tempList.push(input.value);
        sessionStorage.setItem('ings_string', JSON.stringify(tempList));
        input.value = '';
    }
    else {
        alert("empty");
    }
}
function load() { 
    var retList = JSON.parse(sessionStorage.getItem('ings_string'));
    if(retList >= 1){
        for(item in retList) {
            let newIng = document.createElement('div');
            newIng.classList.add('ing');
            newIng.innerHTML = `
            <p>${retList[item]}</p> 
            <div class = "item-btn"> 
                <i class="fa-solid fa-circle-xmark"></i> 
            </div>
            <br>`;
            ings.appendChild(newIng);
        }
    }
}

ings.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-circle-xmark')){
        
        e.target.parentElement.parentElement.remove();

    }

})

function clearI() {
    sessionStorage.removeItem('ings_string');
    var ingslist = [];
    sessionStorage.setItem('ings_string', JSON.stringify(ingsList));
    location.reload();
}