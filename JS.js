function Calculation() {
    let x = document.getElementById("_1input").value;
    let y = document.getElementById("_2input").value;
    var option = document.querySelector("#_1select").value;
    if (option == 0) {
        document.getElementById("Output").textContent = "Select any one of the operation";
    }
    else if (option == 1) {
        var res = parseInt(x) + parseInt(y);
        document.getElementById("Output").textContent = res;
    }
    else if (option == 2) {
        var res = parseInt(x) - parseInt(y);
        document.getElementById("Output").textContent = res;
    }
    else if (option == 3) {
        var res = parseInt(x) * parseInt(y);
        document.getElementById("Output").textContent = res;
    }
    else if (option == 4) {
        var res = parseInt(x) / parseInt(y);
        document.getElementById("Output").textContent = res;
    }
    /*else if(option==1&&(x==null || y==null))
    {
        document.getElementById("Output").textContent = " Enter all the values ";
    }*/
}
function clr()
{
    document.getElementById("_1input").value=null;
    document.getElementById("_2input").value=null;
    document.getElementById("Output").value=null;
    document.querySelector("#_1select").value=null;
}