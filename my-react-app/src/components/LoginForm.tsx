// File: src/components/LoginForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

// 1. Định nghĩa quy tắc Validate bằng Zod
const loginSchema = z.object({
    email: z.string().email('Email không đúng định dạng'),
    password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
});

// Trích xuất kiểu dữ liệu từ Schema
type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    // 2. Khởi tạo React Hook Form kết hợp Zod Resolver
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    // 3. Xử lý khi Form hợp lệ
    const onSubmit = (data: LoginFormData) => {
        login(data.email); // Lưu user vào Zustand Store
        navigate('/dashboard'); // Chuyển sang trang Dashboard
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '320px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    {...register('email')}
                    style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                />
                {errors.email && <p style={{ color: '#ef4444', margin: '4px 0 0 0', fontSize: '14px' }}>{errors.email.message}</p>}
            </div>

            <div>
                <label>Mật khẩu:</label>
                <input
                    type="password"
                    {...register('password')}
                    style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                />
                {errors.password && <p style={{ color: '#ef4444', margin: '4px 0 0 0', fontSize: '14px' }}>{errors.password.message}</p>}
            </div>

            <button type="submit" style={{ padding: '10px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Đăng nhập
            </button>
        </form>
    );
}