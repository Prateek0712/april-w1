/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((value)=>{if(value.profession=="developer") 
    {console.log(value)}})
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((value) => {
      if (value.profession === "developer") {
        console.log(value);
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let temp={id:4,name:"susan",age:"20",profession:"intern"}
    arr.push(temp)
    console.log(temp)
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(obj => obj.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArray = [
      { id: 4, name: "alex", age: "25", profession: "manager" },
      { id: 5, name: "emma", age: "22", profession: "designer" },
      { id: 6, name: "mike", age: "30", profession: "engineer" }
    ];
    
    // Concatenate the new array with the previous one
     arr = arr.concat(newArray);
    
    // Output the concatenated array
    console.log(arr);
  }
  