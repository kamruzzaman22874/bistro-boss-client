const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-orange-500 mb-3">--- {subHeading} ---</p>
            <h2 className="border-y-4 py-4 text-3xl uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTitle;