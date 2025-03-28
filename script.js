// --- トップページ用 詩アニメーション ---
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('.fade-text');
    const nameElement = document.querySelector('.site-title');
    const officialElement = document.querySelector('.official-text');
  
    if (textElement && nameElement && officialElement) {
      const texts = [
        "対岸に辿り着く頃には",
        "すべてが懐かしく感じるだろう。",
        "澄み切った川底は",
        "影さえも良く見えた。",
        "深いほど",
        "深いほど。",
        ""
      ];
  
      let index = 0;
  
      function showNextText() {
        textElement.style.opacity = 0;
  
        setTimeout(() => {
          textElement.textContent = texts[index];
          textElement.style.opacity = 1;
  
          if (index === texts.length - 1) {
            setTimeout(() => {
              nameElement.classList.add('visible');
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
    }
  
    // --- Liveページ用 ライブ情報表示（GitHub Pages対応） ---
    const container = document.getElementById('live-container');
  
    if (container) {
      const lives = [
        {
          date: "2025年6月3日（火）",
          venue: "渋谷 WWW",
          title: "夜明けの詩と波の音",
          acts: "土橋悠宇 / UMI / and more",
          ticket: "前売 ¥3,000 / 当日 ¥3,500（+1D）",
          time: "18:30 開場 / 19:00 開演",
          note: "再入場不可 / 整理番号順入場",
          flyer: "images/flyer-sample1.jpg"
        },
        
        // ここに新しいライブを追加

        {
          date: "2025年7月14日（日）",
          venue: "吉祥寺 STAR PINE'S CAFE",
          title: "響きの灯、透明な夜",
          acts: "土橋悠宇 / 灯 / 岡田千尋",
          ticket: "前売 ¥2,800 / 当日 ¥3,300（+1D）",
          time: "17:00 開場 / 17:30 開演",
          note: "物販は終演後のみ",
          flyer: "images/flyer-sample2.jpg"
        }
      ];
  
      lives.forEach(live => {
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
    }
  });
  