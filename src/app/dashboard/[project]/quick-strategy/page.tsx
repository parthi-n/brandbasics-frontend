"use client";

import Link from "next/link";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context";
import { CreateProject } from "@/components/create-project";
import { CreateQuickStrategy } from "@/components/create-quick-strategy";
export default function Page() {
	const { projectList, setProject } = useContext(AppContext);

	useEffect(() => {
		setProject(null);
	}, []);

	return (
		<div className="flex flex-1 flex-col gap-4 pt-0">
			<div className="flex justify-between items-center my-4">
				<h1 className="text-2xl font-bold">Quick Start</h1>
				<CreateQuickStrategy />
			</div>
			<div className="grid auto-rows-min gap-4 md:grid-cols-3">
				{/* {projectList?.map((project) => (
					<Link href={"/dashboard/" + project.id} key={project.id} className="bg-muted/50 aspect-video rounded-xl">
						<div className="flex justify-center items-center h-full ">
							<p className="text-2xl">{project.projectName}</p>
						</div>
					</Link>
				))} */}
			</div>
		</div>
	);
}
