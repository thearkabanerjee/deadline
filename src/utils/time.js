import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear.js'

dayjs.extend(weekOfYear)

export function getTimeData() {
  const now = dayjs()

  const currentWeek = now.week()
  const weekday = now.format('dddd')

  const startOfWeek = now.startOf('week')
  const endOfWeek = now.endOf('week')

  const totalWeekSeconds = endOfWeek.diff(startOfWeek, 'second')
  const elapsedWeekSeconds = now.diff(startOfWeek, 'second')

  const weekPercent = Number(
    ((elapsedWeekSeconds / totalWeekSeconds) * 100).toFixed(1)
  )

  const daysLeft = endOfWeek.diff(now, 'day')
  const hoursLeft = endOfWeek.diff(now.add(daysLeft, 'day'), 'hour')

  const endOfYear = now.endOf('year')

  const yearDaysLeft = endOfYear.diff(now, 'day')
  const monthsLeft = 12 - now.month() - 1

  return {
    currentWeek,
    weekday,
    weekPercent,
    daysLeft,
    hoursLeft,
    yearDaysLeft,
    monthsLeft,
    remainingHours: endOfWeek.diff(now, 'hour'),
    currentDay: now.day() === 0 ? 7 : now.day(),
  }
}