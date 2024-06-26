import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">가입 하기</h2>
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
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-outline-primary px-3 mx-2">
              가입
            </button>
            <Link type="submit" className="btn btn-outline-danger px-3 mx-2" to={"/"}>
              취소
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
