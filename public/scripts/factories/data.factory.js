myApp.factory('DataFactory', ['$http', function($http) {
    console.log('Data Factory running');

    var factoryEmps = { list: [] };
    var empObject = {};
    var empSalary = {};

    getEmps();

    function getEmps() {
        $http({
            method: 'GET',
            url: '/routes'
        }).then(function(response) {
            console.log('response from factory', response); //response is object, .data is array
            console.log('response.data from factory', response.data); //long array
            // factoryEmps = response.data; //factoryTasks is object with list proprty that is array from database
            factoryEmps.list = response.data;
            console.log('factoryEmps is: ', factoryEmps);
            getSum();
        });
    }

    getSum();

    function getSum() {
        $http({
            method: 'GET',
            url: '/routes/sum'
        }).then(function(response) {
            console.log('response from factory', response); //response is object, .data is array
            console.log('response.data from factory', response.data); //long array
            // factoryEmps = response.data; //factoryTasks is object with list proprty that is array from database
            empSalary.list = response.data;
            console.log('factoryEmps is: ', empSalary);
        });
    }


    function deleteEmp(empId) {
        $http({
            method: 'DELETE',
            url: '/routes/' + empId
        }).then(function(response) {
            getEmps();
            getSum();
        });
    }

    function addEmp(empObject) {
        $http({
            method: 'POST',
            url: '/routes',
            data: empObject
        }).then(function(response) {
            console.log('emp factory addEmp has been hit');
            getEmps();
            getSum();
        });
    }



    return {
        empSalary: empSalary,
        allEmps: factoryEmps,
        deleteEmp: deleteEmp,
        addEmp: addEmp
    };
}]);
