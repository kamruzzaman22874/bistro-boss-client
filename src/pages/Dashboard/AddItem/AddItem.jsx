import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    
    const onSubmit = data => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        fetch(img_hosting_url,{
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse =>{
            console.log(imgResponse);
        })
    };
    
    return (
        <div >
            <SectionTitle
                subHeading="What's new?"
                heading="ADD AN ITEM"
            ></SectionTitle>
            <div className="bg-orange-50 p-8 w-3/4 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Recipe Name</label> <br />
                    <input className="w-full mb-5 p-2" placeholder="name" {...register("name")} />

                    <div className="flex w-full">
                        <div className="w-1/2">
                            <label htmlFor="">Category</label>
                            <select className="w-full p-2" {...register("category",{required:true})}>
                                <option value="female">Pizza</option>
                                <option value="male">Soup</option>
                                <option value="other">Salad</option>
                                <option value="other">Dessert</option>
                                <option value="other">Drinks</option>
                            </select>
                        </div>
                        <div className="w-1/2 ml-2">
                            <label htmlFor="">Price</label>
                            <input className="w-full mb-5 p-2" placeholder="price" {...register("price", {required:true})} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Recipe Details</label> <br />
                        <textarea  placeholder="Recipe Details" {...register("recipe", { required: true })} className="w-full p-2" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <input className="my-5" type="file" {...register("image", { required: true })}/> <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className="btn px-10 border-b-4 hover:border-b-purple-300 border-b-orange-600 hover:bg-black hover:text-white text-orange-500" type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;