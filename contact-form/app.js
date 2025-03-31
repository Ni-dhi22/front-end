
//let message = document.getElementById('message');
//function checkValidation(){
//  if(!name.value || !email.value){
//    message.style.display = "block";
//    console.log("This field is required");
//  }else{
//    message.style.display = "none";
//  }
//}

//let detail = document.getElementById('detail');
//function checkValidation(){
   // if(!name.value && !email.value){
   //     detail.style.display = "block";
   //     console.log("This field is required");
    //}
   // else{
   //     detail.style.display = "none";
   //     console.log("Please enter a valid email address")
  //  }
//}

let detail = document.getElementById('detail');
    function checkValidation(){
        if(!name.value){
            detail.style.display = "block";
            console.log("This field is required");
        }
        else{
            detail.style.display = "none";
        }
    }