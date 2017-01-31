var app=angular.module('employeeApp',[]);

app.controller('EmployeeController',function(){
  console.log('EmployeeController loaded');

//controller as syntax
var emp=this;


emp.line=[];
emp.addEntries=function(){
  var object={}
  object.name=emp.entries.name;
  object.lname=emp.entries.lname;
  object.id=emp.entries.id;
  object.title=emp.entries.title;
  object.salary=emp.entries.salary;
emp.line.push(object);
}



});
