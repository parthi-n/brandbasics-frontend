import ProjectDetails from "./ProjectDetails";

export default async function project({ params }: { params: Promise<{ projectSlug: string }> }) {
    const projectSlug = (await params).project;
    console.log(projectSlug)


    
    return <ProjectDetails projectSlug={projectSlug} />;
}
