import React from 'react'

const AcceptTask = () => {
  return (
    <div className="h-full flex-shrink-0 p-5 w-[300px] bg-green-400 rounded-xl ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 text-sm px-3 py-1 rounded">high</h3>
                    <h4 className="text-sm" >22 nov, 2024</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold" >Complete the tutorial</h2>
                <p className="text-sm mt-2" >hor ni tu gabru nu billo kehre chakkara ch paya sachi tenu sama lake rab ne bnaya</p>

                <div className='flex justify-between mt-4 '>
                    <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as complete</button>
                    <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs' >Mark as failed</button>
                </div>
            </div>
  )
}

export default AcceptTask