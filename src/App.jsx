import { useState } from 'react';
import ButtonCheckBox from './ButtonCheckbox'
import './App.css'

function App() {
  const [progress,Setprogress]=useState(0);
  return (
    
      <div className='min-h-screen w-screen bg-green-200 items-center'>
      <div className='mb-8 items-center'>
    <h2 className='mx-40 text-5xl text-black'> <span className='text-5xl text-green-700'>Focus on</span> Today 🌞</h2>
      </div>

    <div className='mx-40 w-3xl h-auto bg-yellow-100 text-black rounded-md p-5 '>
      <div className='p-5'>
            <div>
          <h3 className='text-3xl font-semibold'>Today</h3>
        <p className='font-medium font-'>just a step away, Keep Going!</p>
        {/* progress bar */}
        
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div className="bg-green-500 h-3 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>

            </div>

            <div>
              <ButtonCheckBox bio="learning c++" progress={Setprogress}  />
              <ButtonCheckBox bio="revised oops" progress={Setprogress} />
              <ButtonCheckBox bio="practice english" progress={Setprogress} />
              <ButtonCheckBox bio="Revise React concepts" progress={Setprogress} />
            </div>
      </div>

      <div> 
        <h3 className='text-center'>"keep going you're making great progress!"</h3>
         <h6 className='text-center font-serif'>Made with by Uttam yadav</h6>
         </div>
    </div>
  </div>
  )
}

export default App
