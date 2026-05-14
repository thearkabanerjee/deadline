const messages = [
  'This week will never exist again.',
  'Time passes whether used or not.',
  'The week is almost written.',
  'You still control this week.',
  '168 hours were given.',
  'The clock is indifferent.',
  'Move before the week disappears.',
]

export function randomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}