function calculateBMI() {
    // Get user input
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    // Check if the inputs are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid values for height and weight.');
        return;
    }

    // Calculate BMI
    var bmi = weight / ((height / 100) ** 2);

    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
}
