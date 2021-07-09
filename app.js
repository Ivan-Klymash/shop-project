
// Завдання: при кліку на кнопку button-add повинні додаватись товари в корзину(змінюватись там їх кількість) в залежності від того скільки разів ми клікнемо
// знайдемо нашу корзину(її цифру зверху) задавши їй Id
let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl)

// // Знайдемо всі кнопки button-add які додають товари в корзину по класу
let addToCartButtons = document.querySelectorAll(".button-add");
console.log(addToCartButtons)

// // в нас є багато кнопок і ми не можемо обробник подій addEventListener повісити на цей клас button-add тому що це псевдомасив(NodeList з 9 кнопок) а обробник подій можна запустити тільки на елементі, тому потрібно пройтися циклом і на  і-тий елемент запустити addEventListener
for(let i =0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click",function() {
//         // для перевірки чи працює виведемо в консолі якийсь текст
        console.log("наші кліки")
//         // створюємо змінну в якій записуємо попереднє значення кількості товарів у корзині
        let prevProductsCount = +productsCountEl.textContent;
//         // прописуємо що до попереднього значення додаємо 1 при кліку на одну з кнопок (властивість text.content дозволяє отримати і задати властивість документу)
        productsCountEl.textContent = prevProductsCount + 1;

//         // це саме можна було описати одним рядком:
//         // productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}

// це саме що через цикл але через forEach:
// addToCartButtons.forEach((item) => {
//     item.addEventListener("click", function() {
//     let prevProductsCount = +productsCountEl.textContent;
//     productsCountEl.textContent = prevProductsCount + 1;
//     })
// })


// Завдання: при кліку на кнопку More Details має показатись модальне вікно
// Спершу потрібно зверстати це модальне вікно і задати йому стилі. за замовчуванням воно має бути приховане(display:none) а висвітлюватись при кліку на кнопку More Details
// Тоді в JS нам потрібно знайти цю форму, відповідні їй кнопки і btn-close(хрестик щоб закривати цю форму)

let modal = document.querySelector(".modal");
let moreDetailsButtons = document.querySelectorAll(".button-more");
let closeBtn = document.querySelector(".btn-close")
// скинемо все у консоль щоб бачили що виводиться:
console.log(modal)
console.log(moreDetailsButtons)
console.log(closeBtn)

// пройдемось методом forEachа по NodeList і прописуємо що при кліку на і-тий елемент запускається функція яка покаже це модальне вікно
// moreDetailsButtons.forEach(item => {
//     item.addEventListener("click",function() {
//         modal.classList.add("show");
//         modal.classList.remove("hide");
//     })
// })

// пропишемо функцію яка буде закривати це модальне вікно(принатисканні на хрестик вона буде його приховувати)
// function closeModal () {
//     modal.classList.remove("show");
//     modal.classList.add("hide");
// }
// closeBtn.addEventListener("click", closeModal)

// або можемо прописати функцію OpenModal, все працюватиме так як і в попередньому що ми прописали
moreDetailsButtons.forEach(item => {
    item.addEventListener("click",openModal)
})

function openModal () {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal () {
    modal.classList.remove("show");
    modal.classList.add("hide");
}
closeBtn.addEventListener("click", closeModal)

// зробимо так щоб модальне вікно закривалось при кліку на будь-яке місце вю порта а не тільки на хрестик (при кліку на саму форму чи на input воно не закриватиметься)
modal,addEventListener("click", function(e) {
    if(e.target === modal) {
        closeModal()
    }
})






// lesson 23


// Завдання: модальне вікно має показатись після того коли користувач проскорить більше 50% сайту.
// Для вирішення нам потрібно знати висоту сайту і то скільки від цієї висоти ми проскролили
// властивість scrollHeight вимірює висоту контенту в елементі (в блоці) включаючи те що не видно через прокрутку
// Властивість pageYOffset повертає на скільки пікселів проскролена сторінка по вертикалі (вниз або вверх)


function showModalByScroll () {
    // подивимось що відбувається запустивши це в консолі
    console.log(window.pageYOffset)
    console.log(document.documentElement.scrollHeight)
    if(window.pageYOffset > document.documentElement.scrollHeight/2) {
        openModal()
        // нам не потрібно щоби це вікно показувалось кожен раз коли ми скролимо а тільки 1 раз при першому скролі. для цього нам потрібно видалити цей скрол (відключити щоб не показувалось 2 раз)
        window.removeEventListener("scroll",showModalByScroll)
    }
}
// прописуємо що коли відбувається подія "scroll" тоді запускаємо функцію ShowModalByScroll (ми цю функцію просто передаємо а браузер її викличе у потрібний момент)
window.addEventListener("scroll", showModalByScroll)





// Завдання: при натисканні на сердечко щоби задавався фоновий колір
// знайдемо ці кнопки за класом

// let likeButtons = document.querySelectorAll(".like");
// console.log(likeButtons)
// likeButtons.forEach(item => item.addEventListener("click", function() {

    // задаємо в css для hover клас liked і додамо його тут.
    // перевіряємо спершу чи є цей клас у елемента

    // if(item.classList.contains("liked")) {
    //     item.classList.remove("liked")
    // } else {
    //     item.classList.add("liked")
    // }
    // }))

// зробимо це саме через toggle
let likeButtons = document.querySelectorAll(".like");
console.log(likeButtons)
likeButtons.forEach(item => item.addEventListener("click", function() {
    item.classList.toggle("liked")
}))






// Функція конструктор counter
// функція конструктор Сar, тому з великої букви

// function Car (model,year,color) {
//     // оголошуємо ці дані які передали у функцію
//     this.model = model;
//     this.year = year;
//     this.color = color;

//     this.hi = function() {
//         return "Hi " + this.model
//     }
// }

// let audi = new Car("A4", 2015, "grey")
// let audi1 = new Car("A5", 2016, "black")
// let bmw = new Car("328", 2020, "red")

// console.log(audi.hi())
// console.log(audi1.hi())
// console.log(bmw)


// завдання

let decrementButtons = document.querySelectorAll(".decrement-button");
let incrementButtons = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".product-quantity-input");

console.log(decrementButtons)
console.log(incrementButtons)
console.log(quantityValue)

// для того щоби блокувати значення передаємо minCount і присвоюємо значення та maxCount і присвоюємо максимальне значення товарів у корзині
function Counter (incrementButton, decrementButton,inputField,minCount = 1, maxCount = 10) {
    // знаходимо елементи на сторінці які нам потрібно
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField
    }

    // коли ми клікаємо на - декілька разів то заходимо в мінусові числа, а не може бути -n товарів у корзині. тому нам потрібно написати функцію яка буде блокувати можливість задавати мінусові значення
    this.toggleButtonState = function() {
// отримуємо те значення яке на даному етапі є в полі input
        const count = this.domRefs.inputField.value;
// наступний крок це будемо блокувати це значення (передамо значеня minCount та maxCount у функцію конструктор Counter (вище))
        this.domRefs.decrementButton.disabled = count <= minCount;
// аналогічно для кнопки incrementButton
        this.domRefs.incrementButton.disabled = count >= maxCount;
    }
// викликаємо цю функцію на початку як тільки сторінка загрузилася і додаємо цей виклик функції коли ми плюсуємо і мшнусуємо значеня
    this.toggleButtonState();



    // напишемо метод(це функція) щоб при кліку на + збільшувалось число у input
    this.increment = function() {
        // тут value дозволяє отримати і записати значення яке зараз у input є (1). Записуємо у значення valu щоб було value + 1
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        this.toggleButtonState();
        // let currentCount = +this.domRefs.inputField.value;
        // let nextCount = currentCount + 1;
        // this.domRefs.inputField.value = nextCount
    }
    // аналогічно і для декримента напишемо метод(це функція) щоб при кліку на - зменшувалось число у input
    this.decrement = function() {
        // знайшло елемент, отрмали його значення через value, записали його як число(+), віднімаємо від його значення 1
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        this.toggleButtonState();
    }
    this.domRefs.incrementButton.addEventListener("click",this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener("click",this.decrement.bind(this));
    console.log(this)
}


// щоб усім товарам відобразився лічильник
const counters = [];

quantityValue.forEach((item, i) => {
    counters[i] = new Counter(incrementButtons[i],decrementButtons[i], item)
})




// slick slider

$('.slider-block').slick( {
    dots: true,
});

