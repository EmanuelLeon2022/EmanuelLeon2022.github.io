import '../App.css'
import Directory from './Directory'
import Carol from './Carol'
import Footer from './Footer'

function Main() {
  return (
    <div className='Main'>
      <div>
        <Directory />
      </div>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <div className='info'>
        {/* <p>&nbsp;</p> */}
        <h1 style={{ fontFamily: 'poppins', color: 'white', paddingLeft: '10px', textAlign:'center' }}>Leones Construction</h1>
        <p style={{ fontFamily: 'sans-serif', color: 'white', paddingLeft: '10px', paddingBottom: '5px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse blanditiis iusto, odit praesentium asperiores expedita error debitis necessitatibus voluptatem reiciendis, fuga velit doloribus amet? Consectetur sapiente impedit tempore blanditiis rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, necessitatibus fuga? Dolores ipsam nesciunt explicabo necessitatibus laboriosam, consequatur dolore itaque vitae tempore ipsa sapiente cupiditate est quasi qui, sint ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae est error nulla dolores itaque quisquam ut quaerat! Repellendus nulla ipsa corrupti omnis! Debitis voluptatum possimus deserunt nam eligendi dolores.</p>
      </div>
      <h1>&nbsp;</h1>
      <div className='profile'>
        <h1 style={{ fontFamily: 'poppins', color: 'white', paddingRight: '10px', textAlign:'center'}}>Profile</h1>
        <p style={{ fontFamily: 'sans-serif', color: 'white', paddingRight: '10px', paddingBottom: '5px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse blanditiis iusto, odit praesentium asperiores expedita error debitis necessitatibus voluptatem reiciendis, fuga velit doloribus amet? Consectetur sapiente impedit tempore blanditiis rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, necessitatibus fuga? Dolores ipsam nesciunt explicabo necessitatibus laboriosam, consequatur dolore itaque vitae tempore ipsa sapiente cupiditate est quasi qui, sint ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae est error nulla dolores itaque quisquam ut quaerat! Repellendus nulla ipsa corrupti omnis! Debitis voluptatum possimus deserunt nam eligendi dolores.</p>
      </div>
      <h1>&nbsp;</h1>
      <div className='contact'>
        <h1 style={{ fontFamily: 'poppins', color: 'white', paddingLeft: '10px', textAlign:'center'}}>Contact Information</h1>
        <p style={{ fontFamily: 'sans-serif', color: 'white', paddingLeft: '10px', paddingBottom: '5px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse blanditiis iusto, odit praesentium asperiores expedita error debitis necessitatibus voluptatem reiciendis, fuga velit doloribus amet? Consectetur sapiente impedit tempore blanditiis rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, necessitatibus fuga? Dolores ipsam nesciunt explicabo necessitatibus laboriosam, consequatur dolore itaque vitae tempore ipsa sapiente cupiditate est quasi qui, sint ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae est error nulla dolores itaque quisquam ut quaerat! Repellendus nulla ipsa corrupti omnis! Debitis voluptatum possimus deserunt nam eligendi dolores.</p>
      </div>
      <h1>&nbsp;</h1>
      <div className='about'>
        <h1 style={{ fontFamily: 'poppins', color: 'white', paddingLeft: '10px', textAlign:'center'}}>About</h1>
        <p style={{ fontFamily: 'sans-serif', color: 'white', paddingLeft: '10px', paddingBottom: '5px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse blanditiis iusto, odit praesentium asperiores expedita error debitis necessitatibus voluptatem reiciendis, fuga velit doloribus amet? Consectetur sapiente impedit tempore blanditiis rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, necessitatibus fuga? Dolores ipsam nesciunt explicabo necessitatibus laboriosam, consequatur dolore itaque vitae tempore ipsa sapiente cupiditate est quasi qui, sint ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae est error nulla dolores itaque quisquam ut quaerat! Repellendus nulla ipsa corrupti omnis! Debitis voluptatum possimus deserunt nam eligendi dolores.</p>
      </div>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <Carol/>
      <div>

      </div>
      <div className='feeter'>
        <Footer />
      </div>
    </div>
  )
}

export default Main