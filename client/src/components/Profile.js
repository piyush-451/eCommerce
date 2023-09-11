import React, { useContext } from "react";
import image from "../images/user.jpg";
import { UserContext } from "../Context/Context";
function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div className="row justify-content-center align-items-center py-3 px-3">
      <div className="col">
        <img src={image} className="img-fluid" />
      </div>
      <div className="col">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 my-1">
            <span class=" material-icons material-symbols-outlined d-inline-block ms-3">
              <span class="material-symbols-outlined">
                drive_file_rename_outline
              </span>
            </span>
            <span className="h3 d-inline-block ms-2">{user.name}</span>
          </div>
          <div className="col-12">
            <span class=" material-icons material-symbols-outlined d-inline-block ms-3">
              <span class="material-symbols-outlined">mark_email_read</span>
            </span>
            <span className="h3 d-inline-block ms-2">{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
