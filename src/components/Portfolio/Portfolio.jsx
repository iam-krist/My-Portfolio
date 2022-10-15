import './Portfolio.css'
import CaclIMG from "../../assets/calc.png";
import ToDoIMG from "../../assets/todo.png";
import ZestIMG from "../../assets/zest.png";

const Portfolio = () => {

  const portfolio = [
    {
      idid: 'Calculator App',
      image: CaclIMG,
      link: 'https://simple-calculator-krist.vercel.app/'
    },
    {
      idid: 'To Do App',
      image: ToDoIMG,
      link: 'https://krist-react-todo.netlify.app/'
    },
    {
      idid: 'Zest - Colors',
      image: ZestIMG,
      link: 'https://iam-krist.github.io/Zest/'
    }
  ]

  return (
    <div className='flex flex-col'>
      <div className='relative flex justify-center'>
        <h1 
          className='
            text-7xl
            default-gradient'> Portfolio 
        </h1>
        <h3
          className='
            absolute top-6
            text-white
            text-xl'> Portfolio 
        </h3>
      </div>
      <div className='
        pt-10 lg:px-14
        mx-auto flex flex-wrap'>
        {portfolio.map(i => (
            <a className='
              sm:w-1/2 lg:w-1/3' 
            href={i.link} target='_blank'>
            <img
              className='
              rounded-br-[130px]
              rounded-tl-[130px]
              px-14 py-4 sm:p-5'
              src={i.image} alt="" />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Portfolio