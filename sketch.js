var titles;
var records;
var results;
var data;

function preload() {
  // Load the data from the csv file
  data = loadTable("ebird.csv", "csv", "header");
}

function setup() {
   createCanvas(windowWidth,windowHeight/2);
   titles = data.columns;
   records = data.rows;
   results = [];

  //  text("There are " + data.getRowCount() + 
  //      " rows in the table", 20, 120);
   

}

function userInputChange(){
  //console.log('changed to: ', document.getElementById("site-search").value);
  
  var keyword = document.getElementById("site-search").value;
  console.log(keyword);

  // Find the result in  the column of 'PRIMARY_COM_NAME'
  // findResults is an Array
  findResults = data.findRow(keyword, 'PRIMARY_COM_NAME');
  

  if (findResults) {
    console.log("in here");
    text("The row that matches the query is", 20, 120);

    // Display the matched value
    text(findResults.arr[0], 20, 140);
    text(findResults.arr[1], 120, 140);
    text(findResults.arr[2], 220, 140);
    text(findResults.arr[3], 320, 140);
  }




  // for(let i = 0; i < records.length; i++) {
  //   results = data.findRows(keyword, 'PRIMARY_COM_NAME');
  // }
  // for(let i = 0; i < records.length; i++) {
  //   for(let j = 0; j < titles.length; j++) {
  //     //if (!results[0].includes(data.get(i, j)))
  //       results.push(data.findRows(keyword, j));
  //   }
  //   //data.findRows(keyword, )
  // }
  //print(results);
}



function draw() {
  //background(233,196,107);
}





















// function setup() {
//     // createCanvas(400, 400);
//     // model = new Model();

//     // //ADD EVENT LISTENERS
//     // var button = document.getElementById("add_button");

//     // //WHEN BUTTON IS CLICKED
//     // button.addEventListener("click",function(){
//     //   model.addItem("added content"); //*Connection to model class

//     //   //Get the element with id: text_sample in HTML file:
//     //   const element = document.getElementById("text_sample");

//     //   // Create a clone of element with id: text_sample in HTML file:
//     //   let new_element = element.cloneNode(true);
//     //   console.log("new_element: ", new_element);
      
//     //   // Append the newly created element on element with id: clone container
//     //   const elementContainer = document.getElementById("clone_container");
//     //   elementContainer.after(new_element);
//     //   console.log("elementContainer: ", elementContainer);
//     // });

//     // d3.csv("classification.csv", function(error, data) {
//     //   if (error) {
//     //     console.error(error);
//     //     return
//     //   }

      
//     // })


//   }
