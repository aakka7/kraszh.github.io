// Preview and predict the image when it is selected
function previewAndPredictImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        const imageUrl = "";
        reader.onload = function(e) {
            imageUrl = e.target.result;
            predictImage(imageUrl);
        };
        reader.readAsDataURL(file);
    }
}

// Predict the image using Roboflow API
function predictImage(imageData) {
    const apiKey = "7teFJo3CW2Pvjy7IsQgL";
    const modelUrl = "https://detect.roboflow.com/ingredient-detector-fc7de/1";
    axios({
        method: 'POST',
        url: modelUrl,
        params: {
            api_key: apiKey,
            image: imageData
        }
    })
    .then(function(response) {
        console.log(response.data);
        updateIngredients(response.data);
    })
    .catch(function(error) {
        console.error(error);
        document.getElementById('results').textContent = 'Error: ' + error.message;
    });
}

// Display results and save to local storage
function updateIngredients(data) {
    const ingredientsList = document.querySelector('.ingredietns');
    const existingIngredients = JSON.parse(localStorage.getItem('ings_string') || '[]');

    data.predictions.forEach(prediction => {
        // Add prediction to local storage and display
        if (!existingIngredients.includes(prediction.class)) {
            existingIngredients.push(prediction.class);
            const ingredientElement = document.createElement('div');
            ingredientElement.className = 'ing';
            ingredientElement.textContent = prediction.class;
            ingredientsList.appendChild(ingredientElement);
        }
    });

    // Update local storage with new ingredients list
    localStorage.setItem('ings_string', JSON.stringify(existingIngredients));
}

// Clear the image input and results
function clearImage() {
    document.getElementById('results').innerHTML = '';
    document.querySelector('.ingredietns').innerHTML = ''; // Clear ingredients list
    localStorage.removeItem('ings_string'); // Clear the local storage
}
