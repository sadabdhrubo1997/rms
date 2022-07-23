import React, {useState} from 'react';
import {BASE_URL} from '../../../config';
import axios from 'axios';

const AdminPasswordChange = () => {

  const [oldPassword,
    setOldPassword] = useState('');

  const [newPassword,
    setNewPassword] = useState('');

  const [cPassword,
    setCPassword] = useState('');

  const [isOldPasswordWrong,
    setIsOldPasswordWrong] = useState(false);

  const [isPasswordChanged,
    setIsPasswordChanged] = useState(false);

  const [isLoading,
    setIsLoading] = useState(false);

  const [editMode,
    setEditMode] = useState(false);

  const editModeToggle = () => {
    setEditMode(!editMode)
  }

  const submitHamdler = (e) => {
    e.preventDefault();
    setIsLoading(true)

    if (newPassword !=='' && cPassword !=='' && oldPassword !=='') {
      if (!(newPassword === cPassword)) {
        alert("password and confirm password doesn't match")
      }else{
        axios.put(`${BASE_URL}admin/changePassword`,{oldPassword,newPassword})
        .then(res=>{
          if(res.status === 202){
            setIsOldPasswordWrong(true)
            alert("Wrong Old Password")
          }
          if(res.status === 201){
            setOldPassword('')
            setNewPassword('')
            setCPassword('')
            setEditMode(false)
            setIsPasswordChanged(true)
            alert("password changed successfully")
          }
        })
      }
    }else{
      alert("Any field cannot be blank")
    }
  }

  return (
    <div id="adminPasswordChange">
      {!editMode && <button onClick={editModeToggle}>Password Change</button>}
      {isPasswordChanged && <h2
        style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: 'rgb(252, 58, 58)'
      }}>Password Changed Successfully</h2>}
      {editMode && <button onClick={() => setEditMode(false)} className="backButton">Back</button>}

      {editMode && <div className="passwordChangeForm">
        {isOldPasswordWrong && <h2
          style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
          color: 'rgb(252, 58, 58)'
        }}>Wrong Old Password</h2>}
        <form autoComplete="off" onSubmit={submitHamdler}>
          <input
            autoComplete="off"
            onChange={(e) => {
            setOldPassword(e.target.value)
          }}
            autoFocus
            placeholder="Old Password"
            type="password"
            name="oldPassword"
            id="oldPassword"/>
          <input
            autoComplete="off"
            onChange={(e) => {
            setNewPassword(e.target.value)
          }}
            placeholder="New Password"
            type="password"
            name="password"
            id="password"/>
          <input
            autoComplete="off"
            onChange={(e) => {
            setCPassword(e.target.value)
          }}
            placeholder="Confirm New Password"
            type="password"
            name="cPassword"
            id="cPassword"/> {!isLoading && <button>Submit</button>}

          {isLoading && <div className="loading_button">
            <span></span>
          </div>
}

        </form>
      </div>
}

    </div>
  );
}

export default AdminPasswordChange;
