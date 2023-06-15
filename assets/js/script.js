

//Part5 Add a listener for click events on submit button to save data
var submitBtn = $('.submitBtn');
var name = $('#name').text();
var email = $('#email').text();
var interest = $('#interest').text();

submitBtn.on('click', function(){
    var nameInput = $('#inputName').val();
    var emailInput = $('#inputEmail').val();
    var interestInput = $('#inputInterest').val();
    localStorage.setItem(name,nameInput);
    localStorage.setItem(email,emailInput);
    localStorage.setItem(interest,interestInput);   

});
