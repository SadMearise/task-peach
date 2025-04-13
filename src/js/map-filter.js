const filterMenu = document.getElementById("officesFilterMenu");
const filterIndicator = document.getElementById("officesFilterIndicator");
const cityElements = document.querySelectorAll("#mapCities .map__city");
const initialActiveItem = filterMenu.querySelector(".menu__item_active");

const updateIndicator = (element) => {
  const { offsetLeft, offsetWidth } = element;

  filterIndicator.style.left = `${offsetLeft}px`;
  filterIndicator.style.width = `${offsetWidth}px`;
};

const updateActiveItem = (newActive) => {
  const currentActive = filterMenu.querySelector(".menu__item_active");

  if (currentActive) currentActive.classList.remove("menu__item_active");

  newActive.classList.add("menu__item_active");
};

const filterCitiesByGroup = (group) => {
  cityElements.forEach((city) => {
    const cityGroup = city.getAttribute("data-group");
    const isVisible = group === "all" || cityGroup === group;

    city.style.display = isVisible ? "" : "none";
  });
};

filterMenu.addEventListener("click", (event) => {
  const item = event.target.closest(".menu__item[data-group]");

  if (!item) return;

  updateActiveItem(item);
  updateIndicator(item);

  const selectedGroup = item.getAttribute("data-group");

  filterCitiesByGroup(selectedGroup);
});

window.addEventListener("resize", () => {
  const activeItem = filterMenu.querySelector(".menu__item_active");
  
  if (activeItem) updateIndicator(activeItem);
});

if (initialActiveItem) updateIndicator(initialActiveItem);
