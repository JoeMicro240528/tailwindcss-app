import img1 from '../assets/activity-01.png'
import img2 from '../assets/activity-02.png'
import img3 from '../assets/activity-03.png'
import Card from '../utiltes/Card'

function Cards() {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
       <div className="max-w-[1240px]mx-auto grid md:grid-cols-3 gap-8">
         <Card img={img1} style={'mt-2'}  btnStyle={'bg-primaryColor text-black '} />
         <Card img={img2} style={'md:my-0 my-8 bg-gray-300 '} btnStyle={'bg-black text-primaryColor '} />
         <Card img={img3} style={'mt-2'}  btnStyle={'bg-primaryColor text-black '} />
        </div>   
    </div>
  )
}

export default Cards
