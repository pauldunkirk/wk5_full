myApp.controller('HomeController', ['DataFactory', function(DataFactory) {
    console.log('The HomeController was loaded');
    var self = this;

    self.empList = DataFactory.allEmps;

    self.newEmp = {};
    self.addEmp = function() {
        DataFactory.addEmp(self.newEmp);
    };

    self.deleteEmp = function(empId) {
        DataFactory.deleteEmp(empId);
    };

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
