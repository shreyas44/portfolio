import { useEffect, useRef } from "react"

export default function useInterval(
  callback: () => unknown,
  time: number | null
): void {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => {
      savedCallback.current()
    }

    if (time !== null) {
      const interval = setInterval(tick, time)
      return () => clearInterval(interval)
    }
  }, [time])
}
