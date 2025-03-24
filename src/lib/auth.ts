const BASE_URL = "http://localhost:3500/auth";

const handleResponse = async (res) => {
	let data;
	try {
		data = await res.json();
	} catch (error) {
		throw new Error(`Invalid response from server. Status: ${res.status}`);
	}

	if (!res.ok) {
		throw new Error(data.error || `HTTP error! Status: ${res.status}`);
	}

	return data;
};

const signUp = async (formData) => {
	try {
		const res = await fetch(`${BASE_URL}/sign-up`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
			credentials: "include",
		});

		return await handleResponse(res);
	} catch (error) {
		console.log("Error during sign-up:", error);
		throw new Error(error.message);
	}
};

const signIn = async (formData) => {
	try {
		const res = await fetch(`${BASE_URL}/sign-in`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
			credentials: "include",
		});

		// Handle the response based on the status of the request
		return await handleResponse(res);
	} catch (error) {
		console.error("Error during sign-in:", error);
		throw new Error(error.message || "An error occurred during sign-in.");
	}
};

const signOut = async () => {
	try {
		const res = await fetch(`${BASE_URL}/sign-out`, {
			method: "POST",
			credentials: "include",
		});

		const data = await handleResponse(res);
		console.log(data.message);
	} catch (error) {
		console.error("Error during sign-out:", error);
	}
};

export const verifyToken = async (cookie) => {
	try {
		const res = await fetch(`${BASE_URL}/verify-token`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${cookie.token}`,
			},
			credentials: "include",
		});

		const data = await res.json();

		if (!res.ok) {
			throw new Error("Failed to verify token");
		}

		return data.isValid;
	} catch (error) {
		console.log("Error during token verification:", error);
		throw new Error(error.message);
	}
};

export { signUp, signIn, signOut, verifyToken };
