import Lighting from './Lighting'
import AllServices from './layout/AllServices'
import Nav from './ui/Nav'
import Footer from './ui/Footer'
import useScrollTop from './hooks/useScrollTop'

const ServicesLayout = () => {
  useScrollTop();
  return (
    <>
    <div className='h-auto'>
        <Nav />
    <div className=''>
        <Lighting>
        <AllServices />

        </Lighting>
     </div>
        <Footer/>
    </div>
    </>
  )
}

export default ServicesLayout