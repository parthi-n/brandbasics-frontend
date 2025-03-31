const BASE_URL = process.env.NEXT_PUBLIC_BRANDBASICS_BACKEND_URL || process.env.NEXT_PUBLIC_BRANDBASICS_BACKEND_LOCAL_URL;
const PROJECTS_URL = `${BASE_URL}/projects/`;

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

export async function fetchProjectList(userId) {
	try {
		const res = await fetch(`${PROJECTS_URL}/${userId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});

		return await handleResponse(res);
	} catch (error) {
		console.error("Error fetching user data:", error);
		throw new Error("Failed to fetch user data.");
	}
}

export async function fetchProject(userId, projectId) {
	try {
		const res = await fetch(`${PROJECTS_URL}/${userId}/${projectId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});

		return await handleResponse(res);
	} catch (error) {
		console.error("Error fetching user data:", error);
		throw new Error("Failed to fetch user data.");
	}
}

export async function createProject(projectDetails) {
	try {
		const res = await fetch(`${PROJECTS_URL}/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(projectDetails),
		});

		return await handleResponse(res);
	} catch (error) {
		console.error("Error Creating Project:", error);
		throw new Error("Failed to create project.");
	}
}
