import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'

function SearchBar() {
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword = useDebounce(keyword, 5000)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (debouncedKeyword) {
      setIsSearching(true)
    } else {
      setIsSearching(false)
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
