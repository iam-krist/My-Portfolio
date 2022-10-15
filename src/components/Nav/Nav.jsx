import './Nav.css'
import { MdHome, MdOutlineReadMore, MdAccountBox, MdContactPage } from "react-icons/md";

const Nav = () => {

  const items = [
    {
      item: <MdHome size={30}/>
    },
    {
      item: <MdOutlineReadMore size={30} />
    },
    {
      item: <MdAccountBox size={30} />
    },
    {
      item: <MdContactPage size={30} />
    }
  ]

  return (
    <div 
      className='
        z-[9999]
        fixed
        w-full p-4
        bottom-0'>
        <div className='
          bg-gradient-to-l from-blue-500 to-black}
          flex 
          justify-center 
          w-2/3 lg:1/2
          py-4
          mx-auto
          rounded-full'>
          {items.map(i => (
            <button 
              href='google.com'
              className='
              md:mx-4 mx-3'> {i.item}
            </button>
          ))}
        </div>
    </div>
  )
}
export default Nav;