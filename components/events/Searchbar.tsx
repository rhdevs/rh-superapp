import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useDebounce } from '@/hooks/useDebounce'

function SearchBar() {
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword = useDebounce(keyword, 5000)
  const { data, error, isLoading, mutate } = useSWR('')

  useEffect(() => {
    if (debouncedKeyword) {
    } else {
    }
  }, [debouncedKeyword])

  return (
    <input
      onChange={(e) => {
        setKeyword(e.target.value)
      }}
      type="text"
    />
  )
}

export default SearchBar
