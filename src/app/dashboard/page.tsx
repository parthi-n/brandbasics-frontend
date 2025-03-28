"use client";

import Link from "next/link";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context";

export default function Page() {
	const { setProject } = useContext(AppContext);
	
	useEffect(() => {
		setProject(null);
	}, []);

	const projects = [
		{
			projectName: "Spark",
			projectId: "1",
			projectSlug: "spark",
		},
		{
			projectName: "NeonPulse",
			projectId: "2",
			projectSlug: "NeonPulse",
		},
		{
			projectName: "UrbanHaven",
			projectId: "3",
			projectSlug: "UrbanHaven",
		},
		{
			projectName: "SkyLoom",
			projectId: "4",
			projectSlug: "SkyLoom",
		},
	];
	return (
		<div className="flex flex-1 flex-col gap-4 pt-0">
			<h1 className="text-2xl font-bold">Projects</h1>
			<div className="grid auto-rows-min gap-4 md:grid-cols-3">
				{projects.map((project) => (
					<Link href={"/dashboard/" + project.projectSlug} key={project.projectId} className="bg-muted/50 aspect-video rounded-xl">
						{project.projectName}
					</Link>
				))}
			</div>
		</div>
	);
}
