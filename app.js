var expenditures=0;


$(function () {
  console.log('document is ready');

  $('form').on('submit', function (event) {
    console.log('form submitted');

    event.preventDefault();

    var formData = {};
    var formAsArray = $(this).serializeArray();

    formAsArray.forEach(function (input) {
      formData[input.name] = input.value;
    });

    appendDom(formData);

    clearForm();

    salary(formData.employeeSalary);
  });


});

function appendDom(emp) {
  var $emp = $('<div class="employee"></div>'); // create a div jQuery object
  var $ul= $('<ul></ul>');
  var $firstName=$('<li>' + emp.employeeFirstName + '</li>' );
  var $lastName=$('<li>' + emp.employeeLastName + '</li>' );
  var $id=$('<li>' + emp.employeeIdNumber + '</li>' );
  var $job=$('<li>' + emp.employeeJobTitle + '</li>' );
  var $salary=$('<li id="salary">' + emp.employeeSalary + '</li>' );
  var $button=$('<li><button id="delete">Delete</button></li>')
  $ul.append($firstName);
  $ul.append($lastName);
  $ul.append($id);
  $ul.append($job);
  $ul.append($salary);
  $ul.append($button);
  $emp.append($ul);

  $('#employees').append($emp);
  $( ".employee" ).animate({
     opacity: 1 //use more parameter for effect
}, 1000 );
}

function clearForm() {
  $('form').find('input[type=text]').val('');
}

function salary(add){
  expenditures+=parseFloat((Number(add)/12).toFixed(2));
  //expenditures=expenditures.toFixed(2);
  $('#expenditures').text(expenditures);

}
$(document).on('click','#delete',function(){
  console.log('delete');
  var salary=Number($(this).parent().parent().find('#salary').text());
  console.log(salary);
  expenditures-=parseFloat((salary/12).toFixed(2));
  //expenditures=expenditures.toFixed(2);
  $('#expenditures').text(expenditures);
  $(this).parent().parent().parent().fadeOut(1000);
  $(this).parent().parent().parent().remove();
});
