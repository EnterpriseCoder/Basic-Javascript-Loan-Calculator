// listen for submit

document.getElementById('loan-form').addEventListener('submit', function (e) {
    // hide results
    document.getElementById('results').style.display = 'none';
    //show loader
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults, 1666);
    e.preventDefault();
});

function calculateResults() {
    console.log('calculateResults..')
    //UI vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const montly = document.getElementById('montly-payment');
    const totpay = document.getElementById('total-payment');
    const totint = document.getElementById('total-interest');
    //inputted price value
    const iprc = parseFloat(amount.value);
    //12 month  interest value 
    const yint = parseFloat(interest.value) * 12 / 100;

    //1 month  interest value
    // const mint = parseFloat(interest.value) / 100;
    //1 month price value
    // const mprc = iprc / yprc;

    //total inputted  months 
    const yprc = parseFloat(years.value) * 12;
    //total payment
    const ttlp = parseFloat(yint * iprc);
    //monthly payment
    const mntp = parseFloat(ttlp / yprc);

    if (isFinite(mntp)) {
        montly.value = mntp.toFixed(2);
        totpay.value = (mntp * ttlp).toFixed(2);
        totint.value = ((mntp * ttlp) - iprc).toFixed(2);


    } else {
        // console.log('please log in all fields')
        showError('Please Check Your Numbers')
    }
    //show results
    document.getElementById('results').style.display = 'block';
    // hide loader
    document.getElementById('loading').style.display = 'none';
}

function showError(error) {
    const errorDiv = document.createElement('div');
    //get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');


    errorDiv.className = 'alert alert-danger';

    //create a text node append to div
    errorDiv.appendChild(document.createTextNode(error));

    //insert error above heading
    card.insertBefore(errorDiv, heading);
    //clear error after sec
    setTimeout(clearError, 1899);

}

function clearError() {
    document.querySelector('.alert').remove();
}