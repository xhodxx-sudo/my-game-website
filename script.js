// ======================
// BURGER MENU
// ======================
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
burger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});
// ======================
// ПЛАВНАЯ ПРОКРУТКА
// ======================
const menuLinks = document.querySelectorAll('a[href^="#"]');
menuLinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        mobileMenu.classList.remove("active");
        const id = this.getAttribute("href");
        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        });
    });
});
// ======================
// ВЫБРАТЬ НАПРАВЛЕНИЕ
// ======================
const chooseButtons =
document.querySelectorAll(
".main-btn"
);
chooseButtons.forEach(button => {
    button.addEventListener("click", () => {
        document
        .getElementById("directions")
        .scrollIntoView({
            behavior:"smooth"
        });
    });
});
// ======================
// МОДАЛЬНОЕ ОКНО
// ======================
const modal =
document.getElementById("modal");
const modalClose =
document.querySelector(".modal-close");
const cardButtons =
document.querySelectorAll(
".card-btn"
);
cardButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.classList.add("active");
    });
});
modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
});
window.addEventListener("click", (event) => {
    if(event.target === modal){
        modal.classList.remove("active");
    }
});
// ======================
// КНОПКИ АБОНЕМЕНТОВ
// ======================
const subscriptionButtons =
document.querySelectorAll(
".subscription-card button"
);
subscriptionButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.classList.add("active");
    });
});
// ======================
// ВАЛИДАЦИЯ ФОРМЫ
// ======================
const mainform =
document.querySelector("form");
mainform.addEventListener("submit", (e) => {
    e.preventDefault();
    const name =
    form.querySelector(
    'input[type="text"]'
    );
    const phone =
    form.querySelector(
    'input[type="tel"]'
    );
    const direction =
    form.querySelector(
    "select"
    );
    if(name.value.trim() === ""){
        alert(
        "Введите имя"
        );
        return;
    }
    if(phone.value.trim() === ""){
        alert(
        "Введите телефон"
        );
        return;
    }
    if(direction.selectedIndex === 0){
        alert(
        "Выберите направление"
        );
        return;
    }
    alert(
    "Заявка отправлена!"
    );
    form.reset();
    modal.classList.remove(
    "active"
    );
});

// ======================
// КНОПКА ВВЕРХ
// ======================
const toTop =
document.getElementById(
"toTop"
);
window.addEventListener(
"scroll",
() => {
    if(window.scrollY > 500){
        toTop.classList.add(
        "show"
        );
    }
    else{
        toTop.classList.remove(
        "show"
        );
    }
}
);
toTop.addEventListener(
"click",
() => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
);
// ======================
// АНИМАЦИЯ ПОЯВЛЕНИЯ
// ======================
const sections =
document.querySelectorAll(
"section"
);
const observer =
new IntersectionObserver(
(entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add(
"visible"
);
}
});
},
{
threshold:0.2
}
);
sections.forEach(section => {
	section.classList.add(
"hidden"
);
observer.observe(
section
);
});
// ======================
// АНИМАЦИЯ КАРТОЧЕК
// ======================
const cards =
document.querySelectorAll(
".direction-card,\
.trainer-card,\
.subscription-card,\
.schedule-card"
);
cards.forEach(card => {
card.addEventListener(
"mouseenter",
() => {
card.style.transform =
"translateY(-10px)";
}
);
card.addEventListener(
"mouseleave",
() => {
card.style.transform =
"translateY(0px)";
}
);
});
// ======================
// АКТИВНЫЙ ПУНКТ МЕНЮ
// ======================
const navItems =
document.querySelectorAll(
".mobile-menu a"
);
window.addEventListener(
"scroll",
() => {
let current = "";
sections.forEach(section => {
const top =
section.offsetTop;
const height =
section.clientHeight;
if(
scrollY >=
top - 200
){
current =
section.getAttribute(
"id"
);
}
});
navItems.forEach(link => {
link.classList.remove(
"active-link"
);
if(
link.getAttribute(
"href"
) === "#" + current
){
link.classList.add(
"active-link"
);
}
});
}
);
// ======================
// TELEGRAM / EMAIL
// ======================
const contactInfo =
document.querySelectorAll(
".contacts-info p"
);
contactInfo.forEach(item => {
item.addEventListener(
"click",
() => {
navigator.clipboard.writeText(
item.innerText
);
alert(
"Скопировано!"
);
}
);
});

// ======================
// ПРЕЛОАДЕР
// ======================
window.addEventListener(
"load",
() => {
document.body.classList.add(
"loaded"
);
}
);
const applicationForm =
document.querySelector(".application-form");

const success =
document.getElementById("successMessage");

if(applicationForm){

applicationForm.addEventListener(
"submit",
async function(event){

event.preventDefault();

const formData =
new FormData(applicationForm);

await fetch(
"https://formspree.io/f/xzdqldkq",
{
method:"POST",
body:formData,
headers:{
"Accept":"application/json"
}
}
);

success.textContent =
"✅ Заявка отправлена!";

success.style.color =
"#9a60eb";

applicationForm.reset();

});
}
// ======================
// КОНЕЦ JS
// ======================