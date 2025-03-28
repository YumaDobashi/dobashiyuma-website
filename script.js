const texts = [
    "対岸に辿り着く頃には",
    "すべてが懐かしく感じるだろう。",
    "澄み切った川底は",
    "影さえも良く見えた。",
    "深いほど",
    "深いほど。",
    "", // 最後は余韻
  ];
  
  const textElement = document.querySelector('.fade-text');
  const titleElement = document.querySelector('.site-title');
  
  let index = 0;
  
  function showNextText() {
    textElement.style.opacity = 0;
  
    setTimeout(() => {
      textElement.textContent = texts[index];
      textElement.style.opacity = 1;
  
      // 最後の詩のあとにタイトルを表示
      if (index === texts.length - 1) {
        setTimeout(() => {
          titleElement.classList.add('visible');
        }, 1500);
      }
  
      index++;
    }, 1500);
  }
  
  // 初回のテキスト
  textElement.textContent = texts[0];
  textElement.style.opacity = 1;
  index++;
  
  // 5.5秒ごとに切り替え
  setInterval(() => {
    if (index < texts.length) {
      showNextText();
    }
  }, 5500);
  