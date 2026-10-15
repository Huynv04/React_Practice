import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface Product {
    id: number;
    title: string;
    price: number;
}

// Hàm lấy dữ liệu bằng Axios
const getProducts = async (): Promise<Product[]> => {
    const res = await axios.get('https://dummyjson.com/products?limit=5');
    return res.data.products;
};

export default function TanStackQueryDemo() {
    const queryClient = useQueryClient();

    // useQuery tự động quản lý: data, isLoading, isError, caching
    const { data: products, isLoading, isError, error } = useQuery({
        queryKey: ['productsList'], // Định danh cache
        queryFn: getProducts,
        staleTime: 1000 * 60 * 5,   // Dữ liệu được coi là "mới" trong 5 phút (không fetch lại thừa)
    });

    if (isLoading) return <p style={{ color: '#2563eb' }}>Đang tải dữ liệu từ API...</p>;
    if (isError) return <p style={{ color: '#ef4444' }}>Lỗi: {(error as Error).message}</p>;

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Demo TanStack Query (Fetch & Cache)</h2>

            <button
                onClick={() => queryClient.invalidateQueries({ queryKey: ['productsList'] })}
                style={{ padding: '8px 16px', marginBottom: '16px', cursor: 'pointer' }}
            >
                Làm mới dữ liệu (Force Refetch)
            </button>

            <ul>
                {products?.map((item) => (
                    <li key={item.id} style={{ marginBottom: '8px' }}>
                        <strong>{item.title}</strong> - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}