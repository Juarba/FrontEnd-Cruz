export const API_URL = import.meta.env.VITE_API_URL;

export const authenticateUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/Authenticate/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    });

    if (!response.ok) {
      throw new Error("Credenciales incorrectas");
    }

    // La API devuelve SOLO el token en texto plano
    const token = await response.text();

    return { token };
  } catch (error) {
    console.error("Fallo en authenticateUser:", error);
    throw error;
  }
};
