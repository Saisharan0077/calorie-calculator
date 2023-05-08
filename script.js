const form = document.querySelector('form');
const calorieResult = document.getElementById('calorie-result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const activityLevel = document.getElementById('activity-level').value;
    let bmr;

    if (gender === 'male') {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    let tdee;

    switch (activityLevel) {
        case 'sedentary':
            tdee = bmr * 1.2;
            break;
        case 'lightly-active':
            tdee = bmr * 1.375;
            break;
        case 'moderately-active':
            tdee = bmr * 1.55;
            break;
        case 'very-active':
            tdee = bmr * 1.725;
            break;
        case 'extra-active':
            tdee = bmr * 1.9;
            break;
    }

    calorieResult.textContent = `${Math.round(tdee)} calories per day`;
});