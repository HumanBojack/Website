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

const synthSpriteMap = {
  "Em": [0, 2769],
  "Am/E": [3692, 2769],
  "Cmaj/E": [7385, 2769],
  "Bm/Gb": [11077, 2769],
}

const paintSpriteMap = [
  [349, 665],
  [1717, 349],
  [2784, 461],
  [3894, 526],
  [5208, 791],
  [6520, 823],
  [8133, 535],
  [9533, 621],
  [10918, 459],
  [12025, 381],
  [12971, 271],
  [13998, 251],
  [15062, 313],
  [16239, 288],
  [17321, 352],
  [18283, 310],
  [19366, 328],
  [20323, 501],
  [21429, 414],
  [22681, 506],
  [23794, 644],
  [25142, 671]
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

const playRandomSynthNote = () => {
  let note = random(Object.keys(synthSpriteMap))
  let s = new Howl({
    src: ["/audio/sprites/synth.mp3", "/audio/sprites/synth.wav"],
    sprite: synthSpriteMap,
  })

  s.play(note);
}

const playRandomPaintSound = () => {
  let i = random(Object.keys(paintSpriteMap))
  let s = new Howl({
    src: ["/audio/sprites/paint.mp3", "/audio/sprites/paint.wav"],
    sprite: paintSpriteMap,
  })

  s.play(i);
}

export {
  playRandomBassNote,
  playRandomVoiceClip,
  playRandomSynthNote,
  playRandomPaintSound,
}
