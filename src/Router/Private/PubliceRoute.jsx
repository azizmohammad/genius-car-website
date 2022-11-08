// import React, { useContext } from 'react';
// import { Dna } from 'react-loader-spinner';
// import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



// const PubliceRoute = ({ children }) => {

//     const { user, loading } = useContext(AuthContext);
//     const location = useLocation();

//     if (loading) {
//         return <div className='flex justify-center items-center h-screen'>
//             <Dna
//                 visible={true}
//                 height="100"
//                 width="100"
//                 ariaLabel="dna-loading"
//                 wrapperStyle={{}}
//                 wrapperClass="dna-wrapper"
//             />
//         </div>
//     }

//     if (user) {
//         return <Navigate to='/home' state={{ from: location }} replace ></Navigate>
//     }
//     return children;
// };

// export default PubliceRoute;