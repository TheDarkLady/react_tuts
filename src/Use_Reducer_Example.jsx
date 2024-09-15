import React from 'react'
import { useReducer } from 'react'

export default function Use_Reducer_Example() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>Use Reducer Hook Example</h1>
      <button>Hide Text</button>
      <button>Show Text</button>
      <button>Change Text Style</button>
    </div>
  )
}
