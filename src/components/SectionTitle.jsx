const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:my-12 md:w-3/12 mx-auto text-center mb-10">
            <p className="text-orange-500 mb-3">--- {subHeading} ---</p>
            <h2 className="border-y-4 py-4 text-3xl uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTitle;