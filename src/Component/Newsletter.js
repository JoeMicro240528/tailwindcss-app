import Button from "./Button"

const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4 text-white">
       <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className=" lg:col-span-2 my-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">Want tips & tricks to optimaize your flow?</h1>
              <p>Sing up to our Newsletter and stay up to date</p>
          </div>
          <div className="my-4">
             <div className="flex w-full flex-col sm:flex-row items-center justify-between">
                 <input className="p-3 w-full flex rounded-md text-black" type="email" placeholder="Enter Your Email"  />
                  <Button data={'Notify Me'}  bgColor={'bg-primaryColor  mx-auto sm:mx-4 px-6 py-3 my-6 '} textColor={'text-black'} width={'w-[250px]'} />
             </div>
             <p> We care about the protection of your data. Red our <a href="#" className="text-primaryColor">Privacy Policy</a></p>
          </div>
       </div>
    </div>
  )
}

export default Newsletter
