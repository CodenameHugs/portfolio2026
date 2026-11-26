import project01 from './assets/project-01.jpg'
import project02 from './assets/project-02.jpg'
import project03 from './assets/project-03.jpg'
import project04 from './assets/project-04.jpg'
import project05 from './assets/project-05.jpg'
import project06 from './assets/project-06.webp'
import project07 from './assets/project-07.jpg'
import project08 from './assets/project-08.jpg'

const projectImages = [
  project01,
  project02,
  project03,
  project04,
  project05,
  project06,
  project07,
  project08,
]

const rotwoodBulletPoints = [
  'Designed and implemented a Cosmetic System that allowed designers to quickly iterate and test new customization content',
  'Wrote tools to empower artists to more easily add and visualize assets within the game engine without needing the assistance of a programmer',
  'Wrote tools to aid in the data visualization of unlockable items, making it easier to identify gaps that required balancing',
  'Iterated on key Gameplay UI and proposed changes to better fit local and online multiplayer contexts',
  'Designed meta progression quests and balanced their respective gameplay challenges and rewards',
  'Designed base building features for players to engage in between runs',
]

const dontStarveTogetherBulletPoints = [
  'Spearheaded the redesign process and was responsible for the majority of the character changes as well as the development of three out of the four new original characters',
  'Working from internal analytics and community feedback, I addressed balancing issues, designed and implemented new mechanics and made sure they synergized with the current direction of the game.',
  'Post released I would work on further tunings, fixes and community outreach',
  'Also worked on several pieces of seasonal content, designing, implementing, testing and shipping on a live game schedule',
]

const hamletBulletPoints = [
  'I was one of the main designers behind the content of the game. Designed bosses, playable characters, mobs, seasons and items.',
  'Created new mechanics in line with the design direction and theme of the game, being careful to take into account player expectations from previous games',
  'Wrote a save patching system to ensure critical features would make their way into players saves without breaking them or requiring a new game to be started',
  'Communicated with the community, showcasing and explaining design decisions and following up on bugs and issues',
]

const shipwreckedBulletPoints = [
  'Designed the world hopping mechanic and made sure it fit the context and meta progression of the DLC content',
  'Implemented the save merging system which updated save files from previous versions of the game and connected them with a Shipwrecked save',
  'Ironed out design issues and edge cases that arose from the feature in a way that felt balanced and fair for players',
]

const griftlandsBulletPoints = [
  'Designed quests for an early version of the game using social mechanics',
  'Iterated on the design of the world map to improve flow and exploration',
  "Implemented mechanics and events into the game's world",
]

const oxygenNotIncludedBulletPoints = [
  'Responsible for designing, implementing and testing mechanics',
  'Implemented UI to convey important gameplay data to players in an easy-to-grasp way',
  'Worked directly with writers, audio designers and artists to ensure their work made it into the game and implemented systems to facilitate that',
]

const soccer10BulletPoints = [
  'Optimized features to work within the mobile device limitations of the time',
  'Implemented flexible and responsive UI systems to ensure functionality in different devices and aspect ratios',
  'Worked directly with the backend team to ensure proper functionality and timely gameplay response',
]

const recollectionBulletPoints = [
  'Implemented puzzle mechanics and tools to allow our designers to easily iterate on their ideas',
  'Wrote an analytics tool to collect playtest information and built a heatmap to help identify places where players were having issues',
  'Implemented a checkpoint system complete with proper saving and loading',
  'Wrote documentation to keep other member of the team up to date on how the game systems worked',
]

const projects = [
  {
    title: 'Rotwood',
    year: '2022 - 2025',
    videoId: 'SoTNhVPzmC8',
    description:
      "Rotwood is a Roguelite Hack'n'Slash game featuring both local and online Co-op, character customization and base building mechanics.",
  },
  {
    title: "Don't Starve Together",
    year: '2019 - 2022',
    videoId: 'dU-aq2JbLkk',
    description:
      'Starting in 2019, Don’t Starve Together began the process of redesigning its characters from their original single player versions to better fit a multiplayer context',
  },
  {
    title: "Don't Starve Hamlet",
    year: '2018 - 2019',
    videoId: 'HuSz_eTDcmo',
    description:
      "The third DLC expansion for Don't Starve, Hamlet introduces the player to a series of new twists on the old DS formula, taking the player into a lost town of aristocratic pigmen.",
  },
  {
    title: "Don't Starve Shipwrecked",
    year: '2015 - 2016',
    videoId: 'mScnLxvFEWg',
    description:
      'Originally planned as a standalone game, Shipwrecked pivoted into a fully integrated DLC after community feedback. One of the requested features was the ability to connect previous games with the content from the new DLC.',
  },
  {
    title: 'Griftlands',
    year: '2017 - 2018',
    videoId: 'ufl14_Ne5Lg',
    description:
      'Originally conceived as an open world RPG, Griftlands is a deck building roguelite with a big emphasis on social mechanics, negotiation and combat.',
  },
  {
    title: 'Oxygen Not Included',
    year: '2016 - 2017',
    videoId: 'wcLayGm_pM4',
    description:
      'ONI is a space colony simulation game where players must master science, overcome strange new lifeforms and harness tech to keep their duplicants alive',
  },
  {
    title: 'SocceR10',
    year: '2013 - 2014',
    videoId: 'dYstPweVFgw',
    description:
      'SocceR10 was a social mobile soccer game developed by Ilusis Interactive Graphics with the support of Square Enix. It released in 2014 to coincide with the World Cup in Brazil.',
  },
  {
    title: 'Recollection',
    year: '2014',
    videoId: '00FxxR3ZJ7k',
    description:
      'Recollection is a surreal first person puzzle game developed as my final project for the VFS Programming for Games, Web and Mobile program I took in 2014.',
  },
]

function ProjectImage({ index }: { index: number }) {
  return (
    <img
      aria-hidden="true"
      className="project-image"
      src={projectImages[index]}
      alt=""
    />
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f3ef] text-[#171715]">
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Hugo Moraleida, home">
          HM
        </a>
        <a href="#projects" className="header-link">
          Selected projects
        </a>
      </header>

      <main id="top">
        <section className="intro" aria-labelledby="page-title">
          <div>
            <p className="eyebrow">Portfolio / 2026</p>
            <h1 id="page-title">Hugo Moraleida</h1>
            <p className="intro-description">
              Programmer &amp; Designer with over a decade of experience in Game Development.
              <br />
              Knowledgeable in Lua, Live Games, System &amp; Character Design, Tool Development
              and more.
            </p>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/hugomoraleida/"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M5.3 3.9A2.3 2.3 0 1 1 5.3 8.5a2.3 2.3 0 0 1 0-4.6ZM3.3 10h4v11h-4V10Zm6.4 0h3.8v1.5h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-4.9c0-1.2 0-2.8-1.8-2.8s-2 1.3-2 2.7v5h-4V10Z"
                />
              </svg>
              <span>/in/HugoMoraleida</span>
            </a>
          </div>
        </section>

        <section id="projects" className="projects-section" aria-labelledby="projects-title">
          <div className="section-heading">
            <h2 id="projects-title">Projects</h2>
            <span>01—08</span>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <a
                className="project-card"
                href={`#project-${index + 1}`}
                key={project.title}
              >
                <ProjectImage index={index} />
                <span className="project-overlay" />
                <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="project-title">{project.title}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="project-details" aria-label="Project details">
          {projects.map((project, index) => (
            <article
              className="project-detail"
              id={`project-${index + 1}`}
              key={project.title}
            >
              <div className="detail-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="detail-title">
                <h2>{project.title}</h2>
                <p>{project.year}</p>
                <div className="detail-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.videoId}`}
                    title={`${project.title} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
              <div className="detail-copy">
                <p>{project.description}</p>
                <ul>
                  {(index === 0
                    ? rotwoodBulletPoints
                    : index === 1
                      ? dontStarveTogetherBulletPoints
                      : index === 2
                        ? hamletBulletPoints
                        : index === 3
                          ? shipwreckedBulletPoints
                          : index === 4
                            ? griftlandsBulletPoints
                            : index === 5
                              ? oxygenNotIncludedBulletPoints
                              : index === 6
                                ? soccer10BulletPoints
                                : index === 7
                                  ? recollectionBulletPoints
                                  : [
                                      'Lorem ipsum dolor sit amet',
                                      'Consectetur adipiscing elit',
                                      'Sed do eiusmod tempor incididunt',
                                    ]
                  ).map((bulletPoint) => (
                    <li key={bulletPoint}>{bulletPoint}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer>
        <p>Hugo Moraleida</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}
