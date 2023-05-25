function rep(){
    let outer_div=document.getElementById("outer_div");

    for(let i=0;i<16;i++){
       outer_div.innerHTML +=`<div id="inner_div" >
       <div id="flip_div">?</div>
        <img src="" alt="NoImage" id="image_tag"/>
        
    </div>`;
    
    }

    let inner_div=document.querySelectorAll("#inner_div");
    for(let i=0;i<inner_div.length;i +=2){
        for(let j=i;j<i+2 ;j++){
       inner_div[j].setAttribute("name",i)
        } 
    }

    let imgages=["imgs/business-3d-avocado.png",
        "imgs/business-3d-bananas.png",
    "imgs/business-3d-blueberry.png",
"imgs/business-3d-cherry.png",
"imgs/business-3d-mango.png",
"imgs/business-3d-red-apple.png",
"imgs/casual-life-3d-orange-and-half-of-orange-1.png",
"imgs/casual-life-3d-yellow-lemon-with-leaf.png"]
let count=0;
for(let j=0;j<inner_div.length;j +=2){
    let inner_div_img=document.getElementsByName(j);
    inner_div_img.forEach(function(div) {
        var imgs = div.querySelectorAll("img");
      
        imgs.forEach(function(img) {
          img.src = imgages[count];
        });
      });
      count++;
    }


}
rep();

function shuffleDivs() {
    var parent = document.getElementById("outer_div");
    var divs = parent.querySelectorAll("#inner_div");
  
    // Convert the HTMLCollection to an array
    var divsArray = Array.from(divs);
  
    // Randomly shuffle the array
    divsArray.sort(function() {
      return  0.5- Math.random();
    });
  
    // Clear the parent div
    parent.innerHTML = "";
  
    // Reattach the shuffled divs
    divsArray.forEach(function(div) {
      parent.appendChild(div);
    });
  }
  
  // Call the shuffleDivs function on page load or whenever needed
  shuffleDivs();
  

  function flip() {
    let innerDivs = document.querySelectorAll("#inner_div");
    let flippedCards = [];
    var moves=1;
    let timerStarted = false;
    


    function calculateScore(moves) {
      if (moves === 8) {
        document.getElementById("Score").innerHTML= "Score : 100%";
      } else if (moves > 8 && moves <= 11) {
        
        document.getElementById("Score").innerHTML= "Score : 90%";
      }else if (moves > 11 && moves <= 15) {
        
        document.getElementById("Score").innerHTML= "Score : 80%";
      }else if (moves > 15 && moves <= 18) {
        
        document.getElementById("Score").innerHTML= "Score : 70%";
      }else if (moves > 18 && moves <= 21) {
        
        document.getElementById("Score").innerHTML= "Score : 60%";
      }else if (moves > 21 && moves <= 25) {
        
        document.getElementById("Score").innerHTML= "Score : 50%";
      }
       else {
        document.getElementById("Score").innerHTML= "Score : 40%";
      }
    }
  
  

   
    function clickHandler() {
     
      if (this.classList.contains("flipped")) {
        // The clicked card is already flipped, do nothing
        return;
      }

      if (!timerStarted) {
        startTimer();
        timerStarted = true;
      }

      this.classList.add("flipped");
      flippedCards.push(this);
      
      if (this.style.transform === "rotateY(180deg)") {
        rotatedCount++;
      }
      if (flippedCards.length === 2) {
      document.getElementById("moves_display").innerHTML=moves++;


        // Two cards have been flipped, check for a match
        let card1 = flippedCards[0];
        let card2 = flippedCards[1];
        
        if (card1.getAttribute("name") === card2.getAttribute("name")) {
          // Match found
          flippedCards = [];
        } else {
          // No match, flip the cards back after a delay
          setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            flippedCards = [];
          }, 1000);
        }
      }
      calculateScore(moves);
      
    }
    
    
    for (let i = 0; i < innerDivs.length; i++) {
      innerDivs[i].addEventListener("click", clickHandler);
      
      
    }
    
  }

 
  

  let sec = 0;
  let min =0;
  let zero="0";
  function startTimer() {
    // Update the seconds and display them
    sec++;
    if(sec>60){
      sec=0;
      min++;

    }
    if(sec>9){
      zero="";
    }
    else{
      zero="0";
    }
    document.getElementById("time").innerHTML = min+" : "+zero+sec+ " ,min:sec";
    // Call the startTimer function again after 1 second
    setTimeout(startTimer, 1000);
  }
  
  
  
  
flip();


