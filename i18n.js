/* ============================================
   MOVE DANCE — i18n (RU/EN/CZ/DE)
   - Vanilla JS, no build step
   - Persists language in localStorage
   ============================================ */
(function () {
  "use strict";

  const DEFAULT_LANG = "en";
  const STORAGE_KEY = "move_lang";

  

const DICT = {

  ru: {

// =====================
// MERCH — RU
// =====================

    "merch.buy_now": "КУПИТЬ СЕЙЧАС",

"merch.category.longsleeves": "ЛОНГСЛИВЫ",
"merch.category.pants_stickers": "ШТАНЫ И СТИКЕРЫ",

"merch.pink.price": "30€",
"merch.pink.title": "РОЗОВАЯ ЛИМИТИРОВАННАЯ СЕРИЯ",

"merch.black.price": "25€",
"merch.black.title": "БАЗОВЫЙ ЧЁРНЫЙ",

"merch.long_taupe.price": "30€",
"merch.long_taupe.title": "ЛОНГСЛИВ TAUPE",

"merch.long_black.price": "30€",
"merch.long_black.title": "ЧЁРНЫЙ ЛОНГСЛИВ",

"merch.pants.price": "60€",
"merch.pants.title": "ШТАНЫ ОТ CHUMACK",

"merch.stickers.price": "6€",
"merch.stickers.title": "НАБОР СТИКЕРОВ",

    "events.page_intro_upcoming": "Откройте для себя прошедшие и предстоящие Frame Up workshops, специальные события и танцевальные мастер-классы в Брно, организованные Frame Nation и приглашёнными преподавателями.",
"teachers.page_intro": "Познакомьтесь с нашими преподавателями Frame Up в Брно и опытными Frame Up instructors, которые развивают стиль через регулярные занятия, воркшопы, выступления и проекты сообщества.",

    "events.upcoming":"Грядущие события",
    "events.title":"Грядущие события",
"events.past":"Прошедшие события",
"events.soon":"Анонс скоро",
    "popup.success.title": "СПАСИБО ЗА ВАШЕ СООБЩЕНИЕ",
"popup.success.text": "В ближайшее время мы вам ответим",
"popup.error.title": "ОШИБКА ОТПРАВКИ",
"popup.error.text": "Попробуйте ещё раз или напишите нам в Instagram/Telegram",


  "page.teachers.h1": "Преподаватели — БРНО",

 "page.teachers.title": "Преподаватели | БРНО",
  "page.teachers.desc": "Познакомьтесь с преподавателями в Брно: Frame Up, Strip, heels и смежные танцевальные направления.",

// =====================
// MERCH — RU
// =====================

  "teachers.name.anastasia": "Анастасия",
  "teachers.name.sveta": "Света",
  "teachers.name.lucie": "Люция",
  "teachers.name.marushka": "Мария",
  "teachers.name.alena": "Алёна",
  "teachers.name.vika": "Вика",
  "teachers.name.katya": "Катя",
  "teachers.name.diana": "Диана",


  "teachers.photo_alt.anastasia": "Анастасия — преподаватель Move Dance",
  "teachers.photo_alt.sveta": "Света — преподаватель Move Dance",
  "teachers.photo_alt.lucie": "Люция — преподаватель Move Dance",
  "teachers.photo_alt.marushka": "Марушка — преподаватель Move Dance",
  "teachers.photo_alt.alena": "Алёна — преподаватель Move Dance",
  "teachers.photo_alt.vika": "Вика — преподаватель Move Dance",
  "teachers.photo_alt.katya": "Катя — преподаватель Move Dance",
  "teachers.photo_alt.diana": "Диана — преподаватель Move Dance",


  "teachers.anastasia.p1": "Anastasiia Hinak (@nasti_hinak) — танцор, преподаватель и один из активных представителей Frame Up сцены в Центральной Европе.",
  "teachers.anastasia.p2": "На данный момент она является официальным представителем Frame Up (сертификация с 2026 года), основателем Frame Up Nation — проекта, направленного на развитие стиля в Брно, а также развивает это направление в Австрии в рамках проекта FrameUp Austria (@frameup_austria). Она — создатель команды Amanita, владелица студии Move Dance и регулярно проводит выездные классы, продолжая развиваться через онлайн-курсы и мастер-классы.",
  "teachers.anastasia.p3": "Её соревновательный опыт в Frame Up включает: World of Dance Prague 2025 — 4 место (All Styles), World of Dance Bratislava 2025 — 5 место (All Styles), Stage 18+ Prague 2025 — 1 место (Beginners) и 4 место (Pro), а также Tsok Tsok Riga — 2 место в Battles и 4 место в Solo High Heels & Frame Up Pro.",
  "teachers.anastasia.p4": "Анастасия сформировала сильную базу в художественной гимнастике, где достигла уровня мастера спорта. Позже, уже в Чехии, работая со сборной, она сделала осознанный выбор в пользу искусства и полностью посвятила себя танцу. В дальнейшем Анастасия развивалась в contemporary и других направлениях, расширяя пластический и музыкальный диапазон, однако ключевым стилем для неё стал Frame Up. Сегодня она не только продолжает собственный профессиональный рост, но и активно развивает комьюнити вокруг стиля, внося вклад в популяризацию Frame Up в Европе через обучение, проекты, классы и участие в соревнованиях.",

  "teachers.sveta.p1": "Света — танцор и преподаватель, активно работающий в современной танцевальной индустрии.",
  "teachers.sveta.p2": "На данный момент она является важной частью Frame Up команды Amanita, участвует в организации ивентов для развития Frame Up сцены в Брно через Frame Up Nation, ведёт регулярные классы в Брно и проводит выездные классы как в Чехии, так и за её пределами, включая Остраву и Вену.",
  "teachers.sveta.p3": "Свою базу Света получила в художественной гимнастике, которой занималась с детства и достигла уровня кандидата в мастера спорта. Именно там у неё сформировались дисциплина, контроль тела и внимание к деталям.",
  "teachers.sveta.p4": "После завершения спортивного этапа она продолжила развиваться в танце, работала в разных стилях, долгое время занималась contemporary, была частью творческого коллектива, а позже сосредоточилась на Frame Up. Света продолжает системно расти как танцор и преподаватель, регулярно посещая тренировки, конвенции и мастер-классы и расширяя свой профессиональный опыт.",

  "teachers.lucie.p1": "Lucie Drozdová — Frame Up танцовщица и pole dancer. Она танцует с 5 лет, когда начала заниматься в детском вокально-танцевальном ансамбле в Словакии. Позже она соревновалась в disco dance и art dance, а также окончила танцевальное отделение частной школы искусств, где изучала основы балета, джаза и народного танца. Кроме того, она окончила вторую ступень обучения игре на фортепиано.",
  "teachers.lucie.p2": "Во время учёбы в Брно ей пришлось покинуть свою танцевальную группу. Она пробовала разные виды спорта, но везде ей не хватало художественного выражения. В 2015 году она открыла для себя pole dance и сразу начала интенсивно тренироваться.",
  "teachers.lucie.p3": "В 2016 году она приняла участие в своих первых соревнованиях по pole sport в любительской категории. Год спустя она начала также преподавать pole dance, что автоматически перевело её в профессиональную соревновательную категорию. В том же году она посетила свой первый workshop по Frame Up, и этот стиль сразу привлёк её внимание.",
  "teachers.lucie.p4": "На чемпионате Чехии по Pole Art 2018 она завоевала золотую медаль и стала одной из ведущих чешских pole dancer. Позже она также сосредоточилась на Exotic Pole Dance, выступала на международном уровне и в 2022 году выиграла престижный конкурс Exotic Generation в Англии. С 2022 года она также является сертифицированной судьёй организации IPSF. В 2024 году она основала проект Lucid Dreams, а в 2026 году после паузы полностью вернулась к тренировкам, преподаванию и стилю Frame Up.",

  "teachers.marushka.p1": "Меня зовут Мария, также меня знают как Марушка. Я танцую с детства. В 4 года я начала заниматься балетом и продолжала до 12 лет. Балет дал мне сильную базу для всех танцевальных направлений, которые пришли позже, и я до сих пор опираюсь на неё, когда преподаю технику своим ученицам.",
  "teachers.marushka.p2": "Позже в моей жизни было несколько лет street dance, затем pole dance heels, которым я продолжаю активно заниматься. Несколько лет назад я влюбилась в Strip и Frame Up. В Frame Up я продолжаю активно расти, посещая курсы, мастер-классы и кэмпы у других преподавателей.",
  "teachers.marushka.p3": "Сейчас я преподаю Strip Plastique в студии Citadela в Брно, где веду начинающих с самых основ. На своих занятиях я делаю акцент на правильной технике, исполнении и музыкальности. Для меня самое важное — создавать безопасное пространство. Мне очень нравится видеть, как мои девочки меняются через танец, излучают уверенность и переносят эту энергию в повседневную жизнь. Буду очень рада видеть вас на своих занятиях.",

  "teachers.alena.p1": "В детстве Алёна занималась восточными танцами, и уже этот первый опыт принёс ей 1 место на всеукраинском конкурсе.",
  "teachers.alena.p2": "В 2021 году она вернулась в танцы и нашла свой стиль — Frame Up Strip. Уже за год благодаря регулярным тренировкам, акробатике и растяжке она пришла к 1 месту на чемпионате Украины.",
  "teachers.alena.p3": "В 2022–2023 годах она преподавала танцы в Брно. После перерыва почти в два года она вернулась в 2025 году с ещё более глубоким пониманием и любовью к танцу.",
  "teachers.alena.p4": "Она искренне верит, что танец — это не про возраст, а про желание чувствовать, двигаться и быть в контакте с собой.",
  "teachers.alena.p5": "Её кредо: «Успех — это 99% труда и лишь 1% таланта».",

  "teachers.vika.p1": "Я танцую с 3 лет и 13 лет посвятила народным танцам. Позже я перешла в pole sport, которым занималась 2 года.",
  "teachers.vika.p2": "Затем в мою жизнь пришли strip-направления, и следующие 2 года я развивалась в pole exotic. В 2022 году я открыла для себя Frame Up, и с тех пор именно этот стиль откликается мне больше всего.",
  "teachers.vika.p3": "Я не представляю свою жизнь без танца и продолжаю развиваться, посещая мастер-классы и онлайн-обучения. Мне нравится открывать для себя новые взгляды на танец.",
  "teachers.vika.p4": "",

  "teachers.katya.p1": "Меня зовут Катя. Я танцую уже 14 лет, и 7 лет назад открыла для себя Frame Up.",
  "teachers.katya.p2": "Мне нравится многогранность этого стиля: сегодня мы можем уйти в глубокую лирику, завтра — в энергию hip-hop, а послезавтра добавить игривую чувственность.",
  "teachers.katya.p3": "Музыкальность, чёткие акценты и фирменные детали — это то, что меня характеризует. На занятиях мы изучаем хореографию шаг за шагом, пока она не станет комфортной, а затем доводим её до качества.",
  "teachers.katya.p4": "Рост моих учениц — моя самая большая мотивация. Также за моими плечами победы в баттлах и призовые места в категории Solo Professional на чемпионатах Украины.",
    "teachers.katya.p5": "Femme Fest UA 2018: 1 место - Strip/Solo/Pro 2 место- Battle, Frame Up UA 2019: 1 место- Battle 4 место- Strip/Solo/Pro, Femme Fest UA 2020: 2 место- Strip/Solo/Pro.",


  "teachers.diana.p1": "Диана — тренер с многолетним опытом в сфере движения, с акцентом на растяжку, йогу, телесную осознанность, Contemporary и Frame Up.",
"teachers.diana.p2": "На данный момент она является участницей Frame Up команды Amanita, специализируется на работе с телом через растяжку и йогу, формируя осознанный и безопасный подход к движению, участвует в подготовке и реализации танцевальных мастер-классов и ивентов для развития Frame Up направления в Брно в рамках проекта Frame Up Nation, а также продолжает активное обучение, регулярно посещая мастер-классы и онлайн-курсы.",
"teachers.diana.p3": "Своё развитие Диана начала в художественной гимнастике, где достигла уровня кандидата в мастера спорта. Позже работала в цирковом искусстве как воздушная гимнастка, что стало важной основой для развития координации, контроля тела и физической выносливости.",
"teachers.diana.p4": "В дальнейшем она продолжила развитие в танцевальной сфере, сосредоточившись на направлениях Contemporary и Frame Up и формируя собственное понимание движения.",
"teachers.diana.p5": "Благодаря дополнительному образованию в области йоги и растяжки, Диана выстраивает работу с телом через глубокое понимание анатомии и принципов движения. В своей практике она делает акцент на технике выполнения, безопасности и постепенном развитии физических возможностей.",

  "cta.book_trial": "Присоединяйся к Frame Nation",
  "ct.book_trial_teach": "Записаться на пробное занятие",

    "page.schedule.title": "Расписание — MOVE DANCE",
"page.schedule.desc": "Расписание занятий MOVE DANCE: дни недели и актуальные слоты.",
"schedule.h2": "РАСПИСАНИЕ ЗАНЯТИЙ",
"schedule.filter_aria": "Фильтр",
"schedule.add_aria": "Добавить",
"schedule.day.mon": "Пн",
"schedule.day.tue": "Вт",
"schedule.day.wed": "Ср",
"schedule.day.thu": "Чт",
"schedule.day.fri": "Пт",
"schedule.day.sat": "Сб",
"schedule.day.sun": "Вс",

    "page.merch.title": "Отзывы — MOVE DANCE",
"page.merch.desc": "Отзывы о студии MOVE DANCE: атмосфера, комьюнити, мероприятия и занятия.",

"section.merch": "ЧТО ГОВОРЯТ О НАС",
"merch.leave": "Оставить отзыв",


"a11y.instagram": "Instagram",
"a11y.telegram": "Telegram",

"merch.photo_alt": "Фото группы MOVE DANCE",
"merch.form_photo_alt": "Фото студии MOVE DANCE",

    "merch.cta.title": "ЕСЛИ ВЫ ТОЖЕ ХОТИТЕ ОСТАВИТЬ ОТЗЫВ — ЭТО РЕАЛЬНО",

    // =====================
// PORTFOLIO — RU
// =====================
"page.portfolio.title": "Портфолио — MOVE DANCE",
"page.portfolio.desc": "Фото и видео портфолио MOVE DANCE: выступления, съёмки и студийный контент.",

"portfolio.h1": "Портфолио — MOVE DANCE",
"portfolio.photo_h2": "ФОТО",
"portfolio.video_h2": "ВИДЕО",

"portfolio.photo_alt": "Фото MOVE DANCE",
"portfolio.video_alt": "Видео MOVE DANCE",

"portfolio.photo_carousel_aria": "Карусель фото MOVE DANCE",
"portfolio.video_carousel_aria": "Карусель видео MOVE DANCE",
"portfolio.dots_aria": "Индикаторы слайдов карусели",

"portfolio.open_photo_aria": "Открыть фото в новом окне",
"portfolio.open_video_aria": "Открыть видео в новом окне",

    // =====================
// CERTIFICATE — RU
// =====================
"page.certificate.title": "Подарочный сертификат — MOVE DANCE",
"page.certificate.desc": "Подарочный сертификат MOVE DANCE: оформление, сумма, получение и оплата.",

"cert.title": "ПОДАРИ ЭМОЦИИ И ВДОХНОВЕНИЕ",
"cert.badge": "🎀",

"cert.hero1": "Дарите эмоции и впечатления, а не вещи!",
"cert.hero2": "Этот сертификат открывает двери в мир танца, музыки и вдохновения. Это огромный мир, полный радости, открытий, новых знакомств и приключений. Такой подарок не оставит никого равнодушным!",
"cert.hero3": "Вам необходимо только определиться с суммой сертификата. А получатель сам выберет подходящий стиль и расписание.",
"cert.hero4": "Сертификат действует 3 месяца.",
"cert.hero5": "Выдаётся на одного человека, без права передачи другому лицу.",
"cert.banner_alt": "Подарочный сертификат MOVE DANCE",

"cert.form_title": "ОФОРМЛЕНИЕ ПОДАРОЧНОГО СЕРТИФИКАТА",

"cert.l1": "1. Ваше имя",
"cert.l2": "2. Ваши контактные данные для связи",
"cert.l3": "3. От кого, кому и текст поздравления (до 300 символов)",
"cert.l4": "4. Сумма сертификата",
"cert.l5": "5. Способ получения сертификата:",
"cert.l6": "6. Способ оплаты",

"cert.ph_name": "Введите ваше имя",
"cert.ph_contact": "Введите e-mail или телефон для связи",
"cert.ph_message": "Введите текст поздравления (до 300 символов)",
"cert.ph_email": "Введите e-mail, куда отправить сертификат",
"cert.ph_invoice": "Введите данные для выставления фактуры (ФИО/компания, телефон/e-mail)",

"cert.sum.4000": "4000 Kč",
"cert.sum.2800": "2800 Kč",
"cert.sum.1600": "1600 Kč",
"cert.sum.800": "800 Kč",
"cert.sum.500": "500 Kč",

"cert.delivery.email": "Получить по e-mail",
"cert.delivery.pickup": "Забрать лично в студии",

"cert.pay.invoice": "Оплатить по фактуре",
"cert.pay.studio": "Оплатить в студии",

"cert.btn": "Заказать сертификат",


"nav.directions": "События",
    "nav.faq": "FAQ",
"nav.portfolio": "Галерея",

// =====================
// FAQ — RU
// =====================
"page.faq.title": "FAQ — MOVE DANCE",
"page.faq.desc": "Ответы на частые вопросы о занятиях, абонементах и правилах MOVE DANCE.",

"section.faq": "СПРАШИВАЛИ - ОТВЕЧАЕМ",

"faq.q1.q": "Если я новичок в Frame Up / Strip, могу ли я прийти на мастер-класс?",
"faq.q1.a": "Да, конечно. В Frame Nation проходит множество мастер-классов, и к нам можно приходить даже без большого опыта. Для нас важно поддерживать развитие каждого человека и всего направления в целом. Мы строим сильное и при этом очень тёплое комьюнити, где принимают, поддерживают и вдохновляют.",

"faq.q2.q": "Как записаться на занятие, workshop или masterclass?",
"faq.q2.a": "Вы можете записаться через Telegram, Instagram или по контактам на сайте. После записи мы отправим всю нужную информацию о дате, времени, формате и оплате.",

"faq.q3.q": "Что такое Frame Nation?",
"faq.q3.a": "Frame Nation — это Frame Up community in Brno, где проходят регулярные занятия, workshops, съёмки, выступления и masterclasses с приглашёнными преподавателями.",

 

    // A11Y
    "a11y.language": "Выбор языка",
    "a11y.open_menu": "Открыть меню",
    "a11y.prev": "Предыдущий",
    "a11y.next": "Следующий",
    "a11y.address": "Адрес",

    // PAGE META//
                            "page.home.title": "MOVE DANCE — Студия танцев",
                            "page.home.desc": "Танцевальная студия MOVE DANCE в Брно. Направления, преподаватели, цены, расписание.",

    // NAV
    "nav.about": "Мерч",
    "directionsnav.": "Направления",
    "nav.prices": "Цены",
    "nav.schedule": "Расписание",
    "nav.teachers": "Преподаватели",

    // COMMON
    "common.subscribe": "ПОДПИСЫВАЙСЯ",
    "common.subscribe_sub": "И ТЫ НЕ УПУСТИШЬ НАШИ НОВОСТИ И МЕРОПРИЯТИЯ",
    "common.learn_more": "Узнать больше",
    "common.join": "СТАНЬ ЧАСТЬЮ НАШЕГО КОМЬЮНИТИ",



    // HERO
    "hero.title": "FRAME NATION"  ,
    "hero.subtitle": "ОДИН РИТМ, ОДНА СЕМЬЯ",

    // WHY
    "section.why": "КТО МЫ?",
    "why.subtitle": "ИЛИ КОМУ БЛИЗКО НАШЕ КОМЬЮНИТИ",
    "why.item1": "Frame Nation — танцевальное комьюнити в Брно, пропитанное культурой Frame Up.",
    "why.item2": "Нас объединяет танец, общая философия, любовь к искуству и поддержка друг дуга.",
    // "why.item3": "Мы .",
    // "why.item4": "Разнообразие направлений: каждому темпераменту — свой стиль.",
    // "why.item5": "Мы почти в центре города и останемся в твоем сердечке надолго.",
    // "why.item6": "События, мастер-классы, движ — каждый месяц.",

    // TEACHERS
    "teachers.h2": "ПРЕПОДАВАТЕЛИ В БРНО",
    // "ct.book_trial_teach": "УЗНАТЬ БОЛЬШЕ",

    // PRICES
    // "prices.h2": "ЧТО И ПО ЧЕМ",
    // "cert.btn": "Заказать сертификат",
    // "prices.card1.duration": "3 месяца",
    // "prices.card1.type": "групповых<br>занятий",
    // "prices.card2.duration": "2 месяца",
    // "prices.card2.type": "занятия<br>в мини-группе",
    // "prices.card3.duration": "1 месяц",
    // "prices.card3.type": "занятий<br>для детей",
    // "prices.card4.type": "пробное<br>занятие",
    // "prices.card5.type": "индивидуальное<br>занятие",
    // "prices.more_link": "БОЛЬШЕ →",

    // TELEGRAM
    "tg.h3": "РАЗВИВАЙСЯ С НАМИ",
    "tg.text": "ОБУЧАЮЩИЕ ХОРЕОГРАФИИ,<br>FRAME UP ВДОХНОВЕНИЕ И АВТОРСКИЙ КОНТЕНТ",

    // VIBE
    "vibe.h2": "НАША АТМОСФЕРА",
    "vibe.review.text": "“Здесь я реально начала чувствовать себя красивой. Движения сначала кажутся сложными, но потом ловишь кайф. Преподаватель крутая — всё доступно объясняет и поддерживает.”",
    "vibe.merch_link": "ЗАКАЗАТЬ МЕРЧ <i class='fas fa-arrow-right'></i>",
    "vibe.photos_link": "СМОТРЕТЬ ВСЕ ФОТО <i class='fas fa-arrow-right'></i>",
    "vibe.videos_link": "СМОТРЕТЬ ВСЕ ВИДЕО <i class='fas fa-arrow-right'></i>",

    // FAQ (preview)
    "section.faq": "FAQ",
    "faq.h2": "СПРАШИВАЛИ — ОТВЕЧАЕМ",
    "faq.q1": "Не могу определиться с направлением. Можете помочь?",
    "faq.a1": "Конечно! Напишите нам в Instagram или Telegram — мы подберём направление под вас.",
    "faq.q2": "Нужен ли опыт, чтобы начать заниматься?",
    "faq.a2": "Нет, опыт не требуется. Мы принимаем учеников любого уровня подготовки.",
    "faq.q3": "Можно ли поставить индивидуальный танец или номер на мероприятие?",
    "faq.a3": "Да. Мы проводим индивидуальные занятия и постановки под мероприятия.",
    "faq.more_link": "СМОТРЕТЬ ВСЕ ВОПРОСЫ <i class='fas fa-arrow-right'></i>",

    // PORTFOLIO label in nav/sections if used elsewhere
    "section.portfolio": "Портфолио",

    // FOOTER
    "footer.address": "ZÁBRDOVICKÁ 10/5, 615 00<br>BRNO-ŽIDENICE-ZÁBRDOVICE",
    "footer.join_btn": "Присоединиться",
    "footer.designer": "Дизайнер: <a href='#'>@designerhandle</a>",
  },

  en: {

// =====================
// MERCH — EN
// =====================
    "merch.buy_now": "BUY NOW",

"merch.category.longsleeves": "LONGSLEEVES",
"merch.category.pants_stickers": "PANTS & STICKERS",

"merch.pink.price": "30€",
"merch.pink.title": "PINK LIMITED EDITION",

"merch.black.price": "25€",
"merch.black.title": "ESSENTIAL BLACK",

"merch.long_taupe.price": "30€",
"merch.long_taupe.title": "LONG TAUPE",

"merch.long_black.price": "30€",
"merch.long_black.title": "LONG BLACK",

"merch.pants.price": "60€",
"merch.pants.title": "PANTS BY CHUMACK",

"merch.stickers.price": "6€",
"merch.stickers.title": "STICKER PACK",

    "events.page_intro_upcoming": "Explore past and upcoming Frame Up workshops, special events, and dance masterclasses in Brno organized by Frame Nation and invited teachers.",
"teachers.page_intro": "Meet our Frame Up teachers in Brno and experienced Frame Up instructors who develop the style through regular classes, workshops, performances, and community projects.",

    "events.upcoming":"Upcoming Events",
    "events.title":"Upcoming Events",
"events.past":"Past Events",
"events.soon":"Announcement soon",

    "events":{
"upcoming":"UPCOMING EVENTS",
"past":"PAST EVENTS",
"soon":"Announcement soon"
},
    "popup.success.title": "THANK YOU FOR YOUR MESSAGE",
"popup.success.text": "We will get back to you soon",
"popup.error.title": "SENDING FAILED",
"popup.error.text": "Please try again or contact us via Instagram/Telegram",

// =====================
// MERCH — EN
// =====================

  "page.teachers.title": "Teachers | BRNO",
  "page.teachers.desc": "Meet the teachers in Brno: Frame Up, Strip, heels and related dance styles.",

  "teachers.name.anastasia": "Anastasiia",
  "teachers.name.sveta": "Sveta",
  "teachers.name.lucie": "Lucie",
  "teachers.name.marushka": "Marie",
  "teachers.name.alena": "Alena",
  "teachers.name.vika": "Vika",
  "teachers.name.katya": "Katya",
  "teachers.name.diana": "Diana",


  "teachers.photo_alt.anastasia": "Anastasiia — Move Dance teacher",
  "teachers.photo_alt.sveta": "Sveta — Move Dance teacher",
  "teachers.photo_alt.lucie": "Lucie — Move Dance teacher",
  "teachers.photo_alt.marushka": "Marie — Move Dance teacher",
  "teachers.photo_alt.alena": "Alena — Move Dance teacher",
  "teachers.photo_alt.vika": "Vika — Move Dance teacher",
  "teachers.photo_alt.katya": "Katya — Move Dance teacher",
  "teachers.photo_alt.diana": "Diana — Move Dance teacher",


  "teachers.anastasia.p1": "Anastasiia Hinak (@nasti_hinak) is a dancer, teacher, and one of the active representatives of the Frame Up scene in Central Europe.",
  "teachers.anastasia.p2": "At the moment, she is an official representative of Frame Up (certified since 2026), the founder of Frame Up Nation — a project focused on developing the style in Brno, and is also developing the direction in Austria through the FrameUp Austria project (@frameup_austria). She is the creator of the Amanita team, the owner of Move Dance studio, and regularly teaches guest classes while continuing to grow through online courses and masterclasses.",
  "teachers.anastasia.p3": "Her Frame Up competition experience includes: World of Dance Prague 2025 — 4th place (All Styles), World of Dance Bratislava 2025 — 5th place (All Styles), Stage 18+ Prague 2025 — 1st place (Beginners) and 4th place (Pro), and Tsok Tsok Riga — 2nd place in Battles and 4th place in Solo High Heels & Frame Up Pro.",
  "teachers.anastasia.p4": "Anastasiia built a strong foundation in rhythmic gymnastics, where she achieved the level of Master of Sports. Later, already in the Czech Republic, while working with the national team, she made a conscious choice in favor of art and devoted herself fully to dance. Later on, Anastasiia continued developing in contemporary and other dance styles, expanding her movement vocabulary and musical range, while Frame Up became her key style. Today, she not only continues her own professional growth, but also actively develops the community around the style, contributing to the popularization of Frame Up in Europe through teaching, projects, classes, and participation in competitions.",

  "teachers.sveta.p1": "Sveta is a dancer and teacher actively working in the modern dance industry.",
  "teachers.sveta.p2": "At the moment, she is an essential part of the Amanita Frame Up team, contributes to organizing events for the development of the Frame Up scene in Brno through Frame Up Nation, teaches regular classes in Brno, and gives guest classes both in the Czech Republic and abroad, including Ostrava and Vienna.",
  "teachers.sveta.p3": "Sveta built her foundation in rhythmic gymnastics, which she practiced from childhood and where she reached the level of Candidate for Master of Sports. It was there that she developed discipline, body control, and attention to detail.",
  "teachers.sveta.p4": "After finishing her sports stage, she continued developing in dance, worked in different styles, spent a long time in contemporary, was part of a creative collective, and later focused on Frame Up. Sveta continues to grow systematically as both a dancer and a teacher, regularly attending trainings, conventions, and masterclasses while expanding her professional experience.",

  "teachers.lucie.p1": "Lucie Drozdová is a Frame Up dancer and pole dancer. She has been dancing since the age of 5, when she started in a children’s singing and dance ensemble in Slovakia. Later, she competed in disco dance and art dance, and completed dance studies at a private art school, where she also trained in the basics of ballet, jazz, and folk dance. In addition, she completed the second level of piano studies.",
  "teachers.lucie.p2": "While studying in Brno, she had to leave her dance group. She tried different sports, but artistic expression was missing everywhere. In 2015, she discovered pole dance and immediately began training intensively.",
  "teachers.lucie.p3": "In 2016, she took part in her first pole sport competitions in the amateur category. A year later, she also started teaching pole dance, which automatically moved her into the professional competition category. In the same year, she attended her first Frame Up workshop, and the style immediately caught her attention.",
  "teachers.lucie.p4": "At the Czech Pole Art Championship 2018, she won a gold medal and became one of the leading Czech pole dancers. Later, she also began focusing on Exotic Pole Dance, competing internationally and winning the prestigious Exotic Generation competition in England in 2022. Since 2022, she has also been a certified judge in the IPSF organization. In 2024, she founded the Lucid Dreams project, and in 2026, after a break, she fully returned to training, teaching, and dedicating herself to Frame Up.",

  "teachers.marushka.p1": "My name is Marie, also known as Maruška. I have been dancing since childhood. I started ballet at the age of 4 and continued until I was 12. Ballet gave me a strong foundation for all the dance styles that followed, and I still draw from it when teaching technique to my students.",
  "teachers.marushka.p2": "Later came several years of street dance, followed by pole dance heels, which I still actively practice. A few years ago, I fell in love with Strip and Frame Up. In Frame Up, I continue to grow actively by attending courses, masterclasses, and camps with other teachers.",
  "teachers.marushka.p3": "At the moment, I teach Strip Plastique at Citadela dance studio in Brno, where I guide beginners from the very basics. In my classes, I focus on proper technique, execution, and musicality. Creating a safe space is the most important thing for me. I love seeing my girls transform through dance, radiate confidence, and carry that energy into everyday life. I will be very happy to see you in my classes.",

  "teachers.alena.p1": "As a child, Alena practiced oriental dance for one year, and even that first experience brought her 1st place at an all-Ukrainian competition.",
  "teachers.alena.p2": "In 2021, she returned to dance and found her style — Frame Up Strip. Within a year, through regular training, acrobatics, and stretching, she reached 1st place at the Ukrainian championship.",
  "teachers.alena.p3": "In 2022–2023, she taught dance in Brno. After a break of almost two years, she returned in 2025 with a deeper understanding of and love for dance.",
  "teachers.alena.p4": "She sincerely believes that dance is not about age, but about the desire to feel, move, and stay connected with yourself.",
  "teachers.alena.p5": "Her credo is: “Success is 99% hard work and only 1% talent.”",

  "teachers.vika.p1": "I have been dancing since the age of 3 and dedicated 13 years to folk dance. Later, I moved into pole sport, which I practiced for 2 years.",
  "teachers.vika.p2": "Then strip styles entered my life, and for the next 2 years I developed in pole exotic. In 2022, I discovered Frame Up, and since then this style has resonated with me the most.",
  "teachers.vika.p3": "I cannot imagine my life without dance and continue to grow by attending masterclasses and online training. I love discovering new perspectives on dance.",
  "teachers.vika.p4": "",

  "teachers.katya.p1": "My name is Katya. I have been dancing for 14 years, and 7 years ago I discovered Frame Up.",
  "teachers.katya.p2": "I love the versatility of this style: today we can go into deep lyrical movement, tomorrow into hip-hop energy, and the day after add playful sensuality.",
  "teachers.katya.p3": "Musicality, clear accents, and signature details are what define me. In class, we study choreography step by step until it feels comfortable and then refine it with quality.",
  "teachers.katya.p4": "The growth of my students is my biggest motivation. I also bring with me battle wins and prize placements in the Solo Professional category at Ukrainian championships.",
    "teachers.katya.p5": "Femme Fest UA 2018: 1 place - Strip/Solo/Pro 2 place- Battle, Frame Up UA 2019: 1 place- Battle 4 place- Strip/Solo/Pro, Femme Fest UA 2020: 2 place- Strip/Solo/Pro.",


"teachers.diana.p1": "Diana is a teacher with many years of experience in the field of movement, with a focus on stretching, yoga, body awareness, Contemporary, and Frame Up.",
"teachers.diana.p2": "At the moment, she is a member of the Frame Up team Amanita, specializes in body work through stretching and yoga, building a conscious and safe approach to movement, takes part in the preparation and realization of dance masterclasses and events for the development of the Frame Up scene in Brno within the Frame Up Nation project, and continues her active education by regularly attending masterclasses and online courses.",
"teachers.diana.p3": "Diana began her development in rhythmic gymnastics, where she achieved the level of Candidate for Master of Sport. Later, she worked in circus arts as an aerial gymnast, which became an important foundation for the development of her coordination, body control, and physical endurance.",
"teachers.diana.p4": "She later continued her development in the dance field, focusing on Contemporary and Frame Up and shaping her own understanding of movement.",
"teachers.diana.p5": "Thanks to her additional education in yoga and stretching, Diana builds body work through a deep understanding of anatomy and movement principles. In her practice, she places special emphasis on technique, safety, and the gradual development of physical abilities.",

  "cta.book_trial": "Join the Nation",
  "ct.book_trial_teach": "Book a trial class",

    "page.schedule.title": "Schedule — MOVE DANCE",
"page.schedule.desc": "MOVE DANCE class schedule: weekdays and available slots.",
"schedule.h2": "CLASS SCHEDULE",
"schedule.filter_aria": "Filter",
"schedule.add_aria": "Add",
"schedule.day.mon": "Mon",
"schedule.day.tue": "Tue",
"schedule.day.wed": "Wed",
"schedule.day.thu": "Thu",
"schedule.day.fri": "Fri",
"schedule.day.sat": "Sat",
"schedule.day.sun": "Sun",

    "page.merch.title": "merch — MOVE DANCE",
"page.merch.desc": "MOVE DANCE merch: atmosphere, community, events, and classes.",

"section.merch": "WHAT PEOPLE SAY ABOUT US",
"merch.leave": "Leave a review",
"common.send": "SEND",


"a11y.instagram": "Instagram",
"a11y.telegram": "Telegram",

"merch.photo_alt": "MOVE DANCE group photo",
"merch.form_photo_alt": "MOVE DANCE studio photo",

    "merch.cta.title": "IF YOU ALSO WANT TO LEAVE A REVIEW — IT’S POSSIBLE",

    // =====================
// PORTFOLIO — EN
// =====================
"page.portfolio.title": "Portfolio — MOVE DANCE",
"page.portfolio.desc": "MOVE DANCE photo and video portfolio: performances, shoots, and studio content.",

"portfolio.h1": "Portfolio — MOVE DANCE",
"portfolio.photo_h2": "PHOTOS",
"portfolio.video_h2": "VIDEOS",

"portfolio.photo_alt": "MOVE DANCE photo",
"portfolio.video_alt": "MOVE DANCE video",

"portfolio.photo_carousel_aria": "MOVE DANCE photo carousel",
"portfolio.video_carousel_aria": "MOVE DANCE video carousel",
"portfolio.dots_aria": "Carousel slide indicators",

"portfolio.open_photo_aria": "Open photo in a new tab",
"portfolio.open_video_aria": "Open video in a new tab",

    // =====================
// CERTIFICATE — EN
// =====================
"page.certificate.title": "Gift Certificate — MOVE DANCE",
"page.certificate.desc": "MOVE DANCE gift certificate: order form, amount, delivery and payment options.",

"cert.title": "GIVE EMOTIONS AND INSPIRATION",
"cert.badge": "🎀",

"cert.hero1": "Give emotions and memories — not things!",
"cert.hero2": "This certificate opens the door to the world of dance, music, and inspiration. It’s a big world full of joy, discoveries, new connections, and adventures. A gift like this won’t leave anyone indifferent!",
"cert.hero3": "All you need to do is choose the certificate amount. The recipient will select the style and schedule that fits best.",
"cert.hero4": "The certificate is valid for 3 months.",
"cert.hero5": "Issued for one person only. Non-transferable.",
"cert.banner_alt": "MOVE DANCE Gift Certificate",

"cert.form_title": "GIFT CERTIFICATE ORDER",

"cert.l1": "1. Your name",
"cert.l2": "2. Your contact details",
"cert.l3": "3. From whom, to whom, and greeting text (up to 300 characters)",
"cert.l4": "4. Certificate amount",
"cert.l5": "5. Delivery method:",
"cert.l6": "6. Payment method",

"cert.ph_name": "Enter your name",
"cert.ph_contact": "Enter your email or phone number",
"cert.ph_message": "Enter your greeting text (up to 300 characters)",
"cert.ph_email": "Enter the email address for delivery",
"cert.ph_invoice": "Enter invoice details (name/company, phone/email)",

"cert.sum.4000": "4000 Kč",
"cert.sum.2800": "2800 Kč",
"cert.sum.1600": "1600 Kč",
"cert.sum.800": "800 Kč",
"cert.sum.500": "500 Kč",

"cert.delivery.email": "Receive by e-mail",
"cert.delivery.pickup": "Pick up at the studio",

"cert.pay.invoice": "Pay by invoice",
"cert.pay.studio": "Pay at the studio",

"cert.btn": "Order certificate",

    "nav.directions": "Events",
"nav.teachers": "Teachers",
"nav.prices": "Prices",
"nav.schedule": "Schedule",
"nav.faq": "FAQ",
"nav.portfolio": "Gallery",
"nav.about": "Merch",

    "nav.faq": "FAQ",


    // =====================
// FAQ — EN
// =====================
"page.faq.title": "FAQ — MOVE DANCE",
"page.faq.desc": "Answers to common questions about classes, passes, and rules at MOVE DANCE.",

"section.faq": "FAQ — WE ANSWER",

"faq.q1.q": "If I am a beginner in Frame Up / Strip, can I join a masterclass?",
"faq.q1.a": "Yes, of course. Frame Nation hosts many masterclasses, and you are welcome to join even without much experience. For us, it is important to support the growth of every dancer as well as the development of the style as a whole. We are building a strong and warm community where people are welcomed, supported, and inspired.",

"faq.q2.q": "How can I sign up for a class, workshop, or masterclass?",
"faq.q2.a": "You can sign up through Telegram, Instagram, or the contact details on the website. After registration, we will send you all the necessary information about the date, time, format, and payment.",

"faq.q3.q": "What is Frame Nation?",
"faq.q3.a": "Frame Nation is a Frame Up community in Brno where regular classes, workshops, shootings, performances, and masterclasses with invited teachers take place.",


    // A11Y
    "a11y.language": "Language",
    "a11y.open_menu": "Open menu",
    "a11y.prev": "Previous",
    "a11y.next": "Next",
    "a11y.address": "Address",

    // PAGE META
    "page.home.title": "MOVE DANCE — Dance Studio",
    "page.home.desc": "MOVE DANCE studio in Brno. Directions, teachers, prices, schedule.",

    // NAV
    "nav.about": "Merch",
    "nav.directions": "Events",
    "nav.prices": "Prices",
    "nav.schedule": "Schedule",
    "nav.teachers": "Teachers",

    // COMMON
    "common.subscribe": "FOLLOW US",
    "common.subscribe_sub": "So you won’t miss our news and events",
    "common.learn_more": "Learn more",
    "common.join": "JOIN OUR COMMUNITY",


    // HERO
    "hero.title": "FRAME NATION",
    "hero.subtitle": "ONE RHYTHM, ONE FAMILY ",

    // WHY
    "section.why": "WHO ARE WE?",
    "why.subtitle": "OR WHO FEELS CLOSE TO OUR COMMUNITY",
    "why.item1": "Frame Nation is a dance community in Brno shaped by the culture of Frame Up.",
    "why.item2": "We are united by dance, a shared philosophy, love for art, and support for one another.",
    // "why.item3": "Teachers who truly love what they do — they inspire, not just instruct.",
    // "why.item4": "A variety of directions: a style for every personality.",
    // "why.item5": "Near the city center — and it will stay in your heart for a long time.",
    // "why.item6": "Events, workshops, and movement — every month.",

    // TEACHERS
    "teachers.h2": "TEACHERS IN BRNO",
    //  "ct.book_trial_teach": "LEARN MORE",

    // PRICES
    // "prices.h2": "WHAT & HOW MUCH",
    // "cert.btn": "Order a gift certificate",
    // "prices.card1.duration": "3 months",
    // "prices.card1.type": "group<br>classes",
    // "prices.card2.duration": "2 months",
    // "prices.card2.type": "mini-group<br>classes",
    // "prices.card3.duration": "1 month",
    // "prices.card3.type": "kids<br>classes",
    // "prices.card4.type": "trial<br>class",
    // "prices.card5.type": "private<br>class",
    // "prices.more_link": "MORE →",

    // TELEGRAM
    "tg.h3": "GROW WITH US",
    "tg.text": "TRAINING CHOREOGRAPHIES,<br>FRAME UP INSPIRATION AND ORIGINAL CONTENT",

    // VIBE
    "vibe.h2": "OUR ATMOSPHERE",
    "vibe.review.text": "“I finally started feeling beautiful. At first it’s challenging, but then you catch the flow. The teacher is amazing — clear explanations and real support.”",
    "vibe.merch_link": "ORDER MERCH <i class='fas fa-arrow-right'></i>",
    "vibe.photos_link": "VIEW ALL PHOTOS <i class='fas fa-arrow-right'></i>",
    "vibe.videos_link": "VIEW ALL VIDEOS <i class='fas fa-arrow-right'></i>",

    // FAQ
    "section.faq": "FAQ",
    "faq.h2": "YOU ASK — WE ANSWER",
    "faq.q1": "I can’t choose a direction. Can you help me?",
    "faq.a1": "Yes! Message us on Instagram or Telegram — we’ll help you choose the right class.",
    "faq.q2": "Do I need experience to start?",
    "faq.a2": "No experience needed. We welcome all levels.",
    "faq.q3": "Can you choreograph an individual dance for an event?",
    "faq.a3": "Yes. We offer private classes and custom choreography for events.",
    "faq.more_link": "VIEW ALL QUESTIONS <i class='fas fa-arrow-right'></i>",

    "section.portfolio": "Portfolio",

    // FOOTER
    "footer.address": "ZÁBRDOVICKÁ 10/5, 615 00<br>BRNO-ŽIDENICE-ZÁBRDOVICE",
    "footer.join_btn": "Join",
    "footer.designer": "Design: <a href='#'>@designerhandle</a>",
  },

  cs: {

// =====================
// MERCH — CZ
// =====================

    "merch.buy_now": "KOUPIT TEĎ",

"merch.category.longsleeves": "LONGSLEEVY",
"merch.category.pants_stickers": "KALHOTY A SAMOLEPKY",

"merch.pink.price": "30€",
"merch.pink.title": "RŮŽOVÁ LIMITOVANÁ EDICE",

"merch.black.price": "25€",
"merch.black.title": "ESSENTIAL BLACK",

"merch.long_taupe.price": "30€",
"merch.long_taupe.title": "DLOUHÝ TAUPE TOP",

"merch.long_black.price": "30€",
"merch.long_black.title": "ČERNÝ DLOUHÝ TOP",

"merch.pants.price": "60€",
"merch.pants.title": "KALHOTY OD CHUMACK",

"merch.stickers.price": "6€",
"merch.stickers.title": "BALÍČEK SAMOLEPEK",

    "events.page_intro_upcoming": "Objevte minulé i nadcházející Frame Up workshopy, speciální akce a taneční masterclassy v Brně pořádané komunitou Frame Nation a pozvanými lektory.",
"teachers.page_intro": "Seznamte se s našimi lektory Frame Up v Brně a zkušenými instruktory, kteří tento styl rozvíjejí prostřednictvím pravidelných lekcí, workshopů, vystoupení a komunitních projektů.",

    "events.upcoming":"Nadcházející události",
    "events.title":"Nadcházející události",
"events.past":"Minulé události",
"events.soon":"Brzy oznámíme",
    "popup.success.title": "DĚKUJEME ZA VAŠI ZPRÁVU",
"popup.success.text": "Brzy se vám ozveme",
"popup.error.title": "CHYBA ODESLÁNÍ",
"popup.error.text": "Zkuste to prosím znovu nebo nám napište na Instagram/Telegram",
"page.teachers.h1": "Lektoři — MOVE DANCE",

 // =====================
// TEACHERS — CZ
// =====================

  "page.teachers.title": "Lektoři | BRNO",
  "page.teachers.desc": "Poznejte lektory v Brně: Frame Up, Strip, heels a příbuzné taneční styly.",

  "teachers.name.anastasia": "Anastasiia",
  "teachers.name.sveta": "Sveta",
  "teachers.name.lucie": "Lucie",
  "teachers.name.marushka": "Marie",
  "teachers.name.alena": "Alena",
  "teachers.name.vika": "Vika",
  "teachers.name.katya": "Katya",
  "teachers.name.diana": "Diana",


  "teachers.photo_alt.anastasia": "Anastasiia — lektorka Move Dance",
  "teachers.photo_alt.sveta": "Sveta — lektorka Move Dance",
  "teachers.photo_alt.lucie": "Lucie — lektorka Move Dance",
  "teachers.photo_alt.marushka": "Marie — lektorka Move Dance",
  "teachers.photo_alt.alena": "Alena — lektorka Move Dance",
  "teachers.photo_alt.vika": "Vika — lektorka Move Dance",
  "teachers.photo_alt.katya": "Katya — lektorka Move Dance",
  "teachers.photo_alt.diana": "Diana — lektorka Move Dance",


  "teachers.anastasia.p1": "Anastasiia Hinak (@nasti_hinak) je tanečnice, lektorka a jedna z aktivních představitelek Frame Up scény ve střední Evropě.",
  "teachers.anastasia.p2": "V současnosti je oficiální reprezentantkou Frame Up (certifikace od roku 2026), zakladatelkou projektu Frame Up Nation zaměřeného na rozvoj stylu v Brně a zároveň rozvíjí tento směr v Rakousku v rámci projektu FrameUp Austria (@frameup_austria). Je tvůrkyní týmu Amanita, majitelkou studia Move Dance a pravidelně vede hostující lekce, přičemž se dál rozvíjí prostřednictvím online kurzů a masterclassů.",
  "teachers.anastasia.p3": "Její soutěžní zkušenosti ve Frame Up zahrnují: World of Dance Prague 2025 — 4. místo (All Styles), World of Dance Bratislava 2025 — 5. místo (All Styles), Stage 18+ Prague 2025 — 1. místo (Beginners) a 4. místo (Pro), a také Tsok Tsok Riga — 2. místo v Battles a 4. místo v Solo High Heels & Frame Up Pro.",
  "teachers.anastasia.p4": "Anastasiia si vybudovala silný základ v moderní gymnastice, kde dosáhla úrovně mistryně sportu. Později, již v České republice, při práci s národním týmem vědomě zvolila cestu umění a naplno se věnovala tanci. Následně se dále rozvíjela v contemporary a dalších tanečních stylech, čímž rozšířila svůj pohybový i hudební rozsah, klíčovým směrem se pro ni však stal Frame Up. Dnes nejen pokračuje ve svém profesním růstu, ale také aktivně rozvíjí komunitu kolem tohoto stylu a přispívá k popularizaci Frame Up v Evropě prostřednictvím výuky, projektů, lekcí a účasti na soutěžích.",

  "teachers.sveta.p1": "Sveta je tanečnice a lektorka, která aktivně působí v současném tanečním prostředí.",
  "teachers.sveta.p2": "V současnosti je důležitou součástí Frame Up týmu Amanita, podílí se na organizaci akcí pro rozvoj Frame Up scény v Brně prostřednictvím projektu Frame Up Nation, vede pravidelné lekce v Brně a pořádá hostující lekce v České republice i v zahraničí, včetně Ostravy a Vídně.",
  "teachers.sveta.p3": "Svůj základ získala v moderní gymnastice, které se věnovala od dětství a dosáhla úrovně kandidátky mistra sportu. Právě tam si vybudovala disciplínu, kontrolu těla a smysl pro detail.",
  "teachers.sveta.p4": "Po ukončení sportovní etapy pokračovala v rozvoji v tanci, pracovala v různých stylech, dlouhou dobu se věnovala contemporary, byla součástí tvůrčího kolektivu a později se zaměřila na Frame Up. Sveta se dál systematicky rozvíjí jako tanečnice i lektorka, pravidelně navštěvuje tréninky, konvence a masterclassy a rozšiřuje své profesní zkušenosti.",

  "teachers.lucie.p1": "Lucie Drozdová je Frame Up tanečnice a pole dancerka. Tanci se věnuje od 5 let, kdy začínala v dětském pěveckém a tanečním souboru na Slovensku. Později se soutěžně věnovala disco dance a art dance a absolvovala taneční obor na soukromé umělecké škole, kde se věnovala také základům baletu, jazzu a lidového tance. Zároveň je absolventkou druhého stupně hry na klavír.",
  "teachers.lucie.p2": "Během studia v Brně musela ukončit své působení v taneční skupině. Vyzkoušela různé sporty, ale chybělo jí v nich umělecké vyjádření. V roce 2015 objevila pole dance, kterému se začala okamžitě intenzivně věnovat.",
  "teachers.lucie.p3": "V roce 2016 se zúčastnila svých prvních soutěží v pole sportu v amatérské kategorii. O rok později začala pole dance také vyučovat, čímž se automaticky posunula do profesionální soutěžní kategorie. Ve stejném roce absolvovala i svůj první Frame Up workshop, který ji okamžitě zaujal.",
  "teachers.lucie.p4": "Na Mistrovství České republiky v Pole Art 2018 získala zlatou medaili a zařadila se mezi přední české pole dancerky. Později se začala věnovat také Exotic Pole Dance, ve kterém soutěžila na mezinárodní úrovni a v roce 2022 vyhrála prestižní soutěž Exotic Generation v Anglii. Od roku 2022 působí také jako certifikovaná porotkyně organizace IPSF. V roce 2024 založila projekt Lucid Dreams a v roce 2026 se po pauze naplno vrátila k trénování, výuce i stylu Frame Up.",

  "teachers.marushka.p1": "Jmenuji se Marie, ale známá jsem také jako Maruška. Tanci se věnuji od dětství. Ve 4 letech jsem začala s baletem a pokračovala jsem až do svých 12 let. Balet mi dal silný základ pro všechny další taneční styly a dodnes z něj čerpám při výuce techniky svých studentek.",
  "teachers.marushka.p2": "Později přišlo několik let street dance a následně pole dance heels, kterému se stále aktivně věnuji. Před několika lety jsem se zamilovala do Stripu a Frame Up. Ve Frame Up se dál aktivně rozvíjím prostřednictvím kurzů, masterclassů a campů s dalšími lektorkami.",
  "teachers.marushka.p3": "V současnosti vyučuji Strip Plastique v brněnském tanečním studiu Citadela, kde vedu začátečnice od úplných základů. Na svých lekcích kladu důraz na správnou techniku, provedení a muzikalitu. Vytvoření bezpečného prostoru je pro mě to nejdůležitější. Miluji, když vidím své holky, jak se během tance proměňují, září sebevědomím a přenášejí tuto energii i do běžného života. Budu moc ráda, když se potkáme na mých lekcích.",

  "teachers.alena.p1": "V dětství se Alena jeden rok věnovala orientálním tancům a už tato první zkušenost jí přinesla 1. místo na celoukrajinské soutěži.",
  "teachers.alena.p2": "V roce 2021 se k tanci vrátila a našla svůj styl — Frame Up Strip. Během jednoho roku se díky pravidelnému tréninku, akrobacii a strečinku dostala na 1. místo na mistrovství Ukrajiny.",
  "teachers.alena.p3": "V letech 2022–2023 vyučovala tanec v Brně. Po téměř dvouleté pauze se v roce 2025 vrátila s hlubším porozuměním a láskou k tanci.",
  "teachers.alena.p4": "Upřímně věří, že tanec není o věku, ale o touze cítit, hýbat se a být v kontaktu sama se sebou.",
  "teachers.alena.p5": "Její krédo zní: „Úspěch je z 99 % práce a jen z 1 % talent.“",

  "teachers.vika.p1": "Tančím od 3 let a 13 let jsem věnovala lidovým tancům. Později jsem přešla k pole sportu, kterému jsem se věnovala 2 roky.",
  "teachers.vika.p2": "Poté do mého života přišly strip styly a další 2 roky jsem se rozvíjela v pole exotic. V roce 2022 jsem objevila Frame Up a od té doby je to právě tento styl, který se mnou rezonuje nejvíc.",
  "teachers.vika.p3": "Bez tance si nedokážu představit svůj život a dál se rozvíjím prostřednictvím masterclassů a online tréninků. Baví mě objevovat nové pohledy na tanec.",
  "teachers.vika.p4": "",

  "teachers.katya.p1": "Jmenuji se Katya. Tanci se věnuji už 14 let a před 7 lety jsem objevila Frame Up.",
  "teachers.katya.p2": "Miluji všestrannost tohoto stylu: dnes můžeme jít do hluboké lyriky, zítra do energie hip-hopu a pozítří přidat hravou smyslnost.",
  "teachers.katya.p3": "Muzikalita, jasné akcenty a charakteristické detaily jsou to, co mě vystihuje. Na lekcích studujeme choreografii krok za krokem, dokud se v ní necítíme komfortně, a poté ji pilujeme do kvality.",
  "teachers.katya.p4": "Růst mých studentek je mou největší motivací. Zároveň si s sebou nesu vítězství v battlových formátech a umístění v kategorii Solo Professional na ukrajinských šampionátech.",
"teachers.katya.p5": "Femme Fest UA 2018: 1 místo - Strip/Solo/Pro 2 místo- Battle, Frame Up UA 2019: 1 místo- Battle 4 místo- Strip/Solo/Pro, Femme Fest UA 2020: 2 místo- Strip/Solo/Pro.",


"teachers.diana.p1": "Diana je lektorka s dlouholetými zkušenostmi v oblasti pohybu se zaměřením na stretching, jógu, vědomou práci s tělem, Contemporary a Frame Up.",
"teachers.diana.p2": "V současné době je členkou Frame Up týmu Amanita, specializuje se na práci s tělem prostřednictvím stretchingu a jógy, díky nimž vytváří vědomý a bezpečný přístup k pohybu, podílí se na přípravě a realizaci tanečních masterclassů a akcí pro rozvoj směru Frame Up v Brně v rámci projektu Frame Up Nation a zároveň se dále aktivně vzdělává pravidelnou účastí na masterclassech a online kurzech.",
"teachers.diana.p3": "Diana začala svůj rozvoj v moderní gymnastice, kde dosáhla úrovně kandidátky na mistra sportu. Později působila v cirkusovém umění jako vzdušná gymnastka, což se stalo důležitým základem pro rozvoj její koordinace, kontroly těla a fyzické vytrvalosti.",
"teachers.diana.p4": "Následně pokračovala ve svém rozvoji v taneční oblasti, zaměřila se na směry Contemporary a Frame Up a postupně si vytvořila vlastní porozumění pohybu.",
"teachers.diana.p5": "Díky dalšímu vzdělání v oblasti jógy a stretchingu staví Diana práci s tělem na hlubokém porozumění anatomii a principům pohybu. Ve své praxi klade důraz na techniku provedení, bezpečnost a postupný rozvoj fyzických možností.",

  "cta.book_trial": "Staň se součástí Frame Nation",
  "ct.book_trial_teach": "Rezervovat zkušební lekci",

    "page.schedule.title": "Rozvrh — MOVE DANCE",
"page.schedule.desc": "Rozvrh lekcí MOVE DANCE: dny v týdnu a dostupné časy.",
"schedule.h2": "ROZVRH LEKCÍ",
"schedule.filter_aria": "Filtr",
"schedule.add_aria": "Přidat",
"schedule.day.mon": "Po",
"schedule.day.tue": "Út",
"schedule.day.wed": "St",
"schedule.day.thu": "Čt",
"schedule.day.fri": "Pá",
"schedule.day.sat": "So",
"schedule.day.sun": "Ne",

    "page.merch.title": "Recenze — MOVE DANCE",
"page.merch.desc": "Recenze MOVE DANCE: atmosféra, komunita, akce a lekce.",

"section.merch": "CO O NÁS ŘÍKAJÍ",
"merch.leave": "Napsat recenzi",
"common.send": "ODESLAT",


"a11y.instagram": "Instagram",
"a11y.telegram": "Telegram",

"merch.photo_alt": "Skupinová fotka MOVE DANCE",
"merch.form_photo_alt": "Fotka studia MOVE DANCE",

    "merch.cta.title": "POKUD I VY CHCETE ZANECHAT RECENZI — JE TO MOŽNÉ",

    // =====================
// PORTFOLIO — CS
// =====================
"page.portfolio.title": "Portfolio — MOVE DANCE",
"page.portfolio.desc": "Foto a video portfolio MOVE DANCE: vystoupení, natáčení a studiový obsah.",

"portfolio.h1": "Portfolio — MOVE DANCE",
"portfolio.photo_h2": "FOTKY",
"portfolio.video_h2": "VIDEA",

"portfolio.photo_alt": "Fotka MOVE DANCE",
"portfolio.video_alt": "Video MOVE DANCE",

"portfolio.photo_carousel_aria": "Karusel fotek MOVE DANCE",
"portfolio.video_carousel_aria": "Karusel videí MOVE DANCE",
"portfolio.dots_aria": "Indikátory snímků karuselu",

"portfolio.open_photo_aria": "Otevřít fotku v nové kartě",
"portfolio.open_video_aria": "Otevřít video v nové kartě",

    // =====================
// CERTIFICATE — CS
// =====================
"page.certificate.title": "Dárkový poukaz — MOVE DANCE",
"page.certificate.desc": "Dárkový poukaz MOVE DANCE: objednávka, částka, doručení a platba.",

"cert.title": "DARUJ EMOCE A INSPIRACI",
"cert.badge": "🎀",

"cert.hero1": "Darujte emoce a zážitky — ne věci!",
"cert.hero2": "Tento poukaz otevírá dveře do světa tance, hudby a inspirace. Je to velký svět plný radosti, objevů, nových seznámení a dobrodružství. Takový dárek nenechá nikoho chladným!",
"cert.hero3": "Stačí si jen vybrat částku poukazu. Obdarovaný/á si pak sám/sama zvolí vhodný styl a rozvrh.",
"cert.hero4": "Poukaz platí 3 měsíce.",
"cert.hero5": "Vystaveno na jednu osobu. Nepřenosné.",
"cert.banner_alt": "Dárkový poukaz MOVE DANCE",

"cert.form_title": "OBJEDNÁVKA DÁRKOVÉHO POUKAZU",

"cert.l1": "1. Vaše jméno",
"cert.l2": "2. Vaše kontaktní údaje",
"cert.l3": "3. Od koho, komu a text přání (do 300 znaků)",
"cert.l4": "4. Částka poukazu",
"cert.l5": "5. Způsob převzetí poukazu:",
"cert.l6": "6. Způsob platby",

"cert.ph_name": "Zadejte své jméno",
"cert.ph_contact": "Zadejte e-mail nebo telefon",
"cert.ph_message": "Zadejte text přání (do 300 znaků)",
"cert.ph_email": "Zadejte e-mail pro doručení",
"cert.ph_invoice": "Zadejte fakturační údaje (jméno/firma, telefon/e-mail)",

"cert.sum.4000": "4000 Kč",
"cert.sum.2800": "2800 Kč",
"cert.sum.1600": "1600 Kč",
"cert.sum.800": "800 Kč",
"cert.sum.500": "500 Kč",

"cert.delivery.email": "Doručit e-mailem",
"cert.delivery.pickup": "Vyzvednout osobně ve studiu",

"cert.pay.invoice": "Zaplatit fakturou",
"cert.pay.studio": "Zaplatit ve studiu",

"cert.btn": "Objednat poukaz",

    "nav.directions": "Akce",
"nav.teachers": "Lektoři",
"nav.prices": "Ceny",
"nav.schedule": "Rozvrh",
"nav.faq": "FAQ",
"nav.portfolio": "Galerie",
"nav.about": "Merch",

    "nav.faq": "FAQ",


    // =====================
// FAQ — CS
// =====================
"page.faq.title": "FAQ — MOVE DANCE",
"page.faq.desc": "Odpovědi na nejčastější dotazy o lekcích, permanentkách a pravidlech MOVE DANCE.",

"section.faq": "FAQ — PTALI JSTE SE, ODPOVÍDÁME",

"faq.q1.q": "Pokud jsem začátečník ve Frame Up / Strip, mohu přijít na masterclass?",
"faq.q1.a": "Ano, samozřejmě. Ve Frame Nation probíhá mnoho masterclassů a můžete k nám přijít i bez větších zkušeností. Je pro nás důležité podporovat rozvoj každého člověka i celého směru jako takového. Budujeme silnou, ale zároveň velmi přátelskou komunitu, kde jsou všichni vítáni, podporováni a inspirováni.",

"faq.q2.q": "Jak se mohu přihlásit na lekci, workshop nebo masterclass?",
"faq.q2.a": "Přihlásit se můžete přes Telegram, Instagram nebo přes kontakty na webu. Po registraci vám pošleme všechny potřebné informace o datu, času, formátu i platbě.",

"faq.q3.q": "Co je Frame Nation?",
"faq.q3.a": "Frame Nation je Frame Up komunita v Brně, kde probíhají pravidelné lekce, workshopy, natáčení, vystoupení a masterclassy s pozvanými lektory.",


    // A11Y
    "a11y.language": "Jazyk",
    "a11y.open_menu": "Otevřít menu",
    "a11y.prev": "Předchozí",
    "a11y.next": "Další",
    "a11y.address": "Adresa",

    // PAGE META
    "page.home.title": "MOVE DANCE — Taneční studio",
    "page.home.desc": "MOVE DANCE studio v Brně. Směry, lektoři, ceny, rozvrh.",

    // NAV
    "nav.about": "Merch",
    "nav.directions": "Akce",
    "nav.prices": "Ceny",
    "nav.schedule": "Rozvrh",
    "nav.teachers": "Lektoři",

    // COMMON
    "common.subscribe": "SLEDUJTE NÁS",
    "common.subscribe_sub": "Ať vám neuniknou naše novinky a akce",
    "common.learn_more": "Zjistit více",
    "common.join": "STAŇTE SE SOUČÁSTÍ NAŠÍ KOMUNITY",


    // HERO
    "hero.title": "FRAME NATION",
    "hero.subtitle": "JEDEN RYTMUS, JEDNA RODINA",

    // WHY
    "section.why": "KDO JSME?",
    "why.subtitle": "ANEB KOMU JE NAŠE KOMUNITA BLÍZKÁ",
    "why.item1": "Frame Nation je taneční komunita v Brně prostoupená kulturou Frame Up.",
    "why.item2": "Spojuje nás tanec, společná filozofie, láska k umění a vzájemná podpora.",
    // "why.item3": "Lektoři, kteří svou práci milují — inspirují, nejen učí.",
    // "why.item4": "Různé směry: styl pro každý temperament.",
    // "why.item5": "Téměř v centru města — a zůstane ve vašem srdci dlouho.",
    // "why.item6": "Akce, workshopy a pohyb — každý měsíc.",

    // TEACHERS
    "teachers.h2": "LEKTOŘI V BRNĚ",
    // "ct.book_trial_teach": "ZJISTIT VÍCE",

    // PRICES
    // "prices.h2": "CO A ZA KOLIK",
    // "cert.btn": "Objednat poukaz",
    // "prices.card1.duration": "3 měsíce",
    // "prices.card1.type": "skupinové<br>lekce",
    // "prices.card2.duration": "2 měsíce",
    // "prices.card2.type": "mini-skupina<br>lekce",
    // "prices.card3.duration": "1 měsíc",
    // "prices.card3.type": "dětské<br>lekce",
    // "prices.card4.type": "zkušební<br>lekce",
    // "prices.card5.type": "individuální<br>lekce",
    // "prices.more_link": "VÍCE →",

    // TELEGRAM
    "tg.h3": "ROZVÍJEJ SE S NÁMI",
    "tg.text": "VÝUKOVÉ CHOREOGRAFIE,<br>FRAME UP INSPIRACE A AUTORSKÝ OBSAH",

    // VIBE
    "vibe.h2": "NAŠE ATMOSFÉRA",
    "vibe.review.text": "“Konečně jsem se začala cítit krásná. Nejdřív je to náročné, ale pak chytíte flow. Lektorka je skvělá — vše vysvětlí a podporuje.”",
    "vibe.merch_link": "OBJEDNAT MERCH <i class='fas fa-arrow-right'></i>",
    "vibe.photos_link": "ZOBRAZIT VŠECHNY FOTKY <i class='fas fa-arrow-right'></i>",
    "vibe.videos_link": "ZOBRAZIT VŠECHNA VIDEA <i class='fas fa-arrow-right'></i>",

    // FAQ
    "section.faq": "FAQ",
    "faq.h2": "PTALI JSTE SE — ODPOVÍDÁME",
    "faq.q1": "Nemohu si vybrat směr. Pomůžete mi?",
    "faq.a1": "Ano! Napište nám na Instagram nebo Telegram — pomůžeme vybrat ideální lekci.",
    "faq.q2": "Potřebuji zkušenosti, abych začal(a)?",
    "faq.a2": "Ne. Přijímáme všechny úrovně.",
    "faq.q3": "Můžete vytvořit choreografii na akci?",
    "faq.a3": "Ano. Nabízíme individuální lekce i choreografie na míru pro akce.",
    "faq.more_link": "ZOBRAZIT VŠECHNY OTÁZKY <i class='fas fa-arrow-right'></i>",

    "section.portfolio": "Portfolio",

    // FOOTER
    "footer.address": "ZÁBRDOVICKÁ 10/5, 615 00<br>BRNO-ŽIDENICE-ZÁBRDOVICE",
    "footer.join_btn": "Připojit se",
    "footer.designer": "Design: <a href='#'>@designerhandle</a>",
  },

  de: {

// =====================
// MERCH — DE
// =====================
    "merch.buy_now": "JETZT KAUFEN",

"merch.category.longsleeves": "LONGSLEEVES",
"merch.category.pants_stickers": "HOSEN & STICKER",

"merch.pink.price": "30€",
"merch.pink.title": "PINK LIMITED EDITION",

"merch.black.price": "25€",
"merch.black.title": "ESSENTIAL BLACK",

"merch.long_taupe.price": "30€",
"merch.long_taupe.title": "LANGES TAUPE-OBERTEIL",

"merch.long_black.price": "30€",
"merch.long_black.title": "SCHWARZES LONGSLEEVE",

"merch.pants.price": "60€",
"merch.pants.title": "HOSEN VON CHUMACK",

"merch.stickers.price": "6€",
"merch.stickers.title": "STICKER-SET",

// =====================
// EVENTS — DE
// =====================

    "events.page_intro_upcoming": "Entdecken Sie vergangene und kommende Frame Up Workshops, besondere Events und Tanz-Masterclasses in Brno, organisiert von Frame Nation und eingeladenen Lehrkräften.",
"teachers.page_intro": "Lernen Sie unsere Frame Up Lehrkräfte in Brno und erfahrenen Instruktoren kennen, die diesen Stil durch regelmäßige Kurse, Workshops, Auftritte und Community-Projekte weiterentwickeln.",

    "events.upcoming":"Bevorstehende Events",
    "events.title":"Bevorstehende Events",
"events.past":"Vergangene Events",
"events.soon":"Bald angekündigt",
    "popup.success.title": "VIELEN DANK FÜR IHRE NACHRICHT",
"popup.success.text": "Wir melden uns in Kürze bei Ihnen",
"popup.error.title": "SENDEN FEHLGESCHLAGEN",
"popup.error.text": "Bitte versuchen Sie es erneut oder schreiben Sie uns auf Instagram/Telegram",
 "page.teachers.h1": "Lehrkräfte — MOVE DANCE",
 
 // =====================
// TEACHERS — DE
// =====================
  "page.teachers.title": "Lehrerinnen | BRNO",
  "page.teachers.desc": "Lerne die Lehrerinnen in Brünn kennen: Frame Up, Strip, Heels und verwandte Tanzrichtungen.",

  "teachers.name.anastasia": "Anastasiia",
  "teachers.name.sveta": "Sveta",
  "teachers.name.lucie": "Lucie",
  "teachers.name.marushka": "Marie",
  "teachers.name.alena": "Alena",
  "teachers.name.vika": "Vika",
  "teachers.name.katya": "Katya",

  "teachers.photo_alt.anastasia": "Anastasiia — Move Dance Lehrerin",
  "teachers.photo_alt.sveta": "Sveta — Move Dance Lehrerin",
  "teachers.photo_alt.lucie": "Lucie — Move Dance Lehrerin",
  "teachers.photo_alt.marushka": "Marie — Move Dance Lehrerin",
  "teachers.photo_alt.alena": "Alena — Move Dance Lehrerin",
  "teachers.photo_alt.vika": "Vika — Move Dance Lehrerin",
  "teachers.photo_alt.katya": "Katya — Move Dance Lehrerin",

  "teachers.anastasia.p1": "Anastasiia Hinak (@nasti_hinak) ist Tänzerin, Lehrerin und eine der aktiven Vertreterinnen der Frame Up Szene in Mitteleuropa.",
  "teachers.anastasia.p2": "Derzeit ist sie offizielle Vertreterin von Frame Up (seit 2026 zertifiziert), Gründerin von Frame Up Nation — einem Projekt zur Entwicklung dieses Stils in Brünn — und entwickelt die Richtung auch in Österreich im Rahmen des Projekts FrameUp Austria (@frameup_austria). Sie ist die Gründerin des Teams Amanita, Inhaberin des Studios Move Dance und gibt regelmäßig Gastklassen, während sie sich durch Online-Kurse und Masterclasses weiterentwickelt.",
  "teachers.anastasia.p3": "Ihre Wettbewerbserfahrung im Frame Up umfasst: World of Dance Prague 2025 — 4. Platz (All Styles), World of Dance Bratislava 2025 — 5. Platz (All Styles), Stage 18+ Prague 2025 — 1. Platz (Beginners) und 4. Platz (Pro) sowie Tsok Tsok Riga — 2. Platz in Battles und 4. Platz in Solo High Heels & Frame Up Pro.",
  "teachers.anastasia.p4": "Anastasiia baute ihre starke Grundlage in der rhythmischen Sportgymnastik auf, wo sie den Rang eines Sportmeisters erreichte. Später, bereits in der Tschechischen Republik, traf sie während ihrer Arbeit mit der Nationalmannschaft eine bewusste Entscheidung zugunsten der Kunst und widmete sich vollständig dem Tanz. Danach entwickelte sie sich im Contemporary und in weiteren Tanzrichtungen weiter, erweiterte ihr Bewegungsvokabular und ihre Musikalität, während Frame Up zu ihrem wichtigsten Stil wurde. Heute setzt sie nicht nur ihr eigenes professionelles Wachstum fort, sondern entwickelt auch aktiv die Community rund um diesen Stil weiter und trägt durch Unterricht, Projekte, Klassen und die Teilnahme an Wettbewerben zur Popularisierung von Frame Up in Europa bei.",

  "teachers.sveta.p1": "Sveta ist Tänzerin und Lehrerin und in der modernen Tanzszene aktiv tätig.",
  "teachers.sveta.p2": "Derzeit ist sie ein wichtiger Teil des Amanita Frame Up Teams, beteiligt sich an der Organisation von Events zur Entwicklung der Frame Up Szene in Brünn durch Frame Up Nation, unterrichtet regelmäßig in Brünn und gibt Gastklassen sowohl in Tschechien als auch im Ausland, unter anderem in Ostrava und Wien.",
  "teachers.sveta.p3": "Ihre Grundlage erhielt Sveta in der rhythmischen Sportgymnastik, die sie seit ihrer Kindheit ausübte und in der sie den Rang eines Kandidaten für den Sportmeister erreichte. Dort entwickelte sie Disziplin, Körperkontrolle und Aufmerksamkeit für Details.",
  "teachers.sveta.p4": "Nach dem Ende ihrer sportlichen Phase entwickelte sie sich im Tanz weiter, arbeitete in verschiedenen Stilen, verbrachte lange Zeit im Contemporary, war Teil eines kreativen Kollektivs und konzentrierte sich später auf Frame Up. Sveta wächst weiterhin systematisch sowohl als Tänzerin als auch als Lehrerin, besucht regelmäßig Trainings, Conventions und Masterclasses und erweitert dabei ihre professionelle Erfahrung.",

  "teachers.lucie.p1": "Lucie Drozdová ist eine Frame Up Tänzerin und Pole Dancerin. Sie tanzt seit ihrem 5. Lebensjahr, als sie in einem Kinder-Gesangs- und Tanzensemble in der Slowakei begann. Später nahm sie an Wettbewerben in Disco Dance und Art Dance teil und absolvierte eine Tanzausbildung an einer privaten Kunstschule, wo sie auch Grundlagen des Balletts, Jazz und Volkstanzes erlernte. Außerdem schloss sie die zweite Stufe ihrer Klavierausbildung ab.",
  "teachers.lucie.p2": "Während ihres Studiums in Brünn musste sie ihre Tanzgruppe verlassen. Sie probierte verschiedene Sportarten aus, aber überall fehlte ihr der künstlerische Ausdruck. 2015 entdeckte sie Pole Dance und begann sofort intensiv zu trainieren.",
  "teachers.lucie.p3": "2016 nahm sie an ihren ersten Pole-Sport-Wettbewerben in der Amateurkategorie teil. Ein Jahr später begann sie auch Pole Dance zu unterrichten, wodurch sie automatisch in die professionelle Wettbewerbskategorie wechselte. Im selben Jahr besuchte sie ihren ersten Frame Up Workshop, und dieser Stil zog sofort ihre Aufmerksamkeit auf sich.",
  "teachers.lucie.p4": "Bei der Tschechischen Pole Art Meisterschaft 2018 gewann sie die Goldmedaille und wurde zu einer der führenden tschechischen Pole Dancerinnen. Später konzentrierte sie sich auch auf Exotic Pole Dance, trat international an und gewann 2022 den prestigeträchtigen Wettbewerb Exotic Generation in England. Seit 2022 ist sie außerdem zertifizierte Jurorin der IPSF. 2024 gründete sie das Projekt Lucid Dreams, und 2026 kehrte sie nach einer Pause vollständig zum Training, Unterrichten und zum Stil Frame Up zurück.",

  "teachers.marushka.p1": "Ich heiße Marie, bin aber auch als Maruška bekannt. Ich tanze seit meiner Kindheit. Mit 4 Jahren begann ich mit Ballett und machte damit weiter, bis ich 12 war. Ballett gab mir eine starke Grundlage für alle späteren Tanzstile, und noch heute greife ich darauf zurück, wenn ich meinen Schülerinnen Technik beibringe.",
  "teachers.marushka.p2": "Später folgten mehrere Jahre Street Dance und danach Pole Dance Heels, das ich bis heute aktiv ausübe. Vor einigen Jahren habe ich mich in Strip und Frame Up verliebt. Im Frame Up entwickle ich mich weiter, indem ich Kurse, Masterclasses und Camps bei anderen Lehrerinnen besuche.",
  "teachers.marushka.p3": "Zurzeit unterrichte ich Strip Plastique im Tanzstudio Citadela in Brünn, wo ich Anfängerinnen von den Grundlagen an begleite. In meinem Unterricht lege ich Wert auf richtige Technik, Ausführung und Musikalität. Das Wichtigste für mich ist es, einen sicheren Raum zu schaffen. Ich liebe es zu sehen, wie sich meine Mädchen durch den Tanz verändern, Selbstvertrauen ausstrahlen und diese Energie in ihr Alltagsleben mitnehmen. Ich freue mich sehr, euch in meinem Unterricht zu sehen.",

  "teachers.alena.p1": "Als Kind beschäftigte sich Alena ein Jahr lang mit orientalischem Tanz, und schon diese erste Erfahrung brachte ihr den 1. Platz bei einem gesamtukrainischen Wettbewerb ein.",
  "teachers.alena.p2": "2021 kehrte sie zum Tanz zurück und fand ihren Stil — Frame Up Strip. Innerhalb eines Jahres erreichte sie durch regelmäßiges Training, Akrobatik und Stretching den 1. Platz bei der ukrainischen Meisterschaft.",
  "teachers.alena.p3": "In den Jahren 2022–2023 unterrichtete sie Tanz in Brünn. Nach einer Pause von fast zwei Jahren kehrte sie 2025 mit einem tieferen Verständnis und einer noch größeren Liebe zum Tanz zurück.",
  "teachers.alena.p4": "Sie glaubt aufrichtig, dass Tanz nicht vom Alter abhängt, sondern vom Wunsch zu fühlen, sich zu bewegen und mit sich selbst verbunden zu bleiben.",
  "teachers.alena.p5": "Ihr Credo lautet: „Erfolg besteht zu 99 % aus harter Arbeit und nur zu 1 % aus Talent.“",

  "teachers.vika.p1": "Ich tanze seit meinem 3. Lebensjahr und habe 13 Jahre dem Volkstanz gewidmet. Später wechselte ich zum Pole Sport, den ich 2 Jahre lang ausübte.",
  "teachers.vika.p2": "Danach kamen Strip-Stile in mein Leben, und die nächsten 2 Jahre entwickelte ich mich im Pole Exotic weiter. 2022 entdeckte ich Frame Up, und seitdem ist es genau dieser Stil, der mich am meisten anspricht.",
  "teachers.vika.p3": "Ich kann mir mein Leben ohne Tanz nicht vorstellen und entwickle mich weiter, indem ich Masterclasses und Online-Trainings besuche. Ich liebe es, neue Perspektiven auf den Tanz zu entdecken.",
  "teachers.vika.p4": "",

  "teachers.katya.p1": "Ich heiße Katya. Ich tanze seit 14 Jahren, und vor 7 Jahren entdeckte ich Frame Up.",
  "teachers.katya.p2": "Ich liebe die Vielseitigkeit dieses Stils: Heute können wir in tiefe Lyrik eintauchen, morgen in die Energie des Hip-Hop und am nächsten Tag spielerische Sinnlichkeit hinzufügen.",
  "teachers.katya.p3": "Musikalität, klare Akzente und charakteristische Details zeichnen mich aus. Im Unterricht lernen wir die Choreografie Schritt für Schritt, bis sie sich angenehm anfühlt, und verfeinern sie dann in der Qualität.",
  "teachers.katya.p4": "Die Entwicklung meiner Schülerinnen ist meine größte Motivation. Außerdem bringe ich Siege in Battles und Platzierungen in der Kategorie Solo Professional bei ukrainischen Meisterschaften mit.",
  "teachers.katya.p5": "Femme Fest UA 2018: 1 place - Strip/Solo/Pro 2 place- Battle, Frame Up UA 2019: 1 place- Battle 4 place- Strip/Solo/Pro, Femme Fest UA 2020: 2 place- Strip/Solo/Pro.",


  "cta.book_trial": "Werde Teil von Frame Nation",
  "ct.book_trial_teach": "Probestunde buchen",
    
    "page.schedule.title": "Stundenplan — MOVE DANCE",
"page.schedule.desc": "MOVE DANCE Stundenplan: Wochentage und verfügbare Slots.",
"schedule.h2": "STUNDENPLAN",
"schedule.filter_aria": "Filter",
"schedule.add_aria": "Hinzufügen",
"schedule.day.mon": "Mo",
"schedule.day.tue": "Di",
"schedule.day.wed": "Mi",
"schedule.day.thu": "Do",
"schedule.day.fri": "Fr",
"schedule.day.sat": "Sa",
"schedule.day.sun": "So",

    "page.merch.title": "Bewertungen — MOVE DANCE",
"page.merch.desc": "MOVE DANCE Bewertungen: Atmosphäre, Community, Events und Kurse.",

"section.merch": "WAS MAN ÜBER UNS SAGT",
"merch.leave": "Bewertung schreiben",
"common.send": "SENDEN",

"a11y.instagram": "Instagram",
"a11y.telegram": "Telegram",

"merch.photo_alt": "Gruppenfoto MOVE DANCE",
"merch.form_photo_alt": "Studiofoto MOVE DANCE",

    "merch.cta.title": "WENN AUCH SIE EINE BEWERTUNG HINTERLASSEN MÖCHTEN — ES IST MÖGLICH",

    // =====================
// PORTFOLIO — DE
// =====================
"page.portfolio.title": "Portfolio — MOVE DANCE",
"page.portfolio.desc": "MOVE DANCE Foto- und Video-Portfolio: Auftritte, Shootings und Studio-Content.",

"portfolio.h1": "Portfolio — MOVE DANCE",
"portfolio.photo_h2": "FOTOS",
"portfolio.video_h2": "VIDEOS",

"portfolio.photo_alt": "MOVE DANCE Foto",
"portfolio.video_alt": "MOVE DANCE Video",

"portfolio.photo_carousel_aria": "MOVE DANCE Foto-Karussell",
"portfolio.video_carousel_aria": "MOVE DANCE Video-Karussell",
"portfolio.dots_aria": "Indikatoren für Karussell-Slides",

"portfolio.open_photo_aria": "Foto in neuem Tab öffnen",
"portfolio.open_video_aria": "Video in neuem Tab öffnen",

    // =====================
// CERTIFICATE — DE
// =====================
"page.certificate.title": "Gutschein — MOVE DANCE",
"page.certificate.desc": "MOVE DANCE Gutschein: Bestellung, Betrag, Zustellung und Zahlungsoptionen.",

"cert.title": "SCHENKE EMOTIONEN UND INSPIRATION",
"cert.badge": "🎀",

"cert.hero1": "Schenke Emotionen und Erinnerungen — statt Dinge!",
"cert.hero2": "Dieser Gutschein öffnet die Tür zur Welt von Tanz, Musik und Inspiration. Eine große Welt voller Freude, Entdeckungen, neuer Begegnungen und Abenteuer. Ein Geschenk, das niemanden kaltlässt!",
"cert.hero3": "Du musst nur den Gutscheinbetrag auswählen. Der/die Beschenkte wählt selbst den passenden Stil und Stundenplan.",
"cert.hero4": "Der Gutschein ist 3 Monate gültig.",
"cert.hero5": "Gültig für eine Person. Nicht übertragbar.",
"cert.banner_alt": "MOVE DANCE Gutschein",

"cert.form_title": "GUTSCHEIN BESTELLEN",

"cert.l1": "1. Dein Name",
"cert.l2": "2. Deine Kontaktdaten",
"cert.l3": "3. Von wem, für wen und Glückwunschtext (bis zu 300 Zeichen)",
"cert.l4": "4. Gutscheinbetrag",
"cert.l5": "5. Zustellmethode:",
"cert.l6": "6. Zahlungsart",

"cert.ph_name": "Gib deinen Namen ein",
"cert.ph_contact": "Gib E-Mail oder Telefonnummer ein",
"cert.ph_message": "Gib deinen Text ein (bis zu 300 Zeichen)",
"cert.ph_email": "Gib die E-Mail für die Zustellung ein",
"cert.ph_invoice": "Gib Rechnungsdaten ein (Name/Firma, Telefon/E-Mail)",

"cert.sum.4000": "4000 Kč",
"cert.sum.2800": "2800 Kč",
"cert.sum.1600": "1600 Kč",
"cert.sum.800": "800 Kč",
"cert.sum.500": "500 Kč",

"cert.delivery.email": "Per E-Mail erhalten",
"cert.delivery.pickup": "Im Studio abholen",

"cert.pay.invoice": "Per Rechnung bezahlen",
"cert.pay.studio": "Im Studio bezahlen",

"cert.btn": "Gutschein bestellen",

    "nav.directions": "Events",
"nav.teachers": "Lehrer",
"nav.prices": "Preise",
"nav.schedule": "Stundenplan",
"nav.faq": "FAQ",
"nav.portfolio": "Galerie",
"nav.about": "Merch",

    "nav.faq": "FAQ",


    // =====================
// FAQ — DE
// =====================
"page.faq.title": "FAQ — MOVE DANCE",
"page.faq.desc": "Antworten auf häufige Fragen zu Kursen, Abos und Regeln bei MOVE DANCE.",

"section.faq": "FAQ — FRAGEN & ANTWORTEN",

"faq.q1.q": "Wenn ich Anfängerin in Frame Up / Strip bin, kann ich dann an einer Masterclass teilnehmen?",
"faq.q1.a": "Ja, natürlich. Bei Frame Nation finden viele Masterclasses statt, und Sie können auch ohne viel Erfahrung zu uns kommen. Für uns ist es wichtig, die Entwicklung jedes Einzelnen sowie die Entwicklung des Stils insgesamt zu unterstützen. Wir bauen eine starke und zugleich sehr warme Community auf, in der man willkommen ist, Unterstützung bekommt und inspiriert wird.",

"faq.q2.q": "Wie kann ich mich für einen Kurs, Workshop oder eine Masterclass anmelden?",
"faq.q2.a": "Sie können sich über Telegram, Instagram oder über die Kontakte auf der Website anmelden. Nach der Anmeldung schicken wir Ihnen alle wichtigen Informationen zu Datum, Uhrzeit, Format und Bezahlung.",

"faq.q3.q": "Was ist Frame Nation?",
"faq.q3.a": "Frame Nation ist eine Frame Up Community in Brno, in der regelmäßig Kurse, Workshops, Shootings, Auftritte und Masterclasses mit eingeladenen Lehrkräften stattfinden.",

    // A11Y
    "a11y.language": "Sprache",
    "a11y.open_menu": "Menü öffnen",
    "a11y.prev": "Zurück",
    "a11y.next": "Weiter",
    "a11y.address": "Adresse",

    // PAGE META
    "page.home.title": "MOVE DANCE — Tanzstudio",
    "page.home.desc": "MOVE DANCE Tanzstudio in Brünn. Richtungen, Lehrkräfte, Preise, Stundenplan.",

    // NAV
    "nav.about": "Merch",
    "nav.directions": "Events",
    "nav.prices": "Preise",
    "nav.schedule": "Stundenplan",
    "nav.teachers": "Lehrkräfte",

    // COMMON
    "common.subscribe": "FOLGE UNS",
    "common.subscribe_sub": "Damit du keine News und Events verpasst",
    "common.learn_more": "Mehr erfahren",
    "common.join": "WERDE TEIL UNSERER COMMUNITY",

    

    // HERO
    "hero.title": "FRAME NATION",
    "hero.subtitle": "EIN RHYTHMUS,EINE FAMILIE",

    // WHY
    "section.why": "WER SIND WIR?",
    "why.subtitle": "ODER WEM UNSERE COMMUNITY NAHESTEHT",
    "why.item1": "Frame Nation ist eine Tanz-Community in Brno, geprägt von der Kultur des Frame Up.",
    "why.item2": "Uns verbinden der Tanz, eine gemeinsame Philosophie, die Liebe zur Kunst und die gegenseitige Unterstützung.",
    // "why.item3": "Lehrkräfte, die ihre Arbeit lieben — sie inspirieren, nicht nur unterrichten.",
    // "why.item4": "Viele Richtungen: ein Stil für jede Persönlichkeit.",
    // "why.item5": "Fast im Stadtzentrum — und lange in deinem Herzen.",
    // "why.item6": "Events, Workshops und Movement — jeden Monat.",

    // TEACHERS
    "teachers.h2": "LEHRKRÄFTE IN BRÜNN",
    // "ct.book_trial_teach": "MEHR ERFAHREN",

    // PRICES
    // "prices.h2": "WAS & WIE VIEL",
    // "cert.btn": "Gutschein bestellen",
    // "prices.card1.duration": "3 Monate",
    // "prices.card1.type": "Gruppen-<br>stunden",
    // "prices.card2.duration": "2 Monate",
    // "prices.card2.type": "Mini-Gruppe<br>Stunden",
    // "prices.card3.duration": "1 Monat",
    // "prices.card3.type": "Kinder-<br>stunden",
    // "prices.card4.type": "Probe-<br>stunde",
    // "prices.card5.type": "Privat-<br>stunde",
    // "prices.more_link": "MEHR →",

    // TELEGRAM
    "tg.h3": "ENTWICKLE DICH MIT UNS",
    "tg.text": "LEHRCHOREOGRAFIEN,<br>FRAME UP INSPIRATION UND EIGENER CONTENT",

    // VIBE
    "vibe.h2": "UNSERE ATMOSPHÄRE",
    "vibe.review.text": "“Ich habe mich endlich schön gefühlt. Am Anfang ist es schwer, aber dann kommt der Flow. Die Lehrerin ist großartig — erklärt klar und unterstützt.”",
    "vibe.merch_link": "MERCH BESTELLEN <i class='fas fa-arrow-right'></i>",
    "vibe.photos_link": "ALLE FOTOS ANSEHEN <i class='fas fa-arrow-right'></i>",
    "vibe.videos_link": "ALLE VIDEOS ANSEHEN <i class='fas fa-arrow-right'></i>",

    // FAQ
    "section.faq": "FAQ",
    "faq.h2": "DU FRAGST — WIR ANTWORTEN",
    "faq.q1": "Ich kann mich nicht entscheiden. Könnt ihr helfen?",
    "faq.a1": "Ja! Schreib uns auf Instagram oder Telegram — wir helfen dir, den passenden Kurs zu wählen.",
    "faq.q2": "Brauche ich Erfahrung, um zu starten?",
    "faq.a2": "Nein. Wir heißen alle Levels willkommen.",
    "faq.q3": "Könnt ihr eine Choreografie für ein Event erstellen?",
    "faq.a3": "Ja. Wir bieten Privatstunden und Choreografie nach Maß für Events.",
    "faq.more_link": "ALLE FRAGEN ANSEHEN <i class='fas fa-arrow-right'></i>",

    "section.portfolio": "Portfolio",

    // FOOTER
    "footer.address": "ZÁBRDOVICKÁ 10/5, 615 00<br>BRNO-ŽIDENICE-ZÁBRDOVICE",
    "footer.join_btn": "Beitreten",
    "footer.designer": "Design: <a href='#'>@designerhandle</a>",
  }
};


function getSavedLang() {
  // 1) если пользователь уже выбирал язык — берём его
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && DICT[saved]) return saved;

  // 2) иначе — берём язык браузера/устройства
  const browserRaw =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    DEFAULT_LANG;

  const browser = String(browserRaw).toLowerCase().split("-")[0];

  // 3) если язык поддерживается — используем, иначе fallback на EN (DEFAULT_LANG)
  return DICT[browser] ? browser : DEFAULT_LANG;
}


  function interpolate(str, vars) {
    if (!vars) return str;
    return String(str).replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
  }

  function t(key, vars, lang) {
    const lng = lang || getSavedLang();
    const base = DICT[lng] || DICT[DEFAULT_LANG] || {};
    const fallback = DICT[DEFAULT_LANG] || {};
    const value = base[key] || fallback[key] || "";
    return interpolate(value, vars);
  }

  function applyLanguage(next) {
    const lng = (next && DICT[next]) ? next : DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, lng);

    // <html lang="">
    document.documentElement.setAttribute("lang", lng);

    // UI state for language buttons
    document.querySelectorAll("[data-lang]").forEach((el) => {
      el.classList.toggle("активный", el.getAttribute("data-lang") === lng);
    });

    // Text content
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key, null, lng);
      if (value) el.textContent = value;
    });

    // HTML content (use sparingly)
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const value = t(key, null, lng);
      if (value) el.innerHTML = value;
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = t(key, null, lng);
      if (value) el.setAttribute("placeholder", value);
    });

    // aria-label
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const value = t(key, null, lng);
      if (value) el.setAttribute("aria-label", value);
    });

    // Document title
    const titleEl = document.querySelector("[data-i18n-title]");
    if (titleEl) {
      const key = titleEl.getAttribute("data-i18n-title");
      const value = t(key, null, lng);
      if (value) document.title = value;
    }

    // Meta description
    const meta = document.querySelector('meta[name="description"][data-i18n-meta-key]');
    if (meta) {
      const key = meta.getAttribute("data-i18n-meta-key");
      const value = t(key, null, lng);
      if (value) meta.setAttribute("content", value);
    }
  }

  function bindLanguageSwitcher() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-lang]");
      if (!btn) return;
      e.preventDefault();
      applyLanguage(btn.getAttribute("data-lang"));
    });
  }

  // Expose a tiny API for other scripts
  window.i18n = {
    t,
    setLanguage: applyLanguage,
    getLanguage: getSavedLang
  };

  document.addEventListener("DOMContentLoaded", () => {
    bindLanguageSwitcher();
    applyLanguage(getSavedLang());
  });
})();
