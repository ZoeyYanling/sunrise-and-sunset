
//Part5 Add a listener for click events on submit button to save data
var submitBtn = $('.submitBtn');
var name = $('#name').text();
var nameInput = $('#nameInput').val();
var email = $('#email').text();
var emailInput = $('#emailInput').val();
var interest = $('#interest').text();
var interestInput = $('#interestInput').val();

submitBtn.on('click',function(){   
   
    localStorage.setItem(name,JSON.stringify(nameInput) );
    localStorage.setItem(email,JSON.stringify(emailInput));
    localStorage.setItem(interest,JSON.stringify(interestInput));
});
