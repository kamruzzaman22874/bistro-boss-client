import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { BsFillRocketTakeoffFill } from "react-icons/bs"
import axios from "axios";
import Swal from "sweetalert2";

const AddItem = () => {
    const token = localStorage.getItem("access-token");
    const img_hosting_token = import.meta.env.VITE_Image_Upload_Token
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const { register, handleSubmit, reset} = useForm();
    const AddMenuItem = data => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL };
                    console.log(newItem);
                    axios.post("http://localhost:8000/menu", newItem, {
                        headers: { authorization: `bearer ${token}` }
                    })
                        .then(res => {
                            if (res.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'New Item added successfully done',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                    return res.data;
                }
            })
    };

    return (
        <div >
            <SectionTitle
                subHeading="What's new?"
                heading="ADD AN ITEM"
            ></SectionTitle>
            <div className="bg-orange-50 p-8 w-3/4 mx-auto">
                <form onSubmit={handleSubmit(AddMenuItem)} className="mb-0 space-y-4 rounded-lg p-4">
                    <div className="form-control w-full">
                        <label htmlFor="name" className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Recipe name"
                            className="input input-bordered input-primary w-full"
                            required
                            {...register("name")}
                        />
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                        <div className="form-control">
                            <label htmlFor="name" className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select
                                defaultValue={"Recipe Category"}
                                className="select select-primary w-full"
                                {...register("category")}
                            >
                                <option disabled>Recipe Category</option>
                                <option value="dessert">Dessert</option>
                                <option value="salad">Salad</option>
                                <option value="drinks">Drinks</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label htmlFor="price" className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                name='price'
                                placeholder="Recipe price"
                                className="input input-bordered input-primary w-full"
                                required
                                {...register("price")}
                            />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea
                            className="textarea textarea-primary h-40"
                            name='recipe'
                            placeholder="recipe Details"
                            style={{ resize: 'none', overflow: 'auto' }}
                            {...register("recipe")}
                        ></textarea>
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor="name" className="label">
                            <span className="label-text">Photo*</span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-primary w-full"
                            {...register("image")}
                        />
                    </div>
                    <div>
                        <button type='submit'
                            className='btn btn-primary rounded-md text-white capitalize flex gap-2'
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)'
                            }}
                        >
                            <span>Send Review</span>
                            <BsFillRocketTakeoffFill size={15} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;