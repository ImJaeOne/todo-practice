import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = () => {
    const { user } = useAuth();
    const { pathname } = useLocation();

    if (!user) {
        // state로 어디서 리다이렉션 해서 왔는지
        return <Navigate to="/sign-in" replace state={{ redirectedFrom: pathname }} />;
    }
    // Outlet - Router에서 children으로 묶어준 자식 컴포넌트들
    return <Outlet />;
};

export default ProtectedRoute;
