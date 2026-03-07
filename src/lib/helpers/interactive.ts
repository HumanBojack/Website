import { Howl } from 'howler';

const bassSpriteMap = {
  "e0": [0, 531],
  "d": [1031, 520],
  "b": [2051, 518],
  "a": [3069, 519],
  "g": [4088, 520],
  "e": [5108, 515]
}

const voiceSpriteMap = [
  [0, 750],
  [1425, 2056],
  [4521, 660],
  [6042, 1225],
  [8296, 354],
  [9415, 488],
  [10880, 1393],
  [12885, 853],
  [14479, 798],
  [15359, 850],
  [17019, 864],
  [19106, 696]
]
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

const playRandomVoiceClip = () => {
  let line = random(Object.keys(voiceSpriteMap))
  let s = new Howl({
    src: ["/audio/sprites/voice.mp3", "/audio/sprites/voice.wav"],
    sprite: voiceSpriteMap,
  })

  s.play(line);
}

export {
  playRandomBassNote,
  playRandomVoiceClip
}
