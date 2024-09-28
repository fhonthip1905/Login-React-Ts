import "../styles/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="body-login">
      <div className="container-login">
        <form className="form-login" action="">
          <div className="form-title">Welcome</div>
          <div className="input-box">
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" />
          </div>
          <button className="btn-login">LOGIN</button>
        </form>
      </div>
    </div>
  );
}
