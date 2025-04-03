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

interface Sidenav {}

interface AppContextWrapperProps {
	children: ReactNode;
}

function AppContextWrapper({ children, userData }: AppContextWrapperProps): ReactElement {
	const initialUser =
		userData && userData.id ? { username: userData.username, email: userData.email, userId: userData.id, userType: userData.userType } : null;
	const initialProjectList = userData && userData.project ? userData.project : null;

	const [user, setUser] = useState<User | null>(initialUser);
	const [project, setProject] = useState(null);
	const [projectList, setProjectList] = useState(initialProjectList);
	const [quickBrandStrategies, setQuickBrandStrategies] = useState(null);
	const [isProjectOpen, setIsProjectOpen] = useState(false);

	const value = {
		user,
		setUser,
		project,
		setProject,
		projectList,
		setProjectList,
		quickBrandStrategies,
		setQuickBrandStrategies,
		isProjectOpen,
		setIsProjectOpen,
	};

	return (
		<AppContext.Provider userData={userData} value={value}>
			{children}
		</AppContext.Provider>
	);
}

export { AppContextWrapper, AppContext };
