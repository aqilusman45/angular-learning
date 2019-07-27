app.controller('MainController', ['$scope',
    function ($scope) {
        $scope.title= 'Hello World';
        $scope.para = 'This is an angular app';
        $scope.object = {
            name: 'Usman',
            lastName: 'Aqil',
            dob: new Date('1996', '04', '31')
        };
        $scope.price = '129'
        $scope.friends = [{
            name: 'Ahsan',
            age: '130',
            city: 'Karachi',
            img: 'https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049'
        },
        {
            name: 'Hussain',
            age: '16',
            city: 'Memon Goth',
            img: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwMi8yOTQvb3JpZ2luYWwvY2hlZXRhaDEuanBn'
        },
        {
            name:'Bahroz',
            age: 'TBD',
            city: 'Las Baldia',
            img: 'https://previews.123rf.com/images/p0temkin/p0temkin1006/p0temkin100600055/7279250-guilty-racoon.jpg'
        }]
    }
])

