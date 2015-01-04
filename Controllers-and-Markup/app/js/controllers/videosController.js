'use strict';

var videoApp = videoApp || {};

videoApp.controller('VideosPage', function ($scope, videosData) {

    $scope.newVideo = {};

    $scope.addVideo = function (newVideo) {
        var video = JSON.parse(JSON.stringify(newVideo));
        videosData.add(video);
        $scope.categories = videosData.getAllCategories();
        delete $scope.newVideo;
    };

    $scope.sortVideos = function(predicate){
            $scope.predicate = predicate;
            $scope.reverse = false;
    };

    $scope.filterVideos = function(predicate){
        $scope.filterPredicate = JSON.parse(JSON.stringify(predicate));
        if($scope.filterPredicate.category === null ){
            $scope.filterPredicate.category = undefined;
        }
    };

    $scope.clearFilter = function(predicate){
        delete $scope.filterPredicate;
        delete $scope.filter;
    };

    $scope.filterByDate = function(item){
        //todo logic
        return true;
    }

    $scope.videos = videosData.getAllVideos();

    $scope.categories = videosData.getAllCategories();

});