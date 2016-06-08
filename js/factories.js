// defined application factories
angular.module('CollegePass.factories',[])

// data model
.factory('Data', function() {
    return {
        id: 0,
        Subject: '',
        FirstCol: 0,
        SecondCol: 0,
        FirstTest: 0,
        SecondTest: 0,
        Attendance: 0,
        Total: 0
    };
});