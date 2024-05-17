"use client"

import React, { useState } from "react";

const RetirementAgeCalculator = () => {
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("male");
  const [retirementAgeYears, setRetirementAgeYears] = useState(null);
  const [retirementAgeMonths, setRetirementAgeMonths] = useState(null);

  const calculateRetirementAge = () => {
    const year = parseInt(birthYear);
    let retirementYears = null;
    let retirementMonths = null;

    if (gender === "male") {
      if (year < 1957) {
        retirementYears = 60;
      } else if (year >= 1957 && year < 1977) {
        retirementYears = 60 + Math.floor((year - 1957) * 0.25);
        retirementMonths = Math.floor((year - 1957) * 0.25 * 12) % 12;
      } else if (year >= 1977) {
        retirementYears = 65;
      }
    } else if (gender === "female") {
      if (year < 1962) {
        retirementYears = 55;
      } else if (year >= 1962 && year < 2002) {
        retirementYears = 55 + Math.floor((year - 1962) * 0.25);
        retirementMonths = Math.floor((year - 1962) * 0.25 * 12) % 12;
      } else if (year >= 2002) {
        retirementYears = 65;
      }
    }

    setRetirementAgeYears(retirementYears);
    setRetirementAgeMonths(retirementMonths);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Тэтгэвэрт гарах нас</h2>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <label htmlFor="birthYear" className="block text-lg font-semibold mb-2">
          Төрсөн он:
        </label>
        <input
          type="number"
          id="birthYear"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
        />
        <label htmlFor="gender" className="block text-lg font-semibold mt-4 mb-2">
          Хүйс:
        </label>
        <select
          id="gender"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Эрэгтэй</option>
          <option value="female">Эмэгтэй</option>
        </select>
        <button
          className="w-full mt-6 px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-300 focus:outline-none focus:bg-red-600"
          onClick={calculateRetirementAge}
        >
          Тооцоолох
        </button>
        {retirementAgeYears !== null && (
          <p className="text-lg font-semibold mt-6">
            Та {retirementAgeYears} нас {retirementAgeMonths || 0} сартай тэтгэвэрт гарна.
          </p>
        )}
      </div>
    </div>
  );
};

export default RetirementAgeCalculator;
