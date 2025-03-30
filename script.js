document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector('.fade-text');
  const nameElement = document.querySelector('.site-title');
  const officialElement = document.querySelector('.official-text');


  // 詩アニメーション
  if (textElement && nameElement && officialElement) {
    const texts = [
      "対岸に辿り着く頃には",
      "すべてが懐かしく感じるだろう。",
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
            nameElement.classList.add('fade-in-text', 'visible');
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

  // Liveページの詳細表示
  const container = document.getElementById('live-container');
  if (container) {
    lives.forEach(live => {
      const div = document.createElement('div');
      div.className = 'live-block';
      div.innerHTML = `
        <div class="live-text">
          <p class="live-date">${live.date}</p>
          <p class="live-location">${live.venue}</p>
          <p class="live-title">${live.title}</p>
          <p class="live-meta">出演：${live.acts}</p>
          <p class="live-meta">開場 ${live.time}</p>
          <p class="live-meta">チケット：${live.ticket}</p>
          <p class="live-note">${live.note || ''}</p>
        </div>
        <img src="${live.flyer}" alt="ライブフライヤー" class="live-flyer" />
      `;
      container.appendChild(div);
    });
  }

  // トップページのライブプレビュー（次回1件）
  const preview = document.getElementById('live-preview');
  if (preview && lives.length > 0) {
    const next = lives[0];
    preview.innerHTML = `
      <div class="live-preview">
        <h3>Next Live</h3>
        <p>${next.date} @ ${next.venue}</p>
        <p><strong>${next.title}</strong></p>
        <p>出演：${next.acts}</p>
        <p><a href="live.html">→ 詳細を見る</a></p>
      </div>
    `;
  }

  // 年表スクロールアニメーション
  const yearBlocks = document.querySelectorAll('.year-block');
  if (yearBlocks.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });

    yearBlocks.forEach(el => observer.observe(el));
  }
});


// Home「この星で過ごす束の間、それでも僕たちは出逢えた。u luen sain a mi yeal luen nyns tea sain o o」に適用


document.addEventListener("DOMContentLoaded", () => {
  const lyricLines = document.querySelectorAll('.lyric p');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        lyricLines.forEach((line, index) => {
          setTimeout(() => {
            line.classList.add('visible');
          }, index * 400); // ← 0.4秒ずつずらす
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  lyricLines.forEach(line => observer.observe(line));
});

