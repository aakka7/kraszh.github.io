function previewAndPredictImage(event) {
    const reader = new FileReader();
    reader.onload = function(){
        const imageUrl = reader.result;
        document.getElementById('results').innerHTML = '<img src="' + imageUrl + '" style="max-width: 100%;"/>';
        predictImage(imageUrl);
    };
    reader.readAsDataURL(event.target.files[0]);
}

function predictImage(imageData) {
    const apiKey = "7teFJo3CW2Pvjy7IsQgL";
    const modelUrl = "https://detect.roboflow.com/ingredient-detector-fc7de/1";
    axios.post(modelUrl, {
        api_key: apiKey,
        image: imageData
    })
    .then(function(response) {
        console.log(response.data);
        displayResults(response.data);
    })
    .catch(function(error) {
        console.log(error);
        document.getElementById('results').innerHTML = 'Error: ' + error.message;
    });
}

function displayResults(data) {
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = ''; // Clear previous results
    data.predictions.forEach(prediction => {
        const predElement = document.createElement('div');
        predElement.innerHTML = `
            <p>Class: ${prediction.class}, Confidence: ${prediction.confidence.toFixed(2)}</p>
            <p>Location: x=${prediction.x}, y=${prediction.y}, width=${prediction.width}, height=${prediction.height}</p>
        `;
        resultsElement.appendChild(predElement);
    });
}

function clearImage() {
    document.getElementById('results').innerHTML = '';
}