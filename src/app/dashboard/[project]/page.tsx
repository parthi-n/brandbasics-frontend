import ProjectDetails from "./ProjectDetails";

export default async function project({ params }: { params: Promise<{ projectSlug: string }> }) {
	const projectSlug = (await params).project;

	// Fetch Project Info
	// Pass it as prop
	
	return <ProjectDetails projectSlug={projectSlug} />;
}
