export function formatDate(time, type) {
  const date = new Date(time)
  switch(type) {
    case 'm-d':
      return `${date.getMonth()+1}-${date.getDate()}`
    case 'm-d-h-m':
      return `${date.getMonth()+1}-${date.getDate()}-${date.getHours()}:${date.getMinutes()}`
    default:
      return ''
  }
}