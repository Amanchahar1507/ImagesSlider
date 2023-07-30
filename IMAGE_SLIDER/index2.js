const sliders = document.querySelectorAll(".title");

let counter =0;

sliders.forEach(
    (title,index)=>{
        title.style.bottom =`${index*100}%`
    }
)

const goPrev = ()=>{
    counter--;
    slideImage();
}

const goNext = ()=>{
    counter++;
    slideImage();
}


const slideImage = ()=>{
    if(counter == sliders.length){
        counter=0;
        index=0;
    }
    if(counter<0){
        counter = sliders.length-1;
        index = sliders.length-1;
    }
    sliders.forEach(
        (title)=>{
            title.style.transform = `translateY(${counter*100}%)`
        }
    )
}


change();