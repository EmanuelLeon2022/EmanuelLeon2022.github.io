import '../App.css'
import Directory from './Directory'

function Main() {
  return (
    <div className='main'>
        <div className='direct'>
        <Directory/>
        </div>
        <div className='pain'>
        <h1>Emanuel Leon-Vargas</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet debitis nam distinctio dolorem, numquam eum architecto aut. Reiciendis quasi, necessitatibus nobis nostrum, rem aspernatur iste qui, dignissimos vel ad molestias.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam quae reiciendis illo pariatur maxime ex velit officiis, laboriosam aperiam! Consectetur, voluptate aliquid. Aliquam est quis eveniet ipsam cumque ipsa.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam quae reiciendis illo pariatur maxime ex velit officiis, laboriosam aperiam! Consectetur, voluptate aliquid. Aliquam est quis eveniet ipsam cumque ipsa.</p>
        </div>
        <div className='nice'>
          <img className='images' src="https://media.tenor.com/M46uN9EhkAwAAAAj/fortnite-pixel.gif" alt="" />
          <img className='images' src="https://64.media.tumblr.com/bdcd75a1aab889887222de90a1ed8246/tumblr_inline_ppm6bn5RHM1rtx1y2_1280.gif" alt="" />
          <img className='images' src="https://media2.giphy.com/media/kIqoOwOEurUpArjFkn/200w.gif" alt="" />
          <img className='images' src="https://i.imgur.com/5Io0AoD.gif" alt="" />
        </div>
    </div>
  )
}

export default Main