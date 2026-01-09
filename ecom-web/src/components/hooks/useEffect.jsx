import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase";
// import { supabase } from "."
const UseEffect = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    signUpNewUser();
  }, []);

const signUpNewUser = async () => {
    const email = "anzer@gmail.com".trim().toLowerCase();
    const password = "TestPassword123!";

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error("Signup Error:", error.message);
    } else {
      console.log("Signed up successfully:", data);
    }
  };

  <button onClick={signUpNewUser}>Sign Up</button>;

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button>-</button>
    </div>
  );
};

export default UseEffect;
