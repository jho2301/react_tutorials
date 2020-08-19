import React, {useEffect} from 'react'

export default function HistorySample({history}) {
  const handleGoBack = () => {
    history.goBack();
  }
  const handleGoHome = () => {
    history.push('/');
  }

  useEffect(() => {
    let unblock = history.block('갈겁니까?');
    return () => {
      if (unblock) unblock();
    }
  }, [history])

  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  )
}
