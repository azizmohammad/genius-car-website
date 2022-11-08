import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderBanner from './OrderBanner/OrderBanner';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, lotOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [orderDlt, setOrderDlt] = useState(false);

    useEffect(() => {
        if (!user?.email) return;
        fetch(`https://genius-car-server-woad-nu.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return lotOut();
                }
                return res.json();
            })
            .then(data => {
                setOrders(data)
            })
    }, [user?.email, lotOut])


    const handleDelete = id => {
        const proced = swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    setOrderDlt(true)
                    swal("Your Product Successfull deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your Product is Not Delete!");
                    setOrderDlt(false)
                }
            });
        if (orderDlt) {
            fetch(`https://genius-car-server-woad-nu.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-Token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaning = orders.filter(odr => odr._id !== id);
                        setOrders(remaning);
                    }
                    else {
                        toast.success('Deleted Successfull');
                    }
                })
        }
    }

    const handleStatusUpdate = (id) => {
        fetch(`https://genius-car-server-woad-nu.vercel.app/orders/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-Token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaning = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved';
                    const newOrders = [approving, ...remaning];
                    setOrders(newOrders);
                }
            })
    }


    return (
        <div>
            <OrderBanner></OrderBanner>
            <div className="overflow-x-auto w-full mb-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Favorite Color</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></OrderRow>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Orders;

