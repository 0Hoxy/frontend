import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  //유저갱신
  useEffect(() => {
    loadUsers();
  }, []);
  //유저갱신 함수
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };
  //유저삭제 함수
  const deleteUser = async (id) => {
    // if (window.confirm("정말로 삭제할까요?")) 구문을 사용하여 사용자가 삭제를 확인할 경우에만 삭제 요청을 보내도록 합니다. {}로 감싸는거 잊었음
    if (window.confirm("정말로 삭제할까요?")) {
      await axios.delete(`http://localhost:8080/user/${id}`);
      //   삭제가 완료되면 'loadUsers' 함수를 호출하여 사용자 목록을 최신상태로 갱신함
      loadUsers();
    }
  };
  // 검색기능 함수
  const searchUser = async () => {
    if (search.trim() !== "") {
      const result = await axios.get(`http://localhost:8080/searchUser?search=${search}`);
      setUsers(result.data);
    } else {
      loadUsers();
    }
  };
  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchUser();
  };

  //프론트
  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search" onSubmit={onSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <table className="table border shadow text-center my-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">이름</th>
            <th scope="col">유저네임</th>
            <th scope="col">이메일</th>
            <th scope="col">액션</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/viewuser/${user.id}`} className="btn btn-outline-secondary mx-2">
                  보기
                </Link>
                <Link to={`/edituser/${user.id}`} className="btn btn-outline-warning mx-2">
                  수정
                </Link>
                <button onClick={() => deleteUser(user.id)} className="btn btn-outline-danger mx-2">
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;
