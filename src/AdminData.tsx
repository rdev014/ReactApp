import {type User}  from './UserData'


type Admin = User & { //type can be exported and extend
 isAdmin:string;
}

export default function AdminData({username, fullname, email, age, location, isAdmin}:Admin) {
  return (
    <div>
      <ul>
        <li>{username}</li>
        <li>{fullname}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{location.map((place)=>(<>
            <span>{place}</span><span><br /></span>
        
        </>))}</li>
        <li>{isAdmin}</li>
      </ul>
    </div>
  )
}
