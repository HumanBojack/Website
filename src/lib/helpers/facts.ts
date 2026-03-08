import { random } from "./random"

const facts = [
  "I love tea but I'm too sensitive to drink it daily :c",
  "I kinda want to dye my hair purple",
  "You know that piercing that's kinda like a chain on your nose? It's SOOOOO cool",
  "I live for projects but can't finish them",
  "I used to speedrun a game called 'Out There Somewhere'",
  "Alpacas are my favorite animals like wtf silly introverted ball of fluff",
  "I watch all my movies / shows / videos in x2 #TerribleAttentionSpan",
  "GPL > MIT",
  "I did studies in sound engineering but left for software engineering",
  "I kept myself from listening to one song to keep it but now I don't care about it",
  "I used to have like a super cool rc car that was SO fast",
  "I used to tryhard piano but I think I lost everything",
  "The dumbest the music the better ; give me BOOM BOOMS",
  "FUCK way too many people to fit on this screen",
  "I updated my website after seing hopeflea.net",
  "Obsessed witch Sriracha",
  "Had a traumatic experience in a VAL208 but still love them",
  "I hate to be heard when I play music",
  "I grew my hair from almost bald to long twice",
  "I used to be obsessed with keyboards",
  "I made a big deal about building a calculator in minecraft but it wasn't that impressive",
  "Anxious x1000000",
  "All my headsets broke the SAME way",
  "Had linux on my first computer",
  "Bought a mac a few months before the M1 got out",
  "I can't finish the microfreak documentation because I end up making music each time",
  "Used to be into speedcubing",
  "I use linux on all my computers!",
  "Rewired my brain to stop buying stuff as soon as I get into a new hobby",
  "I have a picture of me bald with a scooter on my head",
  "My cat is called Kluski",
  "I ask for records on christmas because it's the only thing I can think of",
  "Used to be an edgy kid",
]

const getRandomFact = (): string => {
  return random(facts)
}


export {
  getRandomFact,
}
