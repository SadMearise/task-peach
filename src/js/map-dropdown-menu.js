const officesDropdownMenu = document.getElementById("officesDropdownMenu");

const DROPDOWN_DATA = {
  "Москва": ["Москва"],
  "Центр": ["Воронеж", "Ярославль", "Белгород"],
  "Северо-Запад": ["Санкт-Петербург", "Калининград"],
  "Юг": ["Ростов-на-Дону", "Краснодар", "Волгоград"],
  "Волга": ["Казань", "Самара", "Уфа", "Оренбург", "Нижний Новгород"],
  "Урал": ["Екатеринбург", "Челябинск", "Пермь", "Сургут", "Тюмень", "Ижевск"],
  "Сибирь": ["Новосибирск", "Омск", "Томск", "Красноярск", "Иркутск"],
  "Дальний Восток": ["Хабаровск", "Владивосток"]
};

const content = document.createElement("div");
content.className = "dropdown-menu__content";

Object.entries(DROPDOWN_DATA).forEach(([group, cities]) => {
  const col = document.createElement("div");
  col.className = "dropdown-menu__col";

  const title = document.createElement("div");
  title.className = "dropdown-menu__title";
  title.textContent = group;
  
  const arrowIcon = document.createElement("span");
  arrowIcon.className = "dropdown-menu__arrow-icon";

  title.appendChild(arrowIcon);

  col.appendChild(title);

  if (cities.length > 1 || group !== cities[0]) {
    const list = document.createElement("ul");

    list.className = "dropdown-menu__list";

    cities.forEach((city) => {
      const item = document.createElement("li");
      item.className = "dropdown-menu__item";
      item.textContent = city;
      list.appendChild(item);
    });

    col.appendChild(list);
  }

  content.appendChild(col);
});

officesDropdownMenu.appendChild(content);

const officesDropdownButton = document.getElementById("officesDropdownButton");

officesDropdownButton.addEventListener("click", () => {
  officesDropdownButton.querySelector(".offices__dropdown-arrow").classList.toggle("offices__dropdown-arrow_active");
  officesDropdownMenu.classList.toggle("dropdown-menu_active");

  if (window.matchMedia("(min-width: 992px)").matches) {
    const menu = document.getElementById("officesMenu");
    const map = document.getElementById("map");

    menu.classList.toggle("menu_inactive");
    map.classList.toggle("map_inactive");
  }
});

officesDropdownMenu.addEventListener("click", function (e) {
  if (window.matchMedia("(min-width: 992px)").matches) return;

  const title = e.target.closest(".dropdown-menu__title");

  if (!title) return;

  title.classList.toggle("dropdown-menu__title_active");

  const arrow = title.querySelector(".dropdown-menu__arrow-icon");

  if (arrow) {
    arrow.classList.toggle("dropdown-menu__arrow-icon_active");
  }

  const col = title.closest(".dropdown-menu__col");

  if (!col) return;

  const list = col.querySelector(".dropdown-menu__list");

  if (list) {
    list.classList.toggle("dropdown-menu__list_active");
  }
});
