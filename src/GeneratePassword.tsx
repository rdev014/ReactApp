import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const PasswordGen: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(6);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);

  const generatePassword = () => {
    const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/~";
    const numbers = "0123456789";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let characters = "";
    if (includeSymbols) characters += symbols;
    if (includeNumbers) characters += numbers;
    if (includeLowercase) characters += lowercase;
    if (includeUppercase) characters += uppercase;

    if (!characters) {
      toast.error("Please select at least one option!");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
    toast.success("Password generated successfully!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const copyToClipboard = () => {
    if (!password) {
      toast.error("Error: No password to copy!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    navigator.clipboard.writeText(password);
    toast.success("Password copied to clipboard!",
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-neutral-900">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          Password Generator
        </h1>

        {/* Password Output */}
        <div className="relative mb-6">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full p-3 border border-gray-600 rounded-xl text-lg font-mono text-white bg-gray-700 focus:outline-none shadow-sm pr-12 focus:ring-2 focus:ring-green-500"
            placeholder="Generated Password"
          />
          <button
            onClick={copyToClipboard}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition duration-300 shadow-md font-bold active:scale-95"
          >
            Copy
          </button>
        </div>

        {/* Password Length Slider */}
        <div className="mb-6">
          <label className="block text-white mb-2 font-medium">
            Password Length: {length}
          </label>
          <input
            type="range"
            min="6"
            max="128"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-green-600 cursor-pointer"
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-3 mb-6 text-white font-medium">
          <label className="flex items-center cursor-pointer  transition">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="mr-2 accent-green-600"
            />
            Include Symbols
          </label>
          <label className="flex items-center cursor-pointer transition">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="mr-2 accent-green-600"
            />
            Include Numbers
          </label>
          <label className="flex items-center cursor-pointer  transition">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              className="mr-2 accent-green-600"
            />
            Include Lowercase Letters
          </label>
          <label className="flex items-center cursor-pointer  transition">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className="mr-2 accent-green-600"
            />
            Include Uppercase Letters
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white p-3 rounded-xl font-bold hover:opacity-90 transition duration-300 shadow-lg active:scale-95"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGen;
