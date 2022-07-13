import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'

export const textContactEn = 'Any questions call me on whatsapp!'

export const textFactsEn = [
  { id: 0, name: 'Clients', number: 236 },
  { id: 1, name: 'Tattoos', number: 578 },
  { id: 2, name: 'Drawings', number: 1024 },
  { id: 3, name: 'Paintings', number: 95 },
]

export const textFormEn = [
  {
    id: 0,
    name: 'nome',
    label: 'Name',
    type: 'text',
    multi: false,
    value: 255,
    message: 'Too much!',
    maxText: 'Required Field',
    required: true,
  },
  {
    id: 1,
    name: 'email',
    label: 'Email',
    type: 'email',
    multi: false,
    value: 255,
    message: 'Too much!',
    maxText: 'Required Field',
    required: true,
  },
  {
    id: 2,
    name: 'telefone',
    label: 'Telephone',
    type: 'tel',
    multi: false,
    value: 30,
    message: 'Too much!',
    maxText: 'Required Field',
    required: true,
  },
  {
    id: 3,
    name: 'textarea',
    label: 'Write your order here',
    type: 'text',
    multi: true,
    value: 2000,
    message: 'Too much!',
    maxText: false,
    required: false,
  },
]

export const textAlertEn = {
  title: 'Message sent successfully!',
  body: 'We will contact you soon.',
}

export const textInfoEn = {
  logo: { start: 'Under', mid: '\u005C', end: 'Ground' },
  name: 'Vitor Valentim',
  description: 'Designer, tattoo artist, painter, graffiti artist and CEO',
  address: 'Address: R. Pe. Vieira Machado de uvas, 200A',
  phone: 'Phone: +20 11 99123-4567',
  cell: 'What\u0060s: +20 11 99123-4567',
  gmail: 'Gmail: vitor.underground',
  copyright: '©Copyright 2022 All rights reserved',
}

export const textIconsEn = [
  {
    id: 0,
    href: 'https://wa.me/5511999999999',
    title: 'whatsapp',
    icon: <WhatsAppIcon />,
  },
  {
    id: 1,
    href: 'https://www.instagram.com/',
    title: 'instagram',
    icon: <InstagramIcon />,
  },
]

export const textCardsEn = [
  { id: 1, text: 'Amazing work, you are the GOAT. Congratulations brother 🐨' },
  { id: 2, text: 'u guys r so bad ass! Hands down, u rock! 👏✍🤙' },
  { id: 3, text: 'You do have what it takes to be an ink master 🔥🔥' },
  { id: 4, text: 'Wow, love seeing somebody so passionate about what they do' },
  { id: 5, text: 'His work is mind blowing and just incredible.' },
  {
    id: 6,
    text: 'OMFG that tatoo looks AMAZING, great job.',
  },
  { id: 7, text: 'Wow, Awesome tatt!!! 😱😱😱' },
  {
    id: 8,
    text: 'wow he\u0060s so gentle and the lines are amazing😍😍😍',
  },
  { id: 9, text: 'Another masterpiece 👏👏👌👍' },
  { id: 10, text: 'This is nice 💯🔥' },
  {
    id: 11,
    text: 'Legend! Been following him on Instagram the last year or so',
  },
  { id: 12, text: 'Keep up the great work.' },
]

export const textButtonEn = 'Submit'

export const textMainEn = {
  title: 'Under\u005Cground',
  subtitle: 'Tattoos - Drawing - Paintings',
}

export const actionsEn = [
  {
    icon: <WhatsAppIcon />,
    name: 'Whatsapp',
    href: 'https://wa.me/5511999999999',
  },
  { icon: <TwitterIcon />, name: 'Twitter', href: 'https://twitter.com/' },
  {
    icon: <InstagramIcon />,
    name: 'Instagram',
    href: 'https://www.instagram.com/',
  },
  {
    icon: <YouTubeIcon />,
    name: 'Youtube',
    href: 'https://www.youtube.com/',
  },
]

export const textSpeedEn = {
  aria: 'Social media',
  icon: <WhatsAppIcon />,
}
