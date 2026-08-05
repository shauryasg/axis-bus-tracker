// =======================================
// Axis Colleges Bus Tracking System
// Final Demo Version - Part 1
// =======================================

// Google Map Object
let map;

// User Marker
let marker = null;

// Blue Route Line
let routeLine = null;

// User Path
let pathCoordinates = [];

// Tracking Status
let trackingStarted = false;

// Google Map Initialize
function initMap() {

    // Axis College Default Location
    const axisCollege = {
        lat: 26.4499,
        lng: 80.3319
    };

    // Create Map
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: axisCollege
    });
// =======================================
// Track Bus Button
// =======================================

// AX-01 Button Select
const trackButton = document.getElementById("trackBusBtn");

// Button Click
trackButton.addEventListener("click", function () {

    // Tracking पहले से चालू है?
    if (trackingStarted) {

        alert("Tracking is already running.");

        return;

    }

    trackingStarted = true;

    alert("Live Tracking Started...");

    // Browser Location Support Check
    if (navigator.geolocation) {

        navigator.geolocation.watchPosition(

            updateLiveLocation,

            function (error) {

                alert("Location Error : " + error.message);

            },

            {

                enableHighAccuracy: true,

                maximumAge: 0,

                timeout: 10000

            }

        );

    }

});
// =======================================
// Update Live Location
// =======================================

function updateLiveLocation(position) {

    // Current Latitude & Longitude
    const currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    // Save Current Position in Path Array
    pathCoordinates.push(currentLocation);

    // First Time Marker Create
    if (marker === null) {

        marker = new google.maps.Marker({

            position: currentLocation,

            map: map,

            title: "Your Current Location"

        });

    }

    // Marker Move
    else {

        marker.setPosition(currentLocation);

    }

    // Remove Old Route Line
    if (routeLine !== null) {

        routeLine.setMap(null);

    }

    // Draw New Blue Route Line
    routeLine = new google.maps.Polyline({

        path: pathCoordinates,

        geodesic: true,

        strokeColor: "#0066FF",

        strokeOpacity: 1.0,

        strokeWeight: 5

    });

    routeLine.setMap(map);

    // Auto Center Map
    map.panTo(currentLocation);
}
}