const quadrant1 = document.getElementsByClassName("quadrant1")[0];
quadrant1.addEventListener("mouseenter",function(){
    const text=document.getElementsByClassName("quadrant")
    quadrant1.style.backgroundColor="navy";
    quadrant1.innerText="First quadrant";
    quadrant1.style.color="gold";
    
    quadrant1.style.display = "flex";
    quadrant1.style.alignItems = "center";
    quadrant1.style.justifyContent = "center";
    quadrant1.style.fontSize = "80px";
});
quadrant1.addEventListener("mouseleave",function(){
    quadrant1.style.backgroundColor = "white";
     quadrant1.style.color="white";
});

const quadrant2=document.getElementsByClassName("quadrant2")[0];
quadrant2.addEventListener("mouseenter",function(){
    quadrant2.style.backgroundColor="maroon";
    quadrant2.innerText="Second quadrant";
    quadrant2.style.color="teal";
    
    quadrant2.style.display = "flex";
    quadrant2.style.alignItems = "center";
    quadrant2.style.justifyContent = "center";
    quadrant2.style.fontSize = "80px";
});
quadrant2.addEventListener("mouseleave",function(){
    quadrant2.style.backgroundColor="white";
    quadrant2.style.color="white";
});


const quadrant3 = document.getElementsByClassName("quadrant3")[0];
quadrant3.addEventListener("mouseenter",function(){
    quadrant3.style.backgroundColor = "DarkGreen";
    quadrant3.innerText="Third quadrant";
    quadrant3.style.color="pink";
    
    quadrant3.style.display = "flex";
    quadrant3.style.alignItems = "center";
    quadrant3.style.justifyContent = "center";
    quadrant3.style.fontSize = "80px";
});
quadrant3.addEventListener("mouseleave", function () {
    quadrant3.style.backgroundColor = "white";
    quadrant3.style.color="white";
});

const quadrant4 = document.getElementsByClassName("quadrant4")[0];
quadrant4.addEventListener("mouseenter", function () {
    quadrant4.style.backgroundColor = "purple";
    quadrant4.innerText="Fourth Quadrant";
    quadrant4.style.color="gray";
    quadrant4.style.display = "flex";
    quadrant4.style.alignItems = "center";
    quadrant4.style.justifyContent = "center";
    quadrant4.style.fontSize = "80px";
});
quadrant4.addEventListener("mouseleave", function () {
    quadrant4.style.backgroundColor = "white";
    quadrant4.style.color="white";
});