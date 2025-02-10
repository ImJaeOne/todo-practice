import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

// const useAuth = () => {
//     const [isSignIn, setSignIn] = useState(false);

//     return { isSignIn };
// };

const ProtectedRoute = () => {
    const { isSignIn } = useAuth();
    const { pathname } = useLocation();

    if (!isSignIn) {
        // state로 어디서 리다이렉션 해서 왔는지
        return <Navigate to="/sign-in" replace state={{ redirectedFrom: pathname }} />;
    }
    // Outlet - Router에서 children으로 묶어준 자식 컴포넌트들
    return <Outlet />;
};

export default ProtectedRoute;
