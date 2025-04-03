"use client";

import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context";
import { fetchProjectList } from "@/app/api/(project)/fetchProjectList";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
	const { user, project, setProject, isProjectOpen } = useContext(AppContext);
	const params = useParams();
	const projectSlug = params.project;

	const fetchProjectData = async (userId) => {
		const projectData = await fetchProjectList(userId, projectSlug);
		await setProject(projectData);
	};

	useEffect(() => {
		if (user && user.userId) {
			fetchProjectData(user.userId);
		}
	}, [user]);


	return <div>{children}</div>;
}
