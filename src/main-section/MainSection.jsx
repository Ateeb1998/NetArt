import React from 'react'
import './MainSection.css'
import {ImageLeft} from "./left-main-section/ImageLeft"
import {Text} from './right-main-section/Text'

export const MainSection = () => {
  return (
    <>
        <section className="main">
          <ImageLeft />
          <Text />
        </section>
    </>
  )
}
