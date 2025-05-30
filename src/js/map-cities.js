const CITIES = [
  { group: "Северо-Запад", name: "Калининград", position: "map__city_position_kaliningrad" },
  {
    group: "Северо-Запад",
    name: "Санкт-Петербург",
    position: "map__city_position_saint-petersburg",
    size: "large",
  },
  { group: "Центр", name: "Ярославль", position: "map__city_position_yaroslavl" },
  { group: "Москва", name: "Москва", position: "map__city_position_moscow", size: "medium" },
  { group: "Центр", name: "Воронеж", position: "map__city_position_voronezh" },
  { group: "Волга", name: "Н. Новгород", position: "map__city_position_nizhny-novgorod" },
  { group: "Центр", name: "Белгород", position: "map__city_position_belgorod" },
  { group: "Волга", name: "Казань", position: "map__city_position_kazan" },
  { group: "Урал", name: "Ижевск", position: "map__city_position_izhevsk" },
  { group: "Урал", name: "Пермь", position: "map__city_position_perm", size: "medium" },
  { group: "Урал", name: "Сургут", position: "map__city_position_surgut" },
  {
    group: "Юг",
    name: "Ростов-на-Дону",
    position: "map__city_position_rostov-on-don",
    size: "medium",
  },
  { group: "Волга", name: "Самара", position: "map__city_position_samara" },
  { group: "Урал", name: "Екатеринбург", position: "map__city_position_yekaterinburg" },
  { group: "Волга", name: "Уфа", position: "map__city_position_ufa" },
  { group: "Урал", name: "Челябинск", position: "map__city_position_chelyabinsk", size: "medium" },
  { group: "Волга", name: "Оренбург", position: "map__city_position_orenburg" },
  { group: "Урал", name: "Тюмень", position: "map__city_position_tyumen", size: "medium" },
  { group: "Юг", name: "Волгоград", position: "map__city_position_volgograd" },
  { group: "Юг", name: "Краснодар", position: "map__city_position_krasnodar", size: "medium" },
  {
    group: "Сибирь",
    name: "Томск",
    position: "map__city_position_tomsk",
    size: "medium",
    reverse: true,
  },
  { group: "Сибирь", name: "Новосибирск", position: "map__city_position_novosibirsk" },
  { group: "Сибирь", name: "Красноярск", position: "map__city_position_krasnoyarsk" },
  { group: "Сибирь", name: "Омск", position: "map__city_position_omsk", size: "medium" },
  {
    group: "Дальний восток",
    name: "Хабаровск",
    position: "map__city_position_habarovsk",
    size: "large",
    reverse: true,
  },
  { group: "Сибирь", name: "Иркутск", position: "map__city_position_irkutsk", size: "medium" },
  {
    group: "Дальний восток",
    name: "Владивосток",
    position: "map__city_position_vladivostok",
    size: "large",
  },
];

const mapCitiesElement = document.getElementById("mapCities");

const createMapCityElement = ({ name, group, position, size, reverse }) => {
  const cityElement = document.createElement("div");
  cityElement.className = `map__city ${position} city`;
  cityElement.setAttribute("data-group", group);

  const titleSizeClass = size ? ` city__title_size_${size}` : "";
  const titleHTML = `<div class="city__title${titleSizeClass}">${name}</div>`;
  const dotHTML = '<span class="city__dot"></span>';

  cityElement.innerHTML = reverse ? `${titleHTML}${dotHTML}` : `${dotHTML}${titleHTML}`;

  return cityElement;
};

const renderMapCities = (cities) => {
  cities.forEach((city) => {
    const cityElement = createMapCityElement(city);
    mapCitiesElement.appendChild(cityElement);
  });
};

renderMapCities(CITIES);
