
const SectionTitle = ({subHeading,heading}) => {
    console.log(subHeading,heading)
    return (
        <div className="mx-auto md:w-4/12 my-8 text-center">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;