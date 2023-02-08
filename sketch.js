function setup() {
    createCanvas(400, 400);
    model = new Model();

    //ADD EVENT LISTENERS
    var button = document.getElementById("add_button");
    button.addEventListener("click",function(){
      model.addItem("added content");
    });
  }
  
  function draw() {
    background(220);
    textAlign(CENTER);
    text("This is the P5.js sketch", width/2, height/2);
  }
