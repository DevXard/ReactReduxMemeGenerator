import {useDispatch} from "react-redux";

const MemeCard = ({data}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({type:"REMOVE", payload:data.id})
    }
    return (
        <div className="grid justify-items-stretch">
            <div className="bg-cover bg-center m-5 h-80 w-80 grid justify-items-stretch relative" style={{backgroundImage: `url(${data.image})`}} >
                <h1 className=" justify-self-center text-white ">{data.upperText}</h1>
                
                <h1 className="absolute inset-x-36 bottom-0  text-white">{data.bottomText}</h1>
            </div>
            <button className="bg-red-500 text-white rounded-md px-3 justify-self-center" onClick={handleClick}>Delete</button>
        </div>
        
    )
}

export default MemeCard;

