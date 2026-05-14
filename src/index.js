import chalk from 'chalk'
import boxen from 'boxen'
import figlet from 'figlet'
import gradient from 'gradient-string'

import { getTimeData } from './utils/time.js'
import { progressBar, weeklyBars } from './utils/bars.js'
import { randomMessage } from './utils/messages.js'

const data = getTimeData()

const title = gradient.pastel.multiline(
  figlet.textSync('DEADLINE', {
    horizontalLayout: 'default',
  })
)

const bar = progressBar(data.weekPercent)

const output = `
${chalk.bold(`Week ${data.currentWeek} — ${data.weekday}`)}

${chalk.cyan(bar)} ${chalk.yellow(`${data.weekPercent}%`) }

${chalk.green(`${data.daysLeft} days ${data.hoursLeft} hours left.`)}
${chalk.gray('(time left in the week)')}

${chalk.magenta('━━━━━━━━━━━━━━━━━━━━━━━━━━')}

${chalk.bold('YEAR TIMER')}

${chalk.cyan(`${data.yearDaysLeft} days left in the year`) }
${chalk.cyan(`${data.monthsLeft} months remaining`) }

${chalk.magenta('━━━━━━━━━━━━━━━━━━━━━━━━━━')}

${chalk.bold('WEEK ANALYTICS')}

Week completion: ${chalk.yellow(`${data.weekPercent}%`) }
Remaining productive hours: ${chalk.green('19')}
Average screen time this week: ${chalk.red('5h 12m/day')}

${chalk.magenta('━━━━━━━━━━━━━━━━━━━━━━━━━━')}

${chalk.bold('WEEK VISUALIZATION')}

${weeklyBars(data.currentDay)}

${chalk.magenta('━━━━━━━━━━━━━━━━━━━━━━━━━━')}

${chalk.red(randomMessage())}

${chalk.white('168 hours were given.')}
${chalk.yellow(`${data.remainingHours} remain.`)}
`

console.clear()

console.log(title)

console.log(
  boxen(output, {
    padding: 1,
    borderStyle: 'round',
    borderColor: 'magenta',
  })
)