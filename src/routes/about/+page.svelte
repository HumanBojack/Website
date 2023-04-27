<script lang="ts">
  import { calculateAge } from "$lib/helpers/calculateAge";

  let y: number;
</script>

<svelte:window bind:scrollY={y}/>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="main_wrapper">
  <div class="hero">
    <h1>About me</h1>
    <a href="#content" class="scroll-icon" style="opacity: {1 - Math.max(0, y / 100)}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>
    </a>
  </div>

  <div class="container" id="content">
    <div class="presentation">
      <h2>Who I am</h2>
      <div>
        <p>
          Hi, I'm Romain Spychala. I'm a {calculateAge("11/20/2001")} years old developer, and I like to learn new things.
        </p>
        <p>
          I'm currently working at Genfit, a biotech company in Lille.
          My main project is the development and cloud hosting of a web app integrating large deep learning models.
        </p>
      </div>
    </div>

    <div class="presentation-fig image-frame">
      <img src="/images/romain.jpg" alt="Me" />
    </div>

    <div class="path">
      <h2>What I did</h2>
      <div>
        <h3>2021</h3>
        <p>
          After realizing that the path I was following as a student in sound engineering was not the one I wanted to follow, I decided to take time off and experiment.
          One of the first things I did was to learn how to code. I joined a bootcamp called The Hacking Project, and I learned how to code in Ruby and Javascript.
        </p>
        <h3>2022–2023</h3>
        <p>
          This experience was very rewarding, but I wanted to go further. I joined Simplon, a coding school in Lille where I learned Python and Datascience.
        </p>
        <p>
          It's in the projects that I learned the most.
          I got to work on the things I learned and I could deepen my knowledge on the subjects I was especially interested in.
          I also got to work with other people, some of them are now my friends.
        </p>
      </div>
    </div>

    <div class="path-fig">
      <div class="image-frame" data-year="2020">
        <img class="uni-rouen" alt="Université de Rouen Normandie, logo"/>
      </div>

      <div class="image-frame" data-year="2021">
        <img class="thp" alt="The Hacking Project, logo"/>
      </div>

      <div class="image-frame" data-year="2022-2023">
        <img class="simplon" alt="Simplon.co, logo"/>
      </div>
    </div>

    <div class="hobbies">
      <h2>What I like</h2>
      <p>
        I really like to learn new things and to experiment, so my hobbies change a lot. Some things stick with me though. Here are some of the things I've done in the past:
      </p>
      <ul>
        <li>Playing the piano and learning music theory</li>
        <li>Solving a rubik's cube in 20 seconds, and solving similar, harder, puzzles</li>
        <li>Learning Chess (I'm still terrible however)</li>
        <li>Speedrunning games (Out There Somewhere, a bit of Minecraft)</li>
        <li>Diving into the world of typography and weird symbols</li>
        <li>Digging into the custom keyboard rabbit hole and building some</li>
        <li>Re-taking the habit of reading like I used to</li>
        <li>Learning different keyboards layouts (qwerty, colemak dh)</li>
      </ul>
      <p>
        Currently, I spend my free time reading about typography, watching videos and riding my bike on saturdays.
      </p>
    </div>

    <div class="hobbies-fig image-frame">
      <img src="/images/about/keyboard.jpg" alt="Keyboard" />
    </div>

    <div class="skills">
      <h2>What I do</h2>
      <p>
        The skills I picked up during my studies and personal projects are various.
        Rather than listing them all, I'll just list the ones I'm most proud of.
      </p>
      
      <h3>Programming languages</h3>    
      <p>
        The languages I have the most knowledge on are:
        Ruby, Javascript, Python and Golang. The 3 last ones are the ones I still use regularly.
      </p>

      <h3>Frameworks</h3>
      <p>
        The frameworks I've used the most are: Ruby on Rails, React, Svelte, FastAPI and Gin.
      </p>

      <h3>Collaborative work</h3>
      <p>
        I understand the Agile mindset and I know how to apply it. I've noticed the difference it makes in terms of productivity and quality of work.
        I especially like to work with people that understand the importance of good communication and don't think of Agile as a burden.
      </p>

      <h3>Other</h3>
      <p>
        I know how to use Docker, Git and Linux pretty well. I have enough knowledge of AWS, Azure, Bash, SQL and NoSQL to use them in a project.
      </p>

    </div>
  </div>

</div>

<style lang="scss">
  .main_wrapper {
    max-width: $max-width;
    margin: 0 auto;

    @media (max-width: $max-width-margin) {
      margin: 0 $margin;

      .hobbies-fig img {
        width: 100%;
      }
    }
  }
  
  .hero {
    height: calc(100vh - ($header-height + 2 * $header-padding));
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: clamp(4rem, 10vw, 8rem);
      text-align: center;
    }

    .scroll-icon {
      color: var(--text-color);
      position: absolute;
      bottom: 5%;
      left: 50%;
      transform: translate(-50%, 0);
      animation: up-and-down 2s ease-in-out infinite;
      
      svg {
        width: 2em;
        height: 2em;
      }
    }
  }

  @keyframes up-and-down {
    0% { bottom: 5%; }
    50% { bottom: 7%; }
    100% { bottom: 5%; }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 100px;
    align-items: center;

    h2 {
      text-align: center;
    }
    
    .presentation {
      grid-area: 1 / 1 / span 1 / span 1;
    }

    .presentation-fig {
      grid-area: 1 / 2 / span 1 / span 1;
      aspect-ratio: 1 / 1;
    }

    .path {
      grid-area: 2 / 2 / span 1 / span 1;
    }

    .path-fig {
      grid-area: 2 / 1 / span 1 / span 1;
    }
    
    .hobbies {
      grid-area: 3 / 1 / span 1 / span 1;
    }
    
    .skills {
      grid-area: 4 / 2 / span 1 / span 1;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;

      .presentation, .path, .hobbies, .skills, .presentation-fig, .path-fig {
        grid-area: auto;
      }
    }
  }

  .image-frame {
    overflow: hidden;

    img {
      display: block;
      width: 100%;
    }
  }

  .hobbies-fig img {
    width: 60%;
    display: block;
    margin: 0 auto;
  }

  .path-fig {
    display: flex;
    flex-direction: column;
    align-items: center;

    .image-frame {
      width: 60%;
    }

    div {
      border-top: 3px solid;
      border-image: linear-gradient(to right, var(--primary) 0%, var(--secondary) 100%);
      border-image-slice: 1;
      border-width: 3px;
      margin: 0;
      padding: 40px;
      position: relative;
      overflow: visible;

      &:before {
        content: attr(data-year);
        position: absolute;
        color: var(--primary);
        font-size: 1.2em;
        font-weight: 500;

        writing-mode: vertical-lr;
        height: 100%;
        text-align: center;
        top: 0;
      }
    }

    //odd number borders
    div:nth-child(odd) {
      border-right: 3px solid;
      padding-left: 0;
      
      &:before {
        left: 100%;
      }
    }

    //even number borders
    div:nth-child(even) {
      border-left: 3px solid;
      padding-right: 0;
      
      &:before {
        right: 100%; 
        transform: rotate(180deg);
      }
    }

    //handle first and last
    div:first-child {
      border-top: 0;
      border-top-right-radius:0;
      border-top-left-radius:0;
    }
    div:last-child {
      border-bottom-right-radius:0;
      border-bottom-left-radius:0;
    }
  }

  /* Display the correct images based on the theme */
  .light .image-frame {
    .uni-rouen {
      content: url("/images/about/univ_rouen_logo.png")
    }

    .thp {
      content: url("/images/about/THP_logo.png")
    }

    .simplon {
      content: url("/images/about/simplon_logo.png")
    }
  }

  .dark .image-frame {
    .uni-rouen {
      content: url("/images/about/univ_rouen_dark_logo.png")
    }

    .thp {
      content: url("/images/about/THP_dark_logo.png")
    }

    .simplon {
      content: url("/images/about/simplon_dark_logo.png")
    }
  }
</style>