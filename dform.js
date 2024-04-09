const form = document.querySelector('form');
form.addEventListener('continue', (e) => {
    e.preventDefault();
        
    let diets = [];
    document.querySelectorAll('[type = "checkbox"]').forEach(item => {
        if(item.checked === true){
            diets.push(item.value);
        }
    })
    console.log(diets);
})