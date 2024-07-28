
import { useState } from "react";
import "./PostUser.css";
import form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { useNavigate }  from "react-router-dom";


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
      };

      const navigate = useNavigate();

      const handleSubmit = async (e) =>{
            e.preventDefault();

            console.log(formData);

            try {
                  const response = await fetch("http://localhost:8081/api/employee",{
                        method : "post",
                        headers: {"Content-type":"application/json"},
                        body:JSON.stringify(formData)
                  });

                  const data =await response.json();
                  console.log("Employee created:",data);
                  navigate("/")
            } catch (error) {
                  console.log("Error creating employee:",error.massege);
            }
      }

      return(
            <>
                  <div className="center-form">
                        <h1 className="h1" >Post New Employee</h1>
                        <form onSubmit={handleSubmit}>
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