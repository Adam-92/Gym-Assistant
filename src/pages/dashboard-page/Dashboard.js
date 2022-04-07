import './dashboard.css'
import Sidebar from '../../components/Sidebars/Sidebar/Sidebar'
import StepChart from '../../components/Charts/StepChart/StepChart'
import CaloriesChart from '../../components/Charts/CaloriesChart/CaloriesChart'
import ContainerTiles from '../../components/tile/ContainerTiles'
import WelcomeBoard from '../../components/WelcomeBoard/WelcomeBoard'
const Dashboard = () => {
    return(
        <main className="center-container-dashboard">
            <div className="container-dashboard">
                <section className='sidebar-dashboard'>
                    <Sidebar />
                </section>
                <section className='content-dashboard'>
                    <header className='header-dashboard'>
                        <ContainerTiles />
                    </header>
                    <div className='chart-steps-dashboard'>
                        <StepChart/>
                    </div>
                    <div className='chart-calories-dashboard'>
                        <CaloriesChart />
                    </div>
                </section>
                <section className='profile-dashboard'>
                </section>
            </div>
            <WelcomeBoard/>
        </main>
    )
}

export default Dashboard