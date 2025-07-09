import React from "react";
import { auth } from "../firebase"; // ✅ corrected
import { createUserWithEmailAndPassword } from "firebase/auth";

const TestAuth = () => {
  const testRegister = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, "test@example.com", "123456");
      console.log("✅ Registered:", result.user.email);
    } catch (err) {
      console.error("❌ Error:", err.message);
    }
  };

  return <button onClick={testRegister}>Test Firebase Auth</button>;
};

export default TestAuth;
