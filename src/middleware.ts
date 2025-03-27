import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function middleware(req: NextRequest) {
	const cookie = req.cookies.get("token");

	if (!cookie || !cookie.value) {
		return NextResponse.redirect(new URL("/signin", req.url));
	}

	try {
		const token = {
			token: cookie.value,
		};

		const isValid = await verifyToken(token);

		if (cookie && isValid) {
			return NextResponse.next();
		} else {
			return NextResponse.redirect(new URL("/signin", req.url));
		}


		
	} catch (error) {
		console.log("Invalid or expired token", error);
		return NextResponse.redirect(new URL("/signin", req.url));
	}
}

export const config = {
	matcher: ["/dashboard"],
};
