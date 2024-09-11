import logo from './logo.svg';
import './App.css';
import {lazy, Suspense} from 'react'
const User = lazy(()=>import('./User'))


function App() {
  return (
    <div>
      <h>Another component</h>
      <Suspense fallback={<div>Loading....</div>}>
        <User/>
    </Suspense>
  
    </div>
  )
 
   
}

export default App;
