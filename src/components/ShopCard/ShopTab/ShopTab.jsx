import ShopCard from "../Shop/ShopCard";

const ShopTab = ({items}) => {
    return (
        <> 
        <div className="grid md:grid-cols-3 gap-5">
            {
                items?.map(item => <ShopCard
                key={item._id}
                item={item}
                ></ShopCard>)  
            }
            </div>
        </>
    );
};

export default ShopTab;