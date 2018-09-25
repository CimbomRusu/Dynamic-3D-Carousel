let content=document.querySelector(".content");
let carousel=document.querySelector(".carousel");
let enter=document.getElementById("enter");

enter.onkeydown=function(e){
    if(e.which==13){
        let n=+enter.value;
        let rad=360/n;
        let zdeg=40*n;
        let deg=-rad;
        for(let i=0;i<n;i++){
            deg+=rad;
            let d=document.createElement("div");
            carousel.appendChild(d);
            d.style.width="100%";
            d.style.height="200px";
            d.style.overflow="hidden";
            d.style.position="absolute";
            d.style.boxShadow="0px 0px 20px black";
            d.style.backgroundColor="green";
            d.style.transform="rotateY("+deg+"deg) translateZ("+zdeg+"px)";
        }
    }
}