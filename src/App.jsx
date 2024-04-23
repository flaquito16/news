import { Card } from "./components/Card/Card"
import { Cards } from "./components/Card/Cards"
import { content } from "./components/Content/Content"
import { contents } from "./components/Content/Contents"
import { Footer } from "./components/Layouts/Footer/Footer"
import { Header } from "./components/Layouts/Header/Header"
import { Main } from "./components/Layouts/Main/Main"
import { Sections } from "./components/Layouts/Sections/Sections"
import { Home } from "./components/Pages/Home/Home"




function App() {

  return (
   
    <Home>
      <Header/>
      <Main >
        <Sections >
          <div className="w-1/2 flex justify-center items-center">
          {
              contents.map(cards=>(
                <Cards
                  key={cards.id}
                  img={cards.img}
                  date={cards.date}
                  title={cards.title}
                  description={cards.description}
                />
              ))
            }
          </div>
          <div className="w-1/2">
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
        <Footer/>
    </Home>
   
  )
}

export default App
