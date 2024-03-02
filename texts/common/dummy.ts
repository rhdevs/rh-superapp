// use these values for testing purposes

import { StaticImageData } from 'next/image'

export type Event = {
  id: number
  startTime: Date
  endTime: Date
  name: string
  description: string
  type: 'event' | 'fundraiser' | 'announcement'
  tags: 'sports' | 'culture' | 'committee' | 'general'
  signUpLink?: string
  photoLink?: string
  cca: string // TODO: replace with CCA type
  image: StaticImageData
}

export const valentinesFundraiser: Event = {
  id: 1,
  startTime: new Date('2023-11-03T13:00:00'),
  endTime: new Date('2023-11-03T14:00:00'),
  name: 'RC SP Valentines Fundraiser',
  description: `
    Still thinking of what to get your friends or that special someone for VALENTINES DAY? RVC SP got you!!! 
    With a wide assortment of gifts from fresh flowers and preserved flowers , there's bound to be something for everyone! 
    As all stocks are limited, fill up the pre order form HERE to get FIRST DIBS on your items! 
    .
    P.S. Due to unforeseen circumstances, our crochet flowers will not be sold anymore but fret not! 
    The other options are still available so faster PREORDER NOWWWW
    
    All profits will be channelled to support the welfare of our beneficiaries so DONT WAIT ANYMORE!!! 
    Show your love to your friends/ boo and do a good deed today!
  `,
  type: 'fundraiser',
  tags: 'culture',
  cca: 'Raffles Volunteer Corps',
  image: {
    src: '/assets/sample-photos/photo1.jpg',
    width: 300,
    height: 300,
  },
}

export const animalTherapy: Event = {
  id: 2,
  startTime: new Date('2023-11-03T13:00:00'),
  endTime: new Date('2023-11-03T16:00:00'),
  name: 'Animal Therapy',
  description: `
    Already behind on school work and feeling stressed? Or love animals and want to interact with cute dogs? 
    RVC SP X HeaRHtfelt X RHSafe X AnG presents ANIMAL THERAPY

    Come down to interact with cute dogs from Animals Lovers League (ALL) and de-stress! 
    There will be other booths such as nail painting , jagua ink drawing and a customised key chain booth. 
    Proceeds from these booths will go directly to the animal shelter we are working with
  `,
  type: 'event',
  tags: 'general',
  cca: 'Raffles Volunteer Corps',
  image: {
    src: '/assets/sample-photos/photo2.jpg',
    width: 300,
    height: 300,
  },
}

export const supperhBus: Event = {
  id: 3,
  startTime: new Date('2024-02-23T21:00:00'),
  endTime: new Date('2024-02-24T02:00:00'),
  name: 'SupperRH Bus',
  signUpLink: 'https://forms.gle/xdPz6pNMGYGLYptk8',
  description: `
BEEP BEEEEP ITS THE WEEK OF RH's ANNUAL SUPPERH BUS!!🚌🚌

sign ups are closing TODAYYYYY (MONDAY 19/2) 2359 

Date: 23 February 
Time: 9pm - 2am
Cost: $2 per ticket

Remember to join the telegram channel to get updates on the event! 
Link: https://t.me/+CbqWWLJShZQ1MTE1

Sign up link: https://forms.gle/xdPz6pNMGYGLYptk8

GOOO SIGN UP NOW!!
  `,
  type: 'event',
  tags: 'general',
  cca: 'Social Comm',
  photoLink: 'http://gofile.me/50MR7/MZg3XS8J8',
  image: {
    src: '/assets/sample-photos/supperhbus.jpg',
    width: 300,
    height: 300,
  },
}

export const chec: Event = {
  id: 4,
  startTime: new Date('2024-02-15T19:00:00'),
  endTime: new Date('2024-02-15T21:00:00'),
  name: 'Combined Hall Ensemble Concert',
  description: `
   🥁Raffles Hall Culture Committee presents.....🥁


Combined Hall Ensemble Concert (CHEC) 2024: HONUS Goes To The Movies 🎬🎶

Concert Details
Date 📆 : 15 February, Thursday
Time ⏰ : 7:00pm - 9:00pm
Venue📍 : UCC Theatre
Ticket Price 🎟 : FREE 

Join us and step👣 into a world of enchantment✨, where every note tells a tale🎵🎞 and immerse yourself in the mesmerizing tunes inspired by blockbuster hits🎥 at this year's CHEC 🤩

Traverse from the magical world of "Harry Potter "🧙🧹 to the Oscar-winning melodies of "La La Land "💃🕺Feel the nostalgia❤️‍🔥 with "小幸运 "🍀 and experience the poignant🥺 beauty of "Kimi no Na wa"💫 Also get ready for excitement and wonder 🤩 with "The Greatest Showman"🎩🎪 and many more 🥳‼️

Hearsay there's also FREE LUCKY DRAW FOR AUDIENCES to win ATTRACTIVE PRIZES 🎧📸🔊🍳

What are you waiting for?? Get your ticket NOW!!🫵🔥

(Follow our instagram @rh_culturecomm for more updates 🫶)
  `,
  type: 'event',
  tags: 'culture',
  cca: 'Culture Comm',
  signUpLink: 'https://www.eventbrite.sg/e/emcc-combined-hall-ensemble-concert-by-halls-of-nus-tickets-770156527907?aff=oddtdtcreator',
  photoLink: 'http://gofile.me/50MR7/1vmpyzTuC',
  image: {
    src: '/assets/sample-photos/chec.jpg',
    width: 300,
    height: 300,
  },
}

export const dnd: Event = {
  id: 5,
  startTime: new Date('2024-03-16T17:00:00'),
  endTime: new Date('2024-03-16T21:00:00'),
  name: '65th Dinner & Dance',
  description: `
🎉 Get ready to relive the magic of prom night! Don't miss out on our upcoming 

💃💃Dinner & Dance💃💃
 event at Orchid Country Club on March 16th, starting at 5PM (Saturday). This year promises to be even more sensational than before, with an exquisite 8-course menu🍴✨ awaiting you. 
The theme of the event will be Vintage Vogue 🪩🍷🎞, promising an enchanting ambience that will transport you to another era. But that's not all! We've got over 30 lucky draw prizes worth $2000 up for grabs, making your evening even more thrilling. 🎁💰
But hurry, seats are limited! Make sure to secure your spot before it's too late. We've heavily discounted the entrance fee, so don't miss out on this special offer. 😮
Prepare to be dazzled by special performances lined up exclusively for you. 🌟 Make your last days in RH unforgettable by joining us for an evening of glamour, fun, and fabulous prizes.
Sign up now at tinyurl.com/VintageVogueDnD2324 and get ready to make memories that will last a lifetime! See you there! 💃🏻✨
  `,
  type: 'event',
  tags: 'general',
  cca: 'Dinner & Dance',
  signUpLink: 'http://tinyurl.com/VintageVogueDnD2324',
  image: {
    src: '/assets/sample-photos/dnd.jpg',
    width: 300,
    height: 300,
  },
}

export const glassjar: Event = {
  id: 6,
  startTime: new Date('2024-03-05T20:00:00'),
  endTime: new Date('2024-03-05T22:00:00'),
  name: 'Glass Jar Workshop',
  description: `
   Room looking empty?😔 Lacking decorations? Fret not!🥳

Join Green Comm x AnG for a relaxing evening of creativity🤩 and mindfulness on 05 March (Tues) from 8-9pm or 9-10pm at our Glass Jar Lights Workshop!🫙🌟
In this workshop🎨, you'll learn how to create your very own decorative glass jar using a variety of fairy lights 🕯 colourful sands ❤️🧡💛💚💙💜 and decorative elements!🌈 This is a great opportunity to de-stress and unwind with your friends!

Space is limited😔, so be sure to reserve your spot today 😄🤩 by filling up this form (https://tinyurl.com/rhglassjar2024)
We look forward to seeing you there!🥳
  `,
  signUpLink: 'https://tinyurl.com/rhglassjar2024',
  type: 'event',
  tags: 'general',
  cca: 'Green Comm',
  image: {
    src: '/assets/sample-photos/glassjar.jpg',
    width: 300,
    height: 300,
  },
}

export const tomodachi: Event = {
  id: 7,
  startTime: new Date('2024-02-21T19:30:00'),
  endTime: new Date('2024-02-21T21:30:00'),
  name: 'Project Tomodachi: Heartstrings Unplugged',
  description: `
   Mark your calendars for a musical journey like no other! RH Unplugged proudly presents...

❤️Project Tomodachi: Heartstrings Unplugged

Featuring EH Bandits, KEVII Band, KR Rockers, KR Inspire, Sheares Geyao, RHockerfellas, and of course RH Unplugged, we are sure to enchant your senses and celebrate the spirit of friendship and family through music🎶✨

❗️Concert Details:
🗓 Date: February 21, 2024 (Wednesday)
🕢 Time: 7:30 PM - 9:30 PM
📍 Venue: Shaw Foundation Alumni House

🎫Ticket Information:
💲 Price: $5 (while stocks last)
🧧 Purchase your tickets now at https://nusfastpay.nus.edu.sg/projecttomodachi2024

📣 Share the Love!!!
So what are you waiting for? Hurry up and grab your friends, family, and fellow music enthusiasts and sign up right NOW!!!
  `,
  signUpLink: 'https://nusfastpay.nus.edu.sg/projecttomodachi2024',
  type: 'event',
  tags: 'culture',
  cca: 'Unplugged',
  photoLink: 'http://gofile.me/50MR7/5DzutIr4W',
  image: {
    src: '/assets/sample-photos/tomodachi.png',
    width: 300,
    height: 300,
  },
}
export const jcrc: Event = {
  id: 8,
  startTime: new Date('2023-03-06T00:00:00'),
  endTime: new Date('2023-03-06T23:59:59'),
  name: 'JCRC Nomination',
  description: `
   Dear RHesidents,
 
The time for the 66th JCRC Elections is almost here. Want to contribute and make a difference? Your chance is now! Find out more about the respective portfolios by contacting the respective JCRC members!
 
Lim Choon Wei (President): @choonweiiiii 
Mohammad Afiq Ihsan/ Xavier Thng (VPI): @fiqqiess , @thexavvv 
Mohammad Afiq Ihsan (VPE): @fiqqiess 
Ansenn Lee (HGS): @ansenn 
Xavier Thng (Finance Director): @thexavvv 
Marcus Teu (Sports Director Int): @marcusteu 
Tan Zi Xi (Sports Director Ext): @tzixi 
Teo Yew Jie (Social Director): @yewjiez 
Bryan Boey (Welfare Director): @uefabb 
Lim Choon Wei (Culture Director): @choonweiiiii 
Qian Yi-An (Media Director): @yian0608 
 
 
NOMINATION PERIOD: 26th February (Monday) -  6th March 2024 (Wednesday), 2359H
  `,
  type: 'event',
  tags: 'general',
  cca: 'jcrc',
  image: {
    src: '/assets/sample-photos/jcrc.jpg',
    width: 300,
    height: 300,
  },
}

export const dummyData: Event[] = [
  jcrc,
  dnd,
  glassjar,
  supperhBus,
  chec,
  tomodachi,
  valentinesFundraiser,
  animalTherapy
]
