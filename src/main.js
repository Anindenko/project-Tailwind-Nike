import './style.css';
import vectorImg from './assets/images/Vector.png';
import card1Img from './assets/images/card-1.png';
import card2Img from './assets/images/card-2.png';
import card3Img from './assets/images/card-3.png';
import card4Img from './assets/images/card-4.png';
import colorWhiteImg from './assets/images/Color selector white.png';
import colorBlackImg from './assets/images/Color selector black.png';
import searchImg from './assets/images/search.png';



document.querySelector('#app').innerHTML = `
<section id="sidebar" class="absolute hidden justify-end top-0 left-0 right-0 h-full z-10 bg-(--fon-color)/50">
    <aside class="relative w-[48%] h-full flex flex-col pt-4 px-4 bg-white z-30">
        <button id="aside-cloze" class="absolute top-4 right-4 h-8 hover:cursor-pointer">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.705 0.20502C9.9784 -0.06834 10.4219 -0.06834 10.6953 0.20502C10.9686 0.47839 10.9686 0.92189 10.6953 1.19526L6.4404 5.45014L10.6953 9.70504L10.7851 9.81534C10.9642 10.087 10.9343 10.4561 10.6953 10.6952C10.4562 10.9343 10.087 10.9642 9.8154 10.7851L9.705 10.6952L5.45015 6.44034L1.19526 10.6952C0.921898 10.9686 0.478397 10.9686 0.205027 10.6952C-0.0683425 10.4219 -0.0683425 9.97834 0.205027 9.70504L4.45991 5.45014L0.205027 1.19526L0.115188 1.08491C-0.0639124 0.81324 -0.0340525 0.4441 0.205027 0.20502C0.444107 -0.03405 0.813247 -0.0639199 1.08491 0.11518L1.19526 0.20502L5.45015 4.45991L9.705 0.20502Z" fill="black"/>
            </svg>
        </button>
        <nav class=" md:flex">
            <ul class="flex flex-col gap-5 mt-12 text-black font-medium text-xs">
                <li>
                    <a href="#" class="hover:border-b hover:border-b-black">Men</a>
                </li>
                <li>
                    <a href="#" class="hover:border-b hover:border-b-black">Women</a>
                </li>
                <li>
                    <a href="#" class="hover:border-b hover:border-b-black">Kids</a>
                </li>
                <li>
                    <a href="#" class="hover:border-b hover:border-b-black">Jordan</a>
                </li>
                <li>
                    <a href="#" class="hover:border-b hover:border-b-black">Sale</a>
                </li>
            </ul>
        </nav>
    </aside>
</section>
<header class="flex items-center justify-between border-b border-b-neutral-300 p-4 xl:px-11">
    <picture>
        <img src="${vectorImg}" alt="logo">
    </picture>
    <nav class="hidden md:flex">
        <ul class="flex items-center gap-6 text-black font-medium text-xs">
            <li>
                <a href="#" class="hover:border-b hover:border-b-black">Men</a>
            </li>
            <li>
                <a href="#" class="hover:border-b hover:border-b-black">Women</a>
            </li>
            <li>
                <a href="#" class="hover:border-b hover:border-b-black">Kids</a>
            </li>
            <li>
                <a href="#" class="hover:border-b hover:border-b-black">Jordan</a>
            </li>
            <li>
                <a href="#" class="hover:border-b hover:border-b-black">Sale</a>
            </li>
        </ul>
    </nav>
    <article class="flex items-center gap-4">
        <section class="flex w-[150px] justify-end  sm:w-3xs">
            <article
                    class="flex max-w-fit py-1 px-1 border border-b-black bg-(--search-input-color) rounded-4xl md:border-none sm:px-3 sm:gap-3">
                <button class="w-4">
                    <img src="${searchImg}" alt="icon" class="w-full">
                </button>
                <input type="text" placeholder="Search" class="outline-none w-[115px] placeholder:text-neutral-300 focus:w-full md:focus:w-[240px] sm:focus:w-3xs">
            </article>
        </section>
        <section class="flex items-center gap-4 cursor-pointer">
            <svg id="star" class="" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2185 1.95887C14.8354 1.57562 14.3806 1.2716 13.88 1.06418C13.3794 0.85676 12.8428 0.75 12.301 0.75C11.7591 0.75 11.2225 0.85676 10.722 1.06418C10.2214 1.2716 9.76654 1.57562 9.38347 1.95887L8.58847 2.75387L7.79347 1.95887C7.0197 1.1851 5.97024 0.750401 4.87597 0.750401C3.78169 0.750401 2.73224 1.1851 1.95847 1.95887C1.1847 2.73264 0.75 3.78209 0.75 4.87637C0.75 5.97064 1.1847 7.0201 1.95847 7.79387L2.75347 8.58887L8.58847 14.4239L14.4235 8.58887L15.2185 7.79387C15.6017 7.4108 15.9057 6.95598 16.1132 6.45539C16.3206 5.95479 16.4273 5.41823 16.4273 4.87637C16.4273 4.3345 16.3206 3.79795 16.1132 3.29735C15.9057 2.79676 15.6017 2.34194 15.2185 1.95887V1.95887Z"
                      stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg id="active-star" class="hidden" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2185 1.95887C14.8354 1.57562 14.3806 1.2716 13.88 1.06418C13.3794 0.85676 12.8428 0.75 12.301 0.75C11.7591 0.75 11.2225 0.85676 10.722 1.06418C10.2214 1.2716 9.76654 1.57562 9.38347 1.95887L8.58847 2.75387L7.79347 1.95887C7.0197 1.1851 5.97024 0.750401 4.87597 0.750401C3.78169 0.750401 2.73224 1.1851 1.95847 1.95887C1.1847 2.73264 0.75 3.78209 0.75 4.87637C0.75 5.97064 1.1847 7.0201 1.95847 7.79387L2.75347 8.58887L8.58847 14.4239L14.4235 8.58887L15.2185 7.79387C15.6017 7.4108 15.9057 6.95598 16.1132 6.45539C16.3206 5.95479 16.4273 5.41823 16.4273 4.87637C16.4273 4.3345 16.3206 3.79795 16.1132 3.29735C15.9057 2.79676 15.6017 2.34194 15.2185 1.95887Z" fill="black" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 1.5L2.25 4.5V15C2.25 15.3978 2.40804 15.7794 2.68934 16.0607C2.97064 16.342 3.35218 16.5 3.75 16.5H14.25C14.6478 16.5 15.0294 16.342 15.3107 16.0607C15.592 15.7794 15.75 15.3978 15.75 15V4.5L13.5 1.5H4.5Z"
                      stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.25 4.5H15.75" stroke="black" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M12 7.5C12 8.29565 11.6839 9.05871 11.1213 9.62132C10.5587 10.1839 9.79565 10.5 9 10.5C8.20435 10.5 7.44129 10.1839 6.87868 9.62132C6.31607 9.05871 6 8.29565 6 7.5"
                      stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <button id="open-menu" class="md:hidden">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.3337 12.6686L8.199 12.6823C7.8962 12.7445 7.6687 13.0125 7.6687 13.3337C7.6689 13.6547 7.8962 13.9229 8.199 13.985L8.3337 13.9987H16.6667C17.0339 13.9987 17.3316 13.7008 17.3318 13.3337C17.3318 12.9664 17.034 12.6686 16.6667 12.6686H8.3337ZM3.3337 6.00163L3.199 6.0153C2.8962 6.07747 2.6687 6.34546 2.6687 6.66667C2.6687 6.98788 2.8962 7.25586 3.199 7.31803L3.3337 7.33171H16.6667C17.034 7.33171 17.3318 7.03394 17.3318 6.66667C17.3318 6.2994 17.034 6.00163 16.6667 6.00163H3.3337Z"
                          fill="black"/>
                </svg>
            </button>
        </section>
    </article>
</header>
<main class="flex flex-col items-start mt-10 px-4 pb-12 md:flex-row md:justify-center md:gap-3 xl:px-0 xl:mx-11 xl:gap-6 2xl:h-screen 2xl:mx-auto">
    <section class="flex flex-col mb-3 gap-1 md:hidden">
        <h1 class="font-[--font-bold] text-xl text-black leading-none">
            Nike Air Force 1 ‘07
        </h1>
        <span class="text-xs text-neutral-500 font-medium leading-none">
            Women’s Shoe
        </span>
        <span class="text-xs text-black font-medium leading-none mt-3">$115</span>
    </section>
    <section class="flex flex-col w-full gap-3 md:w-fit xl:grid xl:grid-cols-2">
        <picture class="relative w-full md:w-[396px] after:content-[attr(data-picture)] after:absolute after:top-4 after:left-4 after:py-2 after:px-3 after:bg-white
            after:rounded-[52px] after:text-black after:text-xs after:font-medium"
                 data-picture="★ Highly Rated">
            <img src="${card1Img}" alt="product-photo" class="w-full">
        </picture>
        <picture class="w-full md:w-[396px]">
            <img src="${card2Img}" alt="product-photo" class="w-full">
        </picture>
        <picture class="w-full md:w-[396px]">
            <img src="${card3Img}" alt="product-photo" class="w-full">
        </picture>
        <picture class="w-full md:w-[396px]">
            <img src="${card4Img}" alt="product-photo" class="w-full">
        </picture>
    </section>
    <section class="w-full flex flex-col mt-3 gap-6 md:flex-1 xl:max-w-sm">
        <article class="hidden flex-col mb-6 gap-1 md:flex">
            <h1 class="font-bold] text-xl text-black font-bold leading-none">
                Nike Air Force 1 ‘07
            </h1>
            <span class="text-xs text-neutral-500 font-medium leading-none">
                Women’s Shoe
            </span>
            <span class="text-xs text-black font-medium leading-none mt-3">$115</span>
        </article>
        <article class="flex gap-2 md:mt-0">
            <picture id="white-shoes" class="w-[52px]">
                <img src="${colorWhiteImg}" alt="card-photo" class="w-full">
            </picture>
            <picture id="black-shoes" class="w-[52px]">
                <img src="${colorBlackImg}" alt="card-photo" class="w-full">
            </picture>
        </article>
        <article class="flex flex-col  w-full mt-6 gap-2">
            <section class="w-full flex justify-between">
                <span class="text-xs text-black font-bold">Select Size</span>
                <span class="text-xs text-neutral-500 font-medium">Size Guide</span>
            </section>
            <section class="grid grid-cols-3 gap-y-2 gap-x-2">
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-black font-medium rounded-sm hover:border-black hover:cursor-pointer">
                    EU 33
                </p>
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-(--card-size-color) font-medium rounded-sm bg-neutral-100 hover:border-black hover:cursor-pointer">
                    EU 33.5
                </p>
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-(--card-size-color) font-medium rounded-sm bg-neutral-100 hover:border-black hover:cursor-pointer">
                    EU 34
                </p>
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-(--card-size-color) font-medium rounded-sm bg-neutral-100 hover:border-black hover:cursor-pointer">
                    EU 34.5
                </p>
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-black font-medium rounded-sm hover:border-black hover:cursor-pointer">
                    EU 35
                </p>
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-black font-medium rounded-sm hover:border-black hover:cursor-pointer">
                    EU 35.5
                </p>
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-black font-medium rounded-sm hover:border-black hover:cursor-pointer">
                    EU 36
                </p>
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-(--card-size-color) font-medium rounded-sm bg-neutral-100 hover:border-black hover:cursor-pointer">
                    EU 36.5
                </p>
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-black font-medium rounded-sm hover:border-black hover:cursor-pointer">
                    EU 37
                </p>
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-(--card-size-color) font-medium rounded-sm bg-neutral-100 hover:border-black hover:cursor-pointer">
                    EU 37.5
                </p>
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-black font-medium rounded-sm hover:border-black hover:cursor-pointer">
                    EU 38
                </p>
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-(--card-size-color) font-medium rounded-sm bg-neutral-100 hover:border-black hover:cursor-pointer">
                    EU 38.5
                </p>
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-black font-medium rounded-sm hover:border-black hover:cursor-pointer">
                    EU 39
                </p>
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-(--card-size-color) font-medium rounded-sm bg-neutral-100 hover:border-black hover:cursor-pointer">
                    EU 39.5
                </p>
                <p class="h-9 w-full flex items-center justify-center border border-(--card-size-color) text-xs text-black font-medium rounded-sm hover:border-black hover:cursor-pointer">
                    EU 40
                </p>
            </section>
        </article>
        <article class="flex flex-col gap-2">
            <button id="button-switch"
                    class="flex p-4 justify-center bg-(--button-bg-color) rounded-[52px] text-xs text-white font-medium hover:cursor-pointer">
                Add to Bag
            </button>
            <button id="favorite"
                    class="flex p-4 justify-center rounded-[52px] border border-neutral-300 gap-1 text-xs text-(--button-bg-color) font-medium hover:cursor-pointer">
                Favorite
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2185 1.95887C14.8354 1.57562 14.3806 1.2716 13.88 1.06418C13.3794 0.85676 12.8428 0.75 12.301 0.75C11.7591 0.75 11.2225 0.85676 10.722 1.06418C10.2214 1.2716 9.76654 1.57562 9.38347 1.95887L8.58847 2.75387L7.79347 1.95887C7.0197 1.1851 5.97024 0.750401 4.87597 0.750401C3.78169 0.750401 2.73224 1.1851 1.95847 1.95887C1.1847 2.73264 0.75 3.78209 0.75 4.87637C0.75 5.97064 1.1847 7.0201 1.95847 7.79387L2.75347 8.58887L8.58847 14.4239L14.4235 8.58887L15.2185 7.79387C15.6017 7.4108 15.9057 6.95598 16.1132 6.45539C16.3206 5.95479 16.4273 5.41823 16.4273 4.87637C16.4273 4.3345 16.3206 3.79795 16.1132 3.29735C15.9057 2.79676 15.6017 2.34194 15.2185 1.95887V1.95887Z"
                          stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button id="favorite-active"
                    class="hidden p-4 justify-center rounded-[52px] border border-neutral-300 gap-1 text-xs text-(--button-bg-color) font-medium hover:cursor-pointer">
                Favorite
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2185 1.95887C14.8354 1.57562 14.3806 1.2716 13.88 1.06418C13.3794 0.85676 12.8428 0.75 12.301 0.75C11.7591 0.75 11.2225 0.85676 10.722 1.06418C10.2214 1.2716 9.76654 1.57562 9.38347 1.95887L8.58847 2.75387L7.79347 1.95887C7.0197 1.1851 5.97024 0.750401 4.87597 0.750401C3.78169 0.750401 2.73224 1.1851 1.95847 1.95887C1.1847 2.73264 0.75 3.78209 0.75 4.87637C0.75 5.97064 1.1847 7.0201 1.95847 7.79387L2.75347 8.58887L8.58847 14.4239L14.4235 8.58887L15.2185 7.79387C15.6017 7.4108 15.9057 6.95598 16.1132 6.45539C16.3206 5.95479 16.4273 5.41823 16.4273 4.87637C16.4273 4.3345 16.3206 3.79795 16.1132 3.29735C15.9057 2.79676 15.6017 2.34194 15.2185 1.95887Z"
                          fill="black" stroke="#111111" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            </button>
        </article>
        <article class="flex flex-col gap-7">
            <section class="flex flex-col gap-2">
                <h6 class="text-xs text-black font-bold">Shipping</h6>
                <p class="text-xs text-black font-medium">You'll see our shipping options at checkout.</p>
            </section>
            <section class="flex flex-col">
                <p class="text-xs text-black font-medium">
                    The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that puts a fresh spin
                    on what you know best: crisp leather, bold colors and the perfect amount of flash to make
                    you shine. A subtle platform gives you just the right amount of height.
                    <br>
                    ● Shown: White/White/White/White<br>
                    ● Style: DD8959-100
                </p>
            </section>
            <section class="flex flex-col">
                <h6 class="w-fit border-b border-b-black text-xs text-black font-bold">View Product Details</h6>
            </section>
        </article>
    </section>
</main>
<section class="flex flex-col h-full justify-end">
<footer class="flex justify-center items-center py-7">
    <span class="text-xs text-neutral-500 font-medium">
        © 2025 Nike, Inc. All Rights Reserved
    </span>
</footer>
</section>
`

const favorite = document.getElementById('favorite');
const favoriteActive = document.getElementById('favorite-active');
const sidebar = document.getElementById('sidebar');
const star = document.getElementById('star');
const activeStar = document.getElementById('active-star');

// Создаем переключение сердечка в кнопке "favorite"

favorite.addEventListener('click', () => {
    favorite.classList.add('hidden');
    favoriteActive.classList.remove('hidden');
    favoriteActive.classList.add('flex');
    star.classList.add('hidden');
    activeStar.classList.remove('hidden');
});

// И обратное переключение
favoriteActive.addEventListener('click', () => {
    favorite.classList.remove('hidden');
    favoriteActive.classList.add('hidden');
    star.classList.remove('hidden');
    activeStar.classList.add('hidden');
});

// Переключаем сердечко по клику в хедере
star.addEventListener('click', () => {
    favorite.classList.add('hidden');
    favoriteActive.classList.remove('hidden');
    favoriteActive.classList.add('flex');
    star.classList.add('hidden');
    activeStar.classList.remove('hidden');
});
// И обратно
    activeStar.addEventListener('click', () => {
        favorite.classList.remove('hidden');
        favoriteActive.classList.add('hidden');
        star.classList.remove('hidden');
        activeStar.classList.add('hidden');
    });

// Открываем меню на мобильной версии
document.getElementById('open-menu').addEventListener('click', () => {
    sidebar.classList.remove('hidden');
    sidebar.classList.add('flex');
});

// Закрываем меню
document.getElementById('aside-cloze').addEventListener('click', () => {
    sidebar.classList.add('hidden');
});



