export function progressBar(percent, length = 20) {
  const filled = Math.round((percent / 100) * length)
  const empty = length - filled

  return '█'.repeat(filled) + '░'.repeat(empty)
}

export function weeklyBars(currentDay) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return days
    .map((day, index) => {
      if (index < currentDay - 1) {
        return `${day} ████████`
      }

      if (index === currentDay - 1) {
        return `${day} ███`
      }

      return `${day}`
    })
    .join('\n')
}