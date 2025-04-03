import { fetchUsers } from "../api/fetchUserData";
import { AppContextWrapper } from "@/context";
import DashboardUi from "@/components/dashboardUi";

export default async function DashboardLayout({ children, params }: { children: React.ReactNode }) {
	const userData = await fetchUsers();


	return (
		<AppContextWrapper userData={userData}>
			<DashboardUi>{children}</DashboardUi>
		</AppContextWrapper>
	);
}
