import { Card } from "./components/Card/Card"
import { content } from "./components/Content/Content"
import { contents } from "./components/Content/Contents"
import { Header } from "./components/Layouts/Header/Header"
import { Main } from "./components/Layouts/Main/Main"
import { Sections } from "./components/Layouts/Sections/Sections"
import { Home } from "./components/Pages/Home/Home"




function App() {

  return (
   
    <Home>
      <Header/>
      <Main>
        <Sections className= "w-full">
          <div className="w-3/6">
          {
              contents.map(card=>(
                <Card
                  key={card.id}
                  img={card.img}
                  date={card.date}
                  title={card.title}
                  description={card.description}
                />
              ))
            }
          </div>
          <div className="w-3/6">
          {
              content.map(card=>(
                <Card
                key={card.id}
                img={card.img}
                date={card.date}
                title={card.title}
                description={card.description}
                />
              ))
            }

          </div>
        </Sections>
      </Main>
    </Home>
   
  )
}

export default App
