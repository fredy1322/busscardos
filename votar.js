
$(document).ready(function(){

    var BUSSCARDD = 0
    var totalBUSSCARDD = 0

  
    function calcular_total(){
    
      var porcentaje1 = BUSSCARDD*100/(FUSIONPLUS+BUSSSTAR360+BUSSCARDD)
    

  
      setTimeout(function(){
        $("#porcentaje").html( "%"+porcentaje1 )
        $("#total").html("Total: " + totalBUSSCARDD )
        $("#BUSSCARDD").html("BUSSSTARDD: " + totalBUSSCARDD )

        
      })
      
    }


    var BUSSSTAR360 = 0
    var totalBUSSSTAR360 = 0
  
    function calcular_total360(){
    
        var porcentaje2 = BUSSSTAR360*100/(FUSIONPLUS+BUSSSTAR360+BUSSCARDD)

  
      setTimeout(function(){
        $("#porcentaje").html( "%"+porcentaje2 )
        $("#total").html("Total: " + totalBUSSSTAR360 )
        $("#BUSSSTAR360").html("BUSSSTAR360: " + BUSSSTAR360 )
      })
      
    }


    var FUSIONPLUS = 0
    var totalFUSIONPLUS = 0
  
    function calcular_totalplus(){
    
        var porcentaje3 = FUSIONPLUS*100/(FUSIONPLUS+BUSSSTAR360+BUSSCARDD)
    

  
      setTimeout(function(){
        $("#porcentaje").html( "%"+porcentaje3 )
        $("#total").html("Total: " + totalFUSIONPLUS )
        $("#FUSIONPLUS").html("FUSIONPLUS: " + FUSIONPLUS )
      })
      
    }
  
    
    $("#BUSSCARDD").click(function(){
      ++BUSSCARDD
      ++totalBUSSCARDD
      calcular_total()
      
    })
    $("#BUSSSTAR360").click(function(){
        ++BUSSSTAR360
        ++totalBUSSSTAR360
        calcular_total360()
    })
    $("#FUSIONPLUS").click(function(){
        ++FUSIONPLUS
        ++totalFUSIONPLUS
        calcular_totalplus()
    })
  })
