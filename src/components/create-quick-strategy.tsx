import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createQuickBrandStrategy } from "@/app/api/strategy";
import { AppContext } from "@/context";

export function CreateQuickStrategy() {
	const router = useRouter();
	const { user, project } = useContext(AppContext);
	const [message, setMessage] = useState();
	const [brandDetails, setBrandDetails] = useState({
		brandName: "EcoLife",
		category: "Sustainable Products",
		productValue: "Affordable and eco-friendly",
		audienceInsights: "Young urban customers care about environment",
		desiredPersona: "Friendly, Trustworthy, Green Innovator",
		brandVision: "Make eco-living accessible to everyone",
	});

	const { brandName, category, productValue, audienceInsights, desiredPersona, brandVision } = brandDetails;

	const handleChange = (evt) => {
		setMessage(""); // Clear message on input change
		setBrandDetails({ ...brandDetails, [evt.target.name]: evt.target.value });
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		try {
			const updatedBrandDetails = { ...setBrandDetails, userId: user.userId, projectId: project.id };
			const newStrategy = await createQuickBrandStrategy(updatedBrandDetails);
			const newStrategySlug = newStrategy.aiStrategyOutput.id;
			router.push(`/dashboard/${project.id}/quick-strategy/${newStrategySlug}`);
		} catch (error) {
			setMessage(error.message);
		}
	};

	const isFormInvalid = () => {
		return !(brandName && category && productValue && audienceInsights && desiredPersona && brandVision);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Generate Strategy</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] md:max-w-[900px]">
				<DialogHeader>
					<DialogTitle>Generate Strategy</DialogTitle>
					<DialogDescription>Enter the brand details.</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="brandName" className="text-right">
								Brand name
							</Label>
							<Input id="brandName" value={brandName} name="brandName" placeholder="EcoLife" onChange={handleChange} className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="projectName" className="text-right">
								Brand Category
							</Label>
							<Input
								id="category"
								value={category}
								name="category"
								placeholder="Sustainable Products"
								onChange={handleChange}
								className="col-span-3"
							/>
						</div>

						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="brandVision" className="text-right">
								Brand vision
							</Label>
							<Input
								id="brandVision"
								value={brandVision}
								name="brandVision"
								placeholder="Make eco-living accessible to everyone"
								onChange={handleChange}
								className="col-span-3"
							/>
						</div>

						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="productValue" className="text-right">
								Product / Service value
							</Label>
							<Input
								id="productValue"
								value={productValue}
								name="productValue"
								placeholder="Affordable and eco-friendly"
								onChange={handleChange}
								className="col-span-3"
							/>
						</div>

						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="audienceInsights" className="text-right">
								Demographic insights
							</Label>
							<Input
								id="audienceInsights"
								value={audienceInsights}
								name="audienceInsights"
								placeholder="Young urban customers care about environment"
								onChange={handleChange}
								className="col-span-3"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="desiredPersona" className="text-right">
								Desired persona
							</Label>
							<Input
								id="desiredPersona"
								value={desiredPersona}
								name="desiredPersona"
								placeholder="Friendly, Trustworthy, Green Innovator"
								onChange={handleChange}
								className="col-span-3"
							/>
						</div>

						<p className="text-[12px] text-center leading-4 text-red-500">{message}</p>
					</div>
					<DialogFooter>
						<Button type="submit" disabled={isFormInvalid()}>
							Create
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
