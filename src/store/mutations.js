import { setPlaceholder } from "../libs/utils";
export default {
  GetTitle(state, filed) {
    switch (filed) {
      case "day":
        state.headerTitle = "当天信息";
        break;
      case "month":
        state.headerTitle = "近期假期";
        break;
      case "year":
        state.headerTitle = "当年假期";
        break;
      default:
        state.headerTitle = "当天信息";
        break;
    }
  },
  GetPlaceholder(state, filed) {
    switch (filed) {
      case "day":
        state.placeholder = setPlaceholder("day");
        break;
      case "month":
        state.placeholder = setPlaceholder("month");
        break;
      case "year":
        state.placeholder = setPlaceholder("year");
        break;
      default:
        state.placeholder = setPlaceholder("day");
        break;
    }
  },
  GetMaxLength(state, filed) {
    switch (filed) {
      case "day":
        state.maxlength = 8;
        break;
      case "month":
        state.maxlength = 6;
        break;
      case "year":
        state.maxlength = 4;
        break;
      default:
        state.maxlength = 8;
        break;
    }
  },
  setErrorCode(state,code){
    state.errorCode = code
  },
  setDateList(state, list) {
    const { dataList, field } = list;
    switch (field) {
      case "day":
        state.dayDate = dataList;
        break;
      case "month":
        state.monthDate = dataList.holiday_array;
        break;
      case "year":
        state.yearDate = dataList.holiday_list;
        break;
      default:
        break;
    }
  },
};
