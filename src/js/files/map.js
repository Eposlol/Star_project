
// function mapAdd() {
// 	let tag = document.createElement('script');
// 	tag.src = "https://maps.google.com/maps/api/js?sensor=false&amp;key=&callback=mapInit";
// 	let firstScriptTag = document.getElementsByTagName('script')[0];
// 	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// }
// function mapInit(n = 1) {
// 	google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
// 		var map = this;
// 		var ov = new google.maps.OverlayView();
// 		ov.onAdd = function () {
// 			var proj = this.getProjection();
// 			var aPoint = proj.fromLatLngToContainerPixel(latlng);
// 			aPoint.x = aPoint.x + offsetX;
// 			aPoint.y = aPoint.y + offsetY;
// 			map.panTo(proj.fromContainerPixelToLatLng(aPoint));
// 			//map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
// 		}
// 		ov.draw = function () { };
// 		ov.setMap(this);
// 	};
// 	var markers = new Array();
// 	var infowindow = new google.maps.InfoWindow({
// 		//pixelOffset: new google.maps.Size(-230,250)
// 	});
// 	var locations = [
// 		[new google.maps.LatLng(53.819055, 27.8813694)],
// 		[new google.maps.LatLng(53.700055, 27.5513694)],
// 		[new google.maps.LatLng(53.809055, 27.5813694)],
// 		[new google.maps.LatLng(53.859055, 27.5013694)],
// 	]
// 	var options = {
// 		zoom: 10,
// 		panControl: false,
// 		mapTypeControl: false,
// 		center: locations[0][0],
// 		styles: [{ "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#e0efef" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "hue": "#1900ff" }, { "color": "#c0e8e8" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "lightness": 700 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#7dcdcd" }] }],
// 		scrollwheel: false,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	};
// 	var map = new google.maps.Map(document.getElementById('map'), options);
// 	var icon = {
// 		url: 'img/icons/map.svg',
// 		scaledSize: new google.maps.Size(18, 20),
// 		anchor: new google.maps.Point(9, 10)
// 	}
// 	for (var i = 0; i < locations.length; i++) {
// 		var marker = new google.maps.Marker({
// 			icon: icon,
// 			position: locations[i][0],
// 			map: map,
// 		});
// 		google.maps.event.addListener(marker, 'click', (function (marker, i) {
// 			return function () {
// 				for (var m = 0; m < markers.length; m++) {
// 					markers[m].setIcon(icon);
// 				}
// 				var cnt = i + 1;
// 				//infowindow.setContent(document.querySelector('.events-map__item_' + cnt).innerHTML);
// 				//infowindow.open(map, marker);
// 				marker.setIcon(icon);
// 				map.setCenterWithOffset(marker.getPosition(), 0, 0);
// 				setTimeout(function () {

// 				}, 10);
// 			}
// 		})(marker, i));
// 		markers.push(marker);
// 	}
// 	if (n) {
// 		var nc = n - 1;
// 		setTimeout(function () {
// 			google.maps.event.trigger(markers[nc], 'click');
// 		}, 500);
// 	}
// }
// if (document.querySelector('#map')) {
// 	mapAdd();
// }

// YA
// function map(n) {
// 	ymaps.ready(init);
// 	function init() {
// 		// ???????????????? ??????????.
// 		var myMap = new ymaps.Map("map", {
// 			// ???????????????????? ???????????? ??????????.
// 			// ?????????????? ???? ??????????????????: ??????????????, ????????????????.
// 			// ?????????? ???? ???????????????????? ???????????????????? ???????????? ?????????? ??????????????,
// 			// ???????????????????????????? ???????????????????????? ?????????????????????? ??????????????????.
// 			controls: [],
// 			center: [43.585525, 39.723062],
// 			// ?????????????? ??????????????????????????????. ???????????????????? ????????????????:
// 			// ???? 0 (???????? ??????) ???? 19.
// 			zoom: 10
// 		});

// 		let myPlacemark = new ymaps.Placemark([43.585525, 39.723062], {
// 		},{
// 			// ??????????.
// 			//balloonContentHeader: 'Mistoun',
// 			//balloonContentBody: '????????????, ???????????????????????? 40??1',
// 			//balloonContentFooter: '+ 7(495) 507-54 - 90',
// 			//hasBalloon: true,
// 			//hideIconOnBalloonOpen: true,

// 			hasBalloon: false,
// 			hideIconOnBalloonOpen: false,
// 			// ???????????????????? ?????????????? ???????????? ?????? ????????????.
// 			iconLayout: 'default#imageWithContent',
// 			// ???????? ?????????????????????? ???????????? ??????????.
// 			iconImageHref: 'img/icons/map.svg',
// 			// ?????????????? ??????????.
// 			iconImageSize: [40, 40],
// 			// ???????????????? ???????????? ???????????????? ???????? ???????????? ????????????????????????
// 			// ???? "??????????" (?????????? ????????????????).
// 			iconImageOffset: [-20, -20],
// 			// ???????????????? ???????? ?? ???????????????????? ???????????????????????? ???????? ?? ??????????????????.
// 			iconContentOffset: [0, 0],
// 		});
// 		myMap.geoObjects.add(myPlacemark);

// 		myMap.behaviors.disable('scrollZoom');
// 		myMap.behaviors.disable('drag');
// 	}
// 	myMap.controls.remove('geolocationControl'); // ?????????????? ????????????????????
// 	myMap.controls.remove('searchControl'); // ?????????????? ??????????
// 	myMap.controls.remove('trafficControl'); // ?????????????? ???????????????? ??????????????
// 	myMap.controls.remove('typeSelector'); // ?????????????? ??????
// 	myMap.controls.remove('fullscreenControl'); // ?????????????? ???????????? ???????????????? ?? ?????????????????????????? ??????????
// 	myMap.controls.remove('zoomControl'); // ?????????????? ?????????????? ????????????????????????
// 	myMap.controls.remove('rulerControl'); // ?????????????? ?????????????? ????????????
// 	myMap.behaviors.disable(['scrollZoom']); // ?????????????????? ???????????? ?????????? (??????????????????????)

// 	 myMap.geoObjects
// 	.add(myGeoObject);
// }


window.onload = function () {
	ymaps.ready(init);


function init() {
	// ???????????????? ??????????.
	var myMap = new ymaps.Map("map", {
		// ???????????????????? ???????????? ??????????.
		// ?????????????? ???? ??????????????????: ??????????????, ????????????????.
		// ?????????? ???? ???????????????????? ???????????????????? ???????????? ?????????? ??????????????,
		// ???????????????????????????? ???????????????????????? ?????????????????????? ??????????????????.
		controls: [],
		center: [56.8584, 35.9006],
		// ?????????????? ??????????????????????????????. ???????????????????? ????????????????:
		// ???? 0 (???????? ??????) ???? 19.
		zoom: 9
	});
	// myMap.geoObjects
	let savatievo = new ymaps.Placemark([57.003904, 35.7292109], {
		balloonContentHeader: '<div class="map__header-text"><span>?????????????? ????????????????????</span></div><p class="map__body-text">???????? ?????????? ???? 150 000 ??????</p><a class="map__footer-btn" href="pribregniy.html">??????????????????</a>',
		balloonContentBody: '',
		balloonContentFooter: '<div style="height: 20px"></div>',
		hasBalloon: true,
		hideIconOnBalloonOpen: true
	}, {
		// ??????????.
		//balloonContentHeader: 'Mistoun',
		//balloonContentBody: '????????????, ???????????????????????? 40??1',
		//balloonContentFooter: '+ 7(495) 507-54 - 90',
		// hasBalloon: true,
		// hideIconOnBalloonOpen: true,
		
		// hasBalloon: false,
		// hideIconOnBalloonOpen: false,
		// ???????????????????? ?????????????? ???????????? ?????? ????????????.
		iconLayout: 'default#imageWithContent',
		// ???????? ?????????????????????? ???????????? ??????????.
		iconImageHref: 'img/icons/metka.svg',
		// ?????????????? ??????????.
		iconImageSize: [50, 50],
		// ???????????????? ???????????? ???????????????? ???????? ???????????? ????????????????????????
		// ???? "??????????" (?????????? ????????????????).
		iconImageOffset: [-20, -20],
		// ???????????????? ???????? ?? ???????????????????? ???????????????????????? ???????? ?? ??????????????????.
		iconContentOffset: [0, 0],
	});
	// myMap.balloon.open([56.837140, 36.104917], "???????????????????? ????????????", {
    //     // ??????????: ???? ???????????????????? ???????????? ????????????????.
    //     closeButton: true
    // });
	let pribregniy = new ymaps.Placemark([56.837140, 36.104917], {
		balloonContentHeader: '<div class="map__header-text"><span>???????????????????????? ??????????</span></div><p class="map__body-text">???????? ?????????? ???? 150 000 ??????</p><a class="map__footer-btn" href="#">??????????????????</a>',
		balloonContentBody: '',
		balloonContentFooter: '<div style="height: 20px"></div>',
		hasBalloon: true,
		hideIconOnBalloonOpen: true
	}, {
		// hasBalloon: false,
		// hideIconOnBalloonOpen: false,
		// ???????????????????? ?????????????? ???????????? ?????? ????????????.
		iconLayout: 'default#imageWithContent',
		// ???????? ?????????????????????? ???????????? ??????????.
		iconImageHref: 'img/icons/metka.svg',
		// ?????????????? ??????????.
		iconImageSize: [50, 50],
		// ???????????????? ???????????? ???????????????? ???????? ???????????? ????????????????????????
		// ???? "??????????" (?????????? ????????????????).
		iconImageOffset: [-20, -20],
		// ???????????????? ???????? ?? ???????????????????? ???????????????????????? ???????? ?? ??????????????????.
		iconContentOffset: [0, 0],
		
	});
	myMap.geoObjects.add(savatievo);
	myMap.geoObjects.add(pribregniy);
	// myMap.behaviors.disable('scrollZoom');
	// myMap.behaviors.disable('drag');
	myMap.controls.remove('geolocationControl'); // ?????????????? ????????????????????
	myMap.controls.remove('searchControl'); // ?????????????? ??????????
	myMap.controls.remove('trafficControl'); // ?????????????? ???????????????? ??????????????
	myMap.controls.remove('typeSelector'); // ?????????????? ??????
	myMap.controls.remove('fullscreenControl'); // ?????????????? ???????????? ???????????????? ?? ?????????????????????????? ??????????
	// myMap.controls.remove('zoomControl'); // ?????????????? ?????????????? ????????????????????????
	myMap.controls.remove('rulerControl'); // ?????????????? ?????????????? ????????????
	// myMap.behaviors.disable(['scrollZoom']); // ?????????????????? ???????????? ?????????? (??????????????????????)

	//  myMap.geoObjects
	// .add(myGeoObject);
}
}

