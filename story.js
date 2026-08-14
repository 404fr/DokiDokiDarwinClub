/**
 * Doki Doki Darwin Club - Enhanced Game Script & Poem Minigame Data
 */

window.GAME_POEM_WORDS = [
  { word: "BUTT-SLIDE", points: { darwin: 3, daniel: 1, rafiki: 0 } },
  { word: "SIGMA MALE", points: { darwin: 1, daniel: 3, rafiki: 0 } },
  { word: "BAKA RAWR", points: { darwin: 0, daniel: 0, rafiki: 3 } },
  { word: "PERIODT 💅", points: { darwin: 1, daniel: 2, rafiki: 1 } },
  { word: "RUSTY SPOON", points: { darwin: 0, daniel: 0, rafiki: 0 } },
  { word: "MUSHROOM BREAD", points: { darwin: 3, daniel: 0, rafiki: 1 } },
  { word: "ASPHALT SKID", points: { darwin: 3, daniel: 1, rafiki: 0 } },
  { word: "MASTER DEBATE", points: { darwin: 1, daniel: 3, rafiki: 0 } },
  { word: "SHY FEMBOY", points: { darwin: 0, daniel: 0, rafiki: 3 } },
  { word: "JUICE BOX", points: { darwin: 2, daniel: 0, rafiki: 3 } },
  { word: "BALENCIAGA", points: { darwin: 0, daniel: 2, rafiki: 1 } },
  { word: "10KG TEXTBOOK", points: { darwin: 1, daniel: 1, rafiki: 0 } },
  { word: "JIDION MOVE", points: { darwin: 2, daniel: 2, rafiki: 2 } },
  { word: "BREAK BUILDS", points: { darwin: 3, daniel: 3, rafiki: 3 } }
];

window.GAME_STORY = {
  chapters: [
    {
      id: "ch1",
      title: "Chapter 1: The Hospital & The Bakery Slip",
      nodes: [
        {
          bg: "assets/bg_bakery.jpg",
          bgm: "happy",
          speaker: "Narrator",
          text: "It was a peaceful afternoon in town. Darwin, our glorious lead character, stepped casually into the local bakkery...",
          char: { name: "Darwin", img: "assets/char_darwin.jpg", pos: "center" }
        },
        {
          bg: "assets/bg_bakery.jpg",
          speaker: "Darwin",
          text: "Ah, what a wonderful day to get some fresh bread—AAAGHHH?!",
          sound: "punch",
          char: { name: "Darwin", img: "assets/char_darwin_shocked.jpg", pos: "center", shake: true }
        },
        {
          bg: "assets/bg_bakery.jpg",
          speaker: "Narrator",
          text: "Darwin slips on an unsuspecting piece of bread and literally breaks his skull wide open on the tile floor!",
          sound: "punch",
          glitch: true,
          char: { name: "Darwin", img: "assets/char_darwin_shocked.jpg", pos: "center", shake: true }
        },
        {
          bg: "assets/bg_hospital.jpg",
          bgm: "sigma",
          speaker: "Narrator",
          text: "Darwin slowly opens his eyes in a sanitized hospital room. A shadowy figure towers menacingly over his bed...",
          char: { name: "Daniel", img: "assets/char_daniel.jpg", pos: "center", aura: "sigma-aura" }
        },
        {
          bg: "assets/bg_hospital.jpg",
          speaker: "Daniel",
          text: "Yo waddup lil cuh tf are you doing in my club domain you lil weak ass home skillet.",
          char: { name: "Daniel", img: "assets/char_daniel.jpg", pos: "center", bounce: true, aura: "sigma-aura" }
        },
        {
          bg: "assets/bg_hospital.jpg",
          speaker: "Darwin",
          text: "Sorry master!~ 😭🙏",
          char: { name: "Darwin", img: "assets/char_darwin_shocked.jpg", pos: "left" }
        },
        {
          bg: "assets/bg_hospital.jpg",
          speaker: "Daniel",
          text: "aight I’m gone pal, Peace out waddles.",
          char: null
        },
        {
          bg: "assets/bg_hospital.jpg",
          bgm: "happy",
          speaker: "Rafiki",
          text: "Darwin are you okay? Not that I care or anything hmpf~…Baka Baka rawr!",
          char: { name: "Rafiki", img: "assets/char_rafiki.jpg", pos: "right", bounce: true, aura: "tsundere-angry" }
        },
        {
          bg: "assets/bg_hospital.jpg",
          speaker: "Narrator",
          text: "Without warning, Rafiki delivers a terrifying right hook directly into Darwin's face for absolutely no reason!",
          sound: "punch",
          char: { name: "Rafiki", img: "assets/char_rafiki.jpg", pos: "right", aura: "tsundere-angry" },
          screenShake: true
        },
        {
          bg: "assets/bg_hospital.jpg",
          speaker: "Darwin",
          text: "YEAOUWCH!!! why you bulleh me?😢",
          char: { name: "Darwin", img: "assets/char_darwin_shocked.jpg", pos: "left", shake: true }
        },
        {
          bg: "assets/bg_hospital.jpg",
          speaker: "Rafiki",
          text: "fuck you! you fat piece of shit dick Fag tree hummus!",
          char: { name: "Rafiki", img: "assets/char_rafiki.jpg", pos: "right", aura: "tsundere-angry" }
        },
        {
          bg: "assets/bg_hospital.jpg",
          speaker: "Narrator",
          text: "Rafiki aggressively storms out of the hospital ward, slamming the door.",
          char: null
        },
        {
          bg: "assets/bg_hospital.jpg",
          speaker: "Darwin",
          text: "shes so mean to me…grrr! It’s not like she secretly likes me or anything… that would be absurd!",
          char: { name: "Darwin", img: "assets/char_darwin.jpg", pos: "center" }
        },
        {
          bg: "assets/bg_bakery.jpg",
          bgMode: "asphalt",
          bgm: "happy",
          speaker: "Narrator",
          text: "Discharged from the hospital, Darwin begins his daily commute home by sliding on his butt across the hot asphalt. The locals call him the Asphalt Sliding Menace.",
          sound: "screech",
          char: { name: "Darwin", img: "assets/char_darwin_butt_slide.jpg", pos: "center", bounce: true }
        },
        {
          bg: "assets/bg_bakery.jpg",
          bgMode: "asphalt",
          speaker: "Darwin",
          text: "I am known for sliding on asphalt that’s my whole charafter trait in this story! I Invested all my skill points on that. Also why i have such a small penis.",
          char: { name: "Darwin", img: "assets/char_darwin_butt_slide.jpg", pos: "center" }
        },
        {
          bg: "assets/bg_bakery.jpg",
          speaker: "Narrator",
          text: "After what felt like mere minutes of intense friction, Darwin reaches his front door and violently kicks it open!",
          char: null
        },
        {
          bg: "assets/bg_bakery.jpg",
          speaker: "Darwin",
          text: "Whats up fam!!! What’s up my D A double D Y, and you too mother I am quite grateful to you for making me such a culinary masterpiece! And my brother is here too I guess His names Pactilion but he has no relevance to the story whatsoever.",
          char: { name: "Darwin", img: "assets/char_darwin.jpg", pos: "left" }
        },
        {
          bg: "assets/bg_bakery.jpg",
          bgm: "sigma",
          speaker: "Narrator",
          text: "Darwin walks into his bedroom and is stunned to find Daniel sitting casually on his bed.",
          char: { name: "Daniel", img: "assets/char_daniel.jpg", pos: "right", aura: "sigma-aura" }
        },
        {
          bg: "assets/bg_bakery.jpg",
          speaker: "Daniel",
          text: "Wsg cuh. I hope you don't mind me master debating in your room.",
          char: { name: "Daniel", img: "assets/char_daniel.jpg", pos: "right", bounce: true, aura: "sigma-aura" }
        },
        {
          bg: "assets/bg_bakery.jpg",
          speaker: "Darwin",
          text: "Bro its alr cuh. Which college girls are you master debating this time?",
          char: { name: "Darwin", img: "assets/char_darwin.jpg", pos: "left" }
        },
        {
          bg: "assets/bg_bakery.jpg",
          speaker: "Daniel",
          text: "Rafiki is getting master debated like crazy rn. I hope you don't mind cuh.",
          char: { name: "Daniel", img: "assets/char_daniel.jpg", pos: "right", aura: "sigma-aura" }
        },
        {
          bg: "assets/bg_bakery.jpg",
          speaker: "Darwin",
          text: "Fuck Rafiki can’t debate for shit! She or he i don't really know is gonna get cooked lowkeyley!",
          char: { name: "Darwin", img: "assets/char_darwin_shocked.jpg", pos: "left", shake: true }
        },
        {
          bg: "assets/bg_bakery.jpg",
          speaker: "Darwin",
          text: "But lowkey I’m like such a good guy and 6 meters tall like Marlon shit so I’ll save them? Or it? I don’t know this generation can be anything nowadays.",
          char: { name: "Darwin", img: "assets/char_darwin.jpg", pos: "center" }
        },
        {
          bg: "assets/bg_bakery.jpg",
          speaker: "System",
          text: "End of Chapter 1! Time to write a poem for the Literature Club before Chapter 2!",
          triggerPoem: true
        }
      ]
    },
    {
      id: "ch2",
      title: "Chapter 2: The Baddie Dog and the Kindergarten Sanctuary",
      nodes: [
        {
          bg: "assets/bg_bakery.jpg",
          bgMode: "asphalt",
          bgm: "dramatic",
          speaker: "Narrator",
          text: "As Darwin bursts out onto the street, an 800 kg enraged moose charges straight at him from out of nowhere!",
          char: { name: "Darwin", img: "assets/char_darwin_shocked.jpg", pos: "center", shake: true }
        },
        {
          bg: "assets/bg_bakery.jpg",
          bgMode: "asphalt",
          speaker: "Darwin",
          text: "NOT TODAY ANTLER BOZO! MAXIMUM ASPHALT FRICTION ACTIVATED!",
          sound: "screech",
          char: { name: "Darwin", img: "assets/char_darwin_butt_slide.jpg", pos: "center", bounce: true }
        },
        {
          bg: "assets/bg_bakery.jpg",
          bgMode: "asphalt",
          speaker: "Narrator",
          text: "Darwin drops to his glutes, gliding across the pavement at Mach 3 with sparks flying out of his pants! He slides straight through the double glass doors of the school!",
          sound: "screech",
          screenShake: true,
          char: { name: "Darwin", img: "assets/char_darwin_butt_slide.jpg", pos: "center" }
        },
        {
          bg: "assets/bg_bakery.jpg",
          bgMode: "detention",
          bgm: "happy",
          speaker: "Darwin",
          text: "Phew, safe! I totally juked that antler-wearing bozo!",
          char: { name: "Darwin", img: "assets/char_darwin.jpg", pos: "left" }
        },
        {
          bg: "assets/bg_bakery.jpg",
          bgMode: "detention",
          speaker: "Petticoat",
          text: "No running or butt-sliding in the halls, Darwin! You have detention! Also, meet our new transfer student. Be nice to her.",
          char: { name: "Petticoat", img: "assets/char_petticoat.jpg", pos: "right" }
        },
        {
          bg: "assets/bg_bakery.jpg",
          bgMode: "detention",
          speaker: "Spot",
          text: "Bark bark, periodt. 💅✨",
          sound: "victory",
          char: { name: "Spot", img: "assets/char_spot.jpg", pos: "right", bounce: true, aura: "baddie-sparkle" }
        },
        {
          bg: "assets/bg_bakery.jpg",
          bgMode: "detention",
          speaker: "Darwin",
          text: "Damn, she kind of bad though... acrylic nails, fake eyelashes, Balenciaga collar?! But I must stay focused! My heart belongs to Rafiki!",
          char: { name: "Darwin", img: "assets/char_darwin.jpg", pos: "left" }
        },
        {
          bg: "assets/bg_kindergarten.jpg",
          bgm: "happy",
          speaker: "Narrator",
          text: "Darwin stealthily sneaks out of Petticoat's detention class and sprints down to the Kindergarten wing—where he first bonded with Rafiki over a stolen juice box years ago.",
          char: null
        },
        {
          bg: "assets/bg_kindergarten.jpg",
          speaker: "Narrator",
          text: "Darwin kicks open the toddler playroom door and spots Rafiki ducking inside a plastic ball pit to escape Daniel's master debation tactics!",
          char: { name: "Rafiki", img: "assets/char_rafiki.jpg", pos: "right" }
        },
        {
          bg: "assets/bg_kindergarten.jpg",
          speaker: "Darwin",
          text: "Fear not, my shy femboy! I am here to save you from getting cooked lowkeyley!",
          char: { name: "Darwin", img: "assets/char_darwin.jpg", pos: "left", bounce: true }
        }
      ]
    },
    {
      id: "ch3",
      title: "Chapter 3: The Yandere Trap",
      nodes: [
        {
          bg: "assets/bg_kindergarten.jpg",
          bgm: "yandere",
          speaker: "Narrator",
          text: "Before Darwin can reach the ball pit, a heavy steel net drops down from the ceiling!",
          sound: "scare",
          glitch: true
        },
        {
          bg: "assets/bg_kindergarten.jpg",
          speaker: "Clara",
          text: "Hahaha! Notice me, Senpai! You will never reach Rafiki! I’ve been watching you slide on the asphalt for years!",
          char: { name: "Clara", img: "assets/char_clara.jpg", pos: "right", bounce: true, aura: "yandere-glitch-eye" }
        },
        {
          bg: "assets/bg_kindergarten.jpg",
          speaker: "Narrator",
          text: "Clara aggressively swings a 10 kg textbook, striking Darwin directly across his temple!",
          sound: "punch",
          screenShake: true,
          glitch: true
        },
        {
          bg: "assets/bg_clara_basement.jpg",
          bgm: "yandere",
          speaker: "Narrator",
          text: "Darwin wakes up tied to a wooden chair in Clara's damp basement. The walls are wallpapered with detailed photographs of Darwin's asphalt skid marks.",
          char: { name: "Darwin", img: "assets/char_darwin_shocked.jpg", pos: "left" }
        },
        {
          bg: "assets/bg_clara_basement.jpg",
          speaker: "Clara",
          text: "We are going to be together forever, Darwin-kun! I even stole more bread from the bakkery just for you!",
          char: { name: "Clara", img: "assets/char_clara.jpg", pos: "right", aura: "yandere-glitch-eye" }
        },
        {
          bg: "assets/bg_clara_basement.jpg",
          speaker: "Darwin",
          text: "Oh no, not the bread! That’s my only weakness besides my weird character traits! Wait... I have an idea!",
          char: { name: "Darwin", img: "assets/char_darwin_shocked.jpg", pos: "left" }
        },
        {
          bg: "assets/bg_clara_basement.jpg",
          speaker: "Narrator",
          text: "Darwin channels all his asphalt sliding muscle memory! He vibrates his hips at extreme ultra-high frequencies, generating burning friction heat that instantly incinerates Clara's ropes!",
          sound: "screech",
          screenShake: true,
          char: { name: "Darwin", img: "assets/char_darwin_butt_slide.jpg", pos: "left", bounce: true }
        },
        {
          bg: "assets/bg_clara_basement.jpg",
          speaker: "Darwin",
          text: "TACTICAL BARREL ROLL! DROPKICK THE BREAD!",
          sound: "punch",
          char: { name: "Darwin", img: "assets/char_darwin_butt_slide.jpg", pos: "center", bounce: true }
        },
        {
          bg: "assets/bg_clara_basement.jpg",
          speaker: "Narrator",
          text: "Darwin dropkicks the bakery bread straight out of Clara's hands and sprints out of the basement into the sunlight!",
          char: null
        },
        {
          bg: "assets/bg_kindergarten.jpg",
          bgMode: "sunset",
          bgm: "happy",
          speaker: "Darwin",
          text: "Rafiki, I escaped the yandere and the moose just for you! Let us be together!",
          char: { name: "Darwin", img: "assets/char_darwin.jpg", pos: "left" },
          charRight: { name: "Rafiki", img: "assets/char_rafiki.jpg", pos: "right" }
        },
        {
          bg: "assets/bg_kindergarten.jpg",
          bgMode: "sunset",
          bgm: "dramatic",
          speaker: "Rafiki",
          text: "Darwin... there is something I must show you...",
          glitch: true
        },
        {
          bg: "assets/bg_kindergarten.jpg",
          bgMode: "police-sirens",
          speaker: "Narrator",
          text: "Rafiki pulls a Jidion on Darwin and reveals that he indeed does have a dick!",
          sound: "scare",
          screenShake: true,
          glitch: true
        },
        {
          bg: "assets/bg_kindergarten.jpg",
          bgMode: "police-sirens",
          speaker: "Narrator",
          text: "Police sirens blare outside as SWAT officers crash through the roof and arrest Darwin on the spot!",
          sound: "punch"
        },
        {
          bg: "assets/title.jpg",
          bgm: "happy",
          speaker: "Moral of the Story",
          text: "THE END!\n\n\"Moral of the story: You don’t get mats from breaking someone else’s builds\"",
          isEnding: true
        }
      ]
    }
  ]
};
