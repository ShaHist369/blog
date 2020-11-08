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
            <div className='title-block block-article'>
                <div className='keys-article'>
                    <p>{titleDecore}</p>
                </div>
                <div className='values-article margin-left'>
                    <p>{title}</p>
                </div>

                <div className='last-bracket'><p></p></div>
            </div>

            <div className="description-block block-article">
                <div className='keys-article'>
                    <p>description:</p>
                </div>
                <div className='values-article margin-left'>
                    <p>{description}</p>
                </div>

                <div className='last-bracket'><p></p></div>
            </div>

            {author ?<div className="author-block block-article">
                <div className='keys-article'>
                    <p>author:</p>
                </div>
                <div className='values-article margin-left'>
                    <p>{author}</p>
                </div>
                <div className='last-bracket'><p></p></div>
            </div>: null}

            {date ? <div className="date-block block-article">
                <div className='keys-article'>
                    <p>date:</p>
                </div>
                <div className='values-article margin-left'>
                    <p>{date}</p>
                </div>
                <div className='last-bracket'><p></p></div>
            </div>: null}

            <div className="function-block block-article">
                <div className='keys-article'>
                    <p className='key-function'>function:</p>
                </div>
                <div className='values-article margin-left'>
                    <div className='button-read'>
                        <Button onClick={goToSingle}  text='read()'/>
                        <p>{brackets}</p>
                    </div>
                </div>

                <div className='last-bracket'><p>}</p></div>
            </div>
        </article>
        )
}

export default withRouter(Article);