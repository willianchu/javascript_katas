function timeConversion(s) {
  let time = s.split(':')
  let hour = parseInt(time[0])
  let minutes = time[1]
  let ampm = time[2].slice(2)
  if (ampm === 'PM' && hour !== 12) {
    hour += 12
  } else if (ampm === 'AM' && hour === 12) {
    hour = 0
  }
  return `${hour}:${minutes.slice(0, 2)}`
}
