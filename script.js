// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

    // ambil isi href
   var tujuan = $(this).attr('href');
   // tangkap elemen ysb
  var elementujuan = $(tujuan);

  //pindahkan scroll
 $('body').animate({
     scrolltop: elementujuan.offset().top -50
 }, 1000,'swing') ;

 e.preventDefault();

});