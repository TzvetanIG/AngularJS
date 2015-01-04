'use strict';

var videoApp = videoApp || {}

videoApp.factory('videosData', function () {
    var videos = [
        {
            title: 'Course introduction',
            pictureUrl: 'http://softuni.bg/picture.png',
            length: '3:32',
            category: 'IT',
            subscribers: 3,
            date: new Date(2014, 12, 15),
            haveSubtitles: false
        },
        {
            title: 'Angular introduction',
            pictureUrl: 'http://softuni.bg/picture.png',
            length: '4:32',
            category: 'IT',
            subscribers: 0,
            date: new Date(2014, 12, 15),
            haveSubtitles: true
        },
        {
            title: 'Angular Workshop',
            pictureUrl: 'http://softuni.bg/picture.png',
            length: '2:32',
            category: 'SoftUni',
            subscribers: 0,
            date: new Date(2014, 12, 23),
            haveSubtitles: false
        }
    ];

    return {
        getAllVideos: function () {
            return videos;
        },
        add: function (video) {
            videos.push(video);
        },
        getAllCategories: function(){
            var categories = {};
            videos.forEach(function (video) {
                categories[video.category] = 0;
            });
            return Object.keys(categories);
        }
    }
});