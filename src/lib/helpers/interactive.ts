import { Howl } from 'howler';

// Look mum I used types in typescript for once !!
const random = <Type>(list: Array<Type>): Type => {
  return list[Math.floor(Math.random() * list.length)];
}

const interactionAnimation = [
  { rotate: "0deg" },
  { rotate: "-10deg" },
  { rotate: "10deg" },
  { rotate: "0deg" }
]

class Interactible {
  name: string
  spritemap: Array<Array<number>> | Map<string, Array<number>>
  button: HTMLElement
  soundnames: Array<string>
  s: Howl
  clicks: number

  constructor(name, spritemap, button) {
    this.name = name;
    this.spritemap = spritemap;
    this.button = button;

    this.soundnames = Object.keys(spritemap);
    this.s = new Howl({
      src: [`/audio/sprites/${name}.mp3`, `/audio/sprites/${name}.wav`],
      sprite: spritemap
    });
    this.clicks = 0;
  }

  interact() {
    // Update global and local counter
    this.clicks++

    // play a random sound
    let i = random(this.soundnames)
    this.s.play(i);

    // animate the element
    this.button.animate(interactionAnimation, 300)
  }
}

export {
  Interactible,
}
