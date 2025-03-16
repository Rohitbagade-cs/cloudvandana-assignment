let images = [
    'https://smartslider3.com/wp-content/uploads/slider133/slider-with-lightbox-background4.jpeg',
    'https://magictoolbox.sirv.com/images/magicslideshow/03/image-slideshow-04.jpg?scale.width=2000',
    'https://th.bing.com/th/id/R.4629f2311cc58e7a20070222ab0d4d27?rik=NxHrtZ3r8KPVcA&riu=http%3a%2f%2fcssslider.com%2fsliders%2fdemo-17%2fdata1%2fimages%2fpicjumbo.com_hanv9909.jpg&ehk=8R6Dy89wxl25wO3JQuE8%2bRRmNXToIW%2fiFwnrrTOTg44%3d&risl=&pid=ImgRaw&r=0'
];
let index = 0;

function showImage() {
    document.getElementById('slider').src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

showImage();