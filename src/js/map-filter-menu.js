const filterMenu = document.getElementById("officesFilterMenu");
const filterIndicator = document.getElementById("officesFilterIndicator");
const cityElements = document.querySelectorAll("#mapCities .map__city");
const initialActiveItem = filterMenu.querySelector(".menu__item_active");

const updateIndicatorPosition = (element) => {
  const { offsetLeft, offsetWidth } = element;

  filterIndicator.style.left = `${offsetLeft}px`;
  filterIndicator.style.width = `${offsetWidth}px`;
};

const setActiveMenuItem = (newActiveItem) => {
  const currentActiveItem = filterMenu.querySelector(".menu__item_active");

  if (currentActiveItem) currentActiveItem.classList.remove("menu__item_active");

  newActiveItem.classList.add("menu__item_active");
};

const filterCities = (group) => {
  cityElements.forEach((city) => {
    const cityGroup = city.getAttribute("data-group");
    const isVisible = group === "all" || cityGroup === group;

    city.style.display = isVisible ? "" : "none";
  });
};

const handleFilterMenuClick = (event) => {
  const clickedItem = event.target.closest(".menu__item[data-group]");

  if (!clickedItem) return;

  setActiveMenuItem(clickedItem);
  updateIndicatorPosition(clickedItem);

  const selectedGroup = clickedItem.getAttribute("data-group");

  filterCities(selectedGroup);
};

const handleWindowResize = () => {
  const activeItem = filterMenu.querySelector(".menu__item_active");

  if (activeItem) updateIndicatorPosition(activeItem);
};

if (initialActiveItem) {
  updateIndicatorPosition(initialActiveItem);
}

filterMenu.addEventListener("click", handleFilterMenuClick);
window.addEventListener("resize", handleWindowResize);
