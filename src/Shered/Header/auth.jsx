// import toast from "react-hot-toast";
// import { Navigate, useLocation } from "react-router-dom";

// export const setAuthToken = (user) => {



//     const currentUser = {
//         email: user.email,
//     }

//     // get jwt token
//     fetch('https://genius-car-server-woad-nu.vercel.app/jwt', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(currentUser)
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             // jwt token add localstroge
//             localStorage.setItem('genius-Token', data.token)
//             if (user.emailVerified) {
//                 Navigate(from, { replace: true });
//             }
//             else {
//                 toast.error('Your Email Not Verify ')
//             }
//         })

// }