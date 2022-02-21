import './homePage.css'
import SidebarNavigation from '../../components/sidebar-navigation/SidebarNavigation'
const HomePage = () => {
    return(
        <main className="background-HomePage">
            <article className="centerWindow-HomePage">
                <div className="dashboard-HomePage">
                  <div className="sidebar-HomePage">
                    <SidebarNavigation/>
                  </div>
                  <div className="break-HomePage">

                  </div>
                  <div className="overwiew-HomePage">

                  </div>
                </div>
            </article>
        </main>
    )
}

export default HomePage