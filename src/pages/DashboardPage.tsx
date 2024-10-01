import "../styles/DashboardPage.css";

export default function DashboardPage() {
  return (
    <div className="container-dashboard">
      <div className="title">Hello John Doe!</div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="What're you looking for?"
        />
        <button type="button" className="btn-search">
          Search
        </button>
      </div>

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
          <tr className="user-list">
            <td>John Doe</td>
            <td>john@gmail</td>
            <td>john</td>
            <td>j123456</td>
          </tr>
          <tr className="user-list">
            <td>John Doe</td>
            <td>john@gmail</td>
            <td>john</td>
            <td>j123456</td>
          </tr>
          <tr className="user-list">
            <td>John Doe</td>
            <td>john@gmail</td>
            <td>john</td>
            <td>j123456</td>
          </tr>
          <tr className="user-list">
            <td>John Doe</td>
            <td>john@gmail</td>
            <td>john</td>
            <td>j123456</td>
          </tr>
        </tbody>
      </table>
      <div className="logout">
        <button type="button" className="btn-logout">
          Logout
        </button>
      </div>
    </div>
  );
}
