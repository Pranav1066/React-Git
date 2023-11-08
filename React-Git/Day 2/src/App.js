import './Assets/Style.css';
import React from 'react';

export const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app-container"> 
      <h1>NVIDIA</h1>
      <h2>RTX 4090</h2>
      <form onSubmit={handleSubmit}>
        <center>
          <table>
            <tbody> 
              <tr>
                <td><label>Username</label></td>
                <td><input type="text" placeholder='Username'/></td>
              </tr>
              <tr>
                <td><label>Password</label></td>
                <td><input type="password" placeholder='Password' /></td>
              </tr>
              <tr>
                <td><label>Email</label></td>
                <td><input type="email" placeholder='Email' /></td>
              </tr>
              <tr>
                <td><label>Phone</label></td>
                <td><input type="tel" placeholder='Phone' /></td>
              </tr>
              <tr>
                <td><label>Date</label></td>
                <td><input type="Date" placeholder='Email' /></td>
              </tr>
            </tbody>
          </table>
          <input type="submit" value="Submit" />
        </center>
      </form>
    </div>
  );
}
