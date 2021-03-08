
function change(e, id){
   tabcontent = $('.content');
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].className = "content hidden md:grid-cols-3 grid-cols-1 gap-5 mt-5 px-5 justify-between py-10";
   }
 
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace("active", "");
   }
 
   document.getElementById(id).className = "content grid md:grid-cols-3 grid-cols-1 gap-5 mt-5 px-5 justify-between py-10";
   e.currentTarget.className = "active tablinks mx-2 md:mx-5 px-4 py-2 relative cursor-pointer duration-300 hover:text-yellow-500 select-none text-base md:text-xl";
} 


$('nav ul li').hover(function() {
	$(this).children('div').stop(true, false, true).slideToggle(300);
});
