import RHDevs from '@/assets/sample-rhdevs-website/RHDevs-Logo-EventsPage.svg'
import UPGRHADEimg from '@/assets/sample-rhdevs-website/UPGRHADE-Logo-EventsPage.svg'
import InterHallimg from '@/assets/sample-rhdevs-website/InterHall-Logo-EventsPage.svg'

const InterHackathonDesc = (
  <>
    Raffles Hall held the very first Inter-Hall Hackathon, in collaboration with King-Edward VII
    hall, Eusoff hall and Kent Ridge Hall.
    <br />
    <br />
    The Inter-Hall Hackathon is held to foster healthy competitions, learning and relationships
    amongst developers of different halls.
    <br />
    <br />
    The participants had the following prompt. They could work in a group of up to 4 members, to
    create the minimum-viable product of the solutions. Participants also had to present their ideas
    to the judges on the last day of the Hackathon.
    <br />
    <br />
    Projects can be viewed{' '}
    <a style={{ color: '#10BCBC' }} href="https://nus-inter-hall-hack.devpost.com/project-gallery">
      here
    </a>
  </>
)

const RHAppLaunchDesc = (
  <>
    The culmination of half a year of hard work, the first large scale software project among NUS
    halls finally exited Beta and opened up for all residents. This project aims to resolve many
    common issues faced by our hall residents including booking of facilities, collating of supper
    orders and more.
    <br />
    <br />
    Apart from the convenience that our flagship application provides, it also serves a beacon of
    inspiration. This application proves that training developers and designers from scratch, then
    coordinating development efforts is possible, while gruelling and tedious. To find out more,
    click on our projects tab!
  </>
)

const upgRHadeDesc = (
  <>
    For our pilot project as a CCA, we invited all residents to provide feedback on what digital
    features they would like to see in our home away from home, with the best 3 entries walking away
    with $10 Grab vouchers.
    <br />
    <br />
    Results can be viewed{' '}
    <a
      style={{ color: '#10BCBC' }}
      href="https://www.instagram.com/p/CFrijU4Hw8H/?utm_medium=share_sheet"
    >
      here
    </a>
  </>
)

export const events = [
  {
    title: 'Inter-Hall Hackathon (16 Dec 2021)',
    description: InterHackathonDesc,
    image: InterHallimg,
  },

  {
    title: 'RHapp Launch (1 Aug 2021)',
    description: RHAppLaunchDesc,
    image: RHDevs,
  },
  {
    title: 'upgRHade (4 Sep 2021)',
    description: upgRHadeDesc,
    image: UPGRHADEimg,
  },
]
