// Write your solution in this file!
let employee = { 
    name:"Sam", 
    streetAddress:"11 Broadway"
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    //let tmp_employee = employee;
   // tmp_employee.name = value;
    //return tmp_employee;
    let tmp_employee ={};
    for (let my_key in employee ) {
        tmp_employee[my_key]=employee[my_key];
    }
    tmp_employee[key] = value;
    return tmp_employee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key]=value;
return employee;
}
function deleteFromEmployeeByKey(employee,key){
    let tmp_employee ={};
    for (let my_key in employee ) {
        tmp_employee[my_key]=employee[my_key];
    }
   delete tmp_employee[key];
    return tmp_employee

    
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
   delete employee[key];
return employee;

}