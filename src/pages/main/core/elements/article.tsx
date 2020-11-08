import React from "react";
import Button from '../../../../common/button'
import './article.css'
import {withRouter} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addTabCreator} from '../../../../redux/actions/actions'
import {RouteComponentProps} from 'react-router-dom'

export type ArticleType={
    title: string
    description: string
    id: number
    author?: string
    date?: string
}

function Article({history, title, description, id, author, date}:RouteComponentProps<any> & ArticleType){

    let titleDecore = `\{ title:`
    let brackets = `\{\}`


    const goToSingle = () => {
        addTab()
        history.push('/article/'+ id)
    }

    const dispatch = useDispatch();
    const addTab = () =>{
        let addTabAction = addTabCreator(id, title)
        dispatch(addTabAction)
    }

    return(
        <article>
                <div className='gray-decoration'>{titleDecore}</div>
                <div>{title}</div>
                <div className='gray-decoration'></div>

                <div className='gray-decoration'>description:</div>
                <div>{description}</div>
                <div className='gray-decoration'></div>

            {author ?
                <>
                <div className='gray-decoration'>author:</div>
                <div>{author}</div>
                <div className='gray-decoration'></div>
                </>
            : null}

            {date ? <>
                <div className='gray-decoration'>date:</div>
                <div>{date}</div>
                <div className='gray-decoration'></div>
            </>: null}

                <div className='gray-decoration'>function:</div>
                <div >
                    <div className='button-read'>
                        <Button onClick={goToSingle}  text='read()'/>
                        <p>{brackets}</p>
                    </div>
                </div>
                <div className='gray-decoration'>}</div>
        </article>
        )
}

export default withRouter(Article);