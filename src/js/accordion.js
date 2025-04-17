const accordion = document.getElementById("businessAccordion");

const toggleAccordionItem = (item) => {
  item.classList.toggle("accordion__item_active");

  const headerElement = item.querySelector(".accordion__header");
  headerElement?.classList.toggle("accordion__header_active");

  const arrowIconElement = item.querySelector(".accordion__arrow-icon");
  arrowIconElement?.classList.toggle("accordion__arrow-icon_active");
};

const handleAccordionClick = (event) => {
  const isMobile = !window.matchMedia("(min-width: 768px)").matches;
  if (!isMobile) return;

  const clickedItem = event.target.closest(".accordion__item");
  if (!clickedItem) return;

  toggleAccordionItem(clickedItem);
};

accordion.addEventListener("click", handleAccordionClick);
