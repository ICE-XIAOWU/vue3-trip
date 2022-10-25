import dayjs from 'dayjs'

/**
 * 
 * @param { date } date 日期
 * @returns x月x日
 */
export function formatMonthDay(date, format = 'MM月DD日') {
  return dayjs(date).format(format)
}

/**
 * 
 * @param { date } startDate 开始日期
 * @param { date } endDate 结束日期
 * @returns 相差的天数
 */
export function getDiffDay(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'day')
}