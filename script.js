/* ============================================
   MOVE DANCE СТУДИЯ - Основной JavaScript
   Безопасно для всех страниц (index / directions / schedule)
   ============================================ */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------
    // 2) Эффект шапки при прокрутке
    // ------------------------------
    const header = document.querySelector(".шапка");
    if (header) {
      let ticking = false;

      const updateHeaderShadow = () => {
        const y = window.pageYOffset || 0;
        header.style.boxShadow =
          y > 100 ? "0 4px 20px rgba(0, 0, 0, 0.15)" : "0 2px 10px rgba(0, 0, 0, 0.1)";
        ticking = false;
      };

 const scrollRoot =
  document.querySelector("main.directions-list") ||
  document.scrollingElement;

if (header && scrollRoot) {
  let ticking = false;

  const updateHeaderShadow = () => {
    const y = scrollRoot.scrollTop || 0;
    header.style.boxShadow =
      y > 100
        ? "0 4px 20px rgba(0, 0, 0, 0.15)"
        : "0 2px 10px rgba(0, 0, 0, 0.1)";
    ticking = false;
  };

  scrollRoot.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateHeaderShadow);
      ticking = true;
    }
  });

  updateHeaderShadow();
}


      // сразу применим состояние
      updateHeaderShadow();
    }
    // ------------------------------



    // ------------------------------
    // 3) Аккордеон FAQ (если есть)
    // ------------------------------
    const faqItems = document.querySelectorAll(".элемент-вопроса");
    if (faqItems.length) {
      faqItems.forEach((item) => {
        const question = item.querySelector(".вопрос");
        if (!question) return;

        question.addEventListener("click", () => {
          faqItems.forEach((other) => {
            if (other !== item) other.classList.remove("активный");
          });
          item.classList.toggle("активный");
        });
      });
    }

    // ------------------------------
    // 4) Слайдер преподавателей (если есть)
    // ------------------------------
const teachersGrid = document.querySelector(".секция-преподаватели .сетка-преподавателей");
const btnPrev = document.querySelector(".секция-преподаватели .кнопка-слайдера.предыдущий");
const btnNext = document.querySelector(".секция-преподаватели .кнопка-слайдера.следующий");
    const dots = document.querySelectorAll(".точка");

    if (teachersGrid) {
      let currentSlide = 0;
      const cardWidth = 310; // ширина карточки + отступ (как у тебя)

      const getMaxSlides = () => {
        // защита от деления на 0
        const total = teachersGrid.scrollWidth || 0;
        if (!total) return 0;
        return Math.max(0, Math.ceil(total / cardWidth) - 1);
      };

      const updateSlider = () => {
        teachersGrid.scrollTo({
          left: currentSlide * cardWidth,
          behavior: "smooth",
        });

        if (dots.length) {
          dots.forEach((dot, i) => {
            dot.classList.toggle("активная", i === currentSlide);
          });
        }
      };

      if (btnPrev) {
        btnPrev.addEventListener("click", () => {
          currentSlide = Math.max(0, currentSlide - 1);
          updateSlider();
        });
      }

      if (btnNext) {
        btnNext.addEventListener("click", () => {
          currentSlide = Math.min(getMaxSlides(), currentSlide + 1);
          updateSlider();
        });
      }

      if (dots.length) {
        dots.forEach((dot, i) => {
          dot.addEventListener("click", () => {
            currentSlide = i;
            updateSlider();
          });
        });
      }
    }

// ------------------------------
// 5) Якоря: надёжно на mobile + оффсет под фикс-шапку
// ------------------------------
// =========================================================
// ANCHORS — absolute final version (desktop + mobile)
// Works with window OR inner scroll containers
// =========================================================
(function () {

function getScrollContainer() {
  const main = document.querySelector("main.directions-list");
  if (main && main.scrollHeight > main.clientHeight) return main;
  return document.scrollingElement;
}


  function getHeaderOffset(container) {
  const header = document.querySelector(".шапка");
  const headerH = header ? header.offsetHeight : 0;

  // панель направлений — только если она внутри main (адаптивный режим)
  const nav = document.querySelector(".секция-навигация-направлений");
  const navH = (container && container.tagName === "MAIN" && nav) ? nav.offsetHeight : 0;

  return headerH + navH + 12;
}


  document.addEventListener("click", function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute("href");
    if (!id || id === "#") return;

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();

    // закрываем мобильное меню (иначе overflow может блокировать скролл)
    document.body.classList.remove("menu-open");

    const container = getScrollContainer();
    const offset = getHeaderOffset(container);


    const targetTop =
      target.getBoundingClientRect().top +
      container.scrollTop -
      offset;

    // обновляем hash без скачка
    history.pushState(null, "", id);

    // smooth scroll
    try {
      container.scrollTo({ top: targetTop, behavior: "smooth" });
    } catch {
      container.scrollTop = targetTop;
    }
  });

})();



    // ------------------------------
    // 6) Анимации появления (если элементы есть)
    // ------------------------------
    const animated = document.querySelectorAll(
      ".карточка-преподавателя, .карточка-цены, .элемент-вопроса, .карточка-отзыва"
    );

    if (animated.length && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("анимация-появления");
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      animated.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(el);
      });

      // Стили класса анимации
      const style = document.createElement("style");
      style.textContent = `
        .анимация-появления {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `;
      document.head.appendChild(style);
    }

    // ------------------------------
    // 7) Lazy-load картинок (img[data-src])
    // ------------------------------
    const lazyImgs = document.querySelectorAll("img[data-src]");
    if (lazyImgs.length && "IntersectionObserver" in window) {
      const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          imgObserver.unobserve(img);
        });
      });

      lazyImgs.forEach((img) => imgObserver.observe(img));
    }

    // ------------------------------
    // 8) Видео (заглушка) — безопасно
    // ------------------------------
    const videoItems = document.querySelectorAll(".элемент-медиа.видео");
    if (videoItems.length) {
      videoItems.forEach((item) => {
        const playBtn = item.querySelector(".кнопка-воспроизведения");
        if (!playBtn) return;

        playBtn.addEventListener("click", (e) => {
          e.preventDefault();
          console.log("Нажата кнопка воспроизведения видео");
          // сюда позже можно добавить модалку
        });
      });
    }

    // ------------------------------
    // 9) Hover-эффект на карточках цен (если есть)
    // ------------------------------
    const priceCards = document.querySelectorAll(".карточка-цены");
    if (priceCards.length) {
      priceCards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
          this.style.transform = "translateY(-5px) scale(1.02)";
        });

        card.addEventListener("mouseleave", function () {
          this.style.transform = "translateY(0) scale(1)";
        });
      });
    }

    // ------------------------------
    // 10) Логика страницы расписания: кнопка "+"
    // ------------------------------
    const activeSlots = document.querySelectorAll(".временной-слот.активный");
    if (activeSlots.length) {
      activeSlots.forEach((slot) => {
        const addBtn = slot.querySelector(".кнопка-добавить");
        if (!addBtn) return;

        addBtn.addEventListener("click", (e) => {
          e.stopPropagation();

          const timeEl = slot.querySelector(".время");
          const nameEl = slot.querySelector(".название-занятия");

          const time = timeEl ? timeEl.textContent.trim() : "";
          const name = nameEl ? nameEl.textContent.trim() : "занятие";

          const timePart = time ? window.i18n.t("notif.time_part", { time }) : "";
          showNotification(window.i18n.t("notif.booked", { name, time_part: timePart }));
        });
      });
    }

    console.log(window.i18n ? window.i18n.t("console.loaded") : "MOVE DANCE loaded");
  });

  /* ============================================
     УВЕДОМЛЕНИЯ
     ============================================ */
  function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "уведомление";
    notification.textContent = message;

    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(135deg, #D4A5C9 0%, #9B7BB8 50%, #7A5A9A 100%);
      color: white;
      padding: 15px 25px;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(155, 123, 184, 0.3);
      z-index: 9999;
      animation: появлениеУведомления 0.3s ease;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
    `;

    document.body.appendChild(notification);

    // убрать через 3 секунды
    setTimeout(() => {
      notification.style.animation = "исчезновениеУведомления 0.3s ease";
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // keyframes для уведомлений (добавим один раз)
  const animStyleId = "move-dance-notification-animations";
  if (!document.getElementById(animStyleId)) {
    const style = document.createElement("style");
    style.id = animStyleId;
    style.textContent = `
      @keyframes появлениеУведомления {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes исчезновениеУведомления {
        from { opacity: 1; transform: translateY(0); }
        to   { opacity: 0; transform: translateY(20px); }
      }
    `;
    document.head.appendChild(style);
  }

  /* ============================================
     ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ (оставил, пригодятся)
     ============================================ */
  window.устранитьДребезг = function (fn, delay) {
    let timeout;
    return function (...args) {
      const later = () => {
        clearTimeout(timeout);
        fn(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, delay);
    };
  };
 
  window.ограничитьЧастоту = function (fn, limit) {
    let inThrottle = false;
    return function (...args) {
      if (inThrottle) return;
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    };
  };
})();
function applyI18nToDom(root = document) {
  // если i18n не инициализирован — выходим
  if (!window.i18n || typeof window.i18n.t !== "function") return;

  // 1) обычный текст
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const val = window.i18n.t(key);
    if (typeof val === "string" && val.trim() !== "") {
  el.textContent = val;
}
  });

  // 2) HTML-текст
  root.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (!key) return;
    const val = window.i18n.t(key);
    if (val !== undefined && val !== null) el.innerHTML = val;
  });

  // 3) title страницы
  const titleEl = root.querySelector("[data-i18n-title]");
  if (titleEl) {
    const key = titleEl.getAttribute("data-i18n-title");
    if (key) document.title = window.i18n.t(key);
  }

  // 4) meta description (как у тебя)
  root.querySelectorAll("[data-i18n-meta-key]").forEach((el) => {
    const key = el.getAttribute("data-i18n-meta-key");
    if (!key) return;
    const val = window.i18n.t(key);
    if (val !== undefined && val !== null) el.setAttribute("content", val);
  });

  // 5) aria-label
  root.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (!key) return;
    const val = window.i18n.t(key);
    if (val !== undefined && val !== null) el.setAttribute("aria-label", val);
  });
}

function updateActiveNav() {
  const navLinks = document.querySelectorAll(".ссылка-навигации");
  if (!navLinks.length) return;

  // очистим старое
  navLinks.forEach((l) => l.classList.remove("активная"));

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const currentHash = window.location.hash || "";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";

    // 1) Якорь на главной: index.html#о-нас
    if (currentHash && href === `index.html${currentHash}`) {
      link.classList.add("активная");
      return;
    }

    // 2) Точное совпадение страницы: prices.html, teachers.html и т.д.
    if (href === currentPath) {
      link.classList.add("активная");
      return;
    }

    // 3) Если открыта главная ( / или index.html ), а в меню есть ссылка на index.html
    if (
      (currentPath === "" || currentPath === "index.html") &&
      (href === "index.html" || href === "/" || href === "./")
    ) {
      link.classList.add("активная");
    }
  });
}

// если на главной меняется #якорь — обновим подсветку
window.addEventListener("hashchange", updateActiveNav);



async function includePartials() {
  const nodes = document.querySelectorAll("[data-include]");
  await Promise.all([...nodes].map(async (el) => {
    const path = el.getAttribute("data-include");
    const res = await fetch(path, { cache: "no-cache" });
    if (!res.ok) {
      console.warn("Include failed:", path, res.status);
      return;
    }
    el.outerHTML = await res.text();
  }));

  // ВАЖНО: после подгрузки partials (header/footer) повторно применяем язык
  if (window.i18n && typeof window.i18n.setLanguage === "function") {
    window.i18n.setLanguage(window.i18n.getLanguage());
  } else {
    // fallback (если i18n ещё не готов)
    applyI18nToDom(document);
  }

  updateActiveNav();
  window.dispatchEvent(new Event("resize"));

  window.dispatchEvent(new Event("header-ready"));
  window.addEventListener("header-ready", () => {
  // здесь можно безопасно работать с header
});
}

// ============================================
// PORTFOLIO carousel (center active item)
// ============================================
// (function initPortfolioCarousels(){
//   const carousels = document.querySelectorAll('[data-carousel]');
//   if (!carousels.length) return;

//   carousels.forEach((carousel) => {
//     const track = carousel.querySelector('.portfolio-track');
//     const viewport = carousel.querySelector('.portfolio-viewport');
//     const prevBtn = carousel.querySelector('.portfolio-nav--prev');
//     const nextBtn = carousel.querySelector('.portfolio-nav--next');
//     const dotsWrap = carousel.querySelector('.portfolio-dots');

//     if (!track || !viewport || !prevBtn || !nextBtn || !dotsWrap) return;

//     const items = Array.from(track.querySelectorAll('.portfolio-item'));
//     if (!items.length) return;

//     // starting index: first .is-active or middle
//     let index = Math.max(0, items.findIndex(i => i.classList.contains('is-active')));
//     if (index === 0 && !items[0].classList.contains('is-active')) {
//       index = Math.floor(items.length / 2);
//     }

//     // build dots
//     dotsWrap.innerHTML = '';
//     const dots = items.map((_, i) => {
//       const d = document.createElement('span');
//       d.className = 'portfolio-dot' + (i === index ? ' is-active' : '');
//       d.addEventListener('click', () => setActive(i));
//       dotsWrap.appendChild(d);
//       return d;
//     });

//     function clamp(n){ return Math.max(0, Math.min(items.length - 1, n)); }

//     function setActive(nextIndex){
//       index = clamp(nextIndex);

//       items.forEach((el, i) => el.classList.toggle('is-active', i === index));
//       dots.forEach((el, i) => el.classList.toggle('is-active', i === index));

//       centerActive();
//     }

//     function centerActive(){
//       const active = items[index];
//       if (!active) return;

//       // compute center translate to keep active in the middle of viewport
//       const viewportRect = viewport.getBoundingClientRect();
//       const trackRect = track.getBoundingClientRect();
//       const activeRect = active.getBoundingClientRect();

//       const viewportCenter = viewportRect.left + viewportRect.width / 2;
//       const activeCenter = activeRect.left + activeRect.width / 2;

//       const delta = viewportCenter - activeCenter;
//       const current = getCurrentTranslateX(track);

//       track.style.transform = `translateX(${current + delta}px)`;
//     }

//     function getCurrentTranslateX(el){
//       const style = window.getComputedStyle(el);
//       const matrix = style.transform;
//       if (!matrix || matrix === 'none') return 0;

//       // matrix(a,b,c,d,tx,ty)
//       const values = matrix.match(/matrix\((.+)\)/);
//       if (!values) return 0;

//       const parts = values[1].split(',').map(v => parseFloat(v.trim()));
//       return parts.length >= 6 ? parts[4] : 0;
//     }

//     prevBtn.addEventListener('click', () => setActive(index - 1));
//     nextBtn.addEventListener('click', () => setActive(index + 1));

//     // allow click on item to focus it
//     items.forEach((el, i) => el.addEventListener('click', () => setActive(i)));

//     // recenter on resize (important)
//     window.addEventListener('resize', () => {
//       // reset transform first to avoid drift, then center again
//       track.style.transform = 'translateX(0px)';
//       requestAnimationFrame(() => setActive(index));
//     });

//     // init
//     track.style.transform = 'translateX(0px)';
//     requestAnimationFrame(() => setActive(index));
//   });
// })();

// ============================================
// PORTFOLIO Infinite Carousel (loop + centered dots)
// - neighbors bigger than 3rd (via classes)
// - supports unlimited items (just add .portfolio-item)
// ============================================
function initInfinitePortfolioCarousels(){
  const carousels = document.querySelectorAll('[data-carousel]');
  if (!carousels.length) return;

  carousels.forEach((carousel) => {
    const track = carousel.querySelector('.portfolio-track');
    const viewport = carousel.querySelector('.portfolio-viewport');
    const prevBtn = carousel.querySelector('.portfolio-nav--prev');
    const nextBtn = carousel.querySelector('.portfolio-nav--next');
    const dotsWrap = carousel.querySelector('.portfolio-dots');

    if (!track || !viewport || !prevBtn || !nextBtn || !dotsWrap) return;

    let realItems = Array.from(track.querySelectorAll('.portfolio-item'));
    const N = realItems.length;
    if (N < 3) return;

    // How many clones on each side (need enough to keep center view stable)
    const CLONES = Math.min(4, N); // 4 is enough for "near/far" look

    // Determine starting real index: element with is-active or middle
    let startReal = realItems.findIndex(el => el.classList.contains('is-active'));
    if (startReal < 0) startReal = Math.floor(N / 2);

    // Clone nodes
    const headClones = realItems.slice(-CLONES).map(n => n.cloneNode(true));
    const tailClones = realItems.slice(0, CLONES).map(n => n.cloneNode(true));

    headClones.forEach(n => { n.classList.remove('is-active','is-near','is-far'); n.dataset.clone="1"; });
    tailClones.forEach(n => { n.classList.remove('is-active','is-near','is-far'); n.dataset.clone="1"; });

    // Build track with clones
    track.innerHTML = '';
    headClones.forEach(n => track.appendChild(n));
    realItems.forEach(n => track.appendChild(n));
    tailClones.forEach(n => track.appendChild(n));

    // After rebuild, get all items
    let items = Array.from(track.querySelectorAll('.portfolio-item'));

    // index in "items" array (includes clones)
    let index = CLONES + startReal;

    // lock while animating
    let isAnimating = false;

    // ----- DOTS: windowed dots, active always centered -----
    // We render a fixed count (odd), and shift which real indices they represent
    // ----- DOTS: always 5, center highlighted, dots "scroll" animation -----
const DOTS_WINDOW = 5;                 // всегда 5
const DOTS_MID = 2;                    // центральная (0..4) => 2

function renderDots(activeReal, direction = 0){
  // direction: -1 (prev), +1 (next), 0 (init)
  dotsWrap.innerHTML = '';

  // обёртка-рейл, который будем "подталкивать" для микро-анимации
  const rail = document.createElement('div');
  rail.className = 'portfolio-dots-rail';
  dotsWrap.appendChild(rail);

  for (let k = 0; k < DOTS_WINDOW; k++){
    const dot = document.createElement('span');
    dot.className = 'portfolio-dot';

    // центральная всегда выделена
    if (k === DOTS_MID) dot.classList.add('is-center');

    // крайние чуть бледнее (как на рефе)
    if (k === 0 || k === DOTS_WINDOW - 1) dot.classList.add('is-edge');

    // какая реальная позиция соответствует этой точке
    const realIndex = mod(activeReal + (k - DOTS_MID), N);

    // клик по точке: перейти на соответствующий реальный индекс (кратчайшим путём)
    dot.addEventListener('click', () => {
      const delta = shortestDelta(activeReal, realIndex, N);
      goTo(index + delta);
    });

    rail.appendChild(dot);
  }

  // микро-анимация "прокрутки" точек: толкнуть rail на шаг, потом вернуть
  // (выделенная точка остаётся всегда по центру)
  if (direction !== 0){
    const step = 8 + 10; // dot width(8) + gap(10)
    rail.style.transition = 'none';
    rail.style.transform = `translate(-50%, -50%) translateX(${direction * step}px)`;
    rail.offsetHeight; // reflow
    rail.style.transition = 'transform 260ms ease';
    rail.style.transform = 'translate(-50%, -50%) translateX(0px)';
  }
}


    function mod(a, m){ return ((a % m) + m) % m; }

    function shortestDelta(from, to, m){
      const forward = mod(to - from, m);
      const backward = forward - m;
      return Math.abs(forward) <= Math.abs(backward) ? forward : backward;
    }

    // ----- sizes (active/near/far) -----
    function applyDistanceClasses(){
      items.forEach((el) => {
        el.classList.remove('is-active','is-near','is-far');
      });

      const active = items[index];
      if (!active) return;

      active.classList.add('is-active');

      const nearL = items[index - 1];
      const nearR = items[index + 1];
      if (nearL) nearL.classList.add('is-near');
      if (nearR) nearR.classList.add('is-near');

      const farL = items[index - 2];
      const farR = items[index + 2];
      if (farL) farL.classList.add('is-far');
      if (farR) farR.classList.add('is-far');
    }

    // ----- center active card -----
function centerActive(animate = true){
  const active = items[index];
  if (!active) return;

  const viewportCenter = viewport.clientWidth / 2;

  // ВАЖНО: offsetLeft/offsetWidth учитывают реальную ширину элемента (включая --tile-w-active)
  const activeCenter = active.offsetLeft + active.offsetWidth / 2;

  const tx = viewportCenter - activeCenter;

  if (!animate){
    track.style.transition = 'none';
    track.style.transform = `translateX(${tx}px)`;
    track.offsetHeight; // reflow
    track.style.transition = '';
  } else {
    track.style.transform = `translateX(${tx}px)`;
  }
}


function getCurrentTranslateX(el){
  const style = window.getComputedStyle(el);
  const matrix = style.transform;
  if (!matrix || matrix === 'none') return 0;

  const match = matrix.match(/matrix\((.+)\)/);
  if (!match) return 0;

  const parts = match[1].split(',').map(v => parseFloat(v.trim()));
  return parts.length >= 6 ? parts[4] : 0;
}


    function getGap(container){
      const style = window.getComputedStyle(container);
      const g = parseFloat(style.columnGap || style.gap || '0');
      return Number.isFinite(g) ? g : 0;
    }

    // ----- real index (0..N-1) from current index (with clones) -----
    function currentRealIndex(){
      // real range in items: [CLONES .. CLONES+N-1]
      return mod(index - CLONES, N);
    }

// ----- movement -----
function goTo(nextIndex, direction = 0){
  if (isAnimating) return;
  isAnimating = true;

  index = nextIndex;

  applyDistanceClasses();
  renderDots(currentRealIndex(), direction);
  centerActive(true);
}

// ВАЖНО: бесшовный loop без "прыжка на 1 фото":
// если мы на границе реального блока — сначала телепортируемся
// на эквивалентный индекс (без анимации), потом делаем шаг.
function step(dir){
  if (isAnimating) return;

  // последний реальный элемент -> перед шагом вправо прыгнуть в "середину"
  if (dir > 0 && index === (CLONES + N - 1)){
    index = index - N; // тот же элемент, но левее (в реальном блоке)
    applyDistanceClasses();
    renderDots(currentRealIndex(), 0);
    centerActive(false);
    // форс рефлоу, чтобы следующий transform точно считался новой анимацией
    track.offsetHeight;
  }

  // первый реальный элемент -> перед шагом влево прыгнуть в "середину"
  if (dir < 0 && index === CLONES){
    index = index + N; // тот же элемент, но правее (в реальном блоке)
    applyDistanceClasses();
    renderDots(currentRealIndex(), 0);
    centerActive(false);
    track.offsetHeight;
  }

  goTo(index + dir, dir);
}

// После transition: страховка для кликов по точкам/карточкам,
// когда можем оказаться в зоне клонов.
track.addEventListener('transitionend', (e) => {
  if (e.target !== track) return;
  if (e.propertyName !== 'transform') return;

  let jumped = false;

  if (index < CLONES) {
    index += N;
    jumped = true;
  } else if (index >= CLONES + N) {
    index -= N;
    jumped = true;
  }

  if (jumped) {
    track.style.transition = 'none';
    applyDistanceClasses();
    renderDots(currentRealIndex(), 0);
    centerActive(false);
    track.offsetHeight; // reflow
    track.style.transition = '';
  }

  isAnimating = false;
});


// кнопки
prevBtn.addEventListener('click', () => step(-1));
nextBtn.addEventListener('click', () => step(+1));

// click on item -> make it active (works also on clones)
items.forEach((el, i) => el.addEventListener('click', () => {
  if (isAnimating) return;
  goTo(i, i > index ? 1 : -1);
}));

// resize -> recenter without drift
window.addEventListener('resize', () => {
  applyDistanceClasses();
  renderDots(currentRealIndex(), 0);
  centerActive(false);
});

// ----- init -----
applyDistanceClasses();
renderDots(currentRealIndex(), 0);
centerActive(false);

// КЛЮЧ: после полной загрузки картинок ещё раз центрируем,
// чтобы не было начального сдвига вправо/влево из-за late layout.
window.addEventListener('load', () => {
  applyDistanceClasses();
  renderDots(currentRealIndex(), 0);
  centerActive(false);
});




    // click on item -> make it active (works also on clones)



    // resize -> recenter without drift


    // ----- init ----
  });
};

document.addEventListener("DOMContentLoaded", includePartials);

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form.js-formsubmit");

  forms.forEach((form) => {
    const langInput = form.querySelector('input[name="lang"]');
    if (!langInput) return;

    const getLang = () =>
      (window.i18n?.getLanguage?.() ||
       localStorage.getItem("move_lang") ||
       "en");

    langInput.value = getLang();

    // если пользователь меняет язык прямо на странице
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-lang]")) {
        setTimeout(() => {
          langInput.value = getLang();
        }, 0);
      }
    });
  });
});


/* ===== FormSubmit: stay on page + show popup ===== */
(function () {
  "use strict";

  // защита от повторного подключения (если скрипт где-то подключён дважды)
  if (window.__moveFormsubmitAjaxInstalled) return;
  window.__moveFormsubmitAjaxInstalled = true;

  const getLang = () =>
    (window.i18n?.getLanguage?.() || localStorage.getItem("move_lang") || "en");

  const setLangHidden = (form) => {
    const langInput = form.querySelector('input[name="lang"]');
    if (langInput) langInput.value = getLang();
  };

  const openPopup = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add("is-open");
    el.setAttribute("aria-hidden", "false");
  };

  const closePopup = (el) => {
    el.classList.remove("is-open");
    el.setAttribute("aria-hidden", "true");
  };

  const closeAllPopups = () => {
    document.querySelectorAll(".popup-overlay.is-open").forEach(closePopup);
  };

  // закрытие по крестику / клику по фону
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-popup-close]");
    if (btn) {
      const overlay = btn.closest(".popup-overlay");
      if (overlay) closePopup(overlay);
      return;
    }

    const overlay = e.target.classList?.contains("popup-overlay") ? e.target : null;
    if (overlay) closePopup(overlay);
  });

  // ESC закрывает
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllPopups();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form.js-formsubmit");
    if (!forms.length) return;

    // выставляем язык сразу
    forms.forEach(setLangHidden);

    // и после клика по переключателю языка
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-lang]")) {
        setTimeout(() => {
          forms.forEach(setLangHidden);
        }, 0);
      }
    });

    forms.forEach((form) => {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const action = form.getAttribute("action");
        if (!action) return;

        setLangHidden(form);

        const fd = new FormData(form);

        // если хочешь явно отключить редиректы formsubmit — можно держать так
        if (!fd.has("_next")) fd.append("_next", "");
        if (!fd.has("_captcha")) fd.append("_captcha", "false");

        try {
          const res = await fetch(action, {
            method: "POST",
            body: fd,
            headers: { "Accept": "application/json" }
          });

          if (res.ok) {
            form.reset();
            openPopup("popupSuccess");
          } else {
            openPopup("popupError");
          }
        } catch (err) {
          openPopup("popupError");
        }
      });
    });
  });
})();

/* =========================================================
   MOBILE MENU INIT — MOBILE ONLY (<= 820px)
   НЕ ТРОГАЕТ DESKTOP (не создает overlay, не вешает события)
   ========================================================= */
(function () {
  const BP = 820;
  const MQ = window.matchMedia(`(max-width: ${BP}px)`);

  const SELECTORS = {
    header: ".шапка, header",
    burger: ".кнопка-мобильного-меню",
    menu: ".меню-навигации",
    socials: ".иконки-соцсетей",
    langs: ".выбор-языка",
  };

  const STATE = {
    inited: false,
    cleanup: null,
    observer: null,
  };

  function qs(root, sel) {
    return (root || document).querySelector(sel);
  }

  function ensureOverlay() {
    let overlay = document.querySelector(".mobile-menu-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "mobile-menu-overlay";
      document.body.appendChild(overlay);
    }
    return overlay;
  }

  function removeOverlay() {
    const overlay = document.querySelector(".mobile-menu-overlay");
    if (overlay) overlay.remove();
  }

  function openMenu(burger, menu) {
    document.body.classList.add("menu-open");
    if (burger) burger.setAttribute("aria-expanded", "true");
    if (menu) menu.setAttribute("aria-hidden", "false");
  }

  function closeMenu(burger, menu) {
    document.body.classList.remove("menu-open");
    if (burger) burger.setAttribute("aria-expanded", "false");
    if (menu) menu.setAttribute("aria-hidden", "true");
  }

  function toggleMenu(burger, menu) {
    if (document.body.classList.contains("menu-open")) closeMenu(burger, menu);
    else openMenu(burger, menu);
  }

  function injectExtrasIntoMenu(menu, headerRoot) {
    if (!menu || menu.querySelector(".mobile-menu-extras")) return;

    const extras = document.createElement("div");
    extras.className = "mobile-menu-extras";

    const socials = qs(headerRoot, SELECTORS.socials);
    const langs = qs(headerRoot, SELECTORS.langs);

    if (socials) extras.appendChild(socials.cloneNode(true));
    if (langs) extras.appendChild(langs.cloneNode(true));

    menu.appendChild(extras);
  }

  function removeInjectedExtras(menu) {
    if (!menu) return;
    const extras = menu.querySelector(".mobile-menu-extras");
    if (extras) extras.remove();
  }

  function initMobileMenuOnce() {
    // ЖЕСТКИЙ ГЕЙТ: если не мобилка — вообще ничего не делаем
    if (!MQ.matches) return false;

    const headerRoot = qs(document, SELECTORS.header) || document;
    const burger = qs(headerRoot, SELECTORS.burger) || qs(document, SELECTORS.burger);
    const menu = qs(headerRoot, SELECTORS.menu) || qs(document, SELECTORS.menu);

    if (!burger || !menu) return false;

    // ARIA (только на мобиле)
    burger.setAttribute("aria-label", "Open menu");
    burger.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");

    const overlay = ensureOverlay();

    // extras inside menu (only mobile)
    injectExtrasIntoMenu(menu, headerRoot);

    // обработчики (сохраняем ссылки, чтобы снять их при cleanup)
    const onBurgerClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu(burger, menu);
    };

    const onOverlayClick = () => closeMenu(burger, menu);

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu(burger, menu);
    };

    const onMenuClick = (e) => {
      const link = e.target.closest("a");
      if (link) closeMenu(burger, menu);
    };

    burger.addEventListener("click", onBurgerClick);
    overlay.addEventListener("click", onOverlayClick);
    document.addEventListener("keydown", onKeyDown);
    menu.addEventListener("click", onMenuClick);

    // cleanup, который полностью откатывает моб. вмешательства
    STATE.cleanup = () => {
      closeMenu(burger, menu);

      burger.removeEventListener("click", onBurgerClick);
      overlay.removeEventListener("click", onOverlayClick);
      document.removeEventListener("keydown", onKeyDown);
      menu.removeEventListener("click", onMenuClick);

      removeInjectedExtras(menu);
      removeOverlay();

      // ARIA можно вернуть в нейтральное состояние или убрать
      burger.removeAttribute("aria-expanded");
      menu.removeAttribute("aria-hidden");

      STATE.inited = false;
      STATE.cleanup = null;
    };

    STATE.inited = true;
    return true;
  }

  function waitForHeaderAndInitMobileOnly() {
    // ещё раз: если не мобилка — не стартуем даже observer
    // if (!MQ.matches) return;

    if (STATE.inited) return;

    if (initMobileMenuOnce()) return;

    // header может прийти через data-include — наблюдаем, но только на мобиле
    if (STATE.observer) STATE.observer.disconnect();

    const obs = new MutationObserver(() => {
      // if (!MQ.matches) return; 
      if (STATE.inited) return;
      if (initMobileMenuOnce()) obs.disconnect();
    });

    STATE.observer = obs;
    obs.observe(document.documentElement, { childList: true, subtree: true });

    setTimeout(() => {
      if (STATE.observer) STATE.observer.disconnect();
      STATE.observer = null;
    }, 3000);
  }

  // Переключение режимов при ресайзе:
  // - стало desktop -> полный cleanup
  // - стало mobile  -> init
  function onMediaChange() {
    if (MQ.matches) {
      waitForHeaderAndInitMobileOnly();
    } else {
      // desktop: если что-то было включено на мобиле — откатить полностью
      if (STATE.observer) {
        STATE.observer.disconnect();
        STATE.observer = null;
      }
      if (STATE.cleanup) STATE.cleanup();
      // на desktop даже overlay не должен существовать
      removeOverlay();
      document.body.classList.remove("menu-open");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    onMediaChange();
  });

  // Поддержка старых браузеров: addListener vs addEventListener
  if (typeof MQ.addEventListener === "function") {
    MQ.addEventListener("change", onMediaChange);
  } else {
    MQ.addListener(onMediaChange);
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".секция-преподаватели .сетка-преподавателей");
  const btnPrev = document.querySelector(".секция-преподаватели .кнопка-слайдера.предыдущий");
  const btnNext = document.querySelector(".секция-преподаватели .кнопка-слайдера.следующий");
  const dots = Array.from(document.querySelectorAll(".секция-преподаватели .точки-слайдера .точка"));
  const cards = Array.from(document.querySelectorAll(".секция-преподаватели .карточка-преподавателя"));

  if (!slider || !btnPrev || !btnNext || !dots.length || !cards.length) return;

  // шаг пролистывания = ширина карточки + gap
  function getStep() {
    const card = cards[0];
    const cardWidth = card.getBoundingClientRect().width;

    const cs = window.getComputedStyle(slider);
    const gap = parseFloat(cs.columnGap || cs.gap || "0") || 0;

    return cardWidth + gap;
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function setActiveDot(index) {
    dots.forEach((d, i) => d.classList.toggle("активная", i === index));
  }

  function getActiveIndex() {
    const step = getStep();
    const idx = Math.round(slider.scrollLeft / step);
    return clamp(idx, 0, cards.length - 1);
  }

  function scrollToIndex(index) {
    const step = getStep();
    slider.scrollTo({ left: step * index, behavior: "smooth" });
    setActiveDot(index);
  }

  btnPrev.addEventListener("click", () => {
    const idx = getActiveIndex();
    scrollToIndex(idx - 1);
  });

  btnNext.addEventListener("click", () => {
    const idx = getActiveIndex();
    scrollToIndex(idx + 1);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.dataset.index, 10);
      if (Number.isFinite(idx)) scrollToIndex(idx);
    });
  });

  // синхронизация точек при свайпе/скролле
  let raf = 0;
  slider.addEventListener("scroll", () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      setActiveDot(getActiveIndex());
    });
  });

  // на ресайз пересчитываем активную
  window.addEventListener("resize", () => {
    setActiveDot(getActiveIndex());
  });

  // init
  setActiveDot(0);
});

// ============================================
// VIDEO MODAL (portfolio)
// ============================================
(function initPortfolioVideoModal(){
  function qs(sel, root=document){ return root.querySelector(sel); }

  const modal = qs("#videoModal");
  const frame = qs("#videoModalFrame");
  if (!modal || !frame) return;

  function openVideo(src, poster){
    frame.innerHTML = `
      <video controls autoplay playsinline preload="metadata" ${poster ? `poster="${poster}"` : ""}>
        <source src="${src}" type="video/mp4">
      </video>
    `;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeVideo(){
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    frame.innerHTML = "";
    document.body.style.overflow = "";
  }

  // open
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-video");
    if (!btn) return;

    const src = btn.getAttribute("data-video");
    const poster = btn.getAttribute("data-poster") || btn.querySelector("img")?.getAttribute("src") || "";
    if (!src) return;

    e.preventDefault();
    openVideo(src, poster);
  });

  // close
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-video-close]")) closeVideo();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeVideo();
  });
})();

// =============================
// EVENTS SLIDER
// =============================


const eventsGrid = document.querySelector(".сетка-событий");
const eventsPrev = document.querySelector(".слайдер-событий .предыдущий");
const eventsNext = document.querySelector(".слайдер-событий .следующий");

if (eventsGrid && window.innerWidth > 768) {

  const cardWidth = 650;

  eventsPrev?.addEventListener("click", () => {
    eventsGrid.scrollBy({
      left: -cardWidth,
      behavior: "smooth"
    });
  });

  eventsNext?.addEventListener("click", () => {
    eventsGrid.scrollBy({
      left: cardWidth,
      behavior: "smooth"
    });
  });

}

// PAST EVENTS SLIDER
const pastGrid = document.querySelector(".сетка-прошедших");
const pastPrev = document.querySelector(".прошедшие-prev");
const pastNext = document.querySelector(".прошедшие-next");

const eventDotsRail = document.querySelector(".events-dots-rail");

if (pastGrid) {

const cardWidth = 340;

function animateEventDots(direction){

if(!eventDotsRail) return;

const step = 18;

eventDotsRail.style.transition = "none";
eventDotsRail.style.transform =
`translate(-50%,-50%) translateX(${direction * step}px)`;

eventDotsRail.offsetHeight;

eventDotsRail.style.transition = "transform .25s ease";
eventDotsRail.style.transform =
"translate(-50%,-50%) translateX(0px)";
}

// кнопка назад
pastPrev?.addEventListener("click",()=>{

if(pastGrid.scrollLeft <= 0) return;

pastGrid.scrollBy({
left:-cardWidth,
behavior:"smooth"
});

animateEventDots(-1);

});

// кнопка вперед
pastNext?.addEventListener("click",()=>{

const maxScroll =
pastGrid.scrollWidth - pastGrid.clientWidth;

if(pastGrid.scrollLeft >= maxScroll - 5) return;

pastGrid.scrollBy({
left:cardWidth,
behavior:"smooth"
});

animateEventDots(1);

});

}

const FRAME_NATION_SHEET_URL =
"https://docs.google.com/spreadsheets/d/1hTSCsceMvDjS7D3A0w77Hzc_MRwW5-8fryIbTVbB50c/export?format=csv&gid=618471328";

const PORTFOLIO_SHEET_URL =
"https://docs.google.com/spreadsheets/d/1hTSCsceMvDjS7D3A0w77Hzc_MRwW5-8fryIbTVbB50c/export?format=csv&gid=700360813";

function toRawGitHub(url) {
  if (!url) return "";

  let clean = String(url).trim().replace(/^"|"$/g, "");

  if (!clean) return "";

  if (clean.startsWith("github.com/")) {
    clean = "https://" + clean;
  }

  if (clean.startsWith("raw.githubusercontent.com/")) {
    clean = "https://" + clean;
  }

  if (clean.includes("github.com") && clean.includes("/blob/")) {
    clean = clean
      .replace("https://github.com", "https://raw.githubusercontent.com")
      .replace("/blob/", "/");
  }

  return clean;
}

async function loadEvents(){

const res = await fetch(FRAME_NATION_SHEET_URL);
const text = await res.text();

const rows = text.split("\n").slice(1);

const upcomingContainer = document.querySelector(".upcoming-events");
const pastContainer = document.querySelector(".past-events");
if(!upcomingContainer && !pastContainer) return;

const today = new Date();

rows.forEach(row=>{

const cols = row.split(",");

const date = cols[0];
const image = toRawGitHub(cols[1]);

const title_en = cols[2];
const price_1= cols[3];
const price_2 = cols[4];
const price_3= cols[5];

const desc_en = cols[6];
const desc_ru = cols[7];
const desc_cz = cols[8];
const desc_de = cols[9];

const link = cols[10];


const lang = document.documentElement.lang || "en";

const title = title_en;

const desc =
lang === "ru" ? desc_ru :
lang === "cs" ? desc_cz :
lang === "de" ? desc_de :
desc_en;

const cleanDate = date.trim();
const eventDate = new Date(cleanDate.split(".").reverse().join("-"));

const buttonUpcoming =
lang === "ru" ? "Регистрация" :
lang === "cs" ? "Registrace" :
lang === "de" ? "Registrierung" :
"Register";

const buttonPast =
lang === "ru" ? "Как это было" :
lang === "cs" ? "Jak to bylo" :
lang === "de" ? "Wie es war" :
"Watch recap";

function renderPrices(price1, price2, price3, lang){

const t1 =
lang === "ru" ? "Цена за 1 класс" :
lang === "cs" ? "Cena za 1 lekci" :
lang === "de" ? "Preis für 1 Klasse" :
"Price for 1 class";

const t2 =
lang === "ru" ? "Цена за 2 класса" :
lang === "cs" ? "Cena za 2 lekce" :
lang === "de" ? "Preis für 2 Klassen" :
"Price for 2 classes";

const t3 =
lang === "ru" ? "Цена за 3 класса" :
lang === "cs" ? "Cena za 3 lekce" :
lang === "de" ? "Preis für 3 Klassen" :
"Price for 3 classes";

function priceBlock(price,title){

const czk = Math.round(price * 25);

return `
<div class="price-card">
<span class="price-title">${title}</span>

<span class="price-czk">${czk} Kč</span>
<span class="price-value">${price} €</span>

</div>
`;

}

let html = `<div class="event-prices">`;

if(price1) html += priceBlock(price1,t1);
if(price2) html += priceBlock(price2,t2);
if(price3) html += priceBlock(price3,t3);

html += `</div>`;

return html;

}

const path = window.location.pathname;
const isIndex =
  path === "/" ||
  path.endsWith("/index.html") ||
  path === "/Frame_nation/" ||
  path.endsWith("/Frame_nation/index.html");

const eventHTML = (isPast)=>`
<div class="карточка-события">

<div class="инфо-события">

<span class="дата-события">${date}</span>

<h3 class="заголовок-события">
${title}
</h3>

<p class="описание-события">
${desc}
</p>

${!isPast && !isIndex ? renderPrices(price_1, price_2, price_3, lang) : ""}

<a class="кнопка кнопка-сертификат" href="${link}">
${isPast ? buttonPast : buttonUpcoming}
</a>


</div>

<div class="изображение-события">
<img src="${image}">
</div>
`;

if(eventDate >= today){

upcomingContainer.insertAdjacentHTML(
"beforeend",
eventHTML(false)
);

}else{

pastContainer.insertAdjacentHTML(
"beforeend",
eventHTML(true)
);

}

});

const upcomingCards = upcomingContainer.children.length;

if(upcomingCards < 2){

const lang = document.documentElement.lang || "en";

const text =
lang === "ru" ? "Анонс скоро" :
lang === "cs" ? "Brzy oznámíme" :
lang === "de" ? "Bald angekündigt" :
"Announcement soon";

for(let i = upcomingCards; i < 2; i++){

const placeholder = `
<div class="карточка-события upcoming-placeholder">

<div class="инфо-события">

<span class="дата-события">—</span>

<h3 class="заголовок-события">
${text}
</h3>

<p class="описание-события">
Stay tuned
</p>

</div>

<div class="изображение-события placeholder-image"></div>

</div>
`;

upcomingContainer.insertAdjacentHTML("beforeend", placeholder);

}

}



applyI18nToDom(document);


}
async function loadPortfolio() {
  const photoTrack = document.querySelector(".js-portfolio-photo-track");
  const videoTrack = document.querySelector(".js-portfolio-video-track");

  if (!photoTrack && !videoTrack) return;

  try {
    const res = await fetch(PORTFOLIO_SHEET_URL, { cache: "no-store" });
    const text = await res.text();

    const rows = text
      .split("\n")
      .slice(1)
      .map(row => row.trim())
      .filter(Boolean);

    if (photoTrack) photoTrack.innerHTML = "";
    if (videoTrack) videoTrack.innerHTML = "";

    rows.forEach((row, idx) => {
      const cols = row.split(",");

      const photoUrl = (cols[0] || "").trim().replace(/^"|"$/g, "");
      const videoUrl = (cols[1] || "").trim().replace(/^"|"$/g, "");
      const videoPosterUrl = (cols[2] || "").trim().replace(/^"|"$/g, "");

      if (photoUrl && photoTrack) {
        const cleanPhoto = toRawGitHub(photoUrl);

        photoTrack.insertAdjacentHTML("beforeend", `
          <div class="portfolio-item${idx === 0 ? " is-active" : ""}">
            <a class="portfolio-media"
               href="${cleanPhoto}"
               target="_blank"
               rel="noopener"
               aria-label=""
               data-i18n-aria="portfolio.open_photo_aria">
              <img src="${cleanPhoto}" data-i18n-alt="portfolio.photo_alt">
            </a>
          </div>
        `);
      }

      if (videoUrl && videoTrack) {
        const cleanVideo = toRawGitHub(videoUrl);
        const cleanPoster = videoPosterUrl ? toRawGitHub(videoPosterUrl) : "";

        videoTrack.insertAdjacentHTML("beforeend", `
          <div class="portfolio-item${idx === 0 ? " is-active" : ""}">
            <button class="portfolio-media portfolio-media--video js-video"
                    type="button"
                    data-video="${cleanVideo}"
                    data-poster="${cleanPoster}">
              <img src="${cleanPoster}" alt="">
              <span class="portfolio-play" aria-hidden="true"></span>
            </button>
          </div>
        `);
      }
    });

    applyI18nToDom(document);

  } catch (err) {
    console.error("Portfolio load failed:", err);
  }
}

pastGrid?.addEventListener("scroll", () => {

const maxScroll =
pastGrid.scrollWidth - pastGrid.clientWidth;

const progress =
pastGrid.scrollLeft / maxScroll;

const index = Math.round(progress * 3);

animateEventDots(index);

});


const teachersGrid = document.querySelector(".сетка-преподавателей");
const teacherDots = document.querySelectorAll(".точки-преподавателей .точка");
const teacherCards = document.querySelectorAll(".карточка-преподавателя");

if (teachersGrid && teacherDots.length) {

  const updateDots = () => {

    let closestIndex = 0;
    let closestDistance = Infinity;

    teacherCards.forEach((card, i) => {

      const distance = Math.abs(card.offsetLeft - teachersGrid.scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }

    });

    teacherDots.forEach((dot,i)=>{
      dot.classList.toggle("активная", i === closestIndex);
    });

  };

  teachersGrid.addEventListener("scroll", updateDots);

  teacherDots.forEach((dot,i)=>{
    dot.addEventListener("click", ()=>{
      teachersGrid.scrollTo({
        left: teacherCards[i].offsetLeft,
        behavior: "smooth"
      });
    });
  });

}





loadEvents();

document.addEventListener("DOMContentLoaded", async () => {
  await loadPortfolio();
  initInfinitePortfolioCarousels();
});

// обновление событий при смене языка
document.addEventListener("click", (e)=>{
  if(e.target.closest("[data-lang]")){

    setTimeout(()=>{

      const upcoming =
      document.querySelector(".upcoming-events");

      const past =
      document.querySelector(".past-events");

      if(upcoming) upcoming.innerHTML="";
      if(past) past.innerHTML="";

      loadEvents();

    },50);

  }
});


// =========================
// MERCH CARD SLIDER
// =========================

// =========================
// MERCH SLIDER (desktop + mobile)
// =========================

document.addEventListener("DOMContentLoaded", () => {

  const sliders = document.querySelectorAll(".мерч-слайдер");

  sliders.forEach(slider => {

    const track = slider.querySelector(".мерч-track");
    const images = track.querySelectorAll("img");

    let index = 0;

    // =========================
    // 🔥 СОЗДАЁМ ТОЧКИ
    // =========================
    const indicator = document.createElement("div");
    indicator.classList.add("мерч-индикатор");

    images.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("мерч-точка");

      if (i === 0) dot.classList.add("active");

      // клик по точке
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        index = i;
        updateSlide();
      });

      indicator.appendChild(dot);
    });

    slider.appendChild(indicator);

    const dots = indicator.querySelectorAll(".мерч-точка");

    // =========================
    // ОБНОВЛЕНИЕ
    // =========================
    function updateDots(){
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }

    function updateSlide(){
      track.style.transform = `translateX(-${index * 100}%)`;
      updateDots();
    }

    // =========================
    // DESKTOP
    // =========================
    slider.addEventListener("click", (e) => {

  if (window.innerWidth <= 768) return;

  const rect = slider.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const isLeftSide = clickX < rect.width / 2;

  if (isLeftSide) {
    index = index - 1;
    if (index < 0) index = images.length - 1;
  } else {
    index = index + 1;
    if (index >= images.length) index = 0;
  }

  updateSlide();

});

    // =========================
    // MOBILE
    // =========================
    let startX = 0;

    slider.addEventListener("touchstart", e => {
      startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", e => {

      const diff = startX - e.changedTouches[0].clientX;

      if (Math.abs(diff) < 40) return;

      index += diff > 0 ? 1 : -1;

      if (index < 0) index = images.length - 1;
      if (index >= images.length) index = 0;

      updateSlide();

    });

  });

});