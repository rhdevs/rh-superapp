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
  cca: string // TODO: replace with CCA type
  image: StaticImageData
}

export const valentinesFundraiser: Event = {
  id: 1,
  startTime: new Date('2021-02-14T12:00:00'),
  endTime: new Date('2021-02-14T13:00:00'),
  name: 'RC SP Valentines Fundraiser1',
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
  signUpLink: 'https://google.com',
  cca: 'Raffles Volunteer Corps',
  image: {
    src: '/assets/sample-photos/photo1.jpg',
    width: 300,
    height: 300,
  },
}

export const animalTherapy: Event = {
  id: 2,
  startTime: new Date('2021-02-14T12:00:00'),
  endTime: new Date('2021-02-14T13:00:00'),
  name: 'Animal Therapy2',
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

export const buffer1: Event = {
  id: 3,
  startTime: new Date('2021-02-14T12:00:00'),
  endTime: new Date('2021-02-14T13:00:00'),
  name: 'Animal Therapy3',
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

export const buffer2: Event = {
  id: 4,
  startTime: new Date('2021-02-14T12:00:00'),
  endTime: new Date('2021-02-14T13:00:00'),
  name: 'Animal Therapy4',
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

export const buffer3: Event = {
  id: 5,
  startTime: new Date('2021-02-14T12:00:00'),
  endTime: new Date('2021-02-14T13:00:00'),
  name: 'Animal Therapy5',
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

export const buffer4: Event = {
  id: 6,
  startTime: new Date('2021-02-14T12:00:00'),
  endTime: new Date('2021-02-14T13:00:00'),
  name: 'Animal Therapy6',
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

export const buffer5: Event = {
  id: 7,
  startTime: new Date('2021-02-14T12:00:00'),
  endTime: new Date('2021-02-14T13:00:00'),
  name: 'Animal Therapy7',
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

export const buffer6: Event = {
  id: 8,
  startTime: new Date('2021-02-14T12:00:00'),
  endTime: new Date('2021-02-14T13:00:00'),
  name: 'Animal Therapy8',
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

export const buffer7: Event = {
  id: 9,
  startTime: new Date('2021-02-14T12:00:00'),
  endTime: new Date('2021-02-14T13:00:00'),
  name: 'Animal Therapy9',
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

export const buffer8: Event = {
  id: 10,
  startTime: new Date('2021-02-14T12:00:00'),
  endTime: new Date('2021-02-14T13:00:00'),
  name: 'Animal Therapy10',
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

export const buffer9: Event = {
  id: 11,
  startTime: new Date('2021-02-14T12:00:00'),
  endTime: new Date('2021-02-14T13:00:00'),
  name: 'Animal Therapy11',
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

export const dummyData: Event[] = [
  valentinesFundraiser,
  animalTherapy,
  buffer1,
  buffer2,
  buffer3,
  buffer4,
  buffer5,
  buffer6,
  buffer7,
  buffer8,
  buffer9,
]
