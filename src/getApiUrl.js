const baseUrl = "https://api.rawg.io/api/"; //games?dates=2019-11-01,2020-11-01
const extraParamsForPopular = "&ordaring=-rating&page_size=10";
const extraParamsForUpcoming = "&ordaring=-added&page_size=10";
const extraParamsForNew = "&ordaring=-released&page_size=10";
const date = new Date();

const getCurrentDay = () => {
  const currentDay =
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return currentDay;
};

const getCurrentMonth = () => {
  const currentMonth =
    date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  return currentMonth;
};

const getCurrentYear = () => {
  return date.getFullYear();
};

const currentDate = `${getCurrentYear()}-${getCurrentMonth()}-${getCurrentDay()}`;
const nexYearDate = `${
  getCurrentYear() + 1
}-${getCurrentMonth()}-${getCurrentDay()}`;
const prevYearDate = `${
  getCurrentYear() - 1
}-${getCurrentMonth()}-${getCurrentDay()}`;

export const popularGames = () => {
  console.log(
    `popularGames :${baseUrl}games?dates=${currentDate}${extraParamsForPopular}`
  );
  //return `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added`;
  return `${baseUrl}games?dates=${prevYearDate}${extraParamsForPopular}`;
};
export const upcomingGames = () => {
  console.log(
    `upcomingGames: ${baseUrl}games?dates=${prevYearDate},${currentDate}${extraParamsForUpcoming}`
  );
  //return `https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added`;
  //        https://api.rawg.io/api/games?dates=2020-01-07,2022-01-07&ordaring=-added&page_size=10
  //        https://api.rawg.io/api/games?dates=2020-01-07,2022-01-07&ordaring=-added&page_size=10
  return `${baseUrl}games?dates=${prevYearDate},${currentDate}${extraParamsForUpcoming}`;
};
export const newGames = () => {
  console.log(
    `newGames: ${baseUrl}games?dates=${prevYearDate},${nexYearDate}${extraParamsForNew}`
  );
  ///return `https://api.rawg.io/api/games?dates=2001-01-01,2001-12-31&ordering=-rating`;
  return `${baseUrl}games?dates=${currentDate},${nexYearDate}${extraParamsForNew}`;
};

/// game details

export const getGameDetails = (id) => {
  return `${baseUrl}games/${id}`;
};

/// gaem screenshots

export const getGameScreenShots = (id) => {
  return `${baseUrl}games/${id}/screenshots`;
};

export const getGameFromSearch = (name) => {
  return `${baseUrl}games?search=${name}&page_size=9`;
};
