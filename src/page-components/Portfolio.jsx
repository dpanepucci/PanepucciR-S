import '../styles/PagesStyle.css';

export default function Portfolio() {
    return (
      <div>
        <div>
          <h1 className="h1"></h1>
          <p className="main-para">
            
          </p>
        </div>
          <div className='projectThree'>
          <h1 className='project-description'>"Punctual, Quality work, he's dedicated to getting you back to work or on the road for your next job. Highly recommend."-</h1>
          <p className='project-name'>B. Brockway</p>
          {/* <a className='project-link' href="https://github.com/dpanepucci/Golf-Geek">Golf Geek</a> */}
        </div>
        <div className='projectOne'>
          <h1 className='project-description'>"Great communication and service! My go to for just about everything for my farm equipment."-</h1>
          <p className='project-name'>J. Stewart</p>
          {/* <a className='project-link' href="https://github.com/dpanepucci/Opti-Tracker"> Opti-Tracker</a> */}
        </div>
        <div className='projectTwo'>
          <h1 className='project-description'>"Him and his team have always come through at a moments noticed. Couldn't have finished the job in time without them."-</h1>
          <p className='project-name'>A. Michael</p>
          {/* <a className='project-link' href="https://github.com/dpanepucci/SpeedyREADME"> SpeedyREADME</a> */}
        </div>

      </div>
      );
    }