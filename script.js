var ind = 0;
fun1();

function fun1() {
    var i;
    var x = document.getElementsByClassName("c1");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    ind++;
    if (ind > x.length) {
        ind = 1;
    }
    x[ind - 1].style.display = "block";
    setTimeout(fun1, 1000);
}