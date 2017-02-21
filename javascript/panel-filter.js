
function selectLinkProducts(idLink){

  $("#"+idLink).css("opacity", "1");
  $(".link-products a").not("#"+idLink).css("opacity", "0.5");
}

function selectLinkCountries(idLink){

  $("#"+idLink).css("opacity", "1");
  $(".link-countries a").not("#"+idLink).css("opacity", "0.5");
}

function selectProducts(idLink){
  var id = "#link-products-"+idLink;
  $(id).css("opacity", "1");
  $("#"+idLink+" a").not(id).css("opacity", "0.5");
}

function selectCountries(idLink){

  var id = "#link-countries-"+idLink;
  $(id).css("opacity", "1");
  $("#"+idLink+" a").not(id).css("opacity", "0.5");
}

function collapse(idToCollapse){

 $(".panel-collapse-region").not( idToCollapse).hide("slow");
  $(idToCollapse).toggle("slow");
  $(".foglia").hide("slow");
  $(".products").hide("slow");
  $(".countries").hide("slow");
}

function selectLinkRegion(id){
	var idCss = "#"+id;
	$(idCss).css("color", "#E4002B");
	$(idCss).parent().addClass("opened-tab");
	$(".panel-title-region").not("#"+$(idCss).parent().attr('id')).removeClass("opened-tab");
	$(".linkRegion").not(idCss).css("color", "black");
}

function collapseCountries(idToCollapse){

  $("#products-"+idToCollapse).hide();
  $("#countries-"+idToCollapse).show();
  $(".foglia").hide();
}

function collapseProducts(idToCollapse){

  $("#products-"+idToCollapse).show();
  $("#countries-"+idToCollapse).hide();
  $(".foglia").hide();
}

function collapseFoglia(idToCollapse){

  $(idToCollapse).show();
  $(".foglia").not(idToCollapse).hide();

}




/*gestione creazione dinamica dei pannelli filtro*/
function appendDetailsCountry(entry, element) {
	//"element id: link-products-AFRICA-abModels"
	//array name: sc_AFRICA_nigeria
	var res = element.id.split("-");
	$(".detail-poi").remove();
	var poi = window[entry+"_"+res[2]+"_"+res[3]];
	if(poi != undefined ){
	
		htmlList = "<div  class='foglia'>";
		for (var i = 0; i < poi.length; i++) {
			htmlList += appendDetailCountry(poi[i]);
		}
		htmlList += "</div>";
		//deve diventare relativo al parent
		var classParent = element.parentElement.parentElement.parentElement.getAttribute('class');
		$("." + classParent).append(htmlList);
	}
}

function appendDetailsPeople(entry, element) {
	//element id : link-countries-AFRICA-Marocco
	//array name: csp_AFRICA_nigeria
	var res = element.id.split("-");
	$(".detail-poi").remove();
	var poi = window[entry+"_"+res[2]+"_"+res[3]];
	if(poi != undefined ){
		htmlList = "<div  class='foglia'>";
		for (var i = 0; i < poi.length; i++) {
		htmlList += appendDetailPeople(poi[i]);
		}
	    htmlList += "</div>";
		var classParent = element.parentElement.parentElement.parentElement.getAttribute('class');
		$("."+ classParent).append(htmlList);	
	}


}			

		
function appendDetailCountry(poiElem) {

	htmlDetailCentres ="<div class='detail-poi' style='padding: 12px;'>";
	
	if( poiElem.hasOwnProperty('poiTitle') && poiElem.poiTitle!=""){
		htmlDetailCentres += "<p><b><font color='#E4002B'>"+ poiElem.poiTitle +"</font></b></p>" ;
	}
	//create first row
	if(poiElem.hasOwnProperty('capability') && poiElem.capability.length!=0){
		var  riga1 ="";
		riga1+= "<p><b>"+poiElem.capability[0];
		var i;
		for (i = 1; i < poiElem.capability.length; i++) {
			riga1 += ", " + poiElem.capability[i];
		}
		riga1 += "</b></p>";
		htmlDetailCentres+=riga1;
	}
	if( poiElem.hasOwnProperty('poiAddress') && poiElem.poiAddress!=""){
		htmlDetailCentres+="<p>"+ poiElem.poiAddress +"</p>";
	}	
	if( poiElem.hasOwnProperty('poiPhone') && poiElem.poiPhone!=""){
		htmlDetailCentres+= "<p>phone: "+ poiElem.poiPhone +"<p>";
	}
	if( poiElem.hasOwnProperty('poiEmail') && poiElem.poiEmail!=""){
		htmlDetailCentres+= "<p>email: "+ poiElem.poiEmail +"<p>";
	}
	
	htmlDetailCentres+="</div>";
	return htmlDetailCentres;
}

function appendDetailPeople(poiElem){

	htmlDetailCentres ="<div class='detail-poi' style='padding: 12px;'>";
	
	if( poiElem.hasOwnProperty('poiTitle') && poiElem.poiTitle!=""){
		htmlDetailCentres += "<p><b><font color='#E4002B'>"+ poiElem.poiTitle +"</font></b></p>" ;
	}
	
	if( poiElem.hasOwnProperty('poiPhone') && poiElem.poiPhone!=""){
		htmlDetailCentres+= "<p>phone: "+ poiElem.poiPhone +"<p>";
	}
	if( poiElem.hasOwnProperty('poiEmail') && poiElem.poiEmail!=""){
		htmlDetailCentres+= "<p>email: "+ poiElem.poiEmail +"<p>";
	}
	
	htmlDetailCentres+="</div>";
	return htmlDetailCentres;

}
			