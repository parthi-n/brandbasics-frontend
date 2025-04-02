"use client";

import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context";
import { fetchProject } from "@/app/api/projects";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
	const { user, project, setProject, isProjectOpen } = useContext(AppContext);
	const params = useParams();
	const projectSlug = params.project;

	const fetchProjectData = async (userId) => {
		const projectData = await fetchProject(userId, projectSlug);
		await setProject(projectData);
	};

	useEffect(() => {
		if (user && user.userId) {
			fetchProjectData(user.userId);
		}
	}, [user]);


	return <div>{children}</div>;
}
