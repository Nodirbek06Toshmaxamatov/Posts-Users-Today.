import React from 'react'
import { Switch , Link, Route} from 'react-router-dom'
import Posts from './component/Posts'
import Users from './component/Users'
import Todos from './component/Todos'

const App = () => {
  
  return (
    <div className='container my-3'>
      <Link to="/Posts" className='btn btn-dark mx-2'>Posts</Link>
      <Link to="/Todos" className='btn btn-dark mx-2'>Todos</Link>
      <Link to="/Users" className='btn btn-dark mx-2'>Users</Link>

    <hr />
      <div className="row">
      <Switch>
        <Route path='/Posts' component={Posts}/>
        <Route path='/Todos' component={Todos}/>
        <Route path='/Users' component={Users}/>
      </Switch>

      </div>
    </div>
    
  )
}

export default App