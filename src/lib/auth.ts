const BASE_URL = process.env.NEXT_PUBLIC_BRANDBASICS_BACKEND_URL || process.env.NEXT_PUBLIC_BRANDBASICS_BACKEND_LOCAL_URL;
const AUTH_URL = `${BASE_URL}/auth`;

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
		const res = await fetch(`${AUTH_URL}/sign-up`, {
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
		const res = await fetch(`${AUTH_URL}/sign-in`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
			credentials: "include",
		});

		return await handleResponse(res);
	} catch (error) {
		console.error("Error during sign-in:", error);
		throw new Error(error.message || "An error occurred during sign-in.");
	}
};

const signOut = async (setUser) => {
	try {
		const res = await fetch(`${AUTH_URL}/sign-out`, {
			method: "POST",
			credentials: "include",
		});

		if (!res.ok) {
			throw new Error("Failed to sign out");
		}

		await setUser(null);

	} catch (error) {
		console.error("Error during sign-out:", error);
	}
};


// for token verification, used in middleware for route protection  
export const verifyToken = async (cookie) => {
	try {
		const res = await fetch(`${AUTH_URL}/verify-token`, {
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
