import React, { useEffect, useState } from 'react';
import "./UpdateUser.css";
import { Button } from 'react-bootstrap';
import form from "react-bootstrap/Form"
import { useParams } from 'react-router-dom';
const UpdateUser = () => {

      const { id } = useParams();
      const [formData, setFormData] = useState({
            name: "",
            email: "",
            phone: "",
            department: ""
      });

      const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData({
                  ...formData,
                  [name]: value,
            })
      };

      useEffect(() => {
            const fetchEmployee = async () => {
                  try {
                        const response = await fetch(`http://localhost:8081/api/employee/${id}`);
                        const data = await response.json();
                        setFormData(data);
                  } catch (error) {
                        console.error("Error fetching user:", error.message);

                  }
            }
            fetchEmployee();
      }, [id])


      return (
            <>
                  <div className="center-form">
                        <h1 className="h1" >Edit Employee</h1>
                        <form >
                              <form.Group controlId="formBasicName">
                                    <form.Control
                                          type="text"
                                          name="name"
                                          placeholder="Enter Name"
                                          value={formData.name}
                                          onChange={handleInputChange}
                                    />
                              </form.Group>

                              <form.Group controlId="formBasicName">
                                    <form.Control
                                          type="email"
                                          name="email"
                                          placeholder="Enter email"
                                          value={formData.email}
                                          onChange={handleInputChange}
                                    />
                              </form.Group>

                              <form.Group controlId="formBasicName">
                                    <form.Control
                                          type="text"
                                          name="phone"
                                          placeholder="Enter phone"
                                          value={formData.phone}
                                          onChange={handleInputChange}
                                    />
                              </form.Group>

                              <form.Group controlId="formBasicName">
                                    <form.Control
                                          type="text"
                                          name="department"
                                          placeholder="Enter department"
                                          value={formData.department}
                                          onChange={handleInputChange}
                                    />
                              </form.Group>

                              <Button type="submit" className="w-100 custom-button">
                                    Edit Employee
                              </Button>

                        </form>
                  </div>
            </>

      );
}

export default UpdateUser;
