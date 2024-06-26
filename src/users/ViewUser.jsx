import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewUser() {
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  //페이지 시작시 유저데이터를 받아 user에 저장
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  const { name, username, email } = user;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">유저 정보</h2>

          <div className="card">
            <div className="card-header">
              유저ID : {id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>이름 : {user.name} </b>
                </li>
                <li className="list-group-item">
                  <b>유저네임 : {user.username}</b>
                </li>
                <li className="list-group-item">
                  <b>이메일 : {user.email}</b>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ViewUser;
