const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);
    const result = document.querySelector('#Result');

    if (isNaN(weight) || weight < 0) {
    result.innerHTML = 'Please enter valid positive number for weight.';
    } else if (isNaN(height) || height < 0) {
        result.innerHTML = 'Please enter valid positive number for height.';
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }
        result.innerHTML = `
            <span>Your BMI is <strong>${bmi}</strong></span><br>
            <span>Your category is <strong>${category}</strong></span>
        `;
    }
});