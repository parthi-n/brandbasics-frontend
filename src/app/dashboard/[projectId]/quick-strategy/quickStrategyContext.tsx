"use client";
import { AppContext } from "@/context";
import { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function QuickStrategyContext({ projectId }) {
	const { project, setIsProjectOpen } = useContext(AppContext);

	useEffect(() => {
		{
			projectId ? setIsProjectOpen(true) : setIsProjectOpen(false);
		}
	}, [project]);

	return;
}
