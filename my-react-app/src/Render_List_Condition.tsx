import { useState } from 'react';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export default function Render_List_Condition() {
    const [showOnlyCompleted, setShowOnlyCompleted] = useState<boolean>(false);

    const tasks: Task[] = [
        { id: 101, title: 'Học Component & Props', completed: true },
        { id: 102, title: 'Thực hành useState', completed: true },
        { id: 103, title: 'Hiểu rõ Dependency Array trong useEffect', completed: false },
        { id: 104, title: 'Tạo dự án Capstone kết nối C# Web API', completed: false },
    ];

    // Lọc danh sách công việc
    /*
    showOnlyCompleted: Là biến trạng thái (boolean: true hoặc false).
    ? : (Toán tử ba ngôi - Điều_kiện ? Thực_thi_khi_True : Thực_thi_khi_False):
   -  Trường hợp true (Khi chọn "Chỉ hiện việc đã xong"):Chạy nhánh tasks.filter((t) => t.completed)
    Hàm .filter() duyệt qua từng công việc t trong mảng tasks.
    Chỉ giữ lại các phần tử có thuộc tính completed === true.

   - Trường hợp false (Khi chọn "Hiện tất cả"):
    Chạy nhánh tasks
    Trả về nguyên vẹn mảng tasks gốc (bao gồm cả việc đã xong lẫn chưa xong).
    displayedTasks: Hằng số lưu trữ mảng kết quả cuối cùng. Bạn sẽ dùng mảng displayedTasks này để .map() ra giao diện thay vì dùng mảng tasks gốc.
    */

    //nếu biến showOnlyCompleted là true thì lọc ra các task đã hoàn thành, ngược lại thì hiển thị tất cả các task.
    const displayedTasks = showOnlyCompleted
        ? tasks.filter((t) => t.completed)
        : tasks;

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px' }}>
            <h2>Demo 4: Render Danh sách & Điều kiện</h2>

            <button
                onClick={() => setShowOnlyCompleted(!showOnlyCompleted)}
                style={{ padding: '8px 16px', marginBottom: '16px', cursor: 'pointer' }}
            >
                {showOnlyCompleted ? 'Hiện tất cả công việc' : 'Chỉ hiện việc đã xong'}
            </button>

            {/* Render danh sách dùng .map() */}
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {displayedTasks.map((task) => (
                    <li
                        key={task.id} // Thuộc tính key bắt buộc
                        style={{
                            padding: '10px',
                            borderBottom: '1px solid #e5e',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            //task đã hoàn thành(true) thì màu chữ xám, chưa hoàn thành(false) thì màu xanh lá
                            textDecoration: task.completed ? 'line-through' : 'none',
                            //task đã hoàn thành(true) thì màu chữ xám, chưa hoàn thành(false) thì màu xanh lá
                            color: task.completed ? '#94a3b8' : '#0f1',
                        }}
                    >
                        {/* Render điều kiện bằng toán tử && */}
                        {task.completed && <span style={{ color: '#22c55e', fontWeight: 'bold' }}>✓</span>}
                        {task.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}