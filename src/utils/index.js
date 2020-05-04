export function formatDate(time, type) {
  const date = new Date(time)
  switch(type) {
    case 'm-d':
      return `${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    case 'm-d-h-m':
      return `${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}-${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
    default:
      return ''
  }
}