import { useState, useEffect } from 'react';

interface Post {
    id: number;
    title: string;
    body: string;
}

export default function App() {
    const [postId, setPostId] = useState<number>(1);
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    //Đoạn code này sử dụng useEffect để tự động gọi API lấy thông tin bài viết mới từ server mỗi khi giá trị postId thay đổi.
    /*
    Server không trả về Object ngay mà trả về một phản hồi thô (Response).
    res.json() nhận nhiệm vụ ép kiểu dữ liệu phản hồi đó về dạng Object Javascript bất đồng bộ.

    then((data: Post):Sau khi dữ liệu đã chuyển đổi xong thành object data (có kiểu dữ liệu Post trong TypeScript):
    setPost(data): Lưu dữ liệu bài viết vừa lấy về vào state post. Việc này báo cho React biết cần vẽ lại (re-render) giao diện để hiển thị tiêu đề và nội dung mới.
    setLoading(false): Vì API đã trả về kết quả xong, ta chuyển loading về false để ẩn dòng chữ/icon "Đang tải dữ liệu..." trên màn hình.

Luồng hoạt động trong thực tếLần đầu mở ứng dụng (postId = 1):Component xuất hiện $\rightarrow$ useEffect chạy.Gửi request lấy bài viết #1.Lấy xong dữ liệu $\rightarrow$ setPost cập nhật nội dung bài #1 $\rightarrow$ setLoading(false) ẩn thông báo tải.Người dùng bấm nút "Bài viết tiếp theo" (postId tăng lên 2):Biến postId thay đổi từ 1 thành 2.useEffect phát hiện postId trong mảng [postId] đã thay đổi $\rightarrow$ Tự động kích hoạt lại code gọi API bài viết #2.Lấy xong dữ liệu bài #2 $\rightarrow$ Cập nhật giao diện mới.
    */
    useEffect(() => {
        // Xoá setLoading(true) đồng bộ ở đây
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => res.json())
            .then((data: Post) => {
                setPost(data);
                setLoading(false); // Chỉ set lại loading khi đã lấy xong dữ liệu
            });
    }, [postId]);

    // Hàm chuyển bài viết: Bật loading ở đây trước khi đổi postId
    const handleNextPost = () => {
        setLoading(true);
        setPostId((prev) => prev + 1);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px' }}>
            <h2>Demo 3: useEffect (Gọi API)</h2>
            <p>Đang xem bài viết số: <strong>#{postId}</strong></p>

            <button
                onClick={handleNextPost}
                style={{ padding: '8px 16px', marginBottom: '16px', cursor: 'pointer' }}
            >
                Bài viết tiếp theo →
            </button>

            {loading ? (
                <p style={{ color: '#2563eb' }}>Đang tải dữ liệu từ API...</p>
            ) : (
                <div style={{ border: '1px solid #cbd5e1', padding: '16px', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
                    <h4 style={{ margin: '0 0 8px 0', textTransform: 'capitalize' }}>{post?.title}</h4>
                    <p style={{ margin: 0, color: '#475569' }}>{post?.body}</p>
                </div>
            )}
        </div>
    );
}