import cheif from "../assets/home/chef-service.jpg"
const BistroBoss = () => {
    return (
        <div className="mb-24 w-full bg-fixed h-96" style={{ backgroundImage: `url(${cheif})` }}>
            <div className="text-center md:w-3/4 mx-auto  md:pt-16 pt-24">
                <div className="md:pt-12 md:py-20 bg-white rounded ">
                    <h2 className="text-3xl mb-3 uppercase">Bistro Boss</h2>
                    <p className="md:w-1/2 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;