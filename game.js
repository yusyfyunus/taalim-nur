const LESSONS = [
  {
    id: "lesson-1",
    title: "Урок 1",
    summary: "Указательные местоимения и базовые предметы.",
    words: [
      { arabic: "هَذَا", russian: "Это, этот" },
      { arabic: "هَؤُلَاءِ", russian: "Это, эти" },
      { arabic: "مَسْجِدٌ", russian: "Мечеть", note: "جمع: مَسَاجِدُ" },
      { arabic: "بَابٌ", russian: "Дверь", note: "جمع: أَبْوَابٌ" },
      { arabic: "كِتَابٌ", russian: "Книга", note: "جمع: كُتُبٌ" },
      { arabic: "قَلَمٌ", russian: "Ручка", note: "جمع: أَقْلَامٌ" },
      { arabic: "مِفْتَاحٌ", russian: "Ключ", note: "جمع: مَفَاتِيحُ" },
      { arabic: "مَكْتَبٌ", russian: "Письменный стол", note: "جمع: مَكَاتِبُ" },
      { arabic: "سَرِيرٌ", russian: "Кровать", note: "جمع: أَسِرَّةٌ" },
      { arabic: "كُرْسِيٌّ", russian: "Стул", note: "جمع: كَرَاسِيُّ" },
      { arabic: "مَا هَذَا؟", russian: "Что это?" },
      { arabic: "قَمِيصٌ", russian: "Рубашка", note: "جمع: قُمُصٌ / قُمصان" },
      { arabic: "نَجْمٌ", russian: "Звезда", note: "جمع: نُجُومٌ" },
      { arabic: "بَيْتٌ", russian: "Дом", note: "جمع: بُيُوتٌ" }
    ]
  },
  {
    id: "lesson-2",
    title: "Урок 2",
    summary: "Указательные формы и собирательные существительные.",
    words: [
      { arabic: "ذَلِكَ", russian: "То, тот" },
      { arabic: "تِلْكَ", russian: "То, та" },
      { arabic: "إِمَامٌ", russian: "Имам", note: "جمع: أَئِمَّةٌ" },
      { arabic: "حَجَرٌ", russian: "Камень", note: "جمع: أَحْجَارٌ" },
      { arabic: "سُكَّرٌ", russian: "Сахар" },
      { arabic: "لَبَنٌ", russian: "Молоко" },
      { arabic: "لَوْحٌ", russian: "Доска", note: "جمع: أَلْوَاحٌ" },
      { arabic: "حَجَرَةٌ", russian: "Один камень", note: "من حَجَرٌ" },
      { arabic: "وَرَقَةٌ", russian: "Один лист бумаги", note: "من وَرَقٌ" },
      { arabic: "مَا ذَلِكَ؟", russian: "Что вон то?" }
    ]
  },
  {
    id: "lesson-3",
    title: "Урок 3",
    summary: "Качества предметов и людей.",
    words: [
      { arabic: "مَكْسُورٌ", russian: "Сломанный" },
      { arabic: "جَالِسٌ", russian: "Сидячий" },
      { arabic: "وَاقِفٌ", russian: "Стоячий" },
      { arabic: "جَدِيدٌ", russian: "Новый" },
      { arabic: "قَدِيمٌ", russian: "Старый" },
      { arabic: "قَمَرٌ", russian: "Луна", note: "جمع: أَقْمَارٌ" },
      { arabic: "وَسِخٌ", russian: "Грязный" },
      { arabic: "نَظِيفٌ", russian: "Чистый" },
      { arabic: "حَارٌّ", russian: "Горячий" },
      { arabic: "بَارِدٌ", russian: "Холодный" },
      { arabic: "مَفْتُوحٌ", russian: "Открытый" },
      { arabic: "ثَقِيلٌ", russian: "Тяжёлый" },
      { arabic: "صَغِيرٌ", russian: "Маленький" },
      { arabic: "كَبِيرٌ", russian: "Большой" },
      { arabic: "خَفِيفٌ", russian: "Лёгкий" },
      { arabic: "جَمِيلٌ", russian: "Красивый" },
      { arabic: "طَالِبٌ", russian: "Студент" },
      { arabic: "بَعِيدٌ", russian: "Далёкий" },
      { arabic: "حُلْوٌ", russian: "Сладкий" },
      { arabic: "مَرِيضٌ", russian: "Больной" },
      { arabic: "غَنِيٌّ", russian: "Богатый" },
      { arabic: "فَقِيرٌ", russian: "Бедный" },
      { arabic: "لَذِيذٌ", russian: "Вкусный" },
      { arabic: "طَوِيلٌ", russian: "Длинный, высокий" },
      { arabic: "قَصِيرٌ", russian: "Короткий, невысокий" }
    ]
  },
  {
    id: "lesson-4",
    title: "Урок 4",
    summary: "Дом, еда, базовые слова о быте.",
    words: [
      { arabic: "دُكَّانٌ", russian: "Магазин" },
      { arabic: "تُفَّاحَةٌ", russian: "Яблоко" },
      { arabic: "أَبٌ", russian: "Отец", note: "جمع: آبَاءٌ" },
      { arabic: "جَنَّةٌ", russian: "Сад, рай" },
      { arabic: "خُبْزٌ", russian: "Хлеб" },
      { arabic: "عَيْنٌ", russian: "Глаз, родник" },
      { arabic: "غَدَاءٌ", russian: "Обед" },
      { arabic: "فَمٌ", russian: "Рот" },
      { arabic: "هَوَاءٌ", russian: "Воздух" },
      { arabic: "يَدٌ", russian: "Рука" },
      { arabic: "ثَوْبٌ", russian: "Одежда" },
      { arabic: "ذَهَبٌ", russian: "Золото" }
    ]
  },
  {
    id: "lesson-5",
    title: "Урок 5",
    summary: "Природа и люди вокруг нас.",
    words: [
      { arabic: "زَهْرَةٌ", russian: "Цветок" },
      { arabic: "سَمَكٌ", russian: "Рыба" },
      { arabic: "شَمْسٌ", russian: "Солнце" },
      { arabic: "صَدْرٌ", russian: "Грудь" },
      { arabic: "ضَيْفٌ", russian: "Гость" },
      { arabic: "ظَهْرٌ", russian: "Спина" },
      { arabic: "لَحْمٌ", russian: "Мясо" },
      { arabic: "دَفْتَرٌ", russian: "Тетрадь" },
      { arabic: "أَخٌ", russian: "Брат" },
      { arabic: "رَسُولٌ", russian: "Посланник" },
      { arabic: "وَجْهٌ", russian: "Лицо" },
      { arabic: "صَدِيقٌ", russian: "Друг" }
    ]
  },
  {
    id: "lesson-6",
    title: "Урок 6",
    summary: "Молитва, время и части тела.",
    words: [
      { arabic: "القُرْآنُ", russian: "Коран" },
      { arabic: "صَلَاةٌ", russian: "Молитва" },
      { arabic: "الكَعْبَةُ", russian: "Кааба" },
      { arabic: "رَأْسٌ", russian: "Голова" },
      { arabic: "إِصْبَعٌ", russian: "Палец" },
      { arabic: "ظُفْرٌ", russian: "Ноготь" },
      { arabic: "فَجْرٌ", russian: "Утренняя заря" },
      { arabic: "ظُهْرٌ", russian: "Полдень" },
      { arabic: "عَصْرٌ", russian: "Послеполуденное время" },
      { arabic: "مَغْرِبٌ", russian: "Закат, запад" },
      { arabic: "عِشَاءٌ", russian: "Сумерки, вечер" }
    ]
  },
  {
    id: "lesson-7",
    title: "Урок 7",
    summary: "Вопросы, место и простые помещения.",
    words: [
      { arabic: "أَيْنَ؟", russian: "Где?" },
      { arabic: "غُرْفَةٌ", russian: "Комната" },
      { arabic: "حَمَّامٌ", russian: "Ванная" },
      { arabic: "هُوَ", russian: "Он" },
      { arabic: "هِيَ", russian: "Она" },
      { arabic: "مَطْبَخٌ", russian: "Кухня" },
      { arabic: "سَاعَةٌ", russian: "Часы" },
      { arabic: "مَاذَا؟", russian: "Что?" },
      { arabic: "مَدْرَسَةٌ", russian: "Школа" },
      { arabic: "جَامِعَةٌ", russian: "Университет" },
      { arabic: "فَصْلٌ", russian: "Класс" },
      { arabic: "مِرْحَاضٌ", russian: "Туалет" },
      { arabic: "سَمَاءٌ", russian: "Небо" }
    ]
  },
  {
    id: "lesson-8",
    title: "Урок 8",
    summary: "Откуда, движение, страны и связь с миром.",
    words: [
      { arabic: "مِنْ أَيْنَ؟", russian: "Откуда?" },
      { arabic: "مُدِيرٌ", russian: "Директор" },
      { arabic: "اليَابَانُ", russian: "Япония" },
      { arabic: "الصِّينُ", russian: "Китай" },
      { arabic: "الهِنْدُ", russian: "Индия" },
      { arabic: "الفِلِبِّينُ", russian: "Филиппины" },
      { arabic: "خَرَجَ", russian: "Вышел" },
      { arabic: "ذَهَبَ", russian: "Ушёл, пошёл" },
      { arabic: "سُوقٌ", russian: "Рынок" },
      { arabic: "مَاءٌ", russian: "Вода" },
      { arabic: "وَرَقٌ", russian: "Бумага" },
      { arabic: "فِي", russian: "В, внутри" },
      { arabic: "عَلَى", russian: "На" },
      { arabic: "مِنْ", russian: "От, с, из" },
      { arabic: "إِلَى", russian: "К, на, в" }
    ]
  },
  {
    id: "lesson-9",
    title: "Урок 9",
    summary: "Люди, вещи и ориентиры.",
    words: [
      { arabic: "رَسُولٌ", russian: "Посланник, посол" },
      { arabic: "الكَعْبَةُ", russian: "Кааба" },
      { arabic: "اسْمٌ", russian: "Имя" },
      { arabic: "ابْنٌ", russian: "Сын" },
      { arabic: "حَقِيبَةٌ", russian: "Сумка" },
      { arabic: "عَمٌّ", russian: "Дядя" },
      { arabic: "سَيَّارَةٌ", russian: "Машина" },
      { arabic: "شَارِعٌ", russian: "Улица" },
      { arabic: "مُغْلَقٌ", russian: "Закрытый" },
      { arabic: "تَحْتَ", russian: "Под" },
      { arabic: "هُنَاكَ", russian: "Там" }
    ]
  },
  {
    id: "lesson-10",
    title: "Урок 10",
    summary: "Родство, профессии и повседневные слова.",
    words: [
      { arabic: "مُهَنْدِسٌ", russian: "Инженер" },
      { arabic: "أُخْتٌ", russian: "Сестра" },
      { arabic: "أَيْضًا", russian: "Тоже" },
      { arabic: "مِكْوَاةٌ", russian: "Утюг" },
      { arabic: "دَرَّاجَةٌ", russian: "Велосипед" },
      { arabic: "جِدًّا", russian: "Очень" },
      { arabic: "مِلْعَقَةٌ", russian: "Ложка" },
      { arabic: "قِدْرٌ", russian: "Котелок" },
      { arabic: "بَقَرَةٌ", russian: "Корова" },
      { arabic: "فَلَّاحٌ", russian: "Крестьянин" },
      { arabic: "أَنْفٌ", russian: "Нос" },
      { arabic: "أُذُنٌ", russian: "Ухо" },
      { arabic: "فَمٌ", russian: "Рот" },
      { arabic: "رِجْلٌ", russian: "Нога" },
      { arabic: "دَجَاجَةٌ", russian: "Курица" },
      { arabic: "ثَلَّاجَةٌ", russian: "Холодильник" },
      { arabic: "شَايٌ", russian: "Чай" },
      { arabic: "أُمٌّ", russian: "Мать" },
      { arabic: "قَهْوَةٌ", russian: "Кофе" },
      { arabic: "سَرِيعٌ", russian: "Быстрый" }
    ]
  },
  {
    id: "lesson-11",
    title: "Урок 11",
    summary: "Указательные формы женского рода и бытовая лексика.",
    words: [
      { arabic: "تِلْكَ", russian: "Та" },
      { arabic: "أُولَئِكَ", russian: "Те" },
      { arabic: "مُمَرِّضَةٌ", russian: "Медсестра" },
      { arabic: "الهِنْدُ", russian: "Индия" },
      { arabic: "اليَابَانُ", russian: "Япония" },
      { arabic: "طَوِيلَةٌ", russian: "Высокая" },
      { arabic: "بَطَّةٌ", russian: "Утка" },
      { arabic: "بَيْضَةٌ", russian: "Яйцо" },
      { arabic: "نَاقَةٌ", russian: "Верблюдица" },
      { arabic: "مُؤَذِّنٌ", russian: "Муэдзин" },
      { arabic: "سِكِّينٌ", russian: "Нож" }
    ]
  },
  {
    id: "lesson-12",
    title: "Урок 12",
    summary: "Положения в пространстве и страны.",
    words: [
      { arabic: "أَمَامَ", russian: "Перед" },
      { arabic: "خَلْفَ", russian: "Позади" },
      { arabic: "لِمَنْ؟", russian: "Чей? чья? чьё?" },
      { arabic: "اليَابَانُ", russian: "Япония" },
      { arabic: "أَمْرِيكَا", russian: "Америка" },
      { arabic: "الصِّينُ", russian: "Китай" },
      { arabic: "سِكِّينٌ", russian: "Нож" },
      { arabic: "إِنْكِلْتِرَا", russian: "Англия" },
      { arabic: "سُوِيسْرَا", russian: "Швейцария" }
    ]
  },
  {
    id: "lesson-13",
    title: "Урок 13",
    summary: "Фрукты, характеры и больница.",
    words: [
      { arabic: "فَاكِهَةٌ", russian: "Фрукт" },
      { arabic: "عُصْفُورٌ", russian: "Воробей" },
      { arabic: "طَائِرٌ", russian: "Птица" },
      { arabic: "لُغَةٌ", russian: "Язык" },
      { arabic: "سَهْلٌ", russian: "Лёгкий, доступный" },
      { arabic: "مُجْتَهِدٌ", russian: "Старательный" },
      { arabic: "شَهِيرٌ", russian: "Известный" },
      { arabic: "القَاهِرَةُ", russian: "Каир" },
      { arabic: "إِنْكِلِيزِيَّةٌ", russian: "Английский язык" },
      { arabic: "جَائِعٌ", russian: "Голодный" },
      { arabic: "كَسْلَانُ", russian: "Ленивый" },
      { arabic: "عَطْشَانُ", russian: "Жаждущий" },
      { arabic: "غَضْبَانُ", russian: "Гневный" },
      { arabic: "مَلآنُ", russian: "Наполненный" },
      { arabic: "اليَوْمُ", russian: "Сегодня" },
      { arabic: "يَوْمٌ", russian: "День" },
      { arabic: "عِنْدَ", russian: "У, при, возле" },
      { arabic: "هُنَاكَ", russian: "Там" },
      { arabic: "مُسْتَشْفًى", russian: "Поликлиника" },
      { arabic: "وَزِيرٌ", russian: "Министр" },
      { arabic: "حَادٌّ", russian: "Острый" },
      { arabic: "إِنْدُونِيسِيَا", russian: "Индонезия" },
      { arabic: "مَدْرَسَةٌ ثَانَوِيَّةٌ", russian: "Старшие классы" }
    ]
  },
  {
    id: "lesson-14",
    title: "Урок 14",
    summary: "Приветствия и высшее образование.",
    words: [
      { arabic: "السَّلَامُ عَلَيْكُمْ", russian: "Мир вам" },
      { arabic: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ", russian: "И вам мир, милость Аллаха и Его благословение" },
      { arabic: "كَيْفَ حَالُكَ؟", russian: "Как твои дела?" },
      { arabic: "أَنْتُمْ", russian: "Вы" },
      { arabic: "أَهْلًا وَسَهْلًا وَمَرْحَبًا", russian: "Добро пожаловать" },
      { arabic: "شَفَاهُ اللَّهُ", russian: "Да исцелит его Аллах" },
      { arabic: "الَّتِي", russian: "Которая" },
      { arabic: "مَعَ", russian: "Вместе с" },
      { arabic: "طَائِرَةٌ", russian: "Самолёт" },
      { arabic: "كُلِّيَّةٌ", russian: "Факультет" },
      { arabic: "هَنْدَسَةٌ", russian: "Инженерия" },
      { arabic: "طِبٌّ", russian: "Медицина" },
      { arabic: "شَرِيعَةٌ", russian: "Шариат" },
      { arabic: "تِجَارَةٌ", russian: "Торговля" },
      { arabic: "نَصْرَانِيٌّ", russian: "Христианин" },
      { arabic: "دُكْتُورٌ", russian: "Доктор" },
      { arabic: "حَدِيقَةٌ", russian: "Сад" },
      { arabic: "حَفِيدٌ", russian: "Внук" }
    ]
  },
  {
    id: "lesson-15",
    title: "Урок 15",
    summary: "Время, дни и простые связки.",
    words: [
      { arabic: "دِينٌ", russian: "Религия" },
      { arabic: "رَبٌّ", russian: "Господь" },
      { arabic: "شَارِعٌ", russian: "Улица" },
      { arabic: "أَيٌّ", russian: "Какой?" },
      { arabic: "مَحْكَمَةٌ", russian: "Суд" },
      { arabic: "السَّبْتُ", russian: "Суббота" },
      { arabic: "شَهْرٌ", russian: "Месяц" },
      { arabic: "بَلَدٌ", russian: "Страна, город" },
      { arabic: "إِحْدَاهُمَا", russian: "Одна из них" },
      { arabic: "مَتَى؟", russian: "Когда?" },
      { arabic: "قَبْلَ", russian: "До, прежде" },
      { arabic: "أُسْبُوعٌ", russian: "Неделя" },
      { arabic: "اخْتِبَارٌ", russian: "Экзамен" },
      { arabic: "رُجُوعٌ", russian: "Возвращение" },
      { arabic: "كَيْفَ؟", russian: "Как?" },
      { arabic: "أَذَانٌ", russian: "Призыв на молитву" },
      { arabic: "صَلَاةٌ", russian: "Молитва" }
    ]
  },
  {
    id: "lesson-16",
    title: "Урок 16",
    summary: "Дом и вещи вокруг дома.",
    words: [
      { arabic: "قَلَمٌ", russian: "Письменная ручка" },
      { arabic: "دَفْتَرٌ", russian: "Тетрадь" },
      { arabic: "بِلْجِيكَا", russian: "Бельгия" },
      { arabic: "بَيْتٌ", russian: "Дом" },
      { arabic: "دَرْسٌ", russian: "Урок" },
      { arabic: "بَابٌ", russian: "Дверь" },
      { arabic: "نَهْرٌ", russian: "Река" },
      { arabic: "جَبَلٌ", russian: "Гора" },
      { arabic: "كَلْبٌ", russian: "Собака" },
      { arabic: "بَحْرٌ", russian: "Море" },
      { arabic: "حِمَارٌ", russian: "Осёл" },
      { arabic: "سَرِيرٌ", russian: "Кровать" },
      { arabic: "مَكْتَبَةٌ", russian: "Библиотека" },
      { arabic: "فُنْدُقٌ", russian: "Гостиница" },
      { arabic: "سَاعَةٌ", russian: "Часы" },
      { arabic: "سَيَّارَةٌ", russian: "Машина" }
    ]
  },
  {
    id: "lesson-17",
    title: "Урок 17",
    summary: "Компании, цена и простые вещи.",
    words: [
      { arabic: "شَرِكَةٌ", russian: "Компания, агентство" },
      { arabic: "رَخِيصٌ", russian: "Недорогой" },
      { arabic: "حِمَارٌ", russian: "Осёл" },
      { arabic: "قَمِيصٌ", russian: "Рубашка" }
    ]
  },
  {
    id: "lesson-18",
    title: "Урок 18",
    summary: "Количество, праздники и меры времени.",
    words: [
      { arabic: "كَمْ؟", russian: "Сколько?" },
      { arabic: "عَجَلَةٌ", russian: "Колесо" },
      { arabic: "عِيدٌ", russian: "Праздник" },
      { arabic: "سَنَةٌ", russian: "Год" },
      { arabic: "عِيدُ الفِطْرِ", russian: "Праздник разговения" },
      { arabic: "عِيدُ الأَضْحَى", russian: "Праздник жертвоприношения" },
      { arabic: "مَتْجَرٌ", russian: "Магазин" },
      { arabic: "حَيٌّ", russian: "Квартал, микрорайон" },
      { arabic: "مِسْطَرَةٌ", russian: "Линейка" },
      { arabic: "رِيَالٌ", russian: "Риал" },
      { arabic: "رَكْعَةٌ", russian: "Ракаат" }
    ]
  },
  {
    id: "lesson-19",
    title: "Урок 19",
    summary: "Числа, расстояния и некоторые предметы.",
    words: [
      { arabic: "مُخْتَلِفٌ", russian: "Разный" },
      { arabic: "ثَمَنٌ", russian: "Цена" },
      { arabic: "ثَلَاثَةٌ", russian: "Три" },
      { arabic: "أَرْبَعَةٌ", russian: "Четыре" },
      { arabic: "خَمْسَةٌ", russian: "Пять" },
      { arabic: "سِتَّةٌ", russian: "Шесть" },
      { arabic: "سَبْعَةٌ", russian: "Семь" },
      { arabic: "ثَمَانِيَةٌ", russian: "Восемь" },
      { arabic: "تِسْعَةٌ", russian: "Девять" },
      { arabic: "عَشَرَةٌ", russian: "Десять" },
      { arabic: "أُورُوبَّا", russian: "Европа" },
      { arabic: "نِصْفٌ", russian: "Половина" },
      { arabic: "قِرْشٌ", russian: "Мелкая монета" },
      { arabic: "حَافِلَةٌ", russian: "Автобус" },
      { arabic: "رَاكِبٌ", russian: "Пассажир" },
      { arabic: "سُؤَالٌ", russian: "Вопрос" },
      { arabic: "جَيْبٌ", russian: "Карман" },
      { arabic: "يَوْمٌ", russian: "День" },
      { arabic: "قَدِيمٌ", russian: "Давний" },
      { arabic: "بَلَدٌ", russian: "Страна" }
    ]
  },
  {
    id: "lesson-20",
    title: "Урок 20",
    summary: "Слово, журнал и буква.",
    words: [
      { arabic: "غُرْفَةٌ", russian: "Комната" },
      { arabic: "كَلِمَةٌ", russian: "Слово" },
      { arabic: "مَجَلَّةٌ", russian: "Журнал" },
      { arabic: "حَرْفٌ", russian: "Буква" }
    ]
  },
  {
    id: "lesson-21",
    title: "Урок 21",
    summary: "Окно, библиотека и качества.",
    words: [
      { arabic: "نَافِذَةٌ", russian: "Окно" },
      { arabic: "مَكْتَبَةٌ", russian: "Библиотека" },
      { arabic: "كُرْسِيٌّ", russian: "Стул, трон" },
      { arabic: "لَوْنٌ", russian: "Цвет" },
      { arabic: "صَالِحٌ", russian: "Праведный, хороший" },
      { arabic: "وَاسِعٌ", russian: "Широкий, просторный" },
      { arabic: "غَانَا", russian: "Гана" },
      { arabic: "نِيجِيرِيَا", russian: "Нигерия" },
      { arabic: "كَثِيرٌ", russian: "Обильный, многочисленный" },
      { arabic: "لَكِنْ", russian: "Но, однако" }
    ]
  },
  {
    id: "lesson-22",
    title: "Урок 22",
    summary: "Цвета и количество.",
    words: [
      { arabic: "أَزْرَقُ", russian: "Синий" },
      { arabic: "أَسْوَدُ", russian: "Чёрный" },
      { arabic: "أَصْفَرُ", russian: "Жёлтый" },
      { arabic: "أَحْمَرُ", russian: "Красный" },
      { arabic: "أَبْيَضُ", russian: "Белый" },
      { arabic: "أَخْضَرُ", russian: "Зелёный" },
      { arabic: "قَلِيلٌ", russian: "Мало" },
      { arabic: "كَثِيرٌ", russian: "Много" },
      { arabic: "فِنْجَانٌ", russian: "Чашка" }
    ]
  },
  {
    id: "lesson-23",
    title: "Урок 23",
    summary: "Минуты, города и заключительные слова.",
    words: [
      { arabic: "دَقِيقَةٌ", russian: "Минута" },
      { arabic: "أَخْضَرُ", russian: "Зелёный" },
      { arabic: "أَحْمَرُ", russian: "Красный" },
      { arabic: "بَاكِسْتَانُ", russian: "Пакистан" },
      { arabic: "مَكَّةُ", russian: "Мекка" },
      { arabic: "مَتَى؟", russian: "Когда?" },
      { arabic: "جِدَّةُ", russian: "Джидда" }
    ]
  }
];

const STORAGE_KEY = "med-course-hard-words";
const ALL_WORDS = LESSONS.flatMap((lesson) => lesson.words.map((word, index) => ({
  ...word,
  lessonId: lesson.id,
  lessonTitle: lesson.title,
  lessonSummary: lesson.summary,
  uid: `${lesson.id}:${index}`
})));
const WORDS_BY_LESSON = LESSONS.reduce((acc, lesson) => {
  acc[lesson.id] = lesson.words.map((word, index) => ({
    ...word,
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    lessonSummary: lesson.summary,
    uid: `${lesson.id}:${index}`
  }));
  return acc;
}, {});

const $ = (id) => document.getElementById(id);
const stripMarks = (value) => value
  .normalize("NFKD")
  .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, "")
  .replace(/[\s،,.!?؟:؛()"']/g, "")
  .replace(/ٱ/g, "ا")
  .trim();

const shuffle = (values) => {
  const copy = [...values];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const state = {
  mode: "translate",
  scope: "lesson-1",
  deck: [],
  index: 0,
  score: 0,
  streak: 0,
  answered: false,
  started: false,
  finished: false,
  mistakes: [],
  hardWordIds: new Set(),
  query: ""
};

try {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  state.hardWordIds = new Set(stored);
} catch (_) {
  state.hardWordIds = new Set();
}

function selectedHardWords() {
  return ALL_WORDS.filter((word) => state.hardWordIds.has(word.uid));
}

function activeWords() {
  if (state.scope === "all") return ALL_WORDS;
  if (state.scope === "hard") return selectedHardWords();
  return WORDS_BY_LESSON[state.scope];
}

function lessonScopeFromChoice() {
  return $("lesson-number")?.value || "lesson-1";
}

function populateLessonSelector() {
  const select = $("lesson-number");
  if (!select || select.options.length) return;
  select.innerHTML = LESSONS.map((lesson) => `<option value="${lesson.id}">${lesson.title}</option>`).join("");
}

function buildDeck(words) {
  if (state.scope === "hard") {
    return shuffle(words.flatMap((word) => [
      { ...word, task: "translate" },
      { ...word, task: "spell" }
    ]));
  }
  return shuffle(words).map((word) => ({ ...word, task: state.mode }));
}

function saveHardWords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.hardWordIds]));
  $("scope-hard-count").textContent = `${state.hardWordIds.size} выбрано`;
}

function updateMeta() {
  const total = state.deck.length || 1;
  const progress = !state.started ? 0 : state.finished ? 100 : ((state.index + (state.answered ? 1 : 0)) / total) * 100;
  $("question-number").textContent = state.started
    ? `Задание ${Math.min(state.index + 1, total)} из ${total}`
    : state.scope === "hard"
      ? "Выбери трудные слова"
      : "Перед началом теста";
  $("progress-percent").textContent = `${Math.round(progress)}%`;
  $("progress-bar").style.width = `${progress}%`;
  $("score").textContent = state.score;
  $("streak").textContent = state.streak;
}

function setButtons() {
  $("mode-translate").classList.toggle("active", state.mode === "translate");
  $("mode-spell").classList.toggle("active", state.mode === "spell");
  populateLessonSelector();
  const lessonChoice = lessonScopeFromChoice();
  $("lesson-number").value = LESSONS.some((lesson) => lesson.id === state.scope) ? state.scope : lessonChoice;
  $("scope-lesson-group").classList.toggle("active", state.scope.startsWith("lesson-"));
  const currentLesson = LESSONS.find((lesson) => lesson.id === $("lesson-number").value) || LESSONS[0];
  $("scope-lesson-group").querySelector("strong").textContent = currentLesson ? currentLesson.title : "Урок 1";
  $("scope-all").classList.toggle("active", state.scope === "all");
  $("scope-hard").classList.toggle("active", state.scope === "hard");
  $("mode-translate").parentElement.hidden = state.scope === "hard";
}

function renderPreview() {
  const lessons = state.scope === "all"
    ? LESSONS
    : LESSONS.filter((lesson) => lesson.id === state.scope);

  $("question-block").innerHTML = `
    <div class="lesson-preview">
      <p class="eyebrow">Сначала посмотри список слов</p>
      <h2>${state.scope === "all" ? "Все уроки для повторения" : lessons[0].title}</h2>
      <p class="preview-intro">${state.scope === "all"
        ? "Здесь показан весь набор слов из 1 тома. Можно пройти всё подряд или перейти к личному тесту."
        : lessons[0].summary}</p>
      <div class="preview-groups">
        ${lessons.map((lesson) => `
          <section class="preview-group">
            <h3>${lesson.title} · ${lesson.words.length} слов</h3>
            <div class="preview-word-grid">
              ${lesson.words.map((word) => `
                <div class="preview-word">
                  <span dir="rtl" lang="ar">${word.arabic}</span>
                  <small>${word.russian}</small>
                </div>
              `).join("")}
            </div>
          </section>
        `).join("")}
      </div>
      <button class="start-test-button" id="start-test">Начать тест →</button>
    </div>`;

  $("start-test").addEventListener("click", () => {
    state.started = true;
    state.deck = buildDeck(activeWords());
    state.index = 0;
    state.score = 0;
    state.streak = 0;
    state.answered = false;
    state.finished = false;
    state.mistakes = [];
    render();
  });
}

function renderResult() {
  const percent = Math.round((state.score / state.deck.length) * 100);
  const grade = percent >= 90 ? 5 : percent >= 70 ? 4 : percent >= 50 ? 3 : 2;
  const message = grade === 5
    ? "Отлично! Слова уже хорошо закрепились."
    : grade === 4
      ? "Очень хорошо. Ещё одно повторение укрепит результат."
      : grade === 3
        ? "Хорошее начало. Повтори слова и попробуй ещё раз."
        : "Ничего страшного. Повторение быстро поможет запомнить слова.";

  $("question-block").innerHTML = `
    <div class="result-screen">
      <p class="eyebrow">Тест завершён</p>
      <h2>${message}</h2>
      <div class="result-stats">
        <div><strong>${state.score}<span>/${state.deck.length}</span></strong><small>правильных ответов</small></div>
        <div><strong>${percent}%</strong><small>результат</small></div>
        <div><strong>${state.mistakes.length}</strong><small>слов повторить</small></div>
      </div>
      <div class="mistakes-review ${state.mistakes.length ? "has-mistakes" : "no-mistakes"}">
        <h3>${state.mistakes.length ? "Слова с ошибками" : "Без ошибок — отлично!"}</h3>
        ${state.mistakes.length ? `<div class="mistake-list">${state.mistakes.map((word) => `
          <div class="mistake-word">
            <span dir="rtl" lang="ar">${word.arabic}</span>
            <small>${word.russian}</small>
          </div>
        `).join("")}</div>` : ""}
      </div>
      <button class="result-restart" id="result-restart">↻ Пройти ещё раз</button>
    </div>`;

  $("result-restart").addEventListener("click", () => reset());
}

function feedback(correct, current) {
  const box = document.createElement("div");
  box.className = `feedback ${correct ? "feedback-good" : "feedback-bad"}`;
  box.innerHTML = `
    <div class="feedback-icon" aria-hidden="true">${correct ? "✓" : "↺"}</div>
    <div>
      <strong>${correct ? "Верно!" : "Почти. Правильный ответ:"}</strong>
      <p><span dir="rtl" lang="ar">${current.arabic}</span> — ${current.russian}${current.note ? `<br><span class="word-meta">${current.note}</span>` : ""}</p>
    </div>
    <button id="next-question">${state.index === state.deck.length - 1 ? "Посмотреть результат" : "Дальше →"}</button>`;
  $("question-block").append(box);
  $("next-question").addEventListener("click", next);
}

function grade(correct) {
  if (state.answered) return;
  state.answered = true;
  const current = state.deck[state.index];
  if (correct) {
    state.score += 1;
    state.streak += 1;
  } else {
    state.streak = 0;
    if (!state.mistakes.some((word) => word.uid === current.uid)) state.mistakes.push(current);
    state.hardWordIds.add(current.uid);
    saveHardWords();
  }
  updateMeta();
  feedback(correct, current);
}

function renderTranslate(current) {
  const pool = state.scope === "hard" ? ALL_WORDS : activeWords();
  const options = shuffle([current, ...shuffle(pool.filter((word) => word.uid !== current.uid)).slice(0, 3)]);
  $("question-block").innerHTML = `
    <p class="prompt">Выбери правильный перевод</p>
    <div class="arabic-word" dir="rtl" lang="ar">${current.arabic}</div>
    <div class="answer-grid">
      ${options.map((word, i) => `
        <button class="answer-option" data-answer="${word.uid}">
          <span>${i + 1}</span>${word.russian}
        </button>
      `).join("")}
    </div>`;

  document.querySelectorAll(".answer-option").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.answered) return;
      const correct = button.dataset.answer === current.uid;
      document.querySelectorAll(".answer-option").forEach((option) => {
        option.disabled = true;
        if (option.dataset.answer === current.uid) option.classList.add("right");
      });
      if (!correct) button.classList.add("wrong");
      grade(correct);
    });
  });
}

function renderSpell(current) {
  $("question-block").innerHTML = `
    <p class="prompt">Переведи с русского и напиши по-арабски</p>
    <div class="russian-word">${current.russian}</div>
    <div class="spell-area">
      <label for="arabic-answer">Твой ответ</label>
      <input id="arabic-answer" dir="rtl" lang="ar" autocomplete="off" autocapitalize="off" placeholder="اكتب هنا">
      <div class="arabic-keyboard" aria-label="Экранная клавиатура">
        <div class="keyboard-label"><span>Клавиатура</span><small>Можно дописывать вручную</small></div>
        <div class="keyboard-row diacritics-row" dir="rtl">
          ${["َ", "ِ", "ُ", "ً", "ٍ", "ٌ", "ْ", "ّ"].map((key) => `<button type="button" data-key="${key}">${key}</button>`).join("")}
        </div>
        ${[
          ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "د", "ذ"],
          ["ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط"],
          ["ئ", "ء", "ؤ", "ر", "ى", "ة", "و", "ز", "ظ"]
        ].map((row) => `<div class="keyboard-row" dir="rtl">${row.map((key) => `<button type="button" data-key="${key}">${key}</button>`).join("")}</div>`).join("")}
        <div class="keyboard-tools">
          <button type="button" id="clear-input">Очистить</button>
          <button type="button" id="backspace">⌫ Удалить</button>
        </div>
      </div>
      <div class="spell-actions">
        <button class="hint-button" id="hint">Показать первую букву</button>
        <button class="check-button" id="check" disabled>Проверить</button>
      </div>
    </div>`;

  const input = $("arabic-answer");
  const check = $("check");
  input.focus();
  input.addEventListener("input", () => {
    check.disabled = !input.value.trim();
  });
  document.querySelectorAll("[data-key]").forEach((key) => key.addEventListener("click", () => {
    input.value += key.dataset.key;
    input.dispatchEvent(new Event("input"));
    input.focus();
  }));
  $("clear-input").addEventListener("click", () => {
    input.value = "";
    input.dispatchEvent(new Event("input"));
    input.focus();
  });
  $("backspace").addEventListener("click", () => {
    input.value = Array.from(input.value).slice(0, -1).join("");
    input.dispatchEvent(new Event("input"));
    input.focus();
  });
  $("hint").addEventListener("click", () => {
    $("hint").textContent = `Начало: ${current.arabic.slice(0, 1)}`;
  });

  const checkAnswer = () => {
    if (state.answered || !input.value.trim()) return;
    const correct = stripMarks(input.value) === stripMarks(current.arabic);
    input.disabled = true;
    input.classList.add(correct ? "input-right" : "input-wrong");
    document.querySelector(".spell-actions").remove();
    grade(correct);
  };

  check.addEventListener("click", checkAnswer);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkAnswer();
  });
}

function renderHardSelector() {
  $("question-block").innerHTML = `
    <div class="hard-selector">
      <p class="eyebrow">Свой набор для повторения</p>
      <h2>Выбери трудные слова</h2>
      <p class="preview-intro">Каждое выбранное слово встретится в смешанном тесте. Выбирай всё, что хочется добить до автоматизма.</p>
      <div class="hard-tools">
        <button type="button" id="select-all-hard">Выбрать все</button>
        <button type="button" id="clear-hard">Очистить</button>
        <strong id="hard-selected-count">Выбрано: ${state.hardWordIds.size}</strong>
      </div>
      <div class="hard-word-groups">
        ${LESSONS.map((lesson) => `
          <section class="hard-word-group">
            <h3>${lesson.title}</h3>
            <div class="hard-word-grid">
              ${lesson.words.map((word, index) => {
                const uid = `${lesson.id}:${index}`;
                const selected = state.hardWordIds.has(uid);
                return `
                  <label class="hard-word ${selected ? "selected" : ""}">
                    <input type="checkbox" value="${uid}" ${selected ? "checked" : ""}>
                    <span dir="rtl" lang="ar">${word.arabic}</span>
                    <small>${word.russian}</small>
                    <i aria-hidden="true">✓</i>
                  </label>`;
              }).join("")}
            </div>
          </section>
        `).join("")}
      </div>
      <button class="start-hard-test" id="start-hard-test" ${state.hardWordIds.size ? "" : "disabled"}>Начать тест · <span>${state.hardWordIds.size * 2}</span> заданий →</button>
    </div>`;

  const updateSelection = () => {
    $("hard-selected-count").textContent = `Выбрано: ${state.hardWordIds.size}`;
    $("start-hard-test").disabled = state.hardWordIds.size === 0;
    $("start-hard-test").innerHTML = `Начать тест · <span>${state.hardWordIds.size * 2}</span> заданий →`;
    saveHardWords();
  };

  document.querySelectorAll(".hard-word input").forEach((input) => input.addEventListener("change", () => {
    input.checked ? state.hardWordIds.add(input.value) : state.hardWordIds.delete(input.value);
    input.closest(".hard-word").classList.toggle("selected", input.checked);
    updateSelection();
  }));

  $("select-all-hard").addEventListener("click", () => {
    ALL_WORDS.forEach((word) => state.hardWordIds.add(word.uid));
    renderHardSelector();
    saveHardWords();
  });

  $("clear-hard").addEventListener("click", () => {
    state.hardWordIds.clear();
    renderHardSelector();
    saveHardWords();
  });

  $("start-hard-test").addEventListener("click", () => {
    const words = selectedHardWords();
    if (!words.length) return;
    state.deck = buildDeck(words);
    state.index = 0;
    state.score = 0;
    state.streak = 0;
    state.answered = false;
    state.mistakes = [];
    state.finished = false;
    state.started = true;
    render();
  });
}

function renderLessonDeck() {
  if (!state.started) {
    if (state.scope === "hard") {
      renderHardSelector();
    } else {
      renderPreview();
    }
    return;
  }

  if (state.scope === "hard") {
    const current = state.deck[state.index];
    current.task === "translate" ? renderTranslate(current) : renderSpell(current);
    return;
  }

  const current = state.deck[state.index];
  state.mode === "translate" ? renderTranslate(current) : renderSpell(current);
}

function renderWordList() {
  const q = state.query.trim().toLowerCase();
  const filteredLessons = LESSONS.map((lesson) => ({
    ...lesson,
    words: WORDS_BY_LESSON[lesson.id].filter((word) => {
      if (!q) return true;
      const haystack = `${word.arabic} ${word.russian} ${word.note || ""} ${lesson.title}`.toLowerCase();
      return haystack.includes(q);
    })
  })).filter((lesson) => lesson.words.length > 0);

  $("word-list").innerHTML = filteredLessons.map((lesson) => `
    <section>
      <div class="lesson-list-label">
        <span>${lesson.title}</span>
        <small>${lesson.words.length} слов</small>
      </div>
      <div class="word-grid">
        ${lesson.words.map((word) => `
          <label class="word-row">
            <input type="checkbox" class="hard-toggle" data-uid="${word.uid}" ${state.hardWordIds.has(word.uid) ? "checked" : ""} hidden>
            <span class="word-index">${String(Number(word.uid.split(":")[1]) + 1).padStart(2, "0")}</span>
            <span class="word-russian">${word.russian}</span>
            <span class="word-arabic" dir="rtl" lang="ar">${word.arabic}</span>
            ${word.note ? `<span class="word-meta">${word.note}</span>` : ""}
          </label>
        `).join("")}
      </div>
    </section>
  `).join("") || `<p class="preview-intro">Ничего не найдено. Попробуй другой запрос.</p>`;

  document.querySelectorAll(".hard-toggle").forEach((input) => input.addEventListener("change", () => {
    input.checked ? state.hardWordIds.add(input.dataset.uid) : state.hardWordIds.delete(input.dataset.uid);
    saveHardWords();
  }));
}

function reset(nextMode = state.mode, nextScope = state.scope) {
  state.mode = nextMode;
  state.scope = nextScope;
  state.deck = nextScope === "hard" ? [] : buildDeck(activeWords());
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.answered = false;
  state.started = false;
  state.finished = false;
  state.mistakes = [];
  setButtons();
  updateMeta();
  renderLessonDeck();
}

function next() {
  if (state.index >= state.deck.length - 1) {
    state.finished = true;
    state.answered = false;
    updateMeta();
    renderResult();
    return;
  }
  state.index += 1;
  state.answered = false;
  renderLessonDeck();
}

function openDictionary() {
  $("dictionary-backdrop").hidden = false;
  $("dictionary-search").value = state.query;
  renderWordList();
}

function closeDictionary() {
  $("dictionary-backdrop").hidden = true;
}

function resetFromScope(scope) {
  if (state.scope === scope) return;
  reset(state.mode, scope);
}

$("lesson-count").textContent = String(LESSONS.length);
$("word-count").textContent = String(ALL_WORDS.length);

$("mode-translate").addEventListener("click", () => reset("translate", state.scope));
$("mode-spell").addEventListener("click", () => reset("spell", state.scope));
$("restart").addEventListener("click", () => reset());
$("scope-all").addEventListener("click", () => reset(state.mode, "all"));
$("scope-hard").addEventListener("click", () => reset(state.mode, "hard"));
$("scope-lesson-group").addEventListener("click", (event) => {
  if (event.target === $("lesson-number")) return;
  reset(state.mode, lessonScopeFromChoice());
});
$("lesson-number").addEventListener("change", (event) => {
  reset(state.mode, event.target.value);
});
$("open-dictionary").addEventListener("click", openDictionary);
$("close-dictionary").addEventListener("click", closeDictionary);
$("dictionary-backdrop").addEventListener("click", (event) => {
  if (event.target === $("dictionary-backdrop")) closeDictionary();
});

$("dictionary-search").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderWordList();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDictionary();
});

function render() {
  setButtons();
  updateMeta();
  renderLessonDeck();
}

saveHardWords();
reset("translate", "lesson-1");

if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}
