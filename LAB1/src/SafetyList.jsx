import React, { useState } from 'react'
import UserInfo from './userInfo.jsx'

function SafetyList() {
    const [users, setUsers] = useState([
  {
    "id": 1,
    "firstName": "Lukas",
    "lastName": "Steuart",
    "email": "lsteuart0@squidoo.com",
    "gender": "Male",
    "ipAddress": "",
    "isDisplay": false,
    "isDelete": false,
    "country": "American"
  },
  {
    "id": 2,
    "firstName": "Salli",
    "lastName": "Brandacci",
    "email": "sbrandacci1@earthlink.net",
    "gender": "Non-binary",
    "ipAddress": "66.13.183.31",
    "isDisplay": true,
    "isDelete": false,
    "country": "American"
  },
  {
    "id": 3,
    "firstName": "Florian",
    "lastName": "Flanne",
    "email": "fflanne2@umich.edu",
    "gender": "Male",
    "ipAddress": "87.199.176.114",
    "isDisplay": true,
    "isDelete": false,
    "country": "England"
  },
  {
    "id": 4,
    "firstName": "Ric",
    "lastName": "Richen",
    "email": "rrichen3@bloomberg.com",
    "gender": "Male",
    "ipAddress": "31.25.142.135",
    "isDisplay": true,
    "isDelete": true,
    "country": "VietNam"
  },
  {
    "id": 5,
    "firstName": "Mellie",
    "lastName": "Lapish",
    "email": "mlapish4@howstuffworks.com",
    "gender": "Female",
    "ipAddress": "",
    "isDisplay": false,
    "isDelete": true,
    "country": "VietNam"
  },
  {
    "id": 6,
    "firstName": "Lilla",
    "lastName": "Brewett",
    "email": "lbrewett5@wufoo.com",
    "gender": "Female",
    "ipAddress": "51.88.115.175",
    "isDisplay": true,
    "isDelete": true,
    "country": "VietNam"
  },
  {
    "id": 7,
    "firstName": "Joseph",
    "lastName": "Jansson",
    "email": "jjansson6@xinhuanet.com",
    "gender": "Male",
    "ipAddress": "106.94.235.167",
    "isDisplay": true,
    "isDelete": false,
    "country": "VietNam"
  },
  {
    "id": 8,
    "firstName": "Sharai",
    "lastName": "Ridolfi",
    "email": "sridolfi7@vistaprint.com",
    "gender": "Female",
    "ipAddress": "",
    "isDisplay": true,
    "country": "VietNam"
  },  {
    "id": 9,
    "firstName": "Bealle",
    "lastName": "Janczewski",
    "email": "bjanczewski8@alexa.com",
    "gender": "Genderfluid",
    "ipAddress": "246.75.73.11",
    "isDisplay": true,
    "isDelete": true,
    "country": "VietNam"
  },
  {
    "id": 10,
    "firstName": "Koren",
    "lastName": "Axworthy",
    "email": "kaxworthy9@techcrunch.com",
    "gender": "Female",
    "ipAddress": "41.63.210.147",
    "isDisplay": true,
    "country": "VietNam"
  }
]
)
  const deleteUser = (id) => {
    setUsers(pre=>pre.filter(item => item.id !== id));
  }

  return (
    <div>
      {users.map((item) => (
        item.isDisplay ? (
          <div key={item.id}>
            <UserInfo user={item} />
            {item.isDelete ? <button onClick={() => deleteUser(item.id)}>Delete</button> : null}
          </div>
        ) : null
      ))}
    </div>
  )
}

export default SafetyList