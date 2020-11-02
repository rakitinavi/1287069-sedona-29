var mapElement = document.getElementById("map");
var searchOpen = document.querySelector(".search-btn");
var searchForm =  document.querySelector(".search-form");

if (searchOpen) {
  if (searchForm) {
    searchForm.classList.add("search-form--hide");
  };

  searchOpen.addEventListener("click", function (event) {
    event.preventDefault();
    searchForm.classList.toggle("search-form--hide");
    searchForm.classList.toggle("search-form--show");
  });
};

if (mapElement) {
  var map ="";
  google.maps.event.addDomListener(window, "load", init);
  google.maps.event.addDomListener(window, "resize", m_res );
  function init() {
      var mapOptions = {
        zoom: 9,
        mapTypeControl: false,
        zoomControl: true,
        scrollwheel: false,
        zoomControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
      streetViewControl: false,
      center: new google.maps.LatLng(34.831793, -111.762655),
    };

    map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(34.869977, -111.760947),
      map: map,
      optimized: false,
    });
    m_res();
  }

  function m_res(){
    google.maps.event.trigger(map, "resize");
    map.panTo(new google.maps.LatLng(34.831793, -111.762655));
  }
}
