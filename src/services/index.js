import { getDayDate, getYearDate, getMonthDate } from "./request";
import { changeData } from "../libs/utils";
// import storex from '../store'
export default async (field, data, store) => {
  try {
    let date = null;
  switch (field) {
    case "day":
      date = getDayDate(data);
      break;
    case "month":
      date = getMonthDate(data);
      break;
    case "year":
      date = getYearDate(data);
      break;
    default:
      break;
  }
  date = await date;
  console.log(field, date);
  store.commit('setErrorCode',date.data.error_code);
  if(date.data.error_code === 0){
    /* // 两种方式引入的store 结果为相同的
  console.log(storex == store) // true */
  console.log(store.state);
  const dataList = changeData(date, field);
  store.commit('setDateList', { dataList, field });
  }
  } catch (error) {
    console.dir(error)
  }
};
