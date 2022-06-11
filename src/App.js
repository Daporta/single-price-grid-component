import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <div className='container'>
          <div className='join_us'>
            <h1>Join our community</h1>
            <p className='join_us-text1'>30-day, hassle-free money back guarantee</p>
            <p className='join_us-text2'>Gain access to our full library of tutorials along with expert code reviews. <br />
               Perfect for any developers who are serious about honing their skills       
            </p> 
          </div>

          <div className='pricing'>
            <h2>Monthly Subscription</h2>
            <p className='pricing-text'>
              <span>$29</span> per month <br />
              Full access for less than $1 a day
            </p>
            <button>Sing Up</button>
          </div>
          <div className='why_us'>
            <h2>Why Us</h2>
            <p>Tutorials by industry experts <br />
               Peer & expert code review <br />
               Coding exercises <br />
               Access yo Our Github repos <br />
               Community forum <br />
               Flashcard decks <br />
               New videos every week
            </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
