import './App.css'
import LandingPage from './Components/App/LandingPage/LandingPage.jsx'
import CompanyPage from './Components/App/CompanyPage/CompanyPage.jsx'
import Work from './Components/App/Work/Work.jsx'

function App() {

  return (
    <>
      <div className="App">
        <LandingPage />
        <CompanyPage />
        <Work />
      </div>
    </>
  )
}

export default App
