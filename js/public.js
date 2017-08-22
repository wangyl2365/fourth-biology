$(function(){
	// top site
	 $(".hover-ent").hover(function(){
	 	$(this).addClass("cur");
	 	$(this).find(".shadow-box").removeClass("hide");
	 },function(){
	 	$(this).removeClass("cur");
	 	$(this).find(".shadow-box").addClass("hide");
	 })

	 // nav
	 $(".nav-list li").hover(function(){
	 	$(this).find(".level-nav").removeClass("hide");
	 },function(){
	 	$(this).find(".level-nav").addClass("hide");
	 })

	 // search-size
	 $(".search-size").click(function(){
	 	if($(this).hasClass("cur")){
	 		$(this).removeClass("cur");
	 		$(this).find(".title-list").hide();
	 		return;
	 	}
	 	$(this).addClass("cur");
	 	$(this).find(".title-list").show();
	 })
 


})