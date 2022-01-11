import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RedirectPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])
  return <h2>redirecting you to home page...</h2>
}

export default RedirectPage
