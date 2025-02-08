import { useEffect, useState } from 'react'
import './App.css'
import { DraftEditor } from './components/DraftEditor'
import { DraftView } from './components/DraftView'
import { ParagraphProps } from './types/paragraph'
import { NavBar } from './components/NavBar'

export interface FinalDraftProps {
  finalDraft: ParagraphProps[]
}

function App() {
  const [paragraphs, setParagraphs] = useState<ParagraphProps[]>([])
  const [finalDrafts, setFinalDrafts] = useState<FinalDraftProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    console.log('finalDrafts', finalDrafts)
    console.log('finalDrafts', finalDrafts.length)
    console.log('isLoading', isLoading)
  }, [finalDrafts, isLoading])

  const addParagraph = (draft: ParagraphProps) => {
    setParagraphs([...paragraphs, draft])
  }

  const saveFinalDraft = () => {
    setIsLoading(true)

    setTimeout(() => {
      setFinalDrafts([...finalDrafts, { finalDraft: paragraphs }])
      setParagraphs([])
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className='container'>
      <h1>Editor de redação</h1>
      <NavBar
        finalDrafts={finalDrafts}
        handleSave={saveFinalDraft}
        isLoading={isLoading} />

      <div className='content'>
        <DraftEditor addParagraph={addParagraph} />
        <DraftView paragraphs={paragraphs} />
      </div>
    </div>
  )
}

export default App
