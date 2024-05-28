import './App.css'

function App() {
  return (
    <div className='container'> 
      <article className='containerlogin'> 
        <div className='loginname'> login</div>
        <div className='namefield'> Username</div>
        <div className='containerloguito'>
          <div className='smalllogo'>loguito</div>
          <input className='cinput' type="text" placeholder='Type your Username' />
        </div>
        <div className='namefield'> Password</div>
        <div className='containerloguito'>
          <div className='smalllogo'><img src="./assets/person.svg" alt="" /></div>
          <input className='cinput' type="text" placeholder='Type your Password' />  
        </div>
    
      </article>
    </div>
  )
}

export default App
