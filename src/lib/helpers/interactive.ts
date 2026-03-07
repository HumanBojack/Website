import { Howl } from 'howler';

// Not pretty but it avoids using fs and I can tweak the scale from code
const bassNotes = ["e", "g", "a", "b", "d", "eO"]

// Look mum I used types in typescript for once !!
const random = <Type>(list: Array<Type>): Type => {
  return list[Math.floor(Math.random() * list.length)];
}

const playRandomBassNote = () => {
  let note = random(bassNotes)
  let s = new Howl({
    src: [`/audio/bass/${note}.mp3`]
  })

  s.play();
}

export {
  playRandomBassNote,
}
