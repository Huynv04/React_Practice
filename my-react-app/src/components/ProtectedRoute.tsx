// File: src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

interface Props {
    children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    // Nếu chưa đăng nhập, chuyển hướng người dùng về trang /login
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}