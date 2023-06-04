var a=document.getElementById("blac");

var k=1;
function gotoy(id){
    var b=document.getElementById("one");
    console.log(b);
}
function go(x,y){
    const para = document.createElement("div");
    para.style.width="20px";
    para.style.height="20px";
    // para.style.border="2px solid white";
    para.style.boxShadow="0px 0px 2px 2px white,inset 0px 0px 2px 2px white";
    // para.style.boxShadow="0 0 10px inset";

    // para.style.backgroundColor="white";
    para.style.opacity="0.4"
    para.style.position="absolute";
    para.style.left=x-160+"px";
    para.style.top=y-120+"px";
    para.style.borderRadius="50%";
    para.setAttribute('id',"one");
    para.style.scale="1";
    a.appendChild(para);
    var b=setInterval(function(){
        if(k>=80){
            document.getElementById("one").remove();
            k=1;
            clearInterval(b);
        }
        else{
        document.getElementById("one").style.scale++;
        k++;
        }

    },30);
    
}
a.addEventListener('mouseenter',function(e){
    var x=e.pageX;
    var y=e.pageY;
    console.log(x+" "+y);
    if(a.innerHTML==""){
        go(x,y);
    }
    

});
