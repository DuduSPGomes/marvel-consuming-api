import { useRouter } from 'next/router'
import React from 'react'

export default function useLoading() {
  const router = useRouter()

  const [pageLoading, setPageLoading] = React.useState<boolean>(false)
  React.useEffect(() => {
    const handleStart = () => {
      setPageLoading(true)
    }
    const handleComplete = () => {
      setPageLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])

  return pageLoading
}
