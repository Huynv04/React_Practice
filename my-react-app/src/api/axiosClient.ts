import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Thay bằng URL C# Web API của bạn (VD: http://localhost:5000/api)
    headers: {
        'Content-Type': 'application/json',
    },
});

// 1. Request Interceptor: Tự động đính kèm Token vào Header trước khi gửi request
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 2. Response Interceptor: Bắt lỗi toàn cục trả về từ Server
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Khi bị lỗi 401: Token hết hạn hoặc không hợp lệ
            localStorage.removeItem('accessToken');
            console.warn('Token đã hết hạn hoặc không hợp lệ. Vui lòng đăng nhập lại!');
        }
        return Promise.reject(error);
    }
);

export default axiosClient;