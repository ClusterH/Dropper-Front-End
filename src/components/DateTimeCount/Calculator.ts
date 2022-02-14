export const calculateTimeLeft = (targetDate: string) => {
  const date = new Date(targetDate)
  const difference = date.getTime() - new Date().getTime()

  if (difference > 0) {
    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
    return timeLeft
  }

  return undefined
}
