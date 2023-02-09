// use these values for testing purposes

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
}

export const valentinesFundraiser: Event = {
  id: 1,
  startTime: new Date('2021-02-14T12:00:00'),
  endTime: new Date('2021-02-14T13:00:00'),
  name: 'RC SP Valentines Fundraiser',
  description: `
    Still thinking of what to get your friends or that special someone for VALENTINES DAY? RVC SP got you!!! 
    With a wide assortment of gifts from fresh flowers and preserved flowers , there's bound to be something for everyone! 
    As all stocks are limited, fill up the pre order form HERE to get FIRST DIBS on your items! 
    
    P.S. Due to unforeseen circumstances, our crochet flowers will not be sold anymore but fret not! 
    The other options are still available so faster PREORDER NOWWWW
    
    All profits will be channelled to support the welfare of our beneficiaries so DONT WAIT ANYMORE!!! 
    Show your love to your friends/ boo and do a good deed today!
  `,
  type: 'fundraiser',
  tags: 'culture',
  signUpLink: 'https://google.com',
  cca: 'Raffles Volunteer Corps',
}

export const animalTherapy: Event = {
  id: 2,
  startTime: new Date('2021-02-14T12:00:00'),
  endTime: new Date('2021-02-14T13:00:00'),
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
}
