import data from './data'
import ScrollSpy from "react-ui-scrollspy";
import Nav from './Nav'
import './floating-nav.css'

const FloatingNav = () => {
  return (
    <ul id="floating__nav" className=''>
      <ScrollSpy offset={-500} className='flex flex-row'  currentClassName="active">
        {
          data.map(item => <Nav key={item.id} item={item} />)
        }
      </ScrollSpy>
    </ul>
  )
}

export default FloatingNav