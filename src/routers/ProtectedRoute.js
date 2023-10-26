import { Navigate } from 'react-router-dom';
import { useAuthState } from '../context/auth.context';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuthState();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;