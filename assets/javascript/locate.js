var latitude = 37.870456499999996;
var longitude = -122.25693639999999;
var boundingBox = `${latitude + .1084}%2c${longitude - .1084}%2c${latitude - .1084}%2c${longitude + .1084}`;

var locate = function locate() {
    function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(`Location Set: Lat: ${latitude}, Long: ${longitude}`);
        boundingBox = `${latitude + .1084}%2c${longitude - .1084}%2c${latitude - .1084}%2c${longitude + .1084}`;
    }

    function error() {
        alert('Unable to access your location');
    }


    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
};
locate();
