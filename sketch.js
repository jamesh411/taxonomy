function setup() {
    createCanvas(400, 400);
    model = new Model();

    //ADD EVENT LISTENERS
    var button = document.getElementById("add_button");

    //WHEN BUTTON IS CLICKED
    button.addEventListener("click",function(){
      model.addItem("added content"); //*Connection to model class

      //Get the element with id: text_sample in HTML file:
      const element = document.getElementById("text_sample");

      // Create a clone of element with id: text_sample in HTML file:
      let new_element = element.cloneNode(true);
      console.log("new_element: ", new_element);
      
      // Append the newly created element on element with id: clone container
      const elementContainer = document.getElementById("clone_container");
      elementContainer.after(new_element);
      console.log("elementContainer: ", elementContainer);
    });

  }
  
  function draw() {
    background(220);
    textAlign(CENTER);
    text("This is the P5.js sketch", width/2, height/2);
  }
