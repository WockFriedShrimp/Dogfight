$(".increase").click(function(){
	$("img").attr("src", "https://i.pinimg.com/originals/8f/10/2c/8f102c305bead0ce5cb183a7532166f9.gif");
		$(".dang").fadeIn();
    $(".increase").hide();
    $(".decrease").hide();
    $(".starting-line").hide();
});


$(".decrease").dblclick(function(){
    $(".fire").show();
     $(".increase").hide();
    $(".decrease").hide();
    $(".starting-line").hide();
    $(".dont-fire").show();
});


$(".fire").click(function(){
	$("img").attr("src","https://c.tenor.com/60PzRmvEOTsAAAAC/war-thunder.gif" );
$(".dont-fire").hide();
	$("button").hide();
    $(".miss").show();
});
                      
$(".dont-fire").dblclick(function(){
	$(".escape").show();
$(".dont-fire").hide();
    $(".fire").hide();
    $(".fire-2").show();
});                 

$(".escape").dblclick(function(){
	$(".nice-job").fadeIn();
$("img").attr("src", "https://i-com.cdn.gaijin.net/monthly_2019_08/616554758_WarThunder2019_08.20-00_12_02_29_DVR.mp4_000047451.gif.8bc93712d773b3b028ac6cb00c91e993.gif");
    $("button").hide();
});
                 
$(".fire-2").click(function(){
	$("img").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/SAAB_35_Draken_performing_the_Cobra_maneuver.gif/298px-SAAB_35_Draken_performing_the_Cobra_maneuver.gif" );
    $("button").hide();
    $(".oops").fadeIn();
});                
                      
      
