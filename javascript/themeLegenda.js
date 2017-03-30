

function getGoogleMapsNewWidget(centerLat, centerLon, mapsZoom, idDivMap, pois, centerAddress) {
	var mainIcon = "./images/custom/mainMarker.png";
	var abroadIcon = "./images/custom/abroadMarker.png";
	var rapresentativeIcon = "./images/custom/rapresentativeMarker.png";
	var academyIcon = "./images/custom/academyMarker.png";
	var plantIcon = "./images/custom/plantMarker.png";
		
	var iIcon = mainIcon;
	
	var bounds = new google.maps.LatLngBounds();
	var map;
	var infowindow = new google.maps.InfoWindow();
	
	if (centerLat && centerLon){
		var centerPos = new google.maps.LatLng(parseFloat(centerLat), parseFloat(centerLon));
		var mapOptions = {
		  center: centerPos,
		  zoom: parseInt(mapsZoom)
		};
		var map = new google.maps.Map(document.getElementById(idDivMap), mapOptions);
		if (pois.pois){
			if (pois.pois.length == 0){
				var weatherLayer = new google.maps.weather.WeatherLayer({
					temperatureUnits: google.maps.weather.TemperatureUnit.CELSIUS
				});
				weatherLayer.setMap(map);
			}
			for (var i = 0; i < pois.pois.length; i++){
				var poi = pois.pois[i];
				if (poi.poiType == "ABROAD"){
					iIcon = abroadIcon;
				}
				else if (poi.poiType == "RAPRESENTATIVE"){
					iIcon = rapresentativeIcon;
				}
				else if (poi.poiType == "ACADEMY"){
					iIcon = academyIcon;
				}
				else if (poi.poiType == "PLANT"){
					iIcon = plantIcon;
				}
				else{
					iIcon = mainIcon;
				}
				if (poi.poiLatitude && poi.poiLongitude){
					var title = poi.poiTitle;
					var pos = new google.maps.LatLng(poi.poiLatitude, poi.poiLongitude);
					
					var contentString = "<h2>" + poi.poiTitle + "</h2>";
					contentString += "<div class=\"gmdleft\">";
					contentString += "<p>" + poi.poiAddress + "</p>";
					if (poi.poiFirstPhone){
						contentString += "<p>" + poi.poiFirstPhone + "  " + poi.poiOthersPhone + "</p>";
					}
					if (poi.poiEmail){
						contentString += "<p>" +  poi.poiEmail +"</p>";
					}
					if (poi.poiLink){
						contentString += "<p>" +  poi.poiLink +"</p>";
					}
					if (poi.poiImage){
										
						contentString += "<img style=\"max-width: 150px;max-height:150px;padding-top: 5px;\" alt=\"" + poi.poiTitle + "\" src=\"" +  poi.poiImage + "\">";
										
					}					
					contentString += "</br>" + poi.poiContent;
					contentString += "</div>";

					(function(title, content, pIcon, posP){	
						var marker = new google.maps.Marker({
							map:map,
							animation: google.maps.Animation.DROP,
							position: posP,
							icon: pIcon,
							title: title
						  });
						
						google.maps.event.addListener(marker, "click", function() {
								infowindow.setContent(content);
								infowindow.open(map,marker);
						});
					})(title, contentString, iIcon, pos);
				}
				else{
					var address = poi.poiAddress;
					var geocoder2 = new google.maps.Geocoder();
					var title = poi.poiTitle;
					var contentString = "<h2>" + poi.poiTitle + "</h2>";
					contentString += "<div class=\"gmdleft\">";
					contentString += "<p>" + poi.poiAddress + "</p>";
					if (poi.poiFirstPhone){
						contentString += "<p>" + poi.poiFirstPhone + "  " + poi.poiOthersPhone + "</p>";
					}
					if (poi.poiEmail){
						contentString += "<p>" +  poi.poiEmail +"</p>";
					}
					if (poi.poiLink){
						contentString += "<p>" +  poi.poiLink +"</p>";
					}
					if (poi.poiImage){
						
						contentString += "<img style=\"max-width: 150px;max-height:150px;padding-top: 5px;\" alt=\"" + poi.poiTitle + "\" src=\"" +  poi.poiImage + "\">";
										
					}
					contentString += "</br>" + poi.poiContent;
					contentString += "</div>";
										
					(function(title, content, pIcon){
						geocoder2.geocode( { 'address': address}, function(results, status) {
							var latitude = 0;
							var longitude = 0;		      	
							if (status == google.maps.GeocoderStatus.OK) {
			
								latitude = results[0].geometry.location.lat();
								longitude = results[0].geometry.location.lng();
								var pos = new google.maps.LatLng(latitude, longitude);
																		
								var marker = new google.maps.Marker({
									map:map,
									animation: google.maps.Animation.DROP,
									position: pos,
									icon: pIcon,
									title: title
								  });
								
								google.maps.event.addListener(marker, "click", function() {
										infowindow.setContent(content);
										infowindow.open(map,marker);
								});	
							} 
					
						});
					})(title, contentString, iIcon);	
				}
			}
		}						
	}
	else{
		var geocoder = new google.maps.Geocoder();
    	var address = centerAddress;
    	if (address){
			geocoder.geocode( { 'address': address}, function(results, status) {
				var latitude = 0;
				var longitude = 0;		      	
				if (status == google.maps.GeocoderStatus.OK) {

					latitude = results[0].geometry.location.lat();
					longitude = results[0].geometry.location.lng();
					
				} 
			
				var centerPos = new google.maps.LatLng(latitude, longitude);
				var mapOptions = {
				  center: centerPos,
				  zoom: parseInt(mapsZoom)
				};
				var map = new google.maps.Map(document.getElementById(idDivMap), mapOptions);
				
				
				if (pois.pois){
					if (pois.pois.length == 0){
						var weatherLayer = new google.maps.weather.WeatherLayer({
							temperatureUnits: google.maps.weather.TemperatureUnit.CELSIUS
						});
						weatherLayer.setMap(map);
					}
					for (var i = 0; i < pois.pois.length; i++){
						var poi = pois.pois[i];
						if (poi.poiType == "ABROAD"){
							iIcon = abroadIcon;
						}
						else if (poi.poiType == "RAPRESENTATIVE"){
							iIcon = rapresentativeIcon;
						}
						else if (poi.poiType == "ACADEMY"){
							iIcon = academyIcon;
						}
						else if (poi.poiType == "PLANT"){
							iIcon = plantIcon;
						}
						else{
							iIcon = mainIcon;
						}
						if (poi.poiLatitude && poi.poiLongitude){
							var title = poi.poiTitle;
							var pos = new google.maps.LatLng(poi.poiLatitude, poi.poiLongitude);
							
							var contentString = "<h2>" + poi.poiTitle + "</h2>";
							contentString += "<div class=\"gmdleft\">";
							contentString += "<p>" + poi.poiAddress + "</p>";
							if (poi.poiFirstPhone){
								contentString += "<p>" + poi.poiFirstPhone + "  " + poi.poiOthersPhone + "</p>";
							}
							if (poi.poiEmail){
								contentString += "<p>" +  poi.poiEmail +"</p>";
							}
							if (poi.poiLink){
								contentString += "<p>" +  poi.poiLink +"</p>";
							}
							if (poi.poiImage){
								
								contentString += "<img style=\"max-width: 150px;max-height:150px;padding-top: 5px;\" alt=\"" + poi.poiTitle + "\" src=\"" +  poi.poiImage + "\">";
												
							}		
							contentString += "</br>" + poi.poiContent;
							contentString += "</div>";
															
							(function(title, content, pIcon, posP){	
								var marker = new google.maps.Marker({
									map:map,
									animation: google.maps.Animation.DROP,
									position: posP,
									icon: pIcon,
									title: title
								  });
								
								google.maps.event.addListener(marker, "click", function() {
										infowindow.setContent(content);
										infowindow.open(map,marker);
								});
							})(title, contentString, iIcon, pos);
						}
						else{
							var address = poi.poiAddress;
							var geocoder2 = new google.maps.Geocoder();
							var title = poi.poiTitle;
							
							var contentString = "<h2>" + poi.poiTitle + "</h2>";
							contentString += "<div class=\"gmdleft\">";
							contentString += "<p>" + poi.poiAddress + "</p>";
							if (poi.poiFirstPhone){
								contentString += "<p>" + poi.poiFirstPhone + "  " + poi.poiOthersPhone + "</p>";
							}
							if (poi.poiEmail){
								contentString += "<p>" +  poi.poiEmail +"</p>";
							}
							if (poi.poiLink){
								contentString += "<p>" +  poi.poiLink +"</p>";
							}
							if (poi.poiImage){
								
								contentString += "<img style=\"max-width: 150px;max-height:150px;padding-top: 5px;\" alt=\"" + poi.poiTitle + "\" src=\"" +  poi.poiImage + "\">";
												
							}
							contentString += "</br>" + poi.poiContent;
							contentString += "</div>";
														
							(function(title, content, pIcon){
								geocoder2.geocode( { 'address': address}, function(results, status) {
									var latitude = 0;
									var longitude = 0;		      	
									if (status == google.maps.GeocoderStatus.OK) {
					
										latitude = results[0].geometry.location.lat();
										longitude = results[0].geometry.location.lng();
										
										var pos = new google.maps.LatLng(latitude, longitude);
																				
										var marker = new google.maps.Marker({
											map:map,
											animation: google.maps.Animation.DROP,
											position: pos,
											icon: pIcon,
											title: title
										  });
										
										google.maps.event.addListener(marker, "click", function() {
												infowindow.setContent(content);
												infowindow.open(map,marker);
										});														
									} 
								});
							})(title, contentString, iIcon);
						}
					}
				}	
			});
		}
		else{
			var bounds = new google.maps.LatLngBounds();
			var mapOptions = {
			  zoom: parseInt(mapsZoom)
			};
			
			var nopoi = false;
			if (pois.pois){
				if (pois.pois.length == 0){
					nopoi = true;
					var centerPos = new google.maps.LatLng(0, 0);
					var mapOptions = {
					  center: centerPos,
					  zoom: parseInt(mapsZoom)
					};
				}
			}
			else{
				nopoi=true;
				var centerPos = new google.maps.LatLng(0, 0);
				var mapOptions = {
				  center: centerPos,
				  zoom: parseInt(mapsZoom)
				};
			}
			
			var map = new google.maps.Map(document.getElementById(idDivMap), mapOptions);
			
			if (nopoi){
				var weatherLayer = new google.maps.weather.WeatherLayer({
					temperatureUnits: google.maps.weather.TemperatureUnit.CELSIUS
				});
				weatherLayer.setMap(map);
			}
			else{
				for (var i = 0; i < pois.pois.length; i++){
					var poi = pois.pois[i];
					if (poi.poiType == "ABROAD"){
						iIcon = abroadIcon;
					}
					else if (poi.poiType == "RAPRESENTATIVE"){
						iIcon = rapresentativeIcon;
					}
					else if (poi.poiType == "ACADEMY"){
						iIcon = academyIcon;
					}
					else if (poi.poiType == "PLANT"){
						iIcon = plantIcon;
					}
					else{
						iIcon = mainIcon;
					}
					if (poi.poiLatitude && poi.poiLongitude){
						var title = poi.poiTitle;
						var pos = new google.maps.LatLng(poi.poiLatitude, poi.poiLongitude);
						bounds.extend(pos);
						map.fitBounds(bounds);	

						var contentString = "<h2 style='color:red'>" + poi.poiTitle + "</h2>";
						contentString += "<div class=\"gmdleft\">";
						contentString += "<p>" + poi.poiAddress + "</p>";
						if (poi.poiFirstPhone){
							contentString += "<p>" + poi.poiFirstPhone + "  " + poi.poiOthersPhone + "</p>";
						}
						if (poi.poiEmail){
							contentString += "<p>" +  poi.poiEmail +"</p>";
						}
						if (poi.poiLink){
							contentString += "<p>" +  poi.poiLink +"</p>";
						}
						if (poi.poiImage){
							
							contentString += "<img style=\"max-width: 150px;max-height:150px;padding-top: 5px;\" alt=\"" + poi.poiTitle + "\" src=\"" +  poi.poiImage + "\">";
											
						}
						contentString += "</br>" + poi.poiContent;
						contentString += "</div>";
						
						(function(title, content, pIcon, posP){	
							var marker = new google.maps.Marker({
								map:map,
								animation: google.maps.Animation.DROP,
								position: posP,
								icon: pIcon,
								title: title
							  });
							
							google.maps.event.addListener(marker, "click", function() {
									infowindow.setContent(content);
									infowindow.open(map,marker);
							});
						})(title, contentString, iIcon, pos);
					}
					else{
						var address = poi.poiAddress;
						var geocoder2 = new google.maps.Geocoder();
						var title = poi.poiTitle;

						var contentString = "<h2>" + poi.poiTitle + "</h2>";
						contentString += "<div class=\"gmdleft\">";
						contentString += "<p>" + poi.poiAddress + "</p>";
						if (poi.poiFirstPhone){
							contentString += "<p>" + poi.poiFirstPhone + "  " + poi.poiOthersPhone + "</p>";
						}
						if (poi.poiEmail){
							contentString += "<p>" +  poi.poiEmail +"</p>";
						}
						if (poi.poiLink){
							contentString += "<p>" +  poi.poiLink +"</p>";
						}
						if (poi.poiImage){
							
							contentString += "<img style=\"max-width: 150px;max-height:150px;padding-top: 5px;\" alt=\"" + poi.poiTitle + "\" src=\"" +  poi.poiImage + "\">";
											
						}
						contentString += "</br>" + poi.poiContent;
						contentString += "</div>";
												
						contentString += "</br>" + poi.poiContent;									
						(function(title, content, pIcon){
							geocoder2.geocode( { 'address': address}, function(results, status) {
								var latitude = 0;
								var longitude = 0;		      	
								if (status == google.maps.GeocoderStatus.OK) {
				
									latitude = results[0].geometry.location.lat();
									longitude = results[0].geometry.location.lng();
									
									var pos = new google.maps.LatLng(latitude, longitude);
									bounds.extend(pos);
									map.fitBounds(bounds);																							
									var marker = new google.maps.Marker({
										map:map,
										animation: google.maps.Animation.DROP,
										position: pos,
										icon: pIcon,
										title: title
									  });
									
									google.maps.event.addListener(marker, "click", function() {
											infowindow.setContent(content);
											infowindow.open(map,marker);
									});														
								} 
							});
						})(title, contentString, iIcon);
					}
				}
			}
			/*
			var legend = document.getElementById('legend_service_centre');
		
			map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);*/
			
		}				
	}
	
	return map;
}
