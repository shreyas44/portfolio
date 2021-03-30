const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const getFormattedTime = (timestamp: number) => {
  const hour = 60 * 60 * 1000
  const day = 24 * hour
  const week = 7 * day
  const currentTime = Date.now()

  const timeDifference = currentTime - timestamp

  const isLessThanHour = timeDifference <= hour
  const isLessThanDay = timeDifference <= day
  const isLessThanWeek = timeDifference <= week

  if (isLessThanHour) {
    const minutes = Math.floor(timeDifference / (60 * 1000))
    if (minutes === 0) return `Less than a minute ago`
    if (minutes === 1) return `1 minute ago`
    return `${minutes} minutes ago`
  }

  if (isLessThanDay) {
    const hours = Math.floor(timeDifference / hour)
    if (hours === 1) return `${hours} hour ago`
    return `${hours} hours ago`
  }

  if (isLessThanWeek) {
    const days = Math.floor(timeDifference / day)
    if (days === 1) return `${days} day ago`
    return `${days} days ago`
  }

  const formattedTime = new Date(timestamp)
  return `${formattedTime.getDate()} ${months[formattedTime.getMonth()]}`
}
