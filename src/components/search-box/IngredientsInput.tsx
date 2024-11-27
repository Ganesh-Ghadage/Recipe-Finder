import { useAppDispatch } from '@/app/hooks'
import { setIngredients } from '@/features/ingredients/ingredientsSlice'
import React, { useState } from 'react'

function IngredientsInput() {
    const [ingreInput, setIngreInput] = useState<string>('')

    const dispatch = useAppDispatch()

    const handleIngre = (e: React.FormEvent) => {
        e.preventDefault()
    
        if(ingreInput.trim()){
            dispatch(setIngredients(ingreInput))
            setIngreInput('')
        }
    }

  return (
    <div className='flex flex-col w-full items-center mt-2 '>
        <h1 className='text-xl font-bold mb-2 text-primary-color'>Add Ingredients to your list</h1>
        <form onSubmit={(e) => handleIngre(e)}
            className='flex'    
        >
            <input 
                type='text'
                placeholder='Type your ingredients'
                value={ingreInput}
                onChange={(e) => setIngreInput(e.target.value)}
                className='md:w-96 mr-4 px-4 py-2 rounded-3xl text-black'
            />
            <button className='bg-primary-color px-4 py-2 rounded-3xl font-bold text-[#e4f4f1] hover:bg-[#e4f4f1] hover:text-primary-color'>Add to list</button>
        </form>
    </div>
  )
}

export default IngredientsInput