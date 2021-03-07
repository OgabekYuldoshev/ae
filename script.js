
function change(e, id){
   tabcontent = $('.content');
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].className = "content flex hidden flex-wrap mt-5 px-5 justify-between py-14";
   }
 
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace("active", "");
   }
 
   document.getElementById(id).className = "content flex block flex-wrap mt-5 px-5 justify-between py-14";
   e.currentTarget.className = "active tablinks mx-5 px-4 py-2 relative cursor-pointer duration-300 hover:text-yellow-500 text-xl";
} 


$('nav ul li').hover(function() {
	$(this).children('div').stop(true, false, true).slideToggle(300);
});