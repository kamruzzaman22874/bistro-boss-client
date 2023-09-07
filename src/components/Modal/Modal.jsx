import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import axios from "axios";

const Modal = () => {
    const { register, handleSubmit, reset } = useForm();
   
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                            <div className="form-control w-full">
                                <label htmlFor="name" className="label">
                                    <span className="label-text">Recipe name*</span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    // defaultValue={cart.name}
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
                            <div className="my-5">
                                <button type='submit'
                                    className='btn btn-primary rounded-md text-white capitalize flex gap-2'
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)'
                                    }}
                                >
                                    <span>Update Recipe Details</span>
                                    <BsFillRocketTakeoffFill size={15} />
                                </button>
                            </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;