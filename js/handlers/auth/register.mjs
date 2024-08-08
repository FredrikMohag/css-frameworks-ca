// register.mjs
export async function register(email, password) {
  try {
    const response = await fetch("https://v2.api.noroff.dev/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Registration successful:", data); // Added console log
      return data;
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error("Error during registration: " + error.message);
  }
}
