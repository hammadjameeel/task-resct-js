
import { AiFillBank } from "react-icons/ai";
import { AiFillBehanceCircle } from "react-icons/ai";
import { Bs0CircleFill } from "react-icons/bs";
function Header(props) {
  
  
    return (
        <>
       
      <h3>hammadh{props.email}</h3>  
<h4>wellcom to digsol {props.phone} </h4>  
      {/* <h5>wed devolpement<br></br>{props.adress}</h5>   */}
      <h6>app devilpement{props.adress}</h6>  
      {/* <FontAwesomeIcon>icon={faCoffee}</FontAwesomeIcon> */}
      <div className="text-center text-danger">
      <AiFillBank />
      <AiFillBehanceCircle />
      <Bs0CircleFill />
      </div>
      
      </>
    
    )
}

export { Header}


