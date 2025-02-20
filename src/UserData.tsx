

export interface User{
    username:string;
    fullname:string;
    email:string;
    age:number;
    location:string[];  
}

export default function UserData({username, fullname, email, age, location}:User) {
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
      </ul>
    </div>
  )
}
