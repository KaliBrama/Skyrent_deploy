import Header from '../Blocks/Header/Header'
import TopContent from '../Blocks/TopContent/TopContent'
import Filter from '../Blocks/Filter/Filter'
import Items from '../Blocks/Items/Items'
import Footer from '../Blocks/Footer/Footer'

function HomePage() {
  return (
    <div className="centr">
      <Header />
      <TopContent />
      <Filter />
      <Items />
      <Footer />
    </div>
  )
}

export default HomePage
