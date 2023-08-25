document.addEventListener("DOMContentLoaded", function () {
    let imageList = [
        "https://cdn.pixabay.com/photo/2015/01/08/15/30/lamborghini-593105_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/11/09/01/49/lamborghini-aventador-2932196_640.jpg",
        "https://cdn.pixabay.com/photo/2016/11/27/12/35/mercedes-benz-1862769_640.jpg",
        "https://media.istockphoto.com/id/1340269597/photo/classic-vintage-muscle-car.webp?b=1&s=612x612&w=0&k=20&c=odxMWYun4kQi0NicjhQOZMQCqYr9wSgsVt0zwzdt5bM=",
    ];
    let imageGallery = document.querySelector(".image-gallery");
    let imageLabel = document.querySelector(".image-label");
    let iconImage = document.querySelector(".icon-img");
    let currentIndex = 0;
    let position = 0;
    let imageWidth = 450;
    let statuss;
    let slideshow;
    loadImage();

    //creating the function load image
    function loadImage() {
        for (let url of imageList) {
            imageGallery.innerHTML += `<img src="${url}"/>`;
        }
        startSlideShow();
    }
    function updateImage() {
        imageGallery.style.transform = `translateX(-${position}px)`;
        imageLabel.innerHTML = `${currentIndex + 1} / ${imageList.length}`;
    }
    function handleNext() {
        if (currentIndex === imageList.length - 1) {
            position = 0;
        }
        else {
            position = imageWidth * (currentIndex + 1);
        }
        currentIndex = (currentIndex + 1) % imageList.length;
        updateImage();
    }
    function handlePrevious() {
        currentIndex = currentIndex - 1;
        if (currentIndex < 0) {
            position = imageWidth * (imageList.length - 1);
            currentIndex += imageList.length;
        }
        else {
            position = imageWidth * currentIndex;
        }
        updateImage();
    }
    function startSlideShow() {
        imageLabel.innerHTML = `${currentIndex + 1} / ${imageList.length}`;
        slideshow = setInterval(handleNext, 2000);
        statuss = true;
    }
    function handlePause() {
        clearInterval(slideshow);
        // iconImage.src =  "download.png";
        statuss = false;
    }
    function handleAction() {
        if (statuss) {
            handlePause();
        } else {
            startSlideShow();
        }
    }

    document.getElementById("timer-action").addEventListener("click", handleAction);
    document.getElementById("prev-action").addEventListener("click", handlePrevious);
    document.getElementById("next-action").addEventListener("click", handleNext);


});