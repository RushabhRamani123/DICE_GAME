import { Link} from 'react-router-dom';

function Navbar() {
  return (
    
      <>
      <div style={{margin:'0px '}}>
      <div style={{ alignItems: 'center', margin:`0px`, display: 'flex', zIndex: '1', justifyContent: 'space-between', backgroundColor: '#001529', color: 'white', padding: '10px' }}>
          <div className='text-[25px]' style={{ display: 'flex' }}>
            <h1><span style={{ color: '#36ff57' }}>DICE</span>GAME</h1>
          </div>
          <div className="rounded-md " style={{ display: 'flex', gap: '20px' }}>
          <>
              <Link to="/signin" className="text-white hover:text-blue-500 font-bold py-2 px-4" style={{ color: 'white',textDecoration: 'none'}}>Sign In</Link>
              <Link to="/" className=" shadow-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" style={{ color: 'white',textDecoration: 'none',backgroundColor: '#36ff57' , padding: '2px  4px'}}>Sign Up</Link>
            </>
        
          </div>
        </div>
        </div>
      </>
   
  );
}

export default Navbar;