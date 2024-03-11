import './App.css';

function App() {
  let chlp = [1,3,5]
  return (
    <div className="App">
      <div className = "ResetPasswordDiv">
        <h3 className='ResetDivTitle'>Reset your password</h3>
        <p>Enter your email address and   we'll send you a link to get back into your account.</p>
        <input type='email' placeholder='example@mail.com'/>
        <button type='submit'> Send Link </button>
      </div>
      <h1> {chlp.map((x)=>(
        <p>{x}</p>
      ))}</h1>
    </div>
  );
}

export default App;
