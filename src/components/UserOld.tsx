import { FC } from "react";
import { UserData } from "./User";

// interface UserData {
//   fullName: string;
//   Age: number;
//   Place: string;
//   Premium?: boolean;
// }

const UserOld: FC<UserData> = ({
    fullName = "Na",
    Age = 0,
    Place = "Dhobi ka Kutta urf Kullu",
    Premium = false,
  }) => {
  return (
    <div>
      {fullName}
      {Age}
      {Place}
      {Premium}
    </div>
  );
};
export default UserOld;