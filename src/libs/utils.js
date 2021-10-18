import { toNumber } from '@vue/shared'
import getAllRequset from '../services/index'
import store from '../store/index'
function _fillDay(value) {
  return value < 10 ? '0' + value : value
}
function getNewDate(value) {
  const date = new Date()
  switch (value) {
    case 'day':
      return _fillDay(date.getDate().toString())
    case 'month':
      return _fillDay((date.getMonth() + 1).toString())
    case 'year':
      return date
        .getFullYear()
        .toString()
        .substr(2)
  }
}
function setPlaceholder(field) {
  const date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  switch (field) {
    case 'day':
      return `格式：${year}${month}${day}(${year}年${month}月${day}日)`
    case 'month':
      return `格式：${year}${month}(${year}年${month}月)`
    case 'year':
      return `格式：${year}(${year}年)`
    default:
      return `格式：${year}${month}${day}(${year}年${month}月${day}日)`
  }
}
function changeYearMonthDay(date) {
  if (date.length > 7) {
    const arr = date.split('-')
    date = arr[0] + '年' + arr[1] + '月' + arr[2] + '日'
  } else if (date.length > 4) {
    const arr = date.split('-')
    date = arr[0] + '年' + arr[1] + '月'
  } else {
    date = date + '年'
  }
  return date
}
function changeData(data, field) {
  const result = data.data.result.data
  switch (field) {
    case 'day':
      result.date = changeYearMonthDay(result.date)
      result['year-month'] = changeYearMonthDay(result['year-month'])
      break
    case 'month':
      result.year = changeYearMonthDay(result.year)
      result['year-month'] = changeYearMonthDay(result['year-month'])
      result['holiday_array'].map(item => {
        item.festival = changeYearMonthDay(item.festival)
      })
      break
    case 'year':
      result.year = changeYearMonthDay(result.year)
      result['holiday_list'].map(item => {
        item.startday = changeYearMonthDay(item.startday)
      })
      break
    default:
      result.date = changeYearMonthDay(result.date)
      result['year-month'] = changeYearMonthDay(result['year-month'])
      break
  }
  return result
}
function getNowDate(field) {
  const date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  switch (field) {
    case 'day':
      return year + '-' + month + '-' + day
    case 'month':
      return year + '-' + month
    case 'year':
      return year
    default:
      break
  }
}
function searchDate(value, field) {
  if (isNaN(value)) {
    alert('请输入正确数字')
    return
  }
  switch (field) {
    case 'day':
      if (value.length === 8) {
        let year = value.substr(0, 4)
        let month = Number.parseInt(value.substr(4, 2))
        let day = Number.parseInt(value.substr(6, 2))
        let date = year + '-' + month + '-' + day
        console.log(date)
        getAllRequset('day', date, store)
      } else {
        alert('当天日期输入格式错误，请重新输入')
      }
      break
    case 'month':
      if (value.length === 6) {
        let year = value.substr(0, 4)
        let month = Number.parseInt(value.substr(4, 2))
        let date = year + '-' + month
        getAllRequset('month', date, store)
      } else {
        alert('近期日期输入格式错误，请重新输入')
      }
      break
    case 'year':
      if (value.length === 4) {
        getAllRequset('year', value, store)
      } else {
        alert('当年日期输入格式错误，请重新输入')
      }
      break
    default:
      break
  }
}
export { getNewDate, setPlaceholder, changeData, searchDate, getNowDate }
