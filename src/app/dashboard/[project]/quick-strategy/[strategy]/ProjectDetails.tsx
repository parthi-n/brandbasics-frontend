"use client";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context";
import { retrieveQuickStrategy } from "@/app/api/strategy";

export default function ProjectDetails({ projectSlug }) {
	const { user, project } = useContext(AppContext);
	const [quickStrategy, setQuickStrategy] = useState();

	const fetchQuickStrategyData = async () => {
		const userData = {
			userId: user?.userId,
			projectId: project?.id,
		};

		const quickStrategyData = await retrieveQuickStrategy(userData, projectSlug);
		await setQuickStrategy(quickStrategyData[0]);
	};

	useEffect(() => {
		if (user && user.userId && project && project.id) {
			fetchQuickStrategyData();
		}
	}, [project]);

	const brandName = quickStrategy?.quickStrategyInput.brandName;
	const {
		brandArchetype,
		brandBeliefs,
		brandBenefits,
		brandMessaging,
		brandMission,
		brandPersonality,
		brandPosition,
		brandPromise,
		brandStory,
		reasonsToBelieve,
		toneOfVoice,
		colorPalette,
	} = quickStrategy ?? {};

	const brandColor1 = colorPalette?.[0]; // Default to black if undefined
	const brandColor2 = colorPalette?.[1];
	const brandColor3 = colorPalette?.[2];
	const brandColor4 = colorPalette?.[3];
	const brandColor5 = colorPalette?.[4];

	return (
		<div className="flex flex-1 flex-col gap-4 pt-8 mb-28">
			<div className="flex flex-col my-4">
				<h1 className="text-2xl font-bold">{brandName}</h1>
				<p className="font-bold text-6xl">{brandPosition}</p>
				<p className="mt-2">
					Brand Archetype: <b>{brandArchetype}</b>
				</p>
			</div>

			<div className="flex flex-col gap-20 mt-20 border-t-2 border-b-gray-600 py-8">
				<div>
					<p className=" font-bold mb-2">Brand Promise</p>
					<p className="font-bold text-5xl w-[75%] mb-4">{brandPromise}</p>
					<div>
						{Array.isArray(brandMission) && brandMission.length > 0 ? (
							brandMission.map((item, index) => (
								<p className="text-[24px] w-[75%]" key={index}>
									{item}
								</p>
							))
						) : (
							<span>No brandMission available.</span>
						)}
					</div>
				</div>

				<div className="grid auto-rows-min gap-4 md:grid-cols-6 mt-20">
					<div className="bg-muted/50  rounded-xl p-8 col-span-3">
						<div className="flex flex-col  h-full ">
							<p className=" font-bold mb-2">Personality</p>
							<div className="">
								{Array.isArray(brandPersonality) && brandPersonality.length > 0 ? (
									brandPersonality.map((item, index) => (
										<p className="" key={index}>
											- {item}
										</p>
									))
								) : (
									<span>No brand personality available.</span>
								)}
							</div>
						</div>
					</div>
					<div className="bg-muted/50  rounded-xl p-8 col-span-3">
						<div className="flex flex-col  h-full ">
							<p className=" font-bold mb-2">Brand Beliefs</p>
							<div className="">
								{Array.isArray(brandBeliefs) && brandBeliefs.length > 0 ? (
									brandBeliefs.map((item, index) => (
										<p className="" key={index}>
											- {item}
										</p>
									))
								) : (
									<span>No brandBeliefs available.</span>
								)}
							</div>
						</div>
					</div>

					<div className="bg-muted/50  rounded-xl p-8 col-span-3">
						<div className="flex flex-col  h-full ">
							<p className=" font-bold mb-2">Brand Benefits</p>
							<div>
								{Array.isArray(brandBenefits) && brandPersonality.length > 0 ? (
									brandBenefits.map((item, index) => (
										<p className="" key={index}>
											- {item}
										</p>
									))
								) : (
									<span>No brandBenefits available.</span>
								)}
							</div>
						</div>
					</div>

					<div className="bg-muted/50  rounded-xl p-8 col-span-3">
						<div className="flex flex-col  h-full ">
							<p className=" font-bold mb-2">Reasons To Believe</p>
							<div>
								{Array.isArray(reasonsToBelieve) && reasonsToBelieve.length > 0 ? (
									reasonsToBelieve.map((item, index) => (
										<p className="" key={index}>
											- {item}
										</p>
									))
								) : (
									<span>No reasonsToBelieve available.</span>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-20 mt-20 border-t-2 border-b-gray-600 py-8">
				<div>
					<p className=" font-bold mb-2">Brand Story</p>
					<div className="font-bold text-5xl w-[75%] mb-4">
						{Array.isArray(brandMission) && brandMission.length > 0 ? (
							brandMission.map((item, index) => (
								<p className=" w-[75%]" key={index}>
									{item}
								</p>
							))
						) : (
							<span>No brandMission available.</span>
						)}
					</div>
				</div>

				<div>
					<p className=" font-bold mb-2">Brand Messaging</p>
					<p className="font-bold text-4xl w-[75%] mb-4">
						{Array.isArray(brandMessaging) && brandMessaging.length > 0 ? (
							brandMessaging.map((item, index) => (
								<p className=" w-[75%]" key={index}>
									{item}
								</p>
							))
						) : (
							<span>No brandMessaging available.</span>
						)}
					</p>
					<div className="flex gap-2">
						{Array.isArray(toneOfVoice) && toneOfVoice.length > 0 ? (
							toneOfVoice.map((item, index) => (
								<p className="bg-blue-100 px-2 rounded-sm uppercase text-[14px] font-medium" key={index}>
									{item}
								</p>
							))
						) : (
							<span>No toneOfVoice available.</span>
						)}
					</div>
				</div>
			</div>

			
		</div>
	);
}
