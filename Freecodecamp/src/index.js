import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'

function App() {
    return(
        <div className="App">
            <h1>Protected React Router</h1>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)