"use client";

import Link from "next/link";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context";
import { CreateQuickStrategy } from "@/components/create-quick-strategy";
import { listQuickStrategies } from "@/app/api/strategy";

export default function Page() {
	const { user, project, quickBrandStrategies, setQuickBrandStrategies } = useContext(AppContext);

	const fetchQuickStrategyData = async () => {
		const userData = {
			userId: user?.userId,
			projectId: project?.id,
		};
		const quickStrategyData = await listQuickStrategies(userData);
		await setQuickBrandStrategies(quickStrategyData);
	};

	useEffect(() => {
		if (user && user.userId && project && project.id) {
			fetchQuickStrategyData();
		}
	}, [project]);

    console.log(user?.userId)
	return (
		<div className="flex flex-1 flex-col gap-4 pt-0">
			<div className="flex justify-between items-center my-4">
				<h1 className="text-2xl font-bold">Quick Start</h1>
				<CreateQuickStrategy />
			</div>
			<div className="grid auto-rows-min gap-4 md:grid-cols-3">
				{quickBrandStrategies?.map((item) => (
					<Link href={`/dashboard/${item.projectId}/quick-strategy/${item.id}`} key={item.id} className="bg-muted/50 aspect-video rounded-xl">
						<div className="flex justify-center items-center h-full ">
							<p className="text-3xl font-bold">{item.quickStrategyInput.brandName}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
