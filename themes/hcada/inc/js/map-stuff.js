(function($) {

  // $('.marker').each(function() {
  //   marker_index = $(this).attr('data-index');
  //   arrayItem = [ locID, '<div class="address">' + title + '<br>' + address + '</div><br>' + details, latitude, longitude ];
  //   markers.push(arrayItem);
  // })

  function new_map( $el ) {
  	var $markers = $el.find('.marker');
  	var args = {
  		zoom		: 16,
  		center		: new google.maps.LatLng(0, 0),
  		mapTypeId	: google.maps.MapTypeId.ROADMAP,
      styles: mapStyles
  	};
  	var map = new google.maps.Map( $el[0], args);
  	map.markers = [];
  	$markers.each(function(){
    	add_marker( $(this), map );
  	});
    $(window).resize(function() {
      center_map( map );
    })
  	center_map( map );
  	return map;
  }

  function add_marker( $marker, map ) {
  	var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );
  	var marker = new google.maps.Marker({
  		position	: latlng,
      icon: '/wp-content/themes/hcada/inc/images/marker.png',
  		map			: map,
      label: {
        color: '#fff',
        fontSize: '13px',
        fontWeight: '600',
        text: $marker.attr('data-index')
      }
  	});
  	map.markers.push( marker );
  	if( $marker.html() )
  	{
  		var infowindow = new google.maps.InfoWindow({
  			content		: $marker.html()
  		});
  		google.maps.event.addListener(marker, 'click', function() {
  			infowindow.open( map, marker );
  		});
  	}
  }

  function center_map( map ) {
  	var bounds = new google.maps.LatLngBounds();
  	$.each( map.markers, function( i, marker ){
  		var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );
  		bounds.extend( latlng );
  	});
  	if( map.markers.length == 1 )
  	{
  	    map.setCenter( bounds.getCenter() );
  	    map.setZoom( 16 );
  	}
  	else
  	{
  		map.fitBounds( bounds );
  	}
  }


  var map = null;
  $(document).ready(function(){
    setTimeout(function(){
      $('.acf-map').each(function(){
        map = new_map( $(this) );
      });
    }, 200);
  });

  var mapStyles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#64923e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#523735"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c9b2a6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#dcd2be"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ae9e90"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a5b076"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#447530"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#8db268"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#8db268"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f8c967"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e9bc62"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e98d58"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#db8555"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#806b63"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8f7d77"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#b9d3c2"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#92998d"
        }
      ]
    }
  ]


})(jQuery);
