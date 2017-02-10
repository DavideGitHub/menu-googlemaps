
function selectLinkProducts(idLink){

  $("#"+idLink).css("opacity", "1");
  $(".link-products a").not("#"+idLink).css("opacity", "0.5");
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