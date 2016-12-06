(function() {
    $('.logo-triangle').delay(4000).show(0);
})();

function showGoogleMaps() {
    var mapOptions = {
        zoom: 13,
        streetViewControl: false,
        scaleControl: true,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: {lat: 50.460111, lng: 30.456073}
    };
    var map = new google.maps.Map(document.getElementById('googlemaps'), mapOptions);

    var contentString1 = '<div id="content" style="text-align: center; font-family: OpenSans">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<p id="firstHeading" class="firstHeading" style="font-family: Homework; color: #FF0000; font-size: 55px; margin: 0">#TheNailRoom</p>'+
        '<div id="bodyContent">'+
        '<h4>метро Берестейская</h4>'+
        '<h2>проспект Победы, 80/57</h2>'+
        '</div>'+
        '</div>';

    var contentString2 = '<div id="content" style="text-align: center; font-family: OpenSans">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<p id="firstHeading" class="firstHeading" style="font-family: Homework; color: #FF0000; font-size: 55px; margin: 0">#TheNailRoom</p>'+
        '<div id="bodyContent">'+
        '<h3>метро Крещатик</h3>'+
        '<h2>улица Лютеранская, 13</h2>'+
        '</div>'+
        '</div>';

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });

    var marker1 = new google.maps.Marker({
        position: {lat: 50.45848248, lng: 30.42355523},
        map: map,
        draggable: false,
        title: '#TheNailRoom'
    });
    var marker2 = new google.maps.Marker({
        position: {lat: 50.44536693, lng: 30.52532868},
        map: map,
        draggable: false,
        title: '#TheNailRoom'
    });
    marker1.addListener('click', function() {
        infowindow1.open(map, marker1),
        infowindow2.close(map, marker2);
    });
    marker2.addListener('click', function() {
        infowindow2.open(map, marker2),
        infowindow1.close(map, marker1);
    });
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);

