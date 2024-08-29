import React, { useContext, useState } from "react";

const TerneryOperator = () => {
  const [data, setData] = useState(true);
  const [students, setStudents] = useState(["Jim Halpert","Dwight Schrute","Micheal Scott"]);

  return (
    <div>
      {data ? (
        <div>
          <h1>Welcome!</h1>
          <h2>User Profile :</h2>
        </div>
      ) : (
        <h1>Login </h1>
      )}

      {/* {data && <h1>Condition true</h1>} */}

      {students.map((studentName, i) => (
        <h1 key={i}>{studentName}</h1>
      ))}
    </div>
  );
};

export default TerneryOperator;
