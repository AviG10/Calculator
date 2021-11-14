let outputscreen = document.getElementById("output-screen");

function display(num){
    outputscreen.value += num;
}

function calculator(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}

function Clear(){
    outputscreen.value = "";
}

function del(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}