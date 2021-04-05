import {useState} from 'react'
import {useDispatch} from 'react-redux';
import "./MemeForm.css"

const MemeForm = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        upperText: '',
        bottomText: '',
        image: ''

    })

    const handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: "ADD_MEME", payload: formData})
    }

    return(
        <div className="w-full justify-self-center pt-5 relative max-w-xs">
            <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-7 pt-6 pb-7 mb-4"
            >
                <div className="mb-4">
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="uppertext">
                    Upper Text
                </label>
                <input 
                    onChange={handleChange}
                    name="upperText"
                    value={formData.upperText}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="uppertext" 
                    type="text" 
                    placeholder="Upper Text"
                    />
                </div>
                <div className="mb-4">
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="bottomtext">
                    Bottom Text
                </label>
                <input 
                    onChange={handleChange}
                    name="bottomText"
                    value={formData.bottomText}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bottomtext" 
                    type="text" 
                    placeholder="Bottom Text"/>
                </div>
                <div className="mb-4">
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="imageurl">
                    Image
                </label>
                <input 
                    onChange={handleChange}
                    name="image"
                    value={formData.image}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="imageurl" 
                    type="text" 
                    placeholder="ImageURL"/>
                </div>
                <div className="grid justify-items-stretch ">
                    <button className="border px-2 bg-blue-400 focus:outline-none text-white focus:shadow-outline rounded">Submit</button>
                </div>
                
                
            </form>
        </div>
    )
}

export default MemeForm;