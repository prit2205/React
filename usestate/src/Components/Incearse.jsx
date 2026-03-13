import React, { useState } from "react";

const Incearse = () => {

  const [Number, setNumber] = useState(0);

  // Increase by 1
  function IncreaseNum() {
    setNumber(Number + 1);
  }

  // Decrease by 1
  function DecreaseNum() {
    if (Number > 0) {
      setNumber(Number - 1);
    }
  }

  // Increase by 5
  function JumpFive() {
    setNumber(Number + 5);
  }

  // Decrease by 5
  function DecreaseFive() {
    if (Number >= 5) {
      setNumber(Number - 5);
    } else {
      setNumber(0);
    }
  }

  // Reset
  function ResetNum() {
    setNumber(0);
  }

  return (
    <>
      <section>
        <h1 className="text-center text-5xl font-extrabold mt-10">
          UseState : Change Data
        </h1>

        <p className="text-center mt-5 font-bold">
          Increase And Decrease Number
        </p>

        <div className="w-72 h-72 text-9xl px-4 py-2 bg-[#222] rounded-xl text-[#555] font-bold flex items-center justify-center mx-auto mt-10">
          {Number}
        </div>

        <div className="flex items-center justify-center mt-5 gap-6 flex-wrap">

          <button
            className="bg-[#555] px-8 py-4 font-bold rounded-xl active:scale-95 active:bg-orange-400"
            onClick={IncreaseNum}
          >
            Increase
          </button>

          <button
            className="bg-[#555] px-8 py-4 font-bold rounded-xl active:scale-95 active:bg-orange-400"
            onClick={DecreaseNum}
          >
            Decrease
          </button>

          <button
            className="bg-[#555] px-8 py-4 font-bold rounded-xl active:scale-95 active:bg-orange-400"
            onClick={JumpFive}
          >
            +5
          </button>

          <button
            className="bg-[#555] px-8 py-4 font-bold rounded-xl active:scale-95 active:bg-orange-400"
            onClick={DecreaseFive}
          >
            -5
          </button>

          <button
            className="bg-[#555] px-8 py-4 font-bold rounded-xl active:scale-95 active:bg-orange-400"
            onClick={ResetNum}
          >
            Reset
          </button>

        </div>
      </section>
    </>
  );
};

export default Incearse;

// import React, { useState } from 'react'

// const App = () => {

// const [Number, setNumber] = useState(0);
// // number (first variable)==> read only value (you can't this variable value)
// // setNumber (second variable)--> write only value (if you want to change nmber variable's value use setNumber)
// function IncreaseNum(){
//  setNumber(Number + 1);
  
// }
// function DecreaseNum(){
//     if(Number > 0){
//  setNumber(Number - 1);
//   }

  
// }

// // self task:
// // create btn jump ==> increase number with 5
// // descrease ==> descrese number with 5
// const [Numbers, setNumbers] = useState(0);
// function IncreaseNum5(){
//  setNumbers(Numbers + 5);
  
// }
// function DecreaseNum5(){
//   if(Numbers > 0){
//  setNumbers(Numbers - 5);
//   }
// }
// function Reset(){
//   setNumbers(0)
// }


//   return (
//     <>
//     <section>

//       <h1 className='text-center text-5xl font-extrabold  mt-10'>UseSatate: Change Data(Variable Ne Define Karva Mate and Value Change karva Mate)</h1>
   
// <p className='text-center mt-5 font-bold'>Increase and Decrease Number</p>
// <div className='w-42 h-42 text-8xl px-4 py-2 bg-[#222] rounded-xl  text-[#555] font-bold flex items-center justify-center mx-auto mt-10'>{Number}</div>
// <div className='flex justify-center items-center mt-5 gap-6'>
//   <button className='bg-[#555] px-8 py-4 rounded-xl active:scale-95 active:bg-orange-600 ' onClick={IncreaseNum}>Increase</button>
// <button className='bg-[#555] px-8 py-4 rounded-xl active:scale-95 active:bg-orange-600 '  onClick={DecreaseNum}>Decrease</button>

// </div>
//  </section>



//      <section>

      
   
// <p className='text-center mt-5 font-bold'>Increase and Decrease Number of 5</p>
// <div className='w-42 h-42 text-8xl px-4 py-2 bg-[#dfc6c6] rounded-xl  text-[#555] font-bold flex items-center justify-center mx-auto mt-10'>{Numbers}</div>
// <div className='flex justify-center items-center mt-5 gap-6'>
//   <button className='bg-[#555] px-8 py-4 rounded-xl active:scale-95 active:bg-orange-600 ' onClick={IncreaseNum5}>Increase</button>
// <button className='bg-[#555] px-8 py-4 rounded-xl active:scale-95 active:bg-orange-600 '  onClick={DecreaseNum5}>Decrease</button>
// <button className='bg-[#555] px-8 py-4 rounded-xl active:scale-95 active:bg-orange-600 '  onClick={Reset}>Reset</button>
// </div>
//  </section>
//     </>
//   )
// }

// export default App