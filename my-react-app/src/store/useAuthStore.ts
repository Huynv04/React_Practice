// File: src/store/useAuthStore.ts
import { create } from 'zustand';

interface AuthState {
    user: string | null;
    isLoggedIn: boolean;
    login: (username: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isLoggedIn: false,

    // Hàm đăng nhập: lưu thông tin user và đổi trạng thái
    login: (username: string) =>
        set({
            user: username,
            isLoggedIn: true,
        }),

    // Hàm đăng xuất: xóa thông tin user
    logout: () =>
        set({
            user: null,
            isLoggedIn: false,
        }),
}));