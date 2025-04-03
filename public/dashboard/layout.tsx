"use client";

import { useContext, useEffect } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppContext } from "@/context";
import { fetchUsers } from "@/app/api/fetchUserData";
import { fetchProjectList } from "../api/projects";

import SeverTest from "@/components/sever-test";

export default function DashboardLayout({ children, userData }: { children: React.ReactNode }) {
	// const { user, setUser, setProjectList, project, isProjectOpen } = useContext(AppContext);

	// const fetchUserData = async () => {
	// 	const userData = await fetchUsers();
	// 	setUser(userData);
	// };

	// const fetchProjectListData = async (userId) => {
	// 	const projectList = await fetchProjectList(userId);
	// 	setProjectList(projectList);
	// };

	// useEffect(() => {
	// 	fetchUserData();
	// 	console.log("user", user);
	// }, []);

	// useEffect(() => {
	// 	if (user && user.userId) {
	// 		fetchProjectListData(user.userId);
	// 	}
	// }, [user]);

	// 	console.log(userData);

	// useEffect(() => {
	// 	setUser(userData);
	// 	setProjectList(userData.project)
	// 	console.log("user", user);
	// });

	return (
		<SidebarProvider>
		
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-8">
						<SidebarTrigger className="-ml-1" />
						<Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className="hidden md:block">
									<BreadcrumbLink href="/dashboard">Projects</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="hidden md:block" />
								<BreadcrumbItem>
									{/* <BreadcrumbPage className="capitalize">{project?.projectName}</BreadcrumbPage> */}
								</BreadcrumbItem>
								{/* <BreadcrumbSeparator className="hidden md:block" />
								<BreadcrumbItem>
									<BreadcrumbPage>Module Name</BreadcrumbPage>
								</BreadcrumbItem> */}
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
				<div className="px-8">{children}</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
