// Types of contact methods
export const contactHeaders: string[] = ['Email', 'Contact Number', 'Address']

// Value of contact methods
export const contactMethods: Record<string, string> = {
  Email: 'raffleshalldevs@gmail.com',
  'Contact Number': '+65 98220941',
  Address: '19 Kent Ridge Crescent, Singapore 119278',
}

// Links to socials
export const contactLinks: Record<string, string> = {
  Instagram: 'https://www.instagram.com/rhdevs',
  LinkedIn: 'https://www.linkedin.com/company/rhdevs',
}

export const socialMedia = {
  title: 'Social Media',
  items: ['Instagram', 'LinkedIn'],
  links: contactLinks,
}

export const formFields = ['Name', 'Email', 'Message']
