import '../App.css'
import Directory from './Directory'
import Footer from './Footer'
import '../stuff/snails.png'

function Main() {
  return (
    <div className='main'>
      <div className='direct'>
        <Directory />
      </div>
      <h1>&nbsp;</h1>
      <div className='pain'>
        <h1 className='manny'>Home</h1>
        <p>Hello visitors and welcome to my website. As you can see there are still a lot of things missing here.</p>
        <p>It is still a work in progress, but feel free to browse around. On this page is where you will find most of my most recent projects</p>
        <p>I have built a Raspberry Pi computer arcade machine, a snail racing game, and this website which you are currently visiting.</p>
      </div>
      <div className='rasp'>
        <div className='nice'>
          <h3><a style={{fontFamily: 'face'}}>RetroPie</a></h3>
          <img className='image1' src="https://content.instructables.com/F2Z/MOTA/KVAYJU67/F2ZMOTAKVAYJU67.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=4a751bf5dea52de1daa84950b42fa270" alt="Small Gaming console on box" />
          <img className='image2' style={{rotate: "270deg"}} src="https://content.instructables.com/FG5/FRPQ/KVAYJU68/FG5FRPQKVAYJU68.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=c8d758db9beea5dedc197c2daf2a3f98" alt="Sonic 2 running on the Console" />
        </div>
      </div>
      <div className='snail'>
        <div className='race'>
          <h3>Snail Race </h3>
          <img className='image3' src="snails.png" alt="Snail race game in browser" />
        </div>
      </div>
      <div className='web'>
        <div className='lego'>
          <h3>Website </h3>
          <img className='image3' src="webs.png" alt="Website in Development" />
        </div>
      </div>
      <div className='projx'>
        <h2 style={{color: 'white'}}>Project List</h2>
        <a href='https://www.instructables.com/The-Box-of-Nostalgia-Semi-Portable-Retro-Gaming-Co/' target="_blank"><p style={{fontFamily:'face'}} className='dojo'>Retropie</p></a>
        <a href='https://github.com/EmanuelLeon2022/Snail-racers/tree/main' target="_blank"><p style={{fontFamily:'face'}} className='dojo'
        >Snail Racers</p></a>
      </div>
      <div className='broken'>
      <p>As you can see because some of these words are breaking apart, but don't worry...</p>
      <p>𐌃ዐ𐌍'𐌕 Ꮤዐ𐌐ዪ𐌙 𐌉ፕ'ነ ል ቻ𐌄ል𐌵ፕ𐌵ዪ𐌄, ክꝊፕ ል ፪𐌵ፏ</p>
      <p>句回几'卞 山回尺尺と 卞廾工己 工己 己卞工しし 几回尺冊丹し</p>
      <p>&nbsp;</p>
      <a href='https://www.youtube.com/watch?v=VS0VlG4uE6U' target="_blank"><p>𝐏⃥⃒̸𝐥⃥⃒̸𝐞⃥⃒̸𝐚⃥⃒̸𝐬⃥⃒̸𝐞⃥⃒̸ 𝐰⃥⃒̸𝐨⃥⃒̸𝐫⃥⃒̸𝐤⃥⃒̸</p></a>
      <p>I mean, D̷͇̹̦̲̭̙͒̅ͣ̿ỡ̢̡̭̗̘̜̺̹͖̪͈̿̈́̌ͫ͗̾ͩ̓͆͆̀̊ͪ̊́̎̚̕͜͡n̴̢̨̹̜͈̱͚̥̖ͨͭͭ̃ͪ̔ͪ͂ͪ̚͘'̳̆t̵̨͇̙͓͓̝͖ͨ̀ͦ͑ w̷̡̡̺̲͇̜̞͍̣̲̳̼͇̥̻ͣ̽͗̒̽͗̒͑ͪ̄̋̃̑͛ͥ͜͠o̶̞͔̹̪̻̪ͥ̀͛͐̾r̴̗͉̔ͬ̽ͧ͗̿͒ͯͥ̂_̴̡̫̰̭̠̽̃͐́͂ͅr͔ͣ̄̊ͧ͛͌y̶̢̝̻ͩ̽̇͊͊̕͜͜͢ i̢̨̗ͪ͆͡͞t͎̞̳̲̰̖̼͖̭̫̩̫͙̻̦̫̣͈̘͆̿ͪ̿̿ͩ̃̑ͧͭ́̎͊͂̀́͘'̶̡̢̪̦̩̙͓̠̲̜͉͔̣̮̀̽ͭ̅̀͜͜͠s̶̴̙̩͚̯̼͕͔̩ͬ͛͑ͭͪ̔͜͠ a̶̸̛̛̯̫̭ͪͭ̃ͬ F͎̆̉͋ͨ̎͝ȩ̵̸̡̟̤͙̞̜̠̰̦̬͍̻̔̇̊ͬͤͯ̏̇́̍͛ͩ͛͌̚ą̵̸̫̙̘͕̝̫̦͔̜ͥ͋̈̃͟u̵̷̞̤̲͇̼̭̖̭̹ͬ͛ͩ̒̿̉ͦͯ͟tu̧̨̧͓͇͍̖̗͈̥̬̜̗̺ͧ̅̑̒̀̈́ͤͦ͗ͩ̿̀͆̕͘͟͡r̴̝͚̜̤̬̳͗̓͋̀̃ͧ̓̋̏̏ͨ́͂ͦͥͮ̍e̷̶̸̛̱͎̟̞̹͖̓̑ͣͪͥͩͩͥ̌ͤ̀ͤ̋͟,̭̣ n̵̨̧̬͎͔͙͙ͭ̅ͨ͂ͬͪ͂̀̾̑ͤ̃̂̽̚̚͢͡ͅo̧̭͎ͯ̓ͬ͝_̷̲̳̼̤̺͓͈̄ͬ͒̒̋̓̐͢͡t̴̵̶̸̶̨̲̦͓̩͔̩̪̝̫͎̜̭ͬ͆ͦ̒͌̌́ͭͤ̈̉͘͢͢ͅ ä̢̧̪̤̪͚̬̰̬͓͒̇ͪ̀̆̔̑͛̄ͭ̓̃̓͜͠͝ͅ_͚͓̣̼͍͙̺̟̥̟̔ͬ͆͠ B̶̴̧̜̣̪͈̱̫͇̦̲͚̪͈̳̫̬͈̓́̀͒ͧ͂̅͋̑̀̀͑̀̐͘͜͢͟͠u̷̶̢̨̬͙͙̫̠̜̙̯ͨ́ͩͯ͗ͩ̎ͬ̓̉͐ͦ͝g̸̶̨̡̝͚͉ͭ̇ͥ̆͌ͥ̈́͊̑͟͜͢</p>
      <p>ዐⶴ ቻዐዪፏቹፕ ጎፕ</p>
      </div>
      <div className='feeter'>
        <Footer />
      </div>
    </div>
  )
}

export default Main