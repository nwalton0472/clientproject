/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

function getMusicData(searchTerm) {
    var url= "https://api.soundcloud.com/tracks?q=beyonce&client_id=5aa8e389ba4e24b6106af5159ab3e344";
    $.ajax({
          url: url ,
          method: "GET",
          success: function(songs) {
              var imageSrc;
              var imageHtml;
              
              songs.forEach(function(song){
                  console.log(song);
              });
              
              
            
              $("body").append(imageHtml);
          },
        }); 
}

   
   
   
    $('#searchButton').click(function() {
        var searchTerm = $("#searchTerm").val();
        getMusicData(searchTerm);
        
        
        
        
        
        
    });