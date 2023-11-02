import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser, clearErrors } from '../../../redux/actions'; 
import  "./User.css"
import { validateUserInput } from './validation';


const UserForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userErrors = useSelector((state) => state.errors);
  
    const [errors, setErrors] = useState({});
  
    const [userData, setUserData] = useState({
      name: '',
      last_name: '',
      phone_number: '',
      address: '',
      admin: false,
      employee: false,
      email: '',
      password: '',
    });
    useEffect(() => {
        dispatch(createUser())
        return () => dispatch(clearErrors());
      }, [dispatch]);

      const handleChange = (event) => {
        setUserData({
          ...userData,
          [event.target.name]: event.target.value,
        });
        validateInput({
          ...userData,
          [event.target.name]: event.target.value,
        });
      };

      const validateInput = (inputData) => {
        const errors = validateUserInput(inputData)
        setErrors(errors)
      };

      const isSubmitDisabled = Object.keys(errors).length > 0;

      const handleSubmit = (event) => {
        event.preventDefault();
    
        dispatch(createUser(userData)).then((postError) => {
          if (!postError) {
            setUserData({
              name: '',
              last_name: '',
              phone_number: '',
              address: '',
              admin: false,
              employee: false,
              email: '',
              password: '',
            });
            // Add any additional actions or redirects
            // Alert success message and navigate as needed
            alert('User created successfully');
            navigate('/home');
            dispatch(clearErrors());
          } else {
            // Handle and display errors if user creation fails
            // You may want to update the 'errors' state
            console.error(postError);
          }
        });
      };

      return (
        <div >
            <form className="globalCont" onSubmit={(event) => handleSubmit(event)} >
              <h3 className="formTitle">Crear Nuevo Usuario</h3>
              <div>
                <label>Name</label>
                <input className="input1"
                  type="text"
                  placeholder="Enter a name"
                  name="name"
                  onChange={handleChange}
                  value={userData.name}
                />
                <p className={style.errores} style={{ visibility: errors.name ? 'visible' : 'hidden' }}>
                  {errors.name}
                </p>
                </div>
    
              <div >
                <label>Last Name</label>
                <input className="input1"
                  type="text"
                  placeholder="Enter the last name"
                  name="last_name"
                  onChange={handleChange}
                  value={userData.last_name}
                />
                <p className={style.errores} style={{ visibility: errors.last_name ? 'visible' : 'hidden' }}>
                  {errors.last_name}
                </p>
              </div>
    
              <div >
                <label>Phone Number</label>
                <input className="input1"
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone_number"
                  onChange={handleChange}
                  value={userData.phone_number}
                />
                <p className={style.errores} style={{ visibility: errors.phone_number ? 'visible' : 'hidden' }}>
                  {errors.phone_number}
                </p>
              </div>
    
              <div >
                  <label>Address</label>
                  <input className="input1"
                    type="text"
                    placeholder="Enter address"
                    name="address"
                    onChange={handleChange}
                    value={userData.address}
                  />
                  <p className={style.errores} style={{ visibility: errors.address ? 'visible' : 'hidden' }}>
                    {errors.address}
                  </p>
              </div>
    
              <div >
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  value={userData.email}
                />
                <p className={style.errores} style={{ visibility: errors.email ? 'visible' : 'hidden' }}>
                  {errors.email}
                </p>
              </div>
    
              <div >
                <label>Password</label>
                <input className="input1"
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  onChange={handleChange}
                  value={userData.password}
                />
                <p className={style.errores} style={{ visibility: errors.password ? 'visible' : 'hidden' }}>
                  {errors.password}
                </p>
              </div>
    
              
                <div >
                  <label>Admin</label>
                  <input className="input2"
                    type="checkbox"
                    name="admin"
                    checked={userData.admin}
                    onChange={handleChange}
                  />
                </div>
                <div >
                  <label>Employee</label>
                  <input className="input2"
                    type="checkbox"
                    name="employee"
                    checked={userData.employee}
                    onChange={handleChange}
                  />
                </div>
              
    
              <br />
              <br />
              <div className="buttonDiv">
                <button
                  className="btn"
                  disabled={isSubmitDisabled}
                  style={isSubmitDisabled ? { opacity: '0.6', cursor: 'not-allowed' } : null}
                  type="submit"
                >
                  Create
                </button>
              </div>
              <p className="errores" style={{ visibility: userErrors?.createUser?.error ? 'visible' : 'hidden' }}>
                {userErrors?.createUser?.error}
              </p>
            </form>
          
          {/* Add any additional user-related information or preview here if needed */}
        </div>
      );
    };
  
    export default UserForm;




