import React, {Dispatch, SetStateAction} from 'react'
import Button from '../../../../common/button'
import './search.css'

type SetFilterType = {
    setFilter: Dispatch<SetStateAction<string>>
}
export default function (props: SetFilterType){
    const searchTitles = () =>{
        console.log('searchTitles')
    }
    return(
        <div className='search'>
            <input type="text" onChange={e => props.setFilter(e.target.value)}/>
            <Button onClick={searchTitles} text='search()'/>
        </div>
    )
}