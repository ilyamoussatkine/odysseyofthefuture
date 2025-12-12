// full replacement game.js — исправленная инициализация и показ сцен
// ожидает в index.html:
//  - контейнер сцены: <div id="scene" class="scene-block">...</div>
//  - текст: <div id="scene-text" class="scene-text"></div>
//  - изображение: <img id="scene-image" class="scene-image" />
//  - сторy wrapper: <div id="story-wrapper">...</div>
//  - matching-container и остальная мини-игра — остаются как у вас

/* ========================= STORY (27) ========================= */
const storyScenes = [
  { text: "Очки, дополняющие для&nbsp;тебя реальность, отключились, она больше не&nbsp;выглядит, как&nbsp;ты хочешь. Как&nbsp;непривычно&nbsp;— кажется, ты&nbsp;не&nbsp;отключал очки уже&nbsp;несколько месяцев, в&nbsp;них было очень хорошо.", image: "images/scenes/1.jpg" },
  { text: "Впрочем, рабочий день как&nbsp;раз кончился, пора идти домой. В&nbsp;офисе включены компьютеры, за&nbsp;ними работают, но&nbsp;людей не&nbsp;видно.", image: "images/scenes/2.jpg" },
  { text: "С&nbsp;момента изобретения технологии, позволяющей сделать себя невидимыми для&nbsp;других, прошла уже&nbsp;пара десятков лет. Люди не&nbsp;вредят друг другу, ведь их&nbsp;цифровая позиция точно отслеживается.", image: "images/scenes/3.jpg" },
  { text: "Постепенно люди стали всё&nbsp;чаще прибегать к&nbsp;этой технологии. Сначала&nbsp;— чтобы не&nbsp;попадаться на&nbsp;глаза другим, когда выглядят не&nbsp;лучшим образом, чтобы избегать объективизирующих взглядов", image: "images/scenes/4.jpg" },
  { text: "Теперь, когда большая часть людей почти всегда&nbsp;ходят невидимыми, стать видимым требует ещё&nbsp;больших усилий&nbsp;— уже&nbsp;не&nbsp;растворишься в&nbsp;толпе, но&nbsp;будешь единственным, на&nbsp;кого смотрят сотни&nbsp;глаз.", image: "images/scenes/5.jpg" },
  { text: "Ты&nbsp;вышел на&nbsp;улицу. Вокруг кажущиеся пустыми плоские неокрашенные коробки зданий. С&nbsp;тех пор, как&nbsp;люди пользуются очками дополненной реальности, они&nbsp;могут создать вокруг себя визуальные миры, исходя из&nbsp;любых своих желаний. Теперь нет необходимости тратиться на&nbsp;убранства фасадов, поэтому здания теперь&nbsp;— плоские коробки, на&nbsp;которые каждый сможет сделать желаемую визуальную надстройку.", image: "images/scenes/6.jpg" },
  { text: "Но&nbsp;без&nbsp;очков эти районы кажутся страшными. Ты&nbsp;доходишь до&nbsp;моста и&nbsp;видишь по&nbsp;ту сторону остров, застроенный накануне эпохи больших изменений, принесенных новыми технологиями.", image: "images/scenes/7.jpg" },
  { text: "Твоё детство и&nbsp;юность проходило ещё&nbsp;в&nbsp;прошлую эпоху, но&nbsp;ты почти её&nbsp;не&nbsp;помнишь, спустя много лет пребывания в&nbsp;галактиках генерируемого контента. Что&nbsp;же в&nbsp;действительности было в&nbsp;те времена?", image: "images/scenes/8.jpg" },
  { text: "Дома на&nbsp;острове напоминают скалы в&nbsp;лесистых горах, они&nbsp;будто выступающие из&nbsp;острова неотёсанные булыжники, на&nbsp;которых обитают совы, рыси и&nbsp;другие животные, запечатленные в&nbsp;камне.", image: "images/scenes/9.jpg" },
  { text: "Ты&nbsp;идёшь, касаясь неровной каменной облицовки зданий, и&nbsp;на&nbsp;одном из&nbsp;поворотов видишь дом, напоминающий тебе о&nbsp;чём-то.", image: "images/scenes/10.jpg" },
  { text: "Как&nbsp;это было давно! Я&nbsp;помню как&nbsp;был построен этот дом, как&nbsp;радовались заселению какие-то очень знакомые мне люди. Я&nbsp;помню сторожа этого дома, всё&nbsp;время стоявшего у&nbsp;этой калитки в&nbsp;своём мундире.", image: "images/scenes/12.jpg" },
  { text: "Многие дома в&nbsp;этой округе успели послужить своим новым хозяевам лишь пару лет. Что-то заставило людей оставить их, но&nbsp;ты не&nbsp;можешь вспомнить. Теперь они&nbsp;стоят одиноко, а&nbsp;люди редко видят их&nbsp;непосредственно&nbsp;— этот район обходят стороной и&nbsp;смотрят, в&nbsp;основном, через&nbsp;очки.", image: "images/scenes/13.jpg" },
  { text: "Ты&nbsp;заворачиваешь за&nbsp;угол, окутанный этим столь живым воспоминанием. Но&nbsp;вот зеленые фасады здания, возникшего перед тобой, отзываются шумом в&nbsp;голове. Крики людей, звон бутылок...", image: "images/scenes/14.jpg" },
  { text: "Оказывается, на&nbsp;этом углу, в&nbsp;подвале здания, находился кабак, в&nbsp;котором ты&nbsp;пьянствовал дни напролет. Ты&nbsp;совершенно не&nbsp;помнишь, что&nbsp;было после этих дней, как&nbsp;они кончились, ты&nbsp;не&nbsp;помнишь, когда впервые надел&nbsp;очки.", image: "images/scenes/16.jpg" },
  { text: "Но&nbsp;просто так пить не&nbsp;начинают&nbsp;— ты&nbsp;чувствуешь, что&nbsp;была какая-то причина. Вдруг ты&nbsp;видишь, как&nbsp;за&nbsp;угол соседнего дома заворачивает женский силуэт. Ты&nbsp;не&nbsp;часто видел в&nbsp;последнее время людей, ходящих по&nbsp;улице видимыми.", image: "images/scenes/17.jpg" },
  { text: "Девушка уже&nbsp;скрылась за&nbsp;углом, но&nbsp;твои глаза будто продолжают её&nbsp;видеть.", image: "images/scenes/18.jpg" },
  { text: "Дом, за&nbsp;который она&nbsp;завернула, окружают деревья, их&nbsp;кроны покачиваются на&nbsp;ветру. Тебе становится очень больно.", image: "images/scenes/19.jpg" },
  { text: "Ты&nbsp;понял, что&nbsp;это было. Ты&nbsp;вспомнил, как&nbsp;точно так же, медленно отдаляясь, завернула за&nbsp;угол твоя любовь в&nbsp;день вашего расставания.", image: "images/scenes/21.jpg" },
  { text: "У&nbsp;тебя была девушка! Ты&nbsp;вспомнил её&nbsp;лицо, глаза с&nbsp;осуждающим взглядом, глаза, затем покрывшиеся слезами. Ты&nbsp;чувствуешь всю боль последнего вечера, как&nbsp;ты онемел, не&nbsp;мог сказать ни&nbsp;слова, хотя так хотел найти хотя бы&nbsp;одно.", image: "images/scenes/22.jpg" },
  { text: "Ноги слабеют, ты&nbsp;садишься у&nbsp;ограды дома. Ты&nbsp;не&nbsp;помнишь, сколько ты&nbsp;так просидел, но&nbsp;на&nbsp;улице ещё&nbsp;не&nbsp;стало светло, ты&nbsp;чувствуешь лишь холод и&nbsp;озноб.", image: "images/scenes/23.jpg" },
  { text: "Хочется вернуться к&nbsp;комфорту оставленного мира. Ты&nbsp;пытаешься включить очки, вытащив их&nbsp;из&nbsp;зарядно-диагностического футляра у&nbsp;себя в&nbsp;рюкзаке.", image: "images/scenes/24.jpg" },
  { text: "Они&nbsp;заработали, временный сбой был устранён. Но&nbsp;почему-то ты&nbsp;сомневаешься в&nbsp;том, стоит&nbsp;ли надевать очки. От&nbsp;боли, что&nbsp;ты испытываешь, тебе и&nbsp;хочется, и&nbsp;не&nbsp;хочется уходить с&nbsp;этого острова, надевать&nbsp;очки.", image: "images/scenes/25.jpg" },
  { text: "И&nbsp;почему тот мир, который создавали для&nbsp;тебя из&nbsp;твоих желаний очки, всегда строился так, чтобы исключить воспоминания об&nbsp;этой ранней поре? И&nbsp;кто отвечает за&nbsp;то, что&nbsp;проецируемые миры получаются именно такими?", image: "images/scenes/26.jpg" },
  { text: "Ты&nbsp;подходишь к&nbsp;воде, окружающей остров и&nbsp;садишься на&nbsp;берег. Тебя разрывают вопросы&nbsp;— от&nbsp;того, как&nbsp;устроен этот мир до&nbsp;тех, где сейчас те, о&nbsp;ком ты&nbsp;вспомнил&nbsp;— живы ли&nbsp;они? Помнят ли&nbsp;о&nbsp;тебе?", image: "images/scenes/27.jpg" },
  { text: "На&nbsp;другом береге реки вдали возвышаются серверные небоскребы, обеспечивающие непрерывные потоки генерации промптов. Сверху по&nbsp;течению гудит ГЭС, добывая из&nbsp;реки силы для&nbsp;обеспечения башен электричеством.", image: "images/scenes/28.jpg" },
  { text: "Тебе вспоминаются строки забытого поэта: \"на меня наставлен сумрак ночи, тысяча биноклей на&nbsp;оси\",&nbsp;— от&nbsp;этих строк ты&nbsp;будто оказываешься в&nbsp;какой-то деревне с&nbsp;черными деревянными домами. Ты&nbsp;смотришь на&nbsp;полумесяц, слыша вой собак, выходящий из&nbsp;банных труб дым, тёплый свет фонаря освещает скрипучие доски.", image: "images/scenes/29.jpg" },
  { text: "Кажется, что&nbsp;есть ещё&nbsp;какой-то мир, который где-то существует, и&nbsp;так хочется его&nbsp;отыскать.", image: "images/scenes/30.jpg" }
];

/* ========================= STATE ========================= */

let state = {
  sceneIndex: 0,
  isAnimatingText: false,
  afterMiniGameReturnIndex: null
};

const MINI_GAME_POINTS = [9, 12, 16];

/* ========================= DOM ========================= */

let storyWrapper;
let sceneContainer;
let sceneText;
let sceneImage;
let memoryBtn;

/* ========================= TYPOGRAPHY & LAYOUT ========================= */

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyTextStyles);
} else {
  applyTextStyles();
}

function applyTextStyles() {
  if (document.getElementById('typography-styles')) return;

  const style = document.createElement('style');
  style.id = 'typography-styles';
  style.textContent = `
    .scene-text,
    #scene-text {
      max-width: 450px !important;
      margin: 0 auto !important;
      display: block !important;
      padding: 0 20px !important;
      text-align: justify !important;
      text-align-last: left;
      line-height: 1.5 !important;
      letter-spacing: 0.02em;
      word-spacing: 0.05em;
      hyphens: none;
      -webkit-hyphens: none;
      -moz-hyphens: none;
      text-justify: inter-word;
      text-indent: 0 !important;
    }
    
    .scene-text p,
    #scene-text p {
      text-indent: 0 !important;
    }

    #final-text {
      max-width: 450px !important;
      margin: 0 auto !important;
      display: block !important;
      padding: 0 20px !important;
      text-align: justify !important;
      text-align-last: left;
      line-height: 1.5 !important;
      letter-spacing: 0.02em;
      word-spacing: 0.05em;
      hyphens: none;
      -webkit-hyphens: none;
      -moz-hyphens: none;
      text-justify: inter-word;
      text-indent: 0 !important;
    }
    
    #final-text p {
      text-indent: 0 !important;
    }

    .error-body {
      max-width: 420px !important;
      margin: 0 auto !important;
      display: block !important;
      text-align: justify !important;
      text-align-last: left;
      line-height: 1.5 !important;
      hyphens: none;
      -webkit-hyphens: none;
      -moz-hyphens: none;
      text-indent: 0 !important;
    }
    
    .error-body p {
      text-indent: 0 !important;
    }

    @media (max-width: 768px) {
      .scene-text,
      #scene-text,
      #final-text {
        max-width: 100% !important;
        text-align: left !important;
      }
    }
  `;
  document.head.appendChild(style);
}

/* ========================= HELPERS ========================= */



/**
 * Оборачивает текст в один параграф без разделения на абзацы
 */
function addParagraphIndents(text) {
  if (!text || typeof text !== 'string') {
    return '<p>' + (text || '') + '</p>';
  }
  
  return '<p>' + text + '</p>';
}

/**
 * Плавное появление текста целиком (не пословно).
 * Перезапускает анимацию fadeInText (CSS).
 */
function printTextFade(text) {
  if (!sceneText) return;
  state.isAnimatingText = true;

  // Оборачиваем текст в параграф
  let formattedText;
  try {
    formattedText = addParagraphIndents(text);
  } catch (e) {
    console.error('Ошибка при форматировании текста:', e);
    formattedText = text; // Используем оригинальный текст в случае ошибки
  }

  // сбрасываем анимацию, ставим текст, затем запускаем анимацию
  sceneText.style.animation = 'none';
  sceneText.style.opacity = '0';
  sceneText.innerHTML = formattedText;

  // force reflow
  void sceneText.offsetWidth;

  sceneText.style.animation = 'fadeInText 1s ease forwards';
  // снимаем флаг через время анимации
  setTimeout(() => {
    state.isAnimatingText = false;
  }, 1000 + 50);
}

/**
 * Показывает сцену: ставит картинку, текст и анимацию контейнера.
 */
function showScene(index) {
  console.log('showScene вызвана с индексом:', index);
  console.log('Доступные элементы:', {
    sceneContainer: !!sceneContainer,
    sceneText: !!sceneText,
    sceneImage: !!sceneImage,
    storyScenesLength: storyScenes.length
  });
  
  if (index < 0 || index >= storyScenes.length) {
    console.error('Неверный индекс сцены:', index);
    return;
  }
  
  if (!sceneContainer || !sceneText || !sceneImage) {
    console.error('Отсутствуют необходимые элементы DOM для показа сцены');
    return;
  }
  
  const s = storyScenes[index];
  console.log('Загружаю сцену:', index, s);

  // картинка
  if (sceneImage) {
    sceneImage.src = s.image || '';
    sceneImage.alt = 'scene ' + (index + 1);
    console.log('Изображение установлено:', s.image);
  }

  // текст / кнопка памяти
  if (s.text && s.text.includes('кнопка')) {
    // покажем кнопку памяти, если она есть; при показе запрещаем клик-перелистывание
    if (memoryBtn) memoryBtn.classList.remove('hidden');
  } else {
    if (memoryBtn) memoryBtn.classList.add('hidden');
  }

  // текст и анимация
  printTextFade(s.text || '');
  
  // Если это сцена "Попытаться вспомнить...", добавляем класс для стилизации кнопки
  if (s.text && s.text.includes('Попытаться вспомнить')) {
    if (sceneText) {
      sceneText.classList.add('memory-button');
    }
  } else {
    if (sceneText) {
      sceneText.classList.remove('memory-button');
    }
  }

  // анимация контейнера (show класс)
  if (sceneContainer) {
    sceneContainer.classList.remove('show');
    // reflow
    void sceneContainer.offsetWidth;
    sceneContainer.classList.add('show');
    console.log('Класс show добавлен к sceneContainer');
  }

  // сохраняем индекс
  state.sceneIndex = index;
  console.log('Сцена успешно показана, индекс сохранен:', index);
}

/**
 * Показывает финальную сцену после прохождения всех сцен
 */
function showFinalScene() {
  const storyWrapper = document.getElementById('story-wrapper');
  const finalContainer = document.getElementById('final-container');
  
  if (storyWrapper) storyWrapper.classList.add('hidden');
  if (finalContainer) {
    finalContainer.classList.remove('hidden');
    
    // Устанавливаем финальный текст и изображение
    const finalText = document.getElementById('final-text');
    const finalBg = document.getElementById('final-bg');
    
    if (finalText) {
      finalText.innerHTML = addParagraphIndents(storyScenes[storyScenes.length - 1].text);
    }
    
    if (finalBg) {
      finalBg.style.backgroundImage = `url(${storyScenes[storyScenes.length - 1].image})`;
    }
  }
}

/* ========================= NAVIGATION: клик по экрану ========================= */

/**
 * Клик по сцене — переход вперёд,
 * если видна кнопка памяти — игнорируем.
 */
function initSceneClickHandler() {
  // Обработчик на story-wrapper, чтобы клик работал в любом месте сцены
  if (storyWrapper) {
    storyWrapper.addEventListener('click', (e) => {
      // Игнорируем клики по кнопкам и ссылкам
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
        return;
      }
      
      if (state.isAnimatingText) return;

      const idx = state.sceneIndex;

      // если это сцены "попытаться вспомнить"
      if (idx === 9) { startMiniGame(0); return; }
      if (idx === 12) { startMiniGame(1); return; }
      if (idx === 16) { startMiniGame(2); return; }

      // иначе — обычный переход вперёд
      const next = idx + 1;
      if (next < storyScenes.length) {
        showScene(next);
      } else {
        // Если это последняя сцена, показываем финальную страницу
        showFinalScene();
      }
    });
  }
}

/* ========================= MEMORY BUTTON -> запуск мини-игры ========================= */

function initMemoryButton() {
  if (memoryBtn) {
    memoryBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      // определяем какой мини-игре соответствовать текущая сцена
      const idx = state.sceneIndex;
      if (idx === MINI_GAME_POINTS[0]) startMiniGame(0);
      else if (idx === MINI_GAME_POINTS[1]) startMiniGame(1);
      else if (idx === MINI_GAME_POINTS[2]) startMiniGame(2);
    });
  }
}

/* ========================= INTEGRАЦИЯ MINI-GAME ========================= */

/**
 * startMiniGame(n) — переключает на ваш блок mini-game и запускает логику.
 * должен использовать вашу существующую реализацию startMatchingGame / gameState
 */
function startMiniGame(roundNumber) {
  // запомним, куда вернуться
  state.afterMiniGameReturnIndex = state.sceneIndex + 1;

  if (storyWrapper) storyWrapper.classList.add('hidden');
  const matching = document.getElementById('matching-container');
  if (matching) matching.classList.remove('hidden');

  // интегрируем с вашей существующей логикой мини-игры:
  if (typeof gameState !== 'undefined') {
    gameState.currentRound = roundNumber;
  }
  if (typeof startMatchingGame === 'function') {
    startMatchingGame();
  } else {
    console.warn('startMatchingGame() не найдена — убедитесь, что код мини-игры подключён.');
  }
}

/**
 * Вызывается мини-игрой после успешного прохождения / чтобы вернуться в сюжет.
 * Ваша мини-игра должна вызывать window.returnFromMiniGame()
 */
window.returnFromMiniGame = function () {
  const matching = document.getElementById('matching-container');
  if (matching) matching.classList.add('hidden');
  if (storyWrapper) storyWrapper.classList.remove('hidden');

  // вернуться на сохранённый индекс
  if (Number.isInteger(state.afterMiniGameReturnIndex)) {
    const idx = state.afterMiniGameReturnIndex;
    if (idx >= 0 && idx < storyScenes.length) {
      showScene(idx);
      state.afterMiniGameReturnIndex = null;
      return;
    }
  }
  // по умолчанию показать следующую
  showScene(Math.min(state.sceneIndex + 1, storyScenes.length - 1));
};

/* ========================= START ========================= */

function initGame() {
  console.log('DOMContentLoaded сработал');
  
  // Инициализация DOM элементов
  storyWrapper = document.getElementById('story-wrapper');
  sceneContainer = document.getElementById('scene');
  sceneText = document.getElementById('scene-text');
  sceneImage = document.getElementById('scene-image');
  memoryBtn = document.getElementById('memory-btn'); // может отсутствовать, проверяем

  console.log('DOM элементы получены:', {
    storyWrapper: !!storyWrapper,
    sceneContainer: !!sceneContainer,
    sceneText: !!sceneText,
    sceneImage: !!sceneImage,
    memoryBtn: !!memoryBtn
  });

  if (!sceneContainer || !sceneText || !sceneImage || !storyWrapper) {
    console.error('game.js: отсутствуют обязательные элементы DOM (scene / scene-text / scene-image / story-wrapper). Проверьте index.html и id элементов.');
    return;
  }

  // Инициализация обработчика клика по сцене
  initSceneClickHandler();

  // Инициализация кнопки памяти
  initMemoryButton();

  // безопасная инициализация мини-игры (если ваш старый код ожидает DOMContentLoaded)
  if (typeof updateScoreCounter === 'function') {
    try { updateScoreCounter(); } catch (e) {}
  }

  // Инициализация фоновой музыки
  const backgroundMusic = document.getElementById('background-music');
  if (backgroundMusic) {
    // Пытаемся воспроизвести музыку автоматически
    backgroundMusic.volume = 0.5; // Устанавливаем громкость на 50%
    backgroundMusic.loop = true; // Зацикливаем трек
    
    // Попытка автовоспроизведения (может не работать без взаимодействия пользователя)
    const playPromise = backgroundMusic.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        // Автовоспроизведение заблокировано браузером
        console.log('Автовоспроизведение заблокировано. Музыка начнется после взаимодействия пользователя.');
      });
    }
    
    // Воспроизводим музыку при первом взаимодействии пользователя
    const startMusicOnInteraction = () => {
      if (backgroundMusic.paused) {
        backgroundMusic.play().catch(e => console.log('Не удалось воспроизвести музыку:', e));
      }
      // Удаляем обработчики после первого взаимодействия
      document.removeEventListener('click', startMusicOnInteraction);
      document.removeEventListener('touchstart', startMusicOnInteraction);
    };
    
    document.addEventListener('click', startMusicOnInteraction);
    document.addEventListener('touchstart', startMusicOnInteraction);
  }

  // Обработка кнопки "Начать историю"
  const startStoryBtn = document.getElementById('start-story-btn');
  const startScreen = document.getElementById('start-screen');

  console.log('Инициализация кнопки "Начать историю":', {
    startStoryBtn: !!startStoryBtn,
    startScreen: !!startScreen,
    storyWrapper: !!storyWrapper,
    sceneContainer: !!sceneContainer,
    sceneText: !!sceneText,
    sceneImage: !!sceneImage
  });

  if (startStoryBtn && startScreen && storyWrapper) {
    startStoryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Кнопка "Начать историю" нажата');
      console.log('Состояние перед переходом:', {
        startScreen: startScreen.classList.contains('hidden'),
        storyWrapper: storyWrapper.classList.contains('hidden'),
        sceneContainer: !!sceneContainer,
        sceneText: !!sceneText,
        sceneImage: !!sceneImage
      });
      
      startScreen.classList.add('hidden');
      storyWrapper.classList.remove('hidden');
      
      console.log('Экраны переключены, вызываю showScene(0)');
      
      // Показываем первую сцену
      try {
        showScene(0);
        console.log('showScene(0) выполнена успешно');
      } catch (error) {
        console.error('Ошибка при вызове showScene(0):', error);
      }
      
      // Пытаемся запустить музыку при начале игры
      if (backgroundMusic && backgroundMusic.paused) {
        backgroundMusic.play().catch(e => console.log('Не удалось воспроизвести музыку:', e));
      }
    });
  } else {
    console.error('Не найдены элементы для кнопки "Начать историю":', {
      startStoryBtn: !!startStoryBtn,
      startScreen: !!startScreen,
      storyWrapper: !!storyWrapper
    });
  }

  // Обработка кнопки "Пройти игру ещё раз"
  const finalRestartBtn = document.getElementById('final-restart-btn');
  if (finalRestartBtn) {
    finalRestartBtn.addEventListener('click', () => {
      const finalContainer = document.getElementById('final-container');
      if (finalContainer) finalContainer.classList.add('hidden');
      if (startScreen) startScreen.classList.remove('hidden');
      // Сбрасываем состояние игры
      state.sceneIndex = 0;
      state.afterMiniGameReturnIndex = null;
      if (gameState) {
        gameState.currentRound = 0;
        gameState.correctAnswersCount = 0;
        gameState.roundStates = [];
        gameState.lastFailedLeftIndex = null;
      }
    });
  }
}

// Инициализация игры при загрузке DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGame);
} else {
  // DOM уже загружен
  initGame();
}


/* ============================================
   КОНФИГУРАЦИЯ ИГРЫ
   ============================================ */

const GAME_CONFIG = {
    totalRounds: 3,

    matchingRounds: [
        {
            leftImages: [
                "images/pairs/round1_left1.jpg",
                "images/pairs/round1_left2.jpg",
                "images/pairs/round1_left3.jpg",
                "images/pairs/round1_left4.jpg"
            ],
            rightImages: [
                "images/pairs/round1_right1.jpg",
                "images/pairs/round1_right2.jpg",
                "images/pairs/round1_right3.jpg",
                "images/pairs/round1_right4.jpg"
            ],
            pairs: [
                [0, 0],
                [1, 1],
                [2, 2],
                [3, 3]
            ]
        },
        {
            leftImages: [
                "images/pairs/round2_left1.jpg",
                "images/pairs/round2_left2.jpg",
                "images/pairs/round2_left3.jpg",
                "images/pairs/round2_left4.jpg"
            ],
            rightImages: [
                "images/pairs/round2_right1.jpg",
                "images/pairs/round2_right2.jpg",
                "images/pairs/round2_right3.jpg",
                "images/pairs/round2_right4.jpg"
            ],
            pairs: [
                [0, 0],
                [1, 1],
                [2, 2],
                [3, 3]
            ]
        },
        {
            leftImages: [
                "images/pairs/round3_left1.jpg",
                "images/pairs/round3_left2.jpg",
                "images/pairs/round3_left3.jpg",
                "images/pairs/round3_left4.jpg"
            ],
            rightImages: [
                "images/pairs/round3_right1.jpg",
                "images/pairs/round3_right2.jpg",
                "images/pairs/round3_right3.jpg",
                "images/pairs/round3_right4.jpg"
            ],
            pairs: [
                [0, 0],
                [1, 1],
                [2, 2],
                [3, 3]
            ]
        }
    ]
};

/* ============================================
   STATE ИГРЫ
   ============================================ */

let gameState = {
    currentRound: 0,
    selectedOption: null,
    correctAnswersCount: 0,
    isInteractionLocked: false,
    roundStates: [],
    lastFailedLeftIndex: null
};

/* ============================================
   МИНИ-ИГРА
   ============================================ */

function startMatchingGame() {
    hideAllScenes();
    const matchingContainer = document.getElementById('matching-container');
    if (matchingContainer) matchingContainer.classList.remove('hidden');

    loadMatchingRound(gameState.currentRound);
}

function loadMatchingRound(roundIndex) {
    hideErrorMessage();
    const round = GAME_CONFIG.matchingRounds[roundIndex];

    if (!gameState.roundStates[roundIndex]) {

        let randomLeftIndex;
        if (gameState.lastFailedLeftIndex !== null && round.leftImages.length > 1) {
            do {
                randomLeftIndex = Math.floor(Math.random() * round.leftImages.length);
            } while (randomLeftIndex === gameState.lastFailedLeftIndex);
        } else {
            randomLeftIndex = Math.floor(Math.random() * round.leftImages.length);
        }

        const pair = round.pairs.find(p => p[0] === randomLeftIndex);
        const correctRightIndex = pair ? pair[1] : 0;

        const shuffledRightImages = shuffleArray([...round.rightImages]);
        const correctImagePath = round.rightImages[correctRightIndex];
        const shuffledCorrectIndex = shuffledRightImages.indexOf(correctImagePath);

        gameState.roundStates[roundIndex] = {
            currentLeftIndex: randomLeftIndex,
            shuffledRightImages,
            correctRightIndex: shuffledCorrectIndex
        };

        gameState.lastFailedLeftIndex = null;
    }

    const roundState = gameState.roundStates[roundIndex];

    document.getElementById('left-image').src =
        round.leftImages[roundState.currentLeftIndex];

    const rightOptions = document.getElementById('right-options');
    rightOptions.innerHTML = "";

    roundState.shuffledRightImages.forEach((path, i) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.dataset.index = i;

        const img = document.createElement('img');
        img.src = path;

        card.appendChild(img);
        card.onclick = () => selectOption(i, roundIndex);

        rightOptions.appendChild(card);
    });

    document.getElementById("matching-title").textContent =
        "Нужно вспомнить, что это за здание...";

    gameState.selectedOption = null;
    gameState.isInteractionLocked = false;
}

function selectOption(i, roundIndex) {
    if (gameState.isInteractionLocked) return;

    document.querySelectorAll('.option-card')
        .forEach(c => c.classList.remove('selected', 'wrong'));

    const selectedCard = document.querySelector(`.option-card[data-index="${i}"]`);
    selectedCard.classList.add('selected');

    gameState.selectedOption = i;
    gameState.isInteractionLocked = true;

    setTimeout(() => checkAnswer(i, roundIndex), 500);
}

function checkAnswer(i, roundIndex) {
    const rs = gameState.roundStates[roundIndex];

    if (i === rs.correctRightIndex) {
        hideErrorMessage();
        gameState.correctAnswersCount++;
        updateScoreCounter();

        delete gameState.roundStates[roundIndex];
        gameState.currentRound++;

        // сразу возвращаемся к сюжету
        window.returnFromMiniGame();

    } else {
        const wrongCard = document.querySelector(`.option-card[data-index="${i}"]`);
        wrongCard.classList.add('wrong');

        gameState.lastFailedLeftIndex = rs.currentLeftIndex;

        // Показываем стильное сообщение об ошибке
        showErrorMessage();

        setTimeout(() => restartCurrentRound(roundIndex), 2000);
    }
}

function restartCurrentRound(roundIndex) {
    hideErrorMessage();
    delete gameState.roundStates[roundIndex];
    loadMatchingRound(roundIndex);
}

/* ============================================
   СООБЩЕНИЕ ОБ ОШИБКЕ
   ============================================ */

const ERROR_MESSAGES = [
    "Ты&nbsp;точно хочешь вспомнить все&nbsp;или&nbsp;нет?",
    "Память&nbsp;— штука капризная. Попробуй ещё&nbsp;раз.",
    "Воспоминания не&nbsp;возвращаются так просто. Сосредоточься.",
    "Может, ты&nbsp;не&nbsp;готов вспомнить? Подумай внимательнее.",
    "Прошлое ускользает. Нужно быть точнее.",
    "Очки стёрли многое. Но&nbsp;кое-что всё&nbsp;ещё можно восстановить.",
    "Твоя память сопротивляется. Не&nbsp;сдавайся.",
    "Каждый дом хранит историю. Найди правильную.",
    "Вспомнить&nbsp;— значит вернуться. Ты&nbsp;готов?",
    "Память обманывает, но&nbsp;детали не&nbsp;лгут. Всмотрись внимательнее.",
    "Ты&nbsp;так близко. Ещё&nbsp;одно усилие.",
    "Реальность скрыта за&nbsp;слоями забытья. Продолжай искать.",
    "Неверный выбор&nbsp;— это&nbsp;тоже путь к&nbsp;истине. Попробуй снова.",
    "Воспоминания требуют точности. Будь внимательнее к&nbsp;деталям.",
    "Каждый неверный ответ&nbsp;— шаг к&nbsp;пониманию. Не&nbsp;останавливайся."
];

function showErrorMessage() {
    const errorMsg = document.getElementById('error-message');
    const errorBody = errorMsg?.querySelector('.error-body');
    
    if (errorMsg && errorBody) {
        // Выбираем случайное сообщение
        const randomMessage = ERROR_MESSAGES[Math.floor(Math.random() * ERROR_MESSAGES.length)];
        errorBody.innerHTML = randomMessage;
        
        errorMsg.classList.remove('hidden');
        // Автоматически скрываем через 2 секунды
        setTimeout(() => {
            hideErrorMessage();
        }, 2000);
    }
}

function hideErrorMessage() {
    const errorMsg = document.getElementById('error-message');
    if (errorMsg) {
        errorMsg.classList.add('hidden');
    }
}

/* ============================================
   HELPERS
   ============================================ */

function hideAllScenes() {
    document.querySelectorAll('.scene').forEach(s => s.classList.add('hidden'));
}

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function updateScoreCounter() {
    const sc = document.getElementById('score-counter');
    if (sc) sc.textContent = `${gameState.correctAnswersCount}/3`;
}

/* ============================================
   ВОЗВРАТ К СЮЖЕТУ
   ============================================ */

// Эта функция уже определена выше, удаляем дублирование

/* ============================================
   ИНИЦИАЛИЗАЦИЯ
   ============================================ */

// updateScoreCounter вызывается в основном обработчике DOMContentLoaded выше