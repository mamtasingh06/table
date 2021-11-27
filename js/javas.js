var num = document.getElementById("num");
var submit = document.getElementById("submit");
function table(){
    i=1;
    while(i<=10){
     var   tbl =num.value*i;
        document.write(num.value + "*" + i + "=" + tbl + "<br>");
        i++;
    }
}