document.addEventListener("DOMContentLoaded", function() {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach(accordion => {
    accordion.addEventListener("click", function() {
      // Перемикаємо клас 'active' для стилізації кнопки
      this.classList.toggle("active");

      // Отримуємо панель
      const panel = this.nextElementSibling;
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Оновлюємо атрибут доступності
      this.setAttribute('aria-expanded', !isExpanded);

      // Змінюємо max-height для анімації
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.padding = "0 1em"; // Приховуємо padding при закритті
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.padding = "0 1em"; // Відновлюємо padding
      }
    });
  });
});
