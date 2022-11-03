const slides = document.querySelectorAll('.slide');
const slideLen = slides.length;
console.log(slides);
var counter = 0;

slides.forEach((slide,index)=>{
    slide.style.left= `${index * 100}%`;
});

const goPrev = () =>{
    if(counter == 0){
        counter=(slideLen-1);
        slideImage();
    }else{
        counter--;
        slideImage();
    }
}

const goNext = () =>{
    if(counter == (slideLen - 1)){
        counter=0;
        slideImage();
    }else{
        counter++;
        slideImage();
    }
  
}

const slideImage = () => {
    slides.forEach(
        (slide)=>{
        slide.style.transform  = `translateX(-${counter * 100}%)`
    }
    )
}