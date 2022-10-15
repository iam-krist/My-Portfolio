import './Header.css'
import CX from "./CX";
import ME from '../../assets/avatar.jpeg'

const Header = () => {
  return (
    <header className='
      flex flex-col gap-y-5 mt-[13vh]
      
      text-white'>
      <h5 className='
        text-md'> Hi, I'm  </h5>
      <div className='relative flex justify-center'>
        <h1 className='
          text-6xl
          default-gradient
          rotate-[-2deg]'> Christiaan.. </h1>
        <h1 className='
          absolute
          text-5xl
          top-2
          rotate-[2deg]'> Christiaan.. </h1>
      </div>      
      <h4 className='
        text-lg'> Front End Developer </h4>
      <CX />
      <div 
        className='
          mx-auto my-10
          flex 
          justify-center'>
          <img className='
            w-[150px] h-[150px]
            rounded-full
            border
            border-cyan-500' src={ME} alt="" />
      </div>
    </header>
  )
}

export default Header