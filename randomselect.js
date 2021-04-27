function startGetValue(){
    document.getElementById("randombtn").addEventListener("click", randomGenerator, false);
   
}

function randomGenerator(){
    let namelist = document.getElementById("FormTextarea").value;
    let nameArray = namelist.toString().trim().split(/\r\n|\r|\n/g);
    let arraylength =  nameArray.length
    let newArray=[];
    for(let index=0; index < arraylength; index++){
      let n = Math.floor(Math.random()*nameArray.length);
      newArray.push(nameArray[n]);
      nameArray.splice(n,1);
    }
    let resultString = "";
    for(let index=0; index < arraylength; index++){
        resultString += newArray[index] + "\n";
      }
    document.getElementById("ResultsTextarea").value = resultString;

}

window.addEventListener("load", startGetValue, false );
