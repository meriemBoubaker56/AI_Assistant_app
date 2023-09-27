import axios from "axios";

export const login = async (body) => {
  try {
    const response = await axios.post("/api/login", body, {
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      const { message, token } = response.data;
      localStorage.setItem("token", token);
    } else {
      console.log("Error:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const register = async (body) => {
  try {
    const response = await axios.post("/api/register", body, {
      headers: { "Content-Type": "application/json" },
    });
    console.log({ response });
    if (response.status === 200) {
      console.log(response.data);
      // console.log("Message:", message);
      // console.log("Token:", token);
      // Faites quelque chose avec le message et le token, par exemple, le stocker dans le localStorage
    } else {
      console.log("Error:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
