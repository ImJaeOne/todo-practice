import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/client";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const {error} = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      alert("로그인이 완료되었습니다. 홈으로 이동합니다.");
      navigate("/");
    } catch (error) {
      alert(error.message);
      console.error("로그인 오류:", error);
    }
  };

  return (
    <div>
      <h2>로그인 페이지</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
