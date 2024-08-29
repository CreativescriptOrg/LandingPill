import AUDIT_GUIDE from "@/config/auditGuide";
import REDESIGN_GUIDE from "@/config/redesignGuide";

interface StringData {
	[key: string]: {
		title: string;
		subtitle: string;
		data: any;
	};
}

const STRING: StringData = {
	REDESIGN_GUIDE: {
		title: "DIY redesign",
		subtitle: "Boost Your landing Page conversion in 5 Easy Steps!",
		data: REDESIGN_GUIDE,
	},
	AUDIT_GUIDE: {
		title: "Audit guide",
		subtitle: "Boost Your landing Page conversion in 5 Easy Steps!",
		data: AUDIT_GUIDE,
	},
};

export default STRING;
