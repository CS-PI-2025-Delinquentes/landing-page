document.addEventListener("DOMContentLoaded", (event) => {
    createFaq();
    saveTheme();
});

// Section FAQ
function createFaq() {

    fetch("json/faq.json")
    .then(res => res.json())
    .then(res => {
        const section = document.querySelector(".faq");
        res.forEach(faq => {
            const container = document.createElement("div");
            container.className ='container';
            container.addEventListener("click", (e) => {
                const text = container.querySelector(".answer");
                const isHidden = text.classList.contains("hidden");
                const faqBtn = container.querySelector(".faq-btn");
                text.classList.toggle("hidden");
                isHidden ? faqBtn.innerHTML = "&#9660;" : faqBtn.innerHTML = "&#9654;";
            });
            section.appendChild(container);
            const mainFaq = document.createElement("div");
            mainFaq.className = 'main-faq';
            container.appendChild(mainFaq);
            const span = document.createElement("span");
            span.className = 'faq-btn';
            span.innerHTML = '&#9654;';
            mainFaq.appendChild(span);
            const question = document.createElement("h3");
            question.className = 'question';
            question.innerHTML = faq.question;
            mainFaq.appendChild(question);
            const answer = document.createElement("p");
            answer.className = 'answer';
            answer.classList.add("hidden");
            answer.innerHTML = faq.answer;
            container.appendChild(answer);
        });
    } ); 
}

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

function saveTheme() {
    const localTheme = sessionStorage.getItem("theme");
    document.body.setAttribute('data-theme',localTheme);
}

function changeTheme(theme) {
    sessionStorage.setItem("theme", theme);
    document.body.setAttribute('data-theme', theme);
}

function hideTheme() {
    const btns = document.body.querySelector(".themes");
    btns.classList.toggle("hidden");
}