import Cards from "../Cards";
const SalesCards = () => {
    const salesData = [
        { id: 1, amount: "$560K", title: "Total Sales", image : "circle.svg" },
        { id: 2, amount: "$560K", title: "Total Sales", image: "circle.svg" },
        { id: 3, amount: "$560K", title: "Total Sales", image: "circle.svg" },
        { id: 4, amount: "$560K", title: "Total Sales", image: "circle.svg" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[21.5px] pt-[50px] pb-[52px] px-[60.5px]">
            {salesData.map((card) => (
                <Cards key={card.id}
                title = {card.title}
                amount = {card.amount}
                image = {card.image}
                />
            ))}
        </div>
    );
};

export default SalesCards;
