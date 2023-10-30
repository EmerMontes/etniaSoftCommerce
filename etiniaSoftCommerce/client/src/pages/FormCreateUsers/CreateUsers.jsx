import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser, clearErrors } from '../../redux/actions'; 
import style from './formUser.module.css';
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
        <div className={style.globalCont}>
          <div className={style.formContenedor}>
            <h3 className={style.formTitle}>Create a User</h3>
            <form onSubmit={(event) => handleSubmit(event)} className={style.labelsInputs}>
              <div className={style.name}>
                <label>Name</label>
                <input
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
    
              <div className={style.desc}>
                <label>Last Name</label>
                <input
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
    
              <div className={style.colRat}>
                <label>Phone Number</label>
                <input
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
    
              <div className={style.sizeGen}>
                <div className={style.size}>
                  <label>Address</label>
                  <input
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
              </div>
    
              <div className={style.colRat}>
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
    
              <div className={style.colRat}>
                <label>Password</label>
                <input
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
    
              <div className={style.sizeGen}>
                <div className={style.size}>
                  <label>Admin</label>
                  <input
                    type="checkbox"
                    name="admin"
                    checked={userData.admin}
                    onChange={handleChange}
                  />
                </div>
                <div className={style.size}>
                  <label>Employee</label>
                  <input
                    type="checkbox"
                    name="employee"
                    checked={userData.employee}
                    onChange={handleChange}
                  />
                </div>
              </div>
    
              <br />
              <br />
              <div className={style.buttonDiv}>
                <button
                  className={style.btn}
                  disabled={isSubmitDisabled}
                  style={isSubmitDisabled ? { opacity: '0.6', cursor: 'not-allowed' } : null}
                  type="submit"
                >
                  Create
                </button>
              </div>
              <p className={style.errores} style={{ visibility: userErrors?.createUser?.error ? 'visible' : 'hidden' }}>
                {userErrors?.createUser?.error}
              </p>
            </form>
          </div>
          {/* Add any additional user-related information or preview here if needed */}
        </div>
      );
    };
  
    export default UserForm;




