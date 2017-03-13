myApp.controller('HomeController', ['DataFactory', function(DataFactory) {
    console.log('The HomeController was loaded');
    var self = this;

    self.empList = DataFactory.allEmps;
    self.empSalary = DataFactory.empSalary;

    self.newEmp = {};
    self.addEmp = function() {
        DataFactory.addEmp(self.newEmp);
    };

    self.deleteEmp = function(empId) {
        DataFactory.deleteEmp(empId);
    };
    

console.log(self.empSalary);
    // self.empSalary = {};
    // self.addEmp = function() {
    //     DataFactory.addEmp(self.empSalary);
    // };
    //
    //
    // self.totalSalary = self.empList.list.salary;
    // console.log(self.totalSalary);

    // runningTotal = runningTotal + parseInt(annualSalary);
    // monthlySalaryExp = runningTotal/12;


}]); // end controller
