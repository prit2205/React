import React, { useState } from 'react'

const AddUser = () => {

   const [Data, setData] = useState([{
    name: "Aarav Patel",
    email: "aarav@gmail.com",
    color: "bg-red-400"
    },
    {
    name: "Riya Sharma",
    email: "riya@gmail.com",
        color: "bg-purple-400"
   },
   {
    name: "Vivan Maheta",
    email: "vival@gmail.com",
        color: "bg-white"
   }])

function Add(){
    let arr = [...Data]; // copy array

    arr.push({name:"aana", email:"aana@gmail.com",color: "bg-gray-400"});
    if(Data[3]?.name === "aana"){
        return alert("you can use this btn at a one time")
    }
    setData(arr)
}

function AddTwo(){
    let arr = [...Data];

    arr.push(
        {name:"om", email:"om@gmail.com", color:"bg-blue-400"},
        {name:"dhruv", email:"dhruv@gmail.com", color:"bg-green-400"}
    );
        if(Data[4]?.name === "dhruv"){
        return alert("you can use this btn at a one time")
    }
    setData(arr)



    setData(arr)
}
  return (
   <>
   <section className='flex flex-wrap justify-center items-center gap-6 my-10'>
    {Data.map((user)=> {
        return ( <div className={`w-full h-auto max-w-sm rounded-xl p-2 text-center font-bold text-2xl ${user.color} flex justify-center items-center flex-col gap-2 `}>
        <h1 className='bg-[#222] w-full  rounded-xl px-4 py-2 '>
            {user.name}
        </h1>
        <h1 className='bg-[#222] w-full  rounded-xl px-4 py-2 '>
            {user.email}
        </h1>
    </div>)
    })}
   
   </section >
   <div className='flex justify-center items-center'>
<button className='bg-orange-600 text-center px-6 py-4 active:bg-orange-100 active:scale-95 active:text-orange-600 text-2xl font-bold rounded-xl transition-all ' onClick={Add}>Add OneUser</button>
   </div>
    <div className='flex justify-center items-center mt-5'>
<button className='bg-purple-600 text-center px-6 py-4 active:bg-purple-100 active:scale-95 active:text-purple-600 text-2xl font-bold rounded-xl transition-all ' onClick={AddTwo}>Add OneUser</button>
   </div>
   
   </>
  );
}

export default AddUser
