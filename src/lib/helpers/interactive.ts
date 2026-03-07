import { Howl } from 'howler';

const bassSpriteMap = {
  "e0": [0, 531],
  "d": [1031, 520],
  "b": [2051, 518],
  "a": [3069, 519],
  "g": [4088, 520],
  "e": [5108, 515]
}

// Look mum I used types in typescript for once !!
const random = <Type>(list: Array<Type>): Type => {
  return list[Math.floor(Math.random() * list.length)];
}

const playRandomBassNote = () => {
  let note = random(Object.keys(bassSpriteMap))
  let s = new Howl({
    src: ["/audio/sprites/bass.mp3", "/audio/sprites/bass.wav"],
    sprite: bassSpriteMap
  })

  s.play(note);
}

export {
  playRandomBassNote,
}
