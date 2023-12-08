import React from 'react'
import '../Me.css'
import Directory from './Directory'
import Carol from './Carol'
import Footer from './Footer'

function Me() {
  return (
    <div className='meme'>
      <audio src='' />
      <Directory />
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1 className='nam'>Emanuel Leon-Vargas</h1>
      <div className='alpha'>
        <p>I am a rising software engineer with extensive training in Javascript(ES6), HTML5 & CSS3, React, and SQL. Able to utilize PostgreSQL, Git, Github, Node.js, set up firewalls, and databases. Experience in problem solving with a background in construction, and some knowledge in mechanical engineering. Solution drive candidate who is seeking to join a software engineering team within an organization. </p>
      </div>
      <div className='skills'>
        <div>

        </div>
        <div>

        </div>
      </div>
      <div className='drop'>
        <div>
          <h3 style={{fontFamily: 'sans-serif'}}>Leones Construction - Construction Worker  - Pittsburgh, PA 06/2023 - 08/2023</h3>
          <p>&nbsp;</p>
          <p style={{fontFamily: 'cursive'}}> Drywall Installation - requires measurement of the workspace, framing 2x4 beams, and drilling the drywall onto the frame to keep it locked in place. Once that is complete, the wall needs to be taped (a process in which you use joint compound to seal crevices in the wall), then painted with a coat of primer.</p>
          <p>&nbsp;</p>
          <p style={{fontFamily: 'cursive'}}> Decking Installation - requires measurement of where the platform will be placed, placing multiple 2x8 boards in a row form and jointing them with solid brackets and decking screws, and lastly pacing out the decking floor boards in a way where they are properly spaced between to walk on.</p>
        </div>
        <p>&nbsp;</p>
        <div>
          <h3 style={{fontFamily: 'sans-serif'}}> Cornerstone Christian Preparatory Academy- Custodial - Pittsburgh, PA 05/2023 - 06/2023</h3>
          <p>&nbsp;</p>
          <p style={{fontFamily: 'cursive'}}> School maintenance- the job was restocking the school bathrooms, restocking classroom cleaning supplies, and cleaning up cafeterias. Cataloging items - required me to identify what items were in stock such as toilet paper, paper towels, soap, rags and record what items were needed.</p>
        </div>
        <div>

        </div>
      </div>
      <div>

      </div>
      <div className="gnd">
        <Carol />
      </div>
      <Footer />
    </div>
  )
}

export default Me