// File: src/pages/Dashboard.tsx
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div style={{ padding: '16px', border: '2px solid #22c55e', borderRadius: '8px' }}>
            <h2>Trang Quản Trị (Dashboard)</h2>
            <p style={{ color: '#15803d' }}>
                Xin chào, <strong>{user}</strong>! Bạn đã truy cập thành công vào trang bị khóa.
            </p>
            <button onClick={handleLogout} style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Đăng xuất
            </button>
        </div>
    );
}