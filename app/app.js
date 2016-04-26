
var app = angular.module("app", []);
app.controller("detailCtrl", function($scope) {

    $scope.addRow = function(){		
        $scope.details.push({ 'inputfname': $scope.inputfname, 'inputlname': $scope.inputlname, 'inputage': $scope.inputage, 'inputemail': $scope.inputemail, 'inputcountry': $scope.inputcountry, 'inputphone': $scope.inputphone, 'inputdate': $scope.inputdate });
        $scope.inputfname='';
        $scope.inputlname='';
        $scope.inputage = '';
        $scope.inputemail = '';
        $scope.inputcountry = '';
        $scope.inputphone = '';
        $scope.inputdate = '';
    };
});




