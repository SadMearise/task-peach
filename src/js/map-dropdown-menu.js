const officesDropdownMenu = document.getElementById("officesDropdownMenu");
const officesDropdownButton = document.getElementById("officesDropdownButton");

const DROPDOWN_DATA = {
  Москва: ["Москва"],
  Центр: ["Воронеж", "Ярославль", "Белгород"],
  "Северо-Запад": ["Санкт-Петербург", "Калининград"],
  Юг: ["Ростов-на-Дону", "Краснодар", "Волгоград"],
  Волга: ["Казань", "Самара", "Уфа", "Оренбург", "Нижний Новгород"],
  Урал: ["Екатеринбург", "Челябинск", "Пермь", "Сургут", "Тюмень", "Ижевск"],
  Сибирь: ["Новосибирск", "Омск", "Томск", "Красноярск", "Иркутск"],
  "Дальний Восток": ["Хабаровск", "Владивосток"],
};

const createCityList = (cities) => {
  const listElement = document.createElement("ul");
  listElement.className = "dropdown-menu__list";

  cities.forEach((city) => {
    const itemElement = document.createElement("li");
    itemElement.className = "dropdown-menu__item";
    itemElement.textContent = city;
    listElement.appendChild(itemElement);
  });

  return listElement;
};

const createGroupColumn = (groupName, cities) => {
  const colElement = document.createElement("div");
  colElement.className = "dropdown-menu__col";

  const titleElement = document.createElement("div");
  titleElement.className = "dropdown-menu__title";
  titleElement.textContent = groupName;

  const arrowIconElement = document.createElement("span");
  arrowIconElement.className = "dropdown-menu__arrow-icon";
  titleElement.appendChild(arrowIconElement);

  colElement.appendChild(titleElement);

  const isSingleCity = cities.length === 1 && cities[0] === groupName;

  if (!isSingleCity) {
    const listElement = createCityList(cities);
    colElement.appendChild(listElement);
  }

  return colElement;
};

const renderDropdownContent = () => {
  const contentElement = document.createElement("div");
  contentElement.className = "dropdown-menu__content";

  Object.entries(DROPDOWN_DATA).forEach(([group, cities]) => {
    const colElement = createGroupColumn(group, cities);
    contentElement.appendChild(colElement);
  });

  officesDropdownMenu.appendChild(contentElement);
};

const toggleDropdownMenu = () => {
  const dropdownArrowElement = officesDropdownButton.querySelector(".offices__dropdown-arrow");

  dropdownArrowElement.classList.toggle("offices__dropdown-arrow_active");
  officesDropdownMenu.classList.toggle("dropdown-menu_active");

  if (window.matchMedia("(min-width: 992px)").matches) {
    document.getElementById("officesMenu")?.classList.toggle("menu_inactive");
    document.getElementById("map")?.classList.toggle("map_inactive");
  }
};

const handleMobileDropdownClick = (event) => {
  if (window.matchMedia("(min-width: 992px)").matches) return;

  const titleElement = event.target.closest(".dropdown-menu__title");

  if (!titleElement) return;

  titleElement.classList.toggle("dropdown-menu__title_active");

  const arrowIconElement = titleElement.querySelector(".dropdown-menu__arrow-icon");
  arrowIconElement?.classList.toggle("dropdown-menu__arrow-icon_active");

  const colElement = titleElement.closest(".dropdown-menu__col");
  const listElement = colElement?.querySelector(".dropdown-menu__list");
  listElement?.classList.toggle("dropdown-menu__list_active");
};

renderDropdownContent();

officesDropdownButton.addEventListener("click", toggleDropdownMenu);
officesDropdownMenu.addEventListener("click", handleMobileDropdownClick);
