const formImgInput = document.getElementById('form-img');
const formImgPreview = document.getElementById('form-img-preview');

formImgInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        formImgPreview.src = URL.createObjectURL(file);
        formImgPreview.style.display = 'block';
    }
});

function rateStars(selectedStar) {
    const stars = document.querySelectorAll('.form-stars i');
    const selectedIndex = Array.from(stars).indexOf(selectedStar);

    stars.forEach((star, index) => {
        if (index <= selectedIndex) {
            star.classList.add('bi-star-fill');
            star.classList.remove('bi-star');
        } else {
            star.classList.add('bi-star');
            star.classList.remove('bi-star-fill');
        }
    });
}