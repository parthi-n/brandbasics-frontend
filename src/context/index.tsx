"use client";

import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const getUserFromToken = () => {
	if (typeof window === "undefined") return null; // Ensure code only runs in the browser

	const token = localStorage.getItem("token");

	if (!token) return null;

	return JSON.parse(atob(token.split(".")[1])).payload;
};

function AppContextWrapper({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const userFromToken = getUserFromToken();
		setUser(userFromToken);
	}, []);

	const isLoggedIn = user && user.username;
	const value = { user, setUser, isLoggedIn };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContextWrapper, AppContext };
