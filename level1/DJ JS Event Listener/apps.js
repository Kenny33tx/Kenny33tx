const square = document.getElementById("square")
 
square.addEventListener("mouseover",function(e)
{
   console.log
   square.style.backgroundColor = "blue";
})

square.addEventListener("mousedown",function()
{
   square.style.backgroundColor = "red";
})

square.addEventListener("mouseup",function()
{
   square.style.backgroundColor = "yellow";
})

square.addEventListener("dblclick", function() 
{
  square.style.backgroundColor = "green";

})


keyPressed.addEventListener("keypress", function(e) {
    pressedKey(e) 
      if(e.key === "b"){square.style.backgroundColor = "blue"}
      else if(e.key === "r"){square.style.backgroundColor = "red"}
      else if(e.key === "y"){square.style.backgroundColor = "yellow"}
      else if(e.key === "g"){square.style.backgroundColor = "green"}
  }

)
