const form = document.querySelector('form'); // first we select the form element and then we store it in a variable form
//this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);
//with form we will able to manipulate the form element in html with the help of javascript
//using addEventListener() method we would be performing an action of calculating BMI after submit form action.
form.addEventListener('submit',function (e){
    e.preventDefault() // first we stop the default action of submiting the form which means after submiting it sends over the information of form on the url in the get or post .
    
    const height = parseInt(document.querySelector('#height').value); // whenever we enter the value in input field it returns it as a string so we need to convert it into number.
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')
    // we are adding checks for height and weight field
    if (height === '' || height<0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let report;
        if(bmi<18.6){
            report = 'You are underweight'
        }
        else if (bmi>=18.6 && bmi<=24.9){
           report = 'Normal Range'
        }
        else{
            report = 'You are over weight'
        }
        results.innerHTML = `<span>${bmi} <br> ${report}</span>`;
    }

});