import { Header } from "./components/Layouts/Header/Header"
import { Main } from "./components/Layouts/Main/Main"
import { Sections } from "./components/Layouts/Sections/Sections"
import { Home } from "./components/Pages/Home/Home"




function App() {

  return (
   
    <Home>
      <Header/>
      <Main>
        <Sections>
          
        </Sections>
      </Main>
    </Home>
   
  )
}

export default App
