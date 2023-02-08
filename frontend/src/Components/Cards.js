import Cards from "./Card"

const Cards = ({onDelete,onUpdate}) => {
    return (
        <>
            {Cards.map((productID,title,categories,price,rent,description) => (
                <Card productID={productID} title={title} categories={categories} price={price} rent={rent} description={description} onDelete={onDelete} onUpdate={onUpdate}/>
            ))}
        </>
    )
}

export default Cards