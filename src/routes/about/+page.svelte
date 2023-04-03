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


    <div class="hobbies">
      <h2>What I like</h2>
    </div>

    <div class="skills">
      <h2>What I do</h2>
    </div>
  </div>

</div>

<style lang="scss">
  .main_wrapper {
    max-width: $max-width;
    margin: 0 auto;

    @media (max-width: $max-width-margin) {
      margin: 2rem $margin;
    }
  }
  
  .hero {
    height: calc(100vh - ($header-height + 1.5rem));
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 8rem;
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
    grid-row-gap: 20px;

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
    
    .hobbies {
      grid-area: 3 / 1 / span 1 / span 1;
    }
    
    .skills {
      grid-area: 4 / 2 / span 1 / span 1;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;

      .presentation, .path, .hobbies, .skills {
        grid-area: auto;
      }
    }
  }
</style>