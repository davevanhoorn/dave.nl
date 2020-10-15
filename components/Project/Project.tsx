// EXTERNAL
import classNames from 'classnames'
import React, { FunctionComponent } from 'react'

// COMPONENT
import { TProjectProps } from './projectTypes'

const Project: FunctionComponent<TProjectProps> = ({ primaryBackgroundColorRgb, secondaryBackgroundColorRgb, children }) => {
  console.log('primaryBackgroundColorRgb', primaryBackgroundColorRgb)
  console.log('secondaryBackgroundColorRgb', secondaryBackgroundColorRgb)
  return (
    <div
      style={{
        backgroundColor: `rgb(126, 220, 226)`,
        background: `linear-gradient(142deg,
          rgba(${primaryBackgroundColorRgb ? `${primaryBackgroundColorRgb}` : '126, 220, 226'}, 1) 0%,
          rgba(${secondaryBackgroundColorRgb ? `${secondaryBackgroundColorRgb}` : '126, 220, 226'}, 1) 100%
      )`
      }}
      className="w-full relative overflow-hidden"
    >
      <svg className="w-full absolute top-0 h-8 md:h-24" xmlns="http://www.w3.org/2000/svg" width="2022.245" height="123.476" viewBox="0 0 2022.245 123.476" preserveAspectRatio="none">
        <path fill="#fff" d="M-37.187,1371.6l343.031-13.429L492.922,1371.6l530.727-32.543h330.391l192.945,14.22,140.984-14.22,191.813,10.737,105.269-10.737,0-90.932H-37.19Z" transform="translate(37.19 -1248.125)" />
      </svg>
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center">
        {children}
      </div>
      <svg className="w-full absolute bottom-0 z-20 h-8 md:h-16" xmlns="http://www.w3.org/2000/svg" width="2003.093" height="74.385" viewBox="0 0 2003.093 74.385" preserveAspectRatio="none">
        <path fill="#fff" d="M1922.656,2247.419l-170.206,9.3-234.671-9.3-316.014,20.149-372.113-12.149-244.91,16.149-161.458,4-148.651,4.69L89.406,2260.67l-169.839,29.588V2321.8l2003.093,0Z" transform="translate(80.433 -2247.419)" />
      </svg>
    </div>
  )
}

export default Project
