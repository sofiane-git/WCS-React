import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useState } from 'react';


const AddWilder = () => {
    // const [name, setName] = useState("")
    // const [city, setCity] = useState("")
    const [error, setError] = useState("")

    const { register, handleSubmit, formState: { errors }} = useForm()
    const onSubmit = async data => {
        console.log(data)
        try {
            const result = await axios.post(
                "http://localhost:3000/api/wilder",
                {
                    name: data.name,
                    city: data.city,
                }
            )
            if(result.data.success){
                setError("")
            }
            } catch (err) {
                error.response ? setError(error.response.data.message) : setError(error.message)

            }   
    }
    return (
        <div>
            <h3 className="text-center text-xl bg-red-500"> Ajoutez un Wilder </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name-input">Name :</label>
                <input
                    id="name-input"
                    type="text"
                    placeholder="Type the name"
                    {...register("name")}
                />
                <label htmlFor="city-input">City :</label>
                <input
                    id="city-input"
                    type="text"
                    placeholder="Type the city"
                    {...register('city')}
                />
                { error !== "" && <h3>{ error }</h3> }

                <button>Ajouter</button>
            </form>
        </div>

    );
}

  export default AddWilder
  