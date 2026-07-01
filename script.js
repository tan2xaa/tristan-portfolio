  const revealEls = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(el => observer.observe(el));

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".file-panel");

// Show first panel
panels[0].classList.add("active");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    // Remove active classes
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));

    // Activate selected tab
    tab.classList.add("active");
    document.querySelector("." + target).classList.add("active");
  });
});