import React from 'react';
import Main from './pages/main/main'
import Auth from './pages/auth/auth'
import Single from './pages/single/single'
import {Route, Switch} from 'react-router-dom'
import CreateArticle from './pages/create-article/create-article'
import {useSelector} from "react-redux";



function App() {

    const isUserAuthorized = useSelector((state:any )=> state.auth.isUserAuthorized)
  return (
    <div className="App">
        <Switch>
            <Route path='/auth'  render={()=> <Auth />} />
            <Route path='/article/:id' render={()=> <Single />} />
            {isUserAuthorized ?
                <Route
                    path='/create-article'
                    render={()=> <CreateArticle />}
                /> : null }

            <Route path='/' exact render={()=> <Main />}/>
            <Route render={()=> <div>404 not found</div>}/>
        </Switch>
    </div>
  );
}

export default App;
