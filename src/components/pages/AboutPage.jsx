import Nav from '../ui/Nav'
import Us from '../Us'
import Footer from '../ui/Footer'

import useScrollTop from '../hooks/useScrollTop'

const AboutPage = () => {
    useScrollTop()
  return (
    <>
        <div className='supp-bg'>
          <Nav />
            <Us />
          <Footer/>
        </div>
  
    </>
  )
}

export default AboutPage