

export default function Cart(){


    let counter = 0;

    const handleAddCart = () => {
        counter = counter + 1 ;
    }
    return (
        <div>
            <h3>Shopping Cart</h3>
            <p>Item in the cart: {counter}</p>
            <button onClick={handleAddCart}>Add </button>
        </div>
    )
}