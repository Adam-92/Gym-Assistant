import './sidebarNavigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faClipboardCheck,faChartLine, faPersonWalking } from '@fortawesome/free-solid-svg-icons'

const SidebarNavigation = () => {
    return(
        <aside className="container-SidebarNavigation">
            <section className="profile-SidebarNavigation">
                <div className="picture-SidebarNavigation">
                  <div className="logo-SidebarNavigation">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQ3P3Esl9o3TmGO3AV6i4sXH8GcyWkgRQD0xGKgOW7mhh-VCnTrQP1ogYOeR-zUMat8k&usqp=CAU" />
                  </div>
                </div>
                <div className="name-SidebarNavigation">
                    <h2>Adam Kalcas</h2>
                </div>
                <div className="achievement-SidebarNavigation">
                    <FontAwesomeIcon icon={faMedal} size='2x' className="achievement-icon-SidebarNavigation"/>
                    <span>Advanced</span>
                </div>
                <div className='statistics-SidebarNavigation'>
                    <div className='steps-SidebarNavigation'>
                        <p>15,2k</p>
                        <small>Steps</small>
                    </div>
                    <div className='time-SidebarNavigation'>
                        <p>20,5h</p>
                        <small>Training</small>
                    </div>
                </div>
            </section>
            <section className="tabs-SidebarNavigation">
                <ul className='tabs-container-SidebarNavigation'>
                    <li>
                        <div className='tab-icon-SidebarNavigation'>
                          <FontAwesomeIcon icon={faMedal}/>
                        </div>
                        <h3>TRAINING</h3>
                    </li>
                    <li>
                        <div className="tab-icon-SidebarNavigation">
                          <FontAwesomeIcon icon={faClipboardCheck} />
                        </div>
                        <h3>PLAN</h3>
                    </li>
                    <li>
                        <div className="tab-icon-SidebarNavigation">
                          <FontAwesomeIcon icon={faChartLine}/>
                        </div>
                        <h3>PROGRESS</h3>
                    </li>
                    <li>
                        <div className="tab-icon-SidebarNavigation">
                          <FontAwesomeIcon icon={faPersonWalking}/>
                        </div>
                        <h3>EXERCISES</h3>
                    </li>
                </ul>
            </section>
            <section className="blank-SidebarNavigation">

            </section>
        </aside>
    )
}

export default SidebarNavigation