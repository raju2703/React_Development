import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}


// const ReactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     Children:'Click me to visit google'
// }
const anotherUser = "chai or React"
const anotherElement = (
    <a href='https://google.com' target='_blank'>visit gogle</a>
)
const ReactElement = React.createElement(
    'a',
    {
        href:'https://google.com',
        target:'_blank'},
        'click me to visit google',
        anotherUser
    
)

createRoot(document.getElementById('root')).render(
 
   ReactElement
 
)
