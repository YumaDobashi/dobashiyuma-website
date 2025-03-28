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
  

  fetch('lives.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('live-container');
    data.forEach(live => {
      const div = document.createElement('div');
      div.className = 'live-entry';
      div.innerHTML = `
        <h2>${live.date} @ ${live.venue}</h2>
        <p><strong>出演：</strong>${live.acts}</p>
        <p><strong>タイトル：</strong>${live.title}</p>
        <p><strong>チケット：</strong>${live.ticket}</p>
        <p><strong>開場/開演：</strong>${live.time}</p>
        <p><strong>備考：</strong>${live.note}</p>
        <img src="${live.flyer}" alt="フライヤー" class="flyer">
      `;
      container.appendChild(div);
    });
  });
