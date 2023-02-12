import { useEffect, useState } from 'react'

/**
 * The useDebounce hook is used to set a delay instead of sending API request
 * to the backend at every keystroke.
 *
 * @param value
 * @param delay
 */
function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export { useDebounce }
