import React, { useEffect, useState } from 'react';
import { useUserContext } from './Usercontext';
import axios from 'axios';




const userAttributes = [
  'name', 'gender', 'age', 'height', 'weight', 'contact', 'address', 'email', 'bloodtype', 
  'allergies', 'medicalhistory', 'averagesleepduration', 'dietarypreferences', 'exercisehabits', 'bmi',
  'emergencycontact', 'healthgoals'
];

function PersonalProfile() {
  const { username } = useUserContext();

  const [userInfo, setUserInfo] = useState({
    username: '',
    name: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    contact: '',
    address: '',
    email: '',
    bloodtype: '',
    allergies: '',
    medicalhistory: '',
    averagesleepduration: '',
    dietarypreferences: '',
    exercisehabits: '',
    bmi: '',
    emergencycontact: '',
    healthgoals: ''
  });

  
  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    // 在这里发送更新请求到后端
    setEditable(false);
    fetchData();
  };

  const handleChange = (field, value) => {
    setUserInfo(prevState => ({
      ...prevState,
      [field]: value
    }));
    console.log(field + value)
  };



  const catchData = async () => {
    try {

      const response = await axios.post('http://127.0.0.1:5000/Initialprofile', { username});
      console.log('Data sent successfully');

      const userData = response.data.results;
      console.log(userData)
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        username: userData[0].username,
        name: userData[0].name,
        gender: userData[0].gender,
        age: userData[0].age,
        height: userData[0].height,
        weight: userData[0].weight,
        contact: userData[0].contact,
        address: userData[0].address,
        email: userData[0].email,
        bloodtype: userData[0].bloodtype,
        allergies: userData[0].allergies,
        medicalhistory: userData[0].medicalhistory,

        averagesleepduration: userData[0].averagesleepduration,
        dietarypreferences: userData[0].dietarypreferences,
        exercisehabits: userData[0].exercisehabits,
        bmi: userData[0].bmi,
        emergencycontact: userData[0].emergencycontact,
        healthgoals: userData[0].healthgoals,
      }));

    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };
  
  const fetchData = async () => {
    try {
      const name = userInfo.name
      const gender = userInfo.gender
      const age = userInfo.age
      const height = userInfo.height
      const weight = userInfo.weight
      const contact = userInfo.contact
      const address = userInfo.address
      const email = userInfo.email
      const bloodtype = userInfo.bloodtype
      const allergies = userInfo.allergies
      const medicalhistory = userInfo.medicalhistory
      const averagesleepduration = userInfo.averagesleepduration
      const dietarypreferences = userInfo.dietarypreferences
      const exercisehabits = userInfo.exercisehabits
      const bmi = userInfo.bmi
      const emergencycontact = userInfo.emergencycontact
      const healthgoals = userInfo.healthgoals

      const response = await axios.post('http://127.0.0.1:5000/Personalprofile', { username, name, gender, age, height, weight, contact
    , address, email, bloodtype, allergies, medicalhistory, averagesleepduration, dietarypreferences, exercisehabits, bmi, emergencycontact, healthgoals});
      console.log('Data sent to backend successfully');
    //   console.log(response.data); // 这里是后端返回的数据

      const userData = response.data.results;
      console.log(userData)
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        username: userData[0].username,
        name: userData[0].name,
        gender: userData[0].gender,
        age: userData[0].age,
        height: userData[0].height,
        weight: userData[0].weight,
        contact: userData[0].contact,
        address: userData[0].address,
        email: userData[0].email,
        bloodtype: userData[0].bloodtype,
        allergies: userData[0].allergies,
        medicalhistory: userData[0].medicalhistory,

        averagesleepduration: userData[0].averagesleepduration,
        dietarypreferences: userData[0].dietarypreferences,
        exercisehabits: userData[0].exercisehabits,
        bmi: userData[0].bmi,
        emergencycontact: userData[0].emergencycontact,
        healthgoals: userData[0].healthgoals,
      }));

    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  useEffect(() => {
    if (username !== '') {
        catchData();


    }
  }, [username]);

  

  return (
    <div>
      <h2>个人界面 Personal Profile</h2>
      <h2>用户名 Username: {username}</h2>

      <form>
        {userAttributes.map(field => (
          <div key={field}>
            <label>{field}:</label>
            <input
              type="text"
              value={userInfo[field]}
              readOnly={!editable}
              onChange={e => handleChange(field, e.target.value)}
            />
          </div>
        ))}
      </form>
      {editable ? (
        <div>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
}

export default PersonalProfile;
