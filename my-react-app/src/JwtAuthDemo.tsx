import { useState } from 'react';
import axiosClient from './api/axiosClient';

export default function JwtAuthDemo() {
    const [token, setToken] = useState<string | null>(
        localStorage.getItem('accessToken')
    );
    const [userData, setUserData] = useState<string | null>(null);

    // Giả lập Đăng nhập & lưu Token
    const handleLogin = () => {
        const mockJwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mockToken123456';
        localStorage.setItem('accessToken', mockJwtToken);
        setToken(mockJwtToken);
        alert('Đăng nhập thành công! Token đã lưu vào localStorage.');
    };

    // Đăng xuất
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        setToken(null);
        setUserData(null);
    };

    // Gọi API yêu cầu xác thực (Axios Interceptor sẽ tự động chèn Header Bearer Token)
    const handleFetchProtectedData = async () => {
        try {
            // Dùng axiosClient đã cấu hình interceptor
            const res = await axiosClient.get('/users/1');
            setUserData(JSON.stringify(res.data, null, 2));
        } catch (err) {
            alert('Gọi API thất bại (Kiểm tra Tab Console)');
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px' }}>
            <h2>Demo Xác thực JWT & Axios Interceptor</h2>

            <div style={{ padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '16px' }}>
                <p>Trạng thái: <strong>{token ? '🟢 Đã có Token' : '🔴 Chưa có Token'}</strong></p>

                {token ? (
                    <button onClick={handleLogout} style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px' }}>
                        Đăng xuất
                    </button>
                ) : (
                    <button onClick={handleLogin} style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#22c55e', color: '#fff', border: 'none', borderRadius: '4px' }}>
                        Giả lập Đăng nhập (Nhận JWT)
                    </button>
                )}
            </div>

            <button
                onClick={handleFetchProtectedData}
                disabled={!token}
                style={{ padding: '10px 20px', cursor: token ? 'pointer' : 'not-allowed' }}
            >
                Gọi API Bảo vệ (Cần Token)
            </button>

            {userData && (
                <pre style={{ backgroundColor: '#f8fafc', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', marginTop: '16px', overflowX: 'auto' }}>
                    {userData}
                </pre>
            )}
        </div>
    );
}