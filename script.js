const texts = [
    "対岸に辿り着く頃には",
    "すべてが懐かしく感じるだろう。",
    "澄み切った川底は",
    "影さえも良く見えた。",
    "深いほど",
    "深いほど。",
    ""
  ];
  
  const textElement = document.querySelector('.fade-text');
  const nameElement = document.querySelector('.site-title');
  const officialElement = document.querySelector('.official-text');
  
  let index = 0;
  
  function showNextText() {
    textElement.style.opacity = 0;
  
    setTimeout(() => {
      textElement.textContent = texts[index];
      textElement.style.opacity = 1;
  
      // 最後の詩のあとに名前を表示
      if (index === texts.length - 1) {
        setTimeout(() => {
          nameElement.classList.add('visible');
  
          // 名前が表示された後に official を表示
          setTimeout(() => {
            officialElement.classList.add('visible');
          }, 1500);
        }, 1500);
      }
  
      index++;
    }, 1500);
  }
  
  textElement.textContent = texts[0];
  textElement.style.opacity = 1;
  index++;
  
  setInterval(() => {
    if (index < texts.length) {
      showNextText();
    }
  }, 5500);
  