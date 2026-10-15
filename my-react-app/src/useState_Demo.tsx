import { useState } from 'react';

export default function UseState_Demo() {
    // Khai báo state: count lưu giá trị, setCount là hàm cập nhật giá trị
    const [count, setCount] = useState<number>(0);

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
            <h2>Demo 2: useState</h2>
            <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '16px 0' }}>
                Giá trị: {count}
            </p>

            <button
                onClick={() => setCount(count + 1)}
                style={{ padding: '8px 16px', marginRight: '8px', cursor: 'pointer' }}
            >
                Tăng (+1)
            </button>

            <button
                onClick={() => setCount(count - 1)}
                style={{ padding: '8px 16px', marginRight: '8px', cursor: 'pointer' }}
            >
                Giảm (-1)
            </button>

            <button
                onClick={() => setCount(0)}
                style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Reset
            </button>
        </div>
    );
}