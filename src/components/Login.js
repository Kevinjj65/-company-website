import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebaseConfig';

export default function Login() {
    let auth = getAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit() {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const userString = JSON.stringify(auth.currentUser);
                navigate("/intro", { state: { userString } });
            })
            .catch((error) => {
                alert("Incorrect password");
            });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-3xl font-bold text-gray-700 mb-6">
                    WITS<i className="fab fa-typo3 text-gray-700"></i>
                </h1>

                <input
                    type="email"
                    placeholder="Email address"
                    className="w-full p-3 mb-4 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-4 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                />

                <div className="flex ml-20 mt-0.5" >
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="welcome"
                        className="mr-1 accent-blue-500"
                    />
                    </div>
                    <div className="flex ml-20 -mt-4">
                    <label htmlFor="okayToEmail" className="text-black text-sm ">
                        Yes, I am a human
                    </label>
                </div>

                <button
                    className=" mt-3 w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={handleSubmit}
                >
                    Sign In
                </button>
            </div>
        </div>
    );
}

// import React,{useState} from "react";
// // import "./login.css"
// import { useNavigate} from "react-router-dom";
//  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";//getauth function to check whether wee are authenticated and createuser.. to create uid and pass
// import app from './firebaseConfig'
// export default function Login() {
//     let auth=getAuth();
//     const navigate = useNavigate();//It helps you navigate (or move) from one page to another without using a regular link.When you call navigate("/intro"), it’s like clicking a link that takes you to the "/intro" page.
//     // for db rem let googleProvider=new GoogleAuthProvider();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("")
//     async function handleSubmit()
//     {
//       signInWithEmailAndPassword(auth,email,password).then(() => {
//         const userString = JSON.stringify(auth.currentUser);
//         navigate("/home",{state:{userString}})}).catch((error) => {
//           alert("incorrect password");
//         });
//     }

//   //  const handleSubmit = async () =>{//asynchronous
//   //   signInWithEmailAndPassword(auth,email,password)
//   //   .then((response)=>{//if that is done THEN do this
//   //       console.log(response);
//   //   })//record response in console
//   //   //if sign in fails
//   //   .catch((err)=>{
//   //       console.log(err)
//   //   })
//   //  }; 
        
//         return (
//           <div className="form-container">
//             <h1 className="logo">
//               WITS<i className="fab fa-typo3"></i>
//             </h1>
           
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 className="form--input"
//                 name="email"
//                 onChange={(event)=>{setEmail(event.target.value)}}
//                 // value={formData.email}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="form--input"
//                 name="password"
//                 onChange={(event)=>{setPassword(event.target.value)}}//event is all the events,target is the specific event,and value is the value of that event ,its like a set of concurrent circles

//                 // value={formData.password}
//               />

//               <div className="form--marketing">
//                 <input
//                   id="okayToEmail"
//                   type="checkbox"
//                   name="welcome"
//                 //   onChange={handleChange}
//                 //   checked={formData.joinedNewsletter}
//                 />
//                 <label htmlFor="okayToEmail">Yes,I am a human</label>
//               </div>
//               <button className="form--submit" onClick={handleSubmit}>
//                 Sign In
//               </button>
//           </div>
//         );
//     }