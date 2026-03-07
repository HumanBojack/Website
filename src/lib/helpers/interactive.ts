import { browser } from '$app/environment';

// Not pretty but it avoids using fs and I can tweak the scale from code
const bassNotes = ["e", "g", "a", "b", "d", "eO"]
let bassAudios: Array<HTMLAudioElement> = []
if (browser) {
  bassAudios = bassNotes.map((note) => new Audio(`/audio/bass/${note}.mp3`))
}

// Look mum I used types in typescript for once !!
const random = <Type>(list: Array<Type>): Type => {
  return list[Math.floor(Math.random() * list.length)];
}

const playRandomBassNote = () => {
  let s = random(bassAudios)
  s.play()
}

export {
  playRandomBassNote,
}
