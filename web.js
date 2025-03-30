let images = document.querySelectorAll(".images img");
let slideindex = 0;
// let nextimage = 1;

function slider(){
    for(let i=0; i<images.length;i++){
        images[i].style.display='none';
    }

    if (slideindex == images.length){
        slideindex=0;
    }
    images[slideindex].style.display="block";
    
    // if(nextimage <= images.length){

    // images[nextimage].style.display='block';
    // }
    // if (slideindex < images.length){
    //     nextimage = slideindex+1
    //     if(nextimage >= images.length){
    //         nextimage = 0;
    //     }
    //     images[nextimage].style.display="block";    
    // }
}

let time = setInterval(automatic,2000);

function automatic(){
    slideindex = (slideindex + 1) % images.length
    // nextimage++
    slider()
}

slider()




let movies = document.querySelectorAll(".cards *");
let premiere = document.querySelectorAll(".p-movies *");
console.log(movies)
console.log(premiere)

function next(mavic){
    for (let i = 0; i < (mavic.length) / 2; i++) {
        mavic[i].style.display="none";
    }

}
function prev(mavic){
    for (let i = 0; i < (mavic.length) / 2; i++) {
        mavic[i].style.display="block";
    }
}

