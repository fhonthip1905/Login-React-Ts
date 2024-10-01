import { useNavigate } from "react-router-dom";
import "../styles/DashboardPage.css";
import { useEffect, useState } from "react";
import { users } from "../data/users";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [userList, setUserList] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isUser, setIsUser] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  // ตรวจสอบว่าผู้ใช้ล็อกอินหรือไม่
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData) as User;
      setIsUser(user);
    } else {
      navigate("/");
    }
  }, [navigate]);

  // ฟังก์ชันค้นหาผู้ใช้
  const handleSearch = () => {
    const filterUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUserList(filterUsers);
    setHasSearched(true);
  };

  // ฟังก์ชัน logout
  const handleOnclickLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="container-dashboard">
      <div className="title">Hello {isUser?.name}!</div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="What're you looking for?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" className="btn-search" onClick={handleSearch}>
          Search
        </button>
      </div>
      {userList.length > 0 ? (
        <table className="result-table">
          <thead className="header-table">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody className="user-table">
            {userList.map((user) => (
              <tr className="user-list" key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : hasSearched ? (
        <p className="no-results">Not found your search term.</p>
      ) : null}
      <div className="logout">
        <button
          type="button"
          className="btn-logout"
          onClick={handleOnclickLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
