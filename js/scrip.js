// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

        // ambil isi href
       var tujuan= $ (this).attr('href');
      // tangkap elemen ybs
      var elementujuan= $ (tujuan);

     //pindahkan scroll
     $('body').animate({
         scrolltop: elementujuan.offset().top -50
     });

     e.preventdefault();

});