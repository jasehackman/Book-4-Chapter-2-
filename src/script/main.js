const legoCreation = {
  id: 1,
  creator: "Per Sun",
  color: "Black",
  shape: "Animal",
  creation: "Black Cow"
}

let newObjArray = []
let newid = 1
// Some starter code
document.querySelector(".btn").addEventListener("click", event => {
  const newCreator = document.querySelector("#lego__creator").value;
  const newColor = document.querySelector("#lego__color").value;
  const newShape = document.querySelector("#lego__shape").value;
  const newCreation = document.querySelector("#lego__creation").value;
  console.log(newCreator);
  console.log(newColor, newCreation);
  console.log(newShape);
  console.log(event);
 
// Once you have collected all the values, build your data structure
  const legoToSave = {
      id: newid++,
      creator: newCreator,
      color: newColor,
      shape: newShape,
      creation: newCreation

  }

  fetch("http://localhost:8088/legos", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
  })


  newObjArray.push(legoToSave);
  console.log(legoToSave);
})


