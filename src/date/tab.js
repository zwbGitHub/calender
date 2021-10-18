import { getNewDate } from "../libs/utils";

export default [
    {
        path:'/day',
        title:'当天',
        date:getNewDate('day')
    },
    {
        path:'/month',
        title:'近期',
        date:getNewDate('month')
    },
    {
        path:'/year',
        title:'当年',
        date:getNewDate('year')
    },
]