$(function() {



    String.prototype.countWords = function(){
        return this.split(/\s+/).length;
      }



      function getDiff(text1,text2){
        var diffRange = []
        var currentRange = undefined
        for(var i=0;i<text1.length;i++){
          if(text1[i] != text2[i]){
            //Found a diff! 
            if(currentRange == undefined){
              //Start a new range 
              currentRange = [i]
            }
          }
          if(currentRange != undefined && text1[i] == text2[i]){
            //End of range! 
            currentRange.push(i)
            diffRange.push(currentRange)
            currentRange = undefined
          }
        }
        //Push any last range if there's still one at the end 
        if(currentRange != undefined){
          currentRange.push(i)
          diffRange.push(currentRange)
        }
        return diffRange;
      }



      
      $("#limit").text($(".text-block:eq(0)").val().countWords());
    $('.rephrase').click(function() {
        $.ajax({
            url: "https://reqres.in/api/login",
            type: "POST",
            data: {
                "text": "ORIGINAL TEXT"
            },
            success: function(response,status){
                console.log(JSON.stringify(response));
                $("#percent").text(response["originality"]);
                if(response[originality] > 60){
                    $("#percent").css({'color':'green'});
                }
                if(response[originality] < 60 && response[originality] > 40){
                    $("#percent").css({'color':'orange'});
                }
                if(response[originality] < 40){
                    $("#percent").css({'color':'red'});
                }
                
                $(".text-block:eq(1)").text(response["text"]);
                
                      
                var text1 = $(".text-block:eq(1)").html();
                var text2 = $(".text-block:eq(0)").val();
                /*
                var diffRange = getDiff(text1,text2)
                for(var i=diffRange.length-1;i>=0;i--){
                  var range = diffRange[i]
                  //Inject spans around the range
                  var s = range[0]//start
                  var e = range[1]//end
                  text1 = text1.slice(0,s) + "<span class='highlight'>" + text1.slice(s,e) + "</span>" + text1.slice(e)
                }
               $(".text-block:eq(1)").html(text1); 
               */
              
              $(".text-block:eq(1)").html(diffString(text2,text1));
              $("del").remove(); // Удаляем теги del, в них показаны зачеркнутые варианты 1 текста

            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
              
                    

                alert("die Scheiße");
             }

        });
    });

    $('.text-block:eq(0)').keyup(function(){
        $("#limit").text($(".text-block:eq(0)").val().countWords());
        if($(".text-block:eq(0)").val().countWords() > 950){
            $("#limit").css({'color':'red'});
        }
        if($(".text-block:eq(0)").val().countWords() < 950 && $(".text-block:eq(0)").val().countWords() > 900){
            $("#limit").css({'color':'orange'});
        }
        if($(".text-block:eq(0)").val().countWords() < 900){
            $("#limit").css({'color':'green'});
        }
    });


    
    
});