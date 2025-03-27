"use client";

import { createContext, useState } from "react";

const AppContext = createContext<AppContextType | undefined>(undefined);

interface User {
	username: string;
	email: string;
	userId: string;
	userType: string;
}

interface AppContextType {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	isLoggedIn: boolean;
}

interface AppContextWrapperProps {
	children: ReactNode;
}

function AppContextWrapper({ children }: AppContextWrapperProps): ReactElement {
	const [user, setUser] = useState<User | null>(null);
	const isLoggedIn = user && user.username ? true : false;
	const value = { user, setUser, isLoggedIn };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContextWrapper, AppContext };
