// import PasswordGen from "./GeneratePassword"
// import Button, { DangerButton, InfoButton, SuccessButton } from "./components/Button";
// import User from "./components/User";

import AdminData from "./AdminData";
import { useTheme } from "./contexts/ThemeContext";
import UserData from "./UserData";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    // <div className="min-h-screen">
    //   {/* <PasswordGen/> */}
    //   {/* <Button onClick={''} disabled={false} text={"text"}/>
    //   <Button onClick={''} disabled={false} text={"Kullu"}/>
    //   <Button  text={"Lullu"}/> */}
    //   <Button disabled={true}>
    //     {/* <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="size-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    //       />
    //     </svg><span>Get This</span> */}
    //     <>
    //       <div className="flex flex-col bg-white border shadow-sm rounded-xl">
    //         <img
    //           className="w-full h-auto rounded-t-xl"
    //           src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
    //           alt="Card Image"
    //         />
    //         <div className="p-4 md:p-5">
    //           <h3 className="text-lg font-bold text-gray-800">Card title</h3>
    //           <p className="mt-1 text-gray-500">
    //             Some quick example text to build on the card title and make up
    //             the bulk of the card's content.
    //           </p>
    //         </div>
    //       </div>
    //     </>
    //   </Button>
    //   <Button disabled={false}>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="size-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    //       />
    //     </svg>
    //     <span>Get This</span>
    //   </Button>
    //   <Button>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="size-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    //       />
    //     </svg>
    //     <span>Get This</span>
    //   </Button>
    //   <DangerButton>Do not Click</DangerButton>
    //   <SuccessButton>
    //     Green
    //   </SuccessButton>
    //   <InfoButton>Info</InfoButton>
    //   <User/>
    // </div>
    <>
      <div>
        <button onClick={toggleTheme} className="bg-black text-white ">
          click{theme}
        </button>
      </div>
      <UserData
        username="Dev01"
        fullname="Dev"
        email="xyz@gmail.com"
        age={24}
        location={["delhi", "17777", "chandnichowk", "India"]}
      />
      <AdminData
        username="Dev01"
        fullname="Dev"
        email="xyz@gmail.com"
        age={24}
        location={["delhi", "17777", "chandnichowk", "India"]}
        isAdmin="Yes"
      />
    </>
  );
}

export default App;
