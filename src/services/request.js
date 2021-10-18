import { postHttp, getHttp } from "../libs/http";

 function getDayDate(date) {
  return  postHttp({
    url: "/api/calendar/day",
    date: {
    date,
    },
  });
}
 function getMonthDate(month) {
  return postHttp({
    url: "/api/calendar/month",
    date: {
     'year-month':month,
    },
  });
}
function getYearDate(year) {
  return postHttp({
    url: "/api/calendar/year",
    date: {
        year,
    },
  });
}
export { getDayDate, getYearDate, getMonthDate };
