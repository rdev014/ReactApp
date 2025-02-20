// interface UserData {   // this data is created by using typescript interface
//   fullName: string;
//   Age: number;
//   Place: string;
//   Premium?: boolean;
// }

// This data is creted by using type interface
export type UserData = {
  fullName?: string;
  Age?: number;
  Place?: string;
  Premium?: boolean;
};

export default function User({
  fullName = "Na",
  Age = 0,
  Place = "Dhobi ka Kutta",
  Premium = false,
}: UserData) {
  return (
    <div>
      {fullName}
      {Age}
      {Place}
      {Premium}
    </div>
  );
}
