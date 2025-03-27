
const BASE_URL = process.env.NEXT_PUBLIC_BRANDBASICS_BACKEND_URL || process.env.NEXT_PUBLIC_BRANDBASICS_BACKEND_LOCAL_URL;
const AUTH_URL = `${BASE_URL}/users`;

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

const userInfo = async (req: NextRequest) => {
	const cookie = req.cookies.get("token");

	// Check if the cookie exists
	if (!cookie) {
        console.error("Token cookie not found.");
		throw new Error("Authentication token is missing.");
	}
    console.log("cookie", cookie.value);
	try {
		const res = await fetch(`${AUTH_URL}/user-info`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${cookie.value}`,
			},
			credentials: "include",
			body: JSON.stringify(cookie.value),
		});

		return await handleResponse(res);
	} catch (error) {
		console.error("Error during sign-in:", error);
		throw new Error(error.message || "An error occurred during sign-in.");
	}
};

export { userInfo };
