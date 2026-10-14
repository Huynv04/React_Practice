import React from 'react';

// 1. Định nghĩa kiểu dữ liệu cho Props bằng TypeScript Interface
//name, role, avatarUrl, isOnline chính là các Pros
interface UserCardProps {
    name: string;
    role: string;
    avatarUrl: string;
    isOnline: boolean;
}

// 2. Component con (nhận Props từ cha)
function UserCard({ name, role, avatarUrl, isOnline }: UserCardProps) {
    return (
        <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px', width: '280px', fontFamily: 'sans-serif' }}>
            <img src={avatarUrl} alt={name} style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
            <h3 style={{ margin: '8px 0 4px 0' }}>{name}</h3>
            <p style={{ margin: '0 0 8px 0', color: '#64748b' }}>Chức vụ: {role}</p>
            <span style={{ color: isOnline ? '#22c55e' : '#94a3b8', fontWeight: 'bold' }}>
                ● {isOnline ? 'Đang hoạt động' : 'Ngoại tuyến'}
            </span>
        </div>
    );
}

// 3. Component cha (truyền dữ liệu vào Props)
export default function Component_Props() {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Demo 1: Component & Props</h2>
            <div style={{ display: 'flex', gap: '16px' }}>
                <UserCard
                    name="Nguyễn Văn A"
                    role="Backend Developer (.NET)"
                    avatarUrl="https://api.dicebear.com/7.x/bottts/svg?seed=A"
                    isOnline={true}
                />
                <UserCard
                    name="Trần Thị B"
                    role="Frontend Developer (React)"
                    avatarUrl="https://api.dicebear.com/7.x/bottts/svg?seed=B"
                    isOnline={false}
                />
            </div>
        </div>
    );
}
