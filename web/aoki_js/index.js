window.onload=function () {
    document.getElementById("hotindexmenu").addEventListener("mouseover",func);
    function func() {
        this.style.backgroundColor="white";
        document.getElementById("hotdownterm").hidden="";

    }
    document.getElementById("hotindexmenu").addEventListener("mouseleave",func1);
    function func1() {
        this.style.backgroundColor = "red";
        document.getElementById("hotdownterm").hidden = "hidden";
    }

    document.getElementById("hotdownterm").addEventListener("mouseover",func3);
     function func3() {
         this.hidden="";
         document.getElementById("hotindexmenu").style.backgroundColor="white";
     }
    document.getElementById("hotdownterm").addEventListener("mouseleave",func4);
    function func4() {
        this.hidden="hidden";
        document.getElementById("hotindexmenu").style.backgroundColor="red";
    }

}
// function func5(o) {
//     o.style.backgroundColor="white";
//     var  mar=document.getElementById("hotdownterm");
//     mar.hidden="";
//     mar.translate(50,0)
// }
