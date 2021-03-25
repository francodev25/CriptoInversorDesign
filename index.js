const MAX_IMG_HERO = 18;
const imageHero = document.querySelector('.hero__asset');

const manualNavigation = (index) =>{
    imageHero.src = `img/asset${index}.png`;
    setTimeout(()=> { 
        return 0;
    },2000);
}

//It sets the imageHero 1, when the page has been loaded
addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault();
    manualNavigation(1);
});

// Autoplay imagesHero Slider
let i = 1;
setInterval(()=>{
    if (i === MAX_IMG_HERO ) i=1;
    if (i <= MAX_IMG_HERO ) {
        manualNavigation(i);
    }
    i++;
}
,4000);

