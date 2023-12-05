import '../App.css'
import Directory from './Directory'
import Footer from './Footer'

function Main() {
  return (
    <div className='main'>
        <div className='direct'>
        <Directory/>
        </div>
        <div className='pain'>
        <h1>Emanuel Leon-Vargas</h1>
        <p>A rising software engineer with extensive training in Javascript(ES6), HTML5 & CSS3, React, and SQL. Able to utilize PostgreSQL, Git, Github, Node.js, set up firewalls, and databases. Experience in problem solving with a background in construction, and some knowledge in mechanical engineering. Solution drive candidate who is seeking to join a software engineering team within an organization.</p>
        </div>
        <div className='nice'>
          <img className='image1' src="https://content.instructables.com/F2Z/MOTA/KVAYJU67/F2ZMOTAKVAYJU67.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=4a751bf5dea52de1daa84950b42fa270" alt="Small Gaming console on box" />
          <img className='image2' src="https://content.instructables.com/FG5/FRPQ/KVAYJU68/FG5FRPQKVAYJU68.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=c8d758db9beea5dedc197c2daf2a3f98" alt="" />
          <img className='image3' src="https://media2.giphy.com/media/kIqoOwOEurUpArjFkn/200w.gif" alt="" />
          <img className='image4' src="" alt="" />
        </div>
        <div className='feeter'>
        <Footer/>
        </div>
    </div>
  )
}

export default Main