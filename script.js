window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const official = document.getElementById("official-text");
      if (official) {
        official.classList.add("visible");
      }
    }, 2000); // 2秒後にフェードイン
  });
  