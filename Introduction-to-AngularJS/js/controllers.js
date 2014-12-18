'use strict';
var app = app || {};

app.controller('StudentPage', function ($scope) {
    var student = {
        name: "Pesho",
        photo: "http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png",
        grade: 5,
        school: "High School of Mathematics",
        teacher: "Gichka Pesheva"
    };

    $scope.student = student;
});

app.controller('BindImageSourceToTextBox', function () {

});

app.controller('Tiger', function ($scope) {
    var sectionStyles = {
        width: '50%',
        background: '#CACACA',
        padding: '20px',
        fondSize: '18px',
        color: '#2C3E50',
        fontFamily: '"Open Sans", "Roboto", tahoma, verdana, futura, helvetica, sans-serif'
    };

    var bold = {
        fontWeight: 'bold'
    };

    var inlineBlock = {
        width: '48%',
        display: 'inline-block',
        verticalAlign: 'top'
    };

    var tiger = {
        name: 'Pesho',
        born: 'Asia',
        birthDate: '2006',
        live: 'Sofia Zoo'
    };


    var imgUrl = 'http://tigerday.org/wp-content/uploads/2013/04/tiger.jpg';

    $scope.imgUrl = imgUrl;
    $scope.inlineBlock = inlineBlock;
    $scope.tiger = tiger;
    $scope.sectionStyles = sectionStyles;
    $scope.bold = bold;


});
