//AJAX(Asynchronous JavaScript And Xml)
//Arka planda veri yüklenirken tüm sayfayı yeniden yüklemeye gerek kalmadan görüntüleme sağlar
//Jquery ile kodlanması işlevseldir. get ve post işlemleri ile Html,json,xml,metin tipinde veri alabilir gönderebilir.


//Load Metodu $(selector).load(Url,data(isteğe bağşı istekle birlikte gönderme),callback(fonksiyonu))
// responseTxt başarılı ise içerik, statusTxt aramanın durumu, xhr request nesnesi

// $(function(){
//     $("#deneme").click(function(){
//         $("div").load("deneme.txt", function(responseTxt,statusTxt,xhr){
//              if(statusTxt="success")
//              alert("İçerik yüklendi")
//              else if (statusTxt="error")
//              alert("Hata"+ xhr.status +" :" +xhr.statusTExt);
//         });
//     });
// });

//Jquery- Ajax Get..Post $.get(Url,callback) $.post(url,data,callback)

//   $(function(){
//       $("#deneme").click(function(){
//           $.get("deneme.txt",function(data,status){
//               $("#result").html("verimiz:" +data +" <br> Durum :" + status)
//           });
//       });
//   });


//   $(function(){
//     $("#deneme").click(function(){
//         $.post("deneme.txt",
//         {name:"Hakan"},
//         function(data)
//         {
//             $("#result").html(data)
//         })
//     })
// })

//Ajax
// $(function(){
//     $("#deneme").click(function(){
//         $.ajax({
//            url:"deneme.txt",
//            success: function(result){
//                $("#result").html(result)
//            }
//         })
//     })
// })
//Ajax GetJson  // getScript js dosyası yükler // JSON.parse
$(function(){
    $("#deneme").click(function(){
      $.getJSON("deneme.json",function(result){
          $("#result").html("isim: " + result.name + "<br> Yas:"+ result.age+ "<br> Açıklama" +result.Aciklama)
      })
       
    })
})