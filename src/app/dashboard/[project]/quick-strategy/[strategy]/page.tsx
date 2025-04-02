import ProjectDetails from "./ProjectDetails";

export default async function project({ params }: { params: Promise<{ projectSlug: string }> }) {
	const projectSlug = (await params).strategy;

	return <ProjectDetails projectSlug={projectSlug} />;
}
