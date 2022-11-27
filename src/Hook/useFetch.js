import { useEffect, useState } from 'react'

//custom hook useFetch để lấy dữ liệu
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const sendRequest = async () => {
    setLoading(true)
    try {
      const res = await fetch(url)
      const newRes = await res.json()
      setData(newRes)
      setLoading(false)
      setError(null)
    } catch (err) {
      setData(null)
      setError(err.message || 'Something went wrong!')
      setLoading(false)
    }
  }

  useEffect(() => {
    sendRequest(url)
  }, [url])

  return { data, error, loading }
}

export default useFetch
