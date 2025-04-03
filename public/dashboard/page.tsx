import DashboardDetails from "./dashboardDetails";
import { fetchUsers } from "../api/fetchUserData";
import { cookies } from "next/headers";


export default async function Page() {
	const cookieStore = await cookies();
	const token = cookieStore.get("token")?.value;

	const userData = await fetchUsers(token);
	//	console.log("userData", userData);

	return <DashboardDetails />;
}
