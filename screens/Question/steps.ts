interface StepsType {
	[key: string]: {
		current: string;
		next: string;
		prev: string;
		progress?: number;
		totalStep?: number;
	};
}
const STEPS: StepsType = {
	name: {
		current: "name",
		next: "businessType",
		prev: "",
		progress: 1,
		totalStep: 3,
	},
	businessType: {
		current: "businessType",
		next: "businessName",
		prev: "name",
		progress: 2,
		totalStep: 5,
	},
	businessName: {
		current: "businessName",
		next: "hasLandingPage",
		prev: "businessType",
		progress: 3,
		totalStep: 5,
	},
	hasLandingPage: {
		current: "hasLandingPage",
		next: "website",
		prev: "businessName",
		progress: 4,
		totalStep: 5,
	},
	website: {
		current: "website",
		next: "loader1",
		prev: "hasLandingPage",
		progress: 5,
		totalStep: 5,
	},
	needNewLandingPage: {
		current: "needNewLandingPage",
		next: "scheduleCall",
		prev: "hasLandingPage",
	},
	scheduleCall: {
		current: "scheduleCall",
		next: "resources",
		prev: "needNewLandingPage",
	},
	resources: {
		current: "resources",
		next: "look",
		prev: "scheduleCall",
	},
	look: {
		current: "look",
		next: "performance",
		prev: "website",
		progress: 1,
		totalStep: 3,
	},
	performance: {
		current: "performance",
		next: "metadata",
		prev: "look",
		progress: 2,
		totalStep: 3,
	},
	metadata: {
		current: "metadata",
		next: "loader2",
		prev: "performance",
		progress: 3,
		totalStep: 3,
	},
	loader1: {
		current: "loader1",
		next: "look",
		prev: "website",
	},
	loader2: {
		current: "loader2",
		next: "diagnosisResult",
		prev: "metadata",
	},
	diagnosisResult: {
		current: "diagnosisResult",
		next: "",
		prev: "metadata",
	},
	Audit: {
		current: "Audit",
		next: "AuditCS",
		prev: "diagnosisResult",
	},
	AuditCS: {
		current: "AuditCS",
		next: "AuditCSLink",
		prev: "Audit",
	},
	AuditCSLink: {
		current: "AuditCSLink",
		next: "",
		prev: "AuditCS",
	},
	AuditSelf: {
		current: "AuditSelf",
		next: "AuditGuide",
		prev: "Audit",
	},
	AuditGuide: {
		current: "AuditGuide",
		next: "",
		prev: "AuditSelf",
	},
	Redesign: {
		current: "Redesign",
		next: "RedesignCS",
		prev: "diagnosisResult",
	},
	RedesignCS: {
		current: "RedesignCS",
		next: "RedesignCSLink",
		prev: "Redesign",
	},
	RedesignCSLink: {
		current: "RedesignCSLink",
		next: "",
		prev: "RedesignCS",
	},
	RedesignSelf: {
		current: "RedesignSelf",
		next: "RedesignGuide",
		prev: "Redesign",
	},
	RedesignGuide: {
		current: "RedesignGuide",
		next: "",
		prev: "RedesignSelf",
	},
};

export default STEPS;
