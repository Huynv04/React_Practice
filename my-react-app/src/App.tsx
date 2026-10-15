import Component_Props from './Component_Props';
import UseState_Demo from "./useState_Demo";
import UseEffect_Demo from "./UseEffect_Demo";
import Render_List_Condition from "./Render_List_Condition";
import JwtAuthDemo from "./JwtAuthDemo";
import TanStackQueryDemo from "./TanStackQueryDemo";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
// export default function App() {
//   return (
//     <div>
//       {/* <Component_Props /> */}
//       {/* <UseState_Demo />
//        */}
//       {/* <UseEffect_Demo /> */}
//       {/* <Render_List_Condition /> */}
//       {/* <TanStackQueryDemo /> */}
//       {/* <JwtAuthDemo /> */}
//     </div>
//   );
// }
export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '12px' }}>Trang chủ</Link>
        <Link to="/login" style={{ marginRight: '12px' }}>Đăng nhập</Link>
        <Link to="/dashboard">Dashboard (Bảo vệ)</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Trang Dashboard được bọc bởi ProtectedRoute */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}