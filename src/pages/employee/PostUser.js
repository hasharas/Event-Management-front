
import { useState } from "react";
import "./PostUser.css";
import form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

const PostUser = () =>{

      const [formData, setFormData] = useState({
            name: "",
            email:"",
            phone:"",
            department:""
      });

      const handleInputChange = (event) =>{
            const {name, value} = event.target;
            setFormData({
                  ...formData,
                  [name]:value,
            })
      }

      return(
            <>
                  <div className="center-form">
                        <h1 className="h1" >Post New Employee</h1>
                        <form action="">
                              <form.Group controlId = "formBasicName">
                                    <form.Control 
                                          type="text"
                                          name="name"
                                          placeholder="Enter Name"
                                          value={formData.name}
                                          onChange={handleInputChange}
                                    />
                              </form.Group>

                              <form.Group controlId = "formBasicName">
                                    <form.Control 
                                          type="email"
                                          name="email"
                                          placeholder="Enter email"
                                          value={formData.email}
                                          onChange={handleInputChange}
                                    />
                              </form.Group>

                              <form.Group controlId = "formBasicName">
                                    <form.Control 
                                          type="text"
                                          name="phone"
                                          placeholder="Enter phone"
                                          value={formData.phone}
                                          onChange={handleInputChange}
                                    />
                              </form.Group>

                              <form.Group controlId = "formBasicName">
                                    <form.Control 
                                          type="text"
                                          name="department"
                                          placeholder="Enter department"
                                          value={formData.department}
                                          onChange={handleInputChange}
                                    />
                              </form.Group>

                              <Button   type="submit" className="w-100 custom-button">
                                    Post Employee
                              </Button>

                        </form>
                  </div>
            </>
      )
}

export default PostUser;