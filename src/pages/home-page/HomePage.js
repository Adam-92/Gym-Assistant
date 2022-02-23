import './homePage.css'
import SidebarNavigation from '../../components/sidebar-navigation/SidebarNavigation'
import Progress from '../../components/progress/Progress'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const dateObject = new Date()
const data = dateObject.toDateString()
const time = `${dateObject.getHours()}:${dateObject.getMinutes()}`

const HomePage = () => {
    return(
        <main className="center-container-HomePage">
            <div className="dashboard-HomePage">
              <div className="sidebar-HomePage">
                  <SidebarNavigation/>
              </div>
              <div className="overwiew-HomePage">
{/*                   <header className='time-HomePage'>
                      <FontAwesomeIcon icon={faClock} />
                      <p>{data}</p>
                      <p>{time}</p>
                    </header> */}
                    <Progress/>
              </div>
            </div>
        </main>
    )
}

export default HomePage