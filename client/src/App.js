import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import UrlList from './components/UrlList'
import { fetchLinks } from './api'

const App = () => {
  const [input, setInput] = useState('')
  const [links, setLinks] = useState([])

  useEffect(() => {
    fetchLinks()
      .then((response) => {
        setLinks(response.data)
      })
  }, [input])

  return (
    <div className="container">
      <Form input={input} setInput={setInput} />
      <UrlList links={links}/>
    </div>
  )
}

export default App