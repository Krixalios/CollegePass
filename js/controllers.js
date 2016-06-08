// Defined controllers
angular.module('CollegePass.controllers', [])

// Main view controller
.controller('AppController', function($scope, $localStorage, Data) {
    $scope.Data = Data; // data model
    $scope.db = []; // array where to store data
    
    // function that saves all the data to localStorage
    $scope.saveData = function() {
        $localStorage.database = $scope.db;
    };
    
    
    // function that loads data from localStorage
    $scope.loadData = function() {
        $scope.db = $localStorage.database;
    };
    
    // function that removes element from array at specified index
    $scope.removeSub = function(index) {
        // check if index is existing
        if (index > -1) {
            $scope.db.splice(index, 1);
        }
    };
    
    // function that adds new data to array
    $scope.addSub = function() {
        $scope.Data = {
            id: $scope.db.length+1, // gets current array size and adds 1 to it as new id
            Subject: '',
            FirstCol: 0,
            SecondCol: 0,
            FirstTest: 0,
            SecondTest: 0,
            Attendance: 0
        };
        $scope.db.push($scope.Data);
    }
});