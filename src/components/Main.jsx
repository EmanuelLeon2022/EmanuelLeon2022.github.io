import '../App.css'
import Directory from './Directory'
import Footer from './Footer'

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
        <p>I have built a Raspberry Pi computer arcade machine, </p>
      </div>
      <div className='rasp'>
        <div className='nice'>
          <h3><a>RetroPie</a></h3>
          <img className='image1' src="https://content.instructables.com/F2Z/MOTA/KVAYJU67/F2ZMOTAKVAYJU67.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=4a751bf5dea52de1daa84950b42fa270" alt="Small Gaming console on box" />
          <img className='image2' src="https://content.instructables.com/FG5/FRPQ/KVAYJU68/FG5FRPQKVAYJU68.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=c8d758db9beea5dedc197c2daf2a3f98" alt="Sonic 2 running on the Console" />
        </div>
      </div>
      <div className='snail'>
        <div className='race'>
          <h3>Snail Race </h3>
          <img className='image3' src="https://lh3.googleusercontent.com/pw/ADCreHfjYYIORDpwmSNzJMXfjAP3jOnjG8Mk5H59CmbBDuiM4L0tDAHjEFQP6R6-lJN_cYelgEbCP2XbovQbLoVyAsgtBq3J8kyer_96DCgN4g6GYE0GwKOBq5vy0O8Px2LHsQLU-cregIz4J_u6ej7oCnR7lvDzz0IaLIdhgEOisk-Uq3NneDakFz6wcYsMminvlRwkPIKn3xm6P5oVm2MOfpJ1w2n9Nm2KkDwI71Itu6t48AhS6YmQAkUyppgsoaZZAuiKsGnnCIL0i6w6GhDUUY6NkO3JGkgmPyp4VaSrj4JNE2wNhnZBiU1YMxnyYlre5mgoGbvjmq61HtyfWfQWKrbSaX5xYVesSII9747aRF8xZ4qd_RB37IchNPXAuO1atbXIFDBvmIls4L1-EbeYi8T35kcXhkpcQwUYZT1K8CjLDEpf2_695NvFfbhzeMfjTL5BwVuE276bGa_Z9MN0Yfe-D7eilTyLUi62HLrUpQ-Knv0ADKqa4RjuB1IgP3m9tryn7ToyJhEduG_VduIhbiORdSfKoFNM5TKD5ix8RyJLElhBZdv8jDtd5_v0W8MEZVZjiLlxhMpc0LPwwyWzE-6QZK8EqK8vJU-q9SC_Zjb8QjI_NvY9DNOVrrHdez2_8yckBehWa7b1WCjK39Ojk3a51RB9GcuBBQV3x9FUadtfdi8lgyvGmEkYlMrQcQCh9so30WyGzfVbr0AT-NZzW_rOpOVV7vkcisL7VDnEPzR8FvH-afI3xI-pV9mk2JLoXOP33SYkOVrow22uXo9WYJ8o4tXfST0IxauKD9sIKJk5uJetsidwuT5-Xsktc4xSjma6D8daAOD3SZtUEhhxwpHd-m_6-MsJp_PsDkO1i0JwVXICv07fbvfaxLeWz44wBg=w1257-h617-s-no-gm?authuser=" alt="Snail race game in browser" />
        </div>
      </div>
      <div className='web'>
        <div className='lego'>
          <h3>Website </h3>
          <img className='image3' src="https://lh3.googleusercontent.com/pw/ADCreHd0aLeI1l7N7ZyzCl-PGDd1DB80F8mMMFN2krmFoszQNEarUeixgJ9r9SFIQuaXEhybKuHyLzSX4pmDuDHmD-WYPIzdkFBngcU6NzpKeStIdnqYOc5_5eYFQw74y5hJhgEhmeDKlGRxr5g4AyvX4WMD8iXx4A18jvt82-p1b-pqCgyqG3jpm4iiZ1K0MmmUymn-qgWRmRfQOkzo4U77_6HPKxUw0EbUBN1kr3py48wvvL48K8hCCesjDM4Nu3qIZh0HdifsZGlZe3YSOabllSdsdinJZggxcMpWhla-LQmb4ZSZ6pUv4l6Dpfd_fiSJM8Y3lB7jYnRhBeCrkufBm0FrFFjQMjQ7BiX2044b47S6P357aBP3pwtdKbD5nsO5WW9iL9xu2ueotK_-_YAbvM_3R-cq4g0UqOBBCnNDuGpsUBxFgumAp4UMy10KYFIoyk7xR_whrQ3VdrCMkywyBL58qtjoAXC-MIayz2DeBrHVHlteT4LXBgPnqvWPi6N8gC8hYCTBoawcOzt8kU8L7hZA0VjMqofISxwyS4FwIk0Naiycshm6gTyiS3D5eBvz5U1HRFG-ms3raK77vXgVkF4sRV68wpphysEBUBrvng66LK2_v3guxKM32kdPYdBrLgPl_MF7N1Pz9BpGV4JCxdVpV-qVkL_b8O4pWjOFeJdd_wwhEBM8xHG_Y4RqCE8RLkjEGYkT3lSHlZ0bPX_95nRnnMqXrIKZN223ADUDYBolzTzr0t_7BJKXk4VgxahJe0vdtwDBgOskx_-UK6ptAmdWd8ee0cn7tQT5vzSe3FWtJfrSc1HJXeSRmqcxJzjgLluND8HhAaYktM-tsFDtKiewmlULOtzfXmVEfcN0Qe4iiEOk4TfvJUYsjx04A-PHHg=w1580-h746-s-no-gm?authuser=" alt="Website in Development" />
        </div>
      </div>
      <div className='projx'>
        <h2>Project List</h2>
        <a href='https://www.instructables.com/The-Box-of-Nostalgia-Semi-Portable-Retro-Gaming-Co/' target="_blank"><p className='dojo'>Retropie</p></a>
        <a href='https://github.com/EmanuelLeon2022/Snail-racers/tree/main' target="_blank"><p className='dojo'
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