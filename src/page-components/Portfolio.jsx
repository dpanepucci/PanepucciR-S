import '../styles/PagesStyle.css';

export default function Portfolio() {
    return (
      <div>
        <div>
          <h1 className="h1">Portfolio</h1>
          <p className="main-para">
            
          </p>
        </div>
          <div className='projectThree'>
          <h2 className='project-name'>Golf Geek</h2>
          <p className='project-description'>Golf Geek is a one stop application for golf fanatics. Includes score tracking and history, PGA News and Weather forcasting.</p>
          <a className='project-link' href="https://github.com/dpanepucci/Golf-Geek">Golf Geek</a>
        </div>
        <div className='projectOne'>
          <h2 className='project-name'>SQL Employee Tracker</h2>
          <p className='project-description'>Opti-Tracker is a CLI that utilizes SQL, Postgres and Javascript to manage and adapt employee information.</p>
          <a className='project-link' href="https://github.com/dpanepucci/Opti-Tracker"> Opti-Tracker</a>
        </div>
        <div className='projectTwo'>
          <h2 className='project-name'>README Generator</h2>
          <p className='project-description'>SpeedyREADME allows users to generate a personalized README quickly, straight from the command line!</p>
          <a className='project-link' href="https://github.com/dpanepucci/SpeedyREADME"> SpeedyREADME</a>
        </div>

      </div>
      );
    }