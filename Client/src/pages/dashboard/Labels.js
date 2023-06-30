import React from 'react'

const obj = [
    {
        type:"Petrol",
        color:'rgb(255, 99, 132)',
        percent:45

    },
    {
        type:"Servicing",
        color:'rgb(54, 162, 235)',
        percent:30

    },
    {
        type:"Maintenance",
        color:'rgb(255, 205, 86)',
        percent:25

    }
]



const Labels = () => {
  return (
    <>
    {obj.map((v,i) => <LabelComponent key={i} data={v}></LabelComponent>) }
    </>
  )
}

function LabelComponent({data}){
    if(!data) return <></>

    return(
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <h3 className='text-md'>{data.type ?? ''}</h3>
            </div>
             <div className='w-2 h-2 rounded py-3' style={{background:data.color ?? '#f9c74f'}}></div>
            <h3 className='font-bold'>{data.percent ?? 0}%</h3>
            
            
         </div>
    )
}

export default Labels