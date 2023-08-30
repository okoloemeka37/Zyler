/* let counter=0;
let tag=0
let words=["Web Tutor","Drummer","Web Developer"];

setInterval(() => {
let current=words[tag];
setInterval(() => {
    document.querySelector(".tag").innerHTML +=current[counter];

    if (counter === current.length) {
        counter=0
    }   
    counter++;
}, 2000);

tag++;
if (tag===3) {
    tag=0
}
}, 3000); */
function we() {
    document.querySelector(".tag").innerHTML =''
    let check=0;
    let counter=0;
    let words=["Web Developer    ","Web Tutor   ","Drummer  "];
    setInterval(() => {
let word=words[check]
        document.querySelector(".tag").innerHTML +=word[counter];
        counter++;
        if (counter===(word.length)) {
        counter=0;
        check++;
        if (check ===3) {
            check=0;
        }
        document.querySelector(".tag").innerHTML =''
        }         
    },200);
   
}
we()



//drop navbar;
let bar=document.querySelector(".bars");
bar.addEventListener("click",function (params) {
    document.querySelector(".smallfone").classList.toggle("on")
})

function span() {
    let span=document.querySelector(".span");
    let text=Number(span.innerHTML);
    let count=0;

        count +=10;
     
            
                span()
           
        
        document.querySelector(".span").style.width +=text+"%";
   
}
span();