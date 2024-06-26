import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { name, username, email } = user;
  const { id } = useParams();
  let navigate = useNavigate();

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // 백엔드 서버로 전송 후 navigate를 이용한다.
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };
  const loadUser = async () => {
    // 변수나 표현식을 사용할떄는 `(백틱)을 사용하는것을 잊지마라
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };
  //페이지 시작시 유저데이터를 받아 user에 저장
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, [id]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">가입 하기</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                이름
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="이름 입력"
                name="name"
                value={name}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                유저네임
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="유저네임"
                name="username"
                value={username}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                이메일
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="이메일 "
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-outline-primary px-3 mx-2">
                수정
              </button>
              <Link type="submit" className="btn btn-outline-danger px-3 mx-2" to={"/"}>
                취소
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
