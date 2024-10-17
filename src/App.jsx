import { useEffect, createContext } from 'react'
import { useState } from 'react'
import Tours from './Tours'
import Loading from './Loading'

const url = 'https://www.course-api.com/react-tours-project'

// export const Context = createContext()

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [source, setSource] = useState([])

  const fetchData = async () => {
    try {
      const resp = await fetch(url)
      if (!resp.ok) {
        setIsError(true)
        setIsLoading(false)
      }
      const data = await resp.json()
      setSource(data)
    } catch (error) {
      console.log('encounter error fetch')
      setIsError(true)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (isError) {
    return <h1>Error Url</h1>
  }

  const deleteData = (id) =>
    setSource((prev) => {
      return prev.filter((item) => item.id !== id)
    })
  if (source.length == 0) {
    return (
      <main>
        <h1>No Tour</h1>
        <button onClick={() => fetchData()} className="">
          refresh
        </button>
      </main>
    )
  }
  return (
    <main>
      {/* <Context.Provider value={[source, setSource]}> */}
      <Tours source={source} deleteData={deleteData} />
      {/* </Context.Provider> */}
    </main>
  )
}
export default App
