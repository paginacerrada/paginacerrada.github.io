// Smooth scroll para enlaces internos (anclas) y actualizar la URL
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    var targetId = this.getAttribute("href");
    if (targetId === "#") return;
    e.preventDefault();
    var target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", targetId);
    }
  });
});
