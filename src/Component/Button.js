
const Button = ({data,bgColor,width,textColor,visiblty}) => {
    return (
           <>
            <button  className={` hover:opacity-85 ease-in-out duration-75 font-medium mx-auto my-6 py-2 rounded-md ${ textColor} ${bgColor } ${visiblty } ${width }`}>
              {data?data:'Get Started'}
           </button>
           </>
      
    )
  }
  export default Button;
  