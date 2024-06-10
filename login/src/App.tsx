import './App.css'
import logoUser from './assets/person.svg'
import logoLock from './assets/lock.svg'

function App() {
  return (
    <div className='container'>
      <article className='containerlogin'>
        <div className='loginname'> Login</div>
        <div className='namefield'> Username</div>
        <div className='containerloguito'>
        <img className='smalllogo' src={logoUser} />
          <input className='cinput' type="text" placeholder='Type your Username' />
        </div>
        <div className='namefield'> Password</div>
        <div className='containerloguito'>
          <img className='smalllogo' src={logoLock} />
          <input className='cinput' type="text" placeholder='Type your Password' />
        </div>
      </article>
    </div>
  )
}

export default App
