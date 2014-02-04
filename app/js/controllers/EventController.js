/**
 * Created by owner on 03.02.14.
 */
eventsApp.controller('EventController',
    function EventController($scope){
        $scope.event = {
            name: 'Hardcoded event',
            date: '02/03/2014',
            time: '14:20pm'
        }
    }
);