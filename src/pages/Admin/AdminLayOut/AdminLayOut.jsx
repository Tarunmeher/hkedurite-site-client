import { Outlet } from 'react-router-dom';
import AdminSidebar from '../AdminCommon/AdminSidebar';
import AdminNavbar from '../AdminCommon/AdminNvbar';


const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <main className="p-4 overflow-y-auto flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
