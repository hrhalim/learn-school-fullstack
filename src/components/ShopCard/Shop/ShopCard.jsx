import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";
const ShopCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;  
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart()
    const handleAddToCart = (item) =>{
        console.log(item);
        if(user && user.email) {
            const orderItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Order Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })  
                }
            })
        } else {
            Swal.fire({
                title: 'You have to login then order now', 
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state: {from: location}} )
                }
              })
        }
    }

    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add to Card</button>
                </div>
            </div>
            </div>
        </>
    )
};

export default ShopCard;