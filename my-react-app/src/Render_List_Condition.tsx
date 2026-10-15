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
                            textDecoration: task.completed ? 'line-through' : 'none',
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