let viewMore = document.querySelector('.view-more');
let text = document.querySelector('.my-text');


viewMore.addEventListener('click',function showText() {
    text.classList.toggle('my-text');
});

                        //Buttons

const allButton = document.querySelector('.all');
const webButton = document.querySelector('.web-site');
const marketingButton = document.querySelector('.marketing');
const designButton = document.querySelector('.design');
const montageButton = document.querySelector('.montage');
                        //Images
let webImage = document.querySelector('.web-one');
let uiImage = document.querySelector('.ui-two');
let labOneImage = document.querySelector('.lab-three');
let marketingImage = document.querySelector('.marketing-four');
let labFiveImage = document.querySelector('.lab-five');
let paperImage = document.querySelector('.paper-six');
let labSevenImage = document.querySelector('.lab-seven');
let responsiveImage = document.querySelector('.responsive-eight');


allButton.addEventListener('click', function () {
    webImage.style.opacity = '1';
    uiImage.style.opacity = '1';
    labOneImage.style.opacity = '1';
    marketingImage.style.opacity = '1';
    labFiveImage.style.opacity = '1';
    paperImage.style.opacity = '1';
    labSevenImage.style.opacity = '1';
    responsiveImage.style.opacity = '1';
})

webButton.addEventListener('click', function () {
    webImage.style.opacity = '1';
    uiImage.style.opacity = '0.1';
    labOneImage.style.opacity = '1';
    marketingImage.style.opacity = '0.1';
    labFiveImage.style.opacity = '0.1';
    paperImage.style.opacity = '0.1';
    labSevenImage.style.opacity = '1';
    responsiveImage.style.opacity = '0.1';
})

marketingButton.addEventListener('click', function () {
    webImage.style.opacity = '0.1';
    uiImage.style.opacity = '0.1';
    labOneImage.style.opacity = '0.1';
    marketingImage.style.opacity = '1';
    labFiveImage.style.opacity = '0.1';
    paperImage.style.opacity = '0.1';
    labSevenImage.style.opacity = '0.1';
    responsiveImage.style.opacity = '0.1';

})

designButton.addEventListener('click', function () {
    webImage.style.opacity = '0.1';
    uiImage.style.opacity = '1';
    labOneImage.style.opacity = '0.1';
    marketingImage.style.opacity = '0.1';
    labFiveImage.style.opacity = '1';
    paperImage.style.opacity = '0.1';
    labSevenImage.style.opacity = '0.1';
    responsiveImage.style.opacity = '0.1';

})

montageButton.addEventListener('click', function () {
    webImage.style.opacity = '0.1';
    uiImage.style.opacity = '0.1';
    labOneImage.style.opacity = '0.1';
    marketingImage.style.opacity = '0.1';
    labFiveImage.style.opacity = '0.1';
    paperImage.style.opacity = '1';
    labSevenImage.style.opacity = '0.1';
    responsiveImage.style.opacity = '1';

})











































