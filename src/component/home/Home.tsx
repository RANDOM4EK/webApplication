import React from 'react'
import Header from '../header/Header'
import EditMood from '../editMood/EditMood'
import MoodDescription from '../moodDescription/MoodDescription'
import AddNotes from '../addNotes/AddNotes'

export default function Home() {
  return (
    <>
    <Header/>
    <EditMood/>
    <MoodDescription/>
    <AddNotes/>
    </>
  )
}
