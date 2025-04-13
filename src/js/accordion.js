const accordion = document.getElementById("businessAccordion");

accordion.addEventListener("click", function (e) {
  if (!window.matchMedia("(min-width: 768px)").matches) {
    const accordionItem = e.target.closest(".accordion__item");
    
    if (!accordionItem) return;
    
    accordionItem.classList.toggle("accordion__item_active");
    
    const header = accordionItem.querySelector(".accordion__header");

    if (header) {
      header.classList.toggle("accordion__header_active");
    }

    const arrowIcon = accordionItem.querySelector(".accordion__arrow-icon");

    if (arrowIcon) {
      arrowIcon.classList.toggle("accordion__arrow-icon_active");
    }
  }
});
