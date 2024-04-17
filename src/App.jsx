import { Card } from "./components/Card/Card"
import { content } from "./components/JS/Content"
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
          <div className="w-2/4">
          {
              content.map(card=>(
                <Card
                  key={card._id}
                  img={card.img}
                  title={card.title}
                  description={card.description}
                link={card.link}
                />
              ))
            }
          </div>
          <div className="w-2/4">

          </div>
        </Sections>
      </Main>
    </Home>
   
  )
}

export default App
