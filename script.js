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
          date: "2025年4月6日（日）",
          venue: "焼き鳥元ちゃん（富士宮）",
          title: "BROS FEST.への導き",
          acts: "土橋悠宇 / dsk.og ",
          ticket: "¥2,000（+1D）",
          time: "16:00 開場 / 17:00 開演",
          note: "",
          flyer: "images/flyer-sample1.jpg"
        },
        
        // ここに新しいライブを追加

        {
          date: "2025年4月19日（土）",
          venue: "RINCOLO（御殿場）",
          title: "単独公演2025",
          acts: "土橋悠宇",
          ticket: "¥2,000（+1D）",
          time: "18:00 開場 / 19:00 開演",
          note: "",
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
  