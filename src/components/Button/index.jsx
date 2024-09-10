const Button = ({ label, icon, onClick, variant = 'primary' }) => {
    // Apply different styles based on the variant prop
    const baseStyles = "flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-normal transition-all shadow-shadow-seconday";

    const variants = {
        primary: "bg-[#000AFF] text-white  text-sm border border-[#7280FF]",
        secondary: "border border-border-tertary bg-white text-sm text-[#344054]",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]}`}
            onClick={onClick}
        >
            {/* Icon if passed */}
            {icon && <span className="w-5 h-5 object-cover flex">{icon}</span>}
            {label}
        </button>
    );
};

export default Button;