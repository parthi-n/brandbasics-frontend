"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "@/context";

export default function ProjectDetails({ projectSlug }) {
	const { setProject } = useContext(AppContext);
	useEffect(() => {
		setProject(null);
	}, []);

	return (
		<div>
			<h1>{projectSlug}</h1>
		</div>
	);
}
