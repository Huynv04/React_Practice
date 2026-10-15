// File: src/pages/Home.tsx
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h2>Trang Chủ</h2>
            <p>Chào mừng bạn đến với ứng dụng demo Giai đoạn 4!</p>
            <div style={{ display: 'flex', gap: '12px' }}>
                <Link to="/login">Đến trang Đăng nhập</Link> |
                <Link to="/dashboard">Đến trang Quản trị (Protected)</Link>
            </div>
        </div>
    );
}