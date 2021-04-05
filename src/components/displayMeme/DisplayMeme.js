import MemeCard from './MemeCard';
import {useSelector} from 'react-redux';

const DisplayMene = () => {

    const meme = useSelector(data => data)
    console.log(meme)
    return (
        <div className=" flex flex-col md:flex-row ">
        
        {meme.map(meme => <MemeCard  data={meme} key={meme.id}>{meme.image}</MemeCard>)}
        </div>
    )
}

export default DisplayMene;