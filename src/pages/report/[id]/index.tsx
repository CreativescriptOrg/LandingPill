import { GetServerSideProps } from "next";
import { Footer } from "@/components/report/layout/Footer";
import { Header } from "@/components/report/layout/Header";
import DetailedAnalysis from "@/components/report/sections/DetailedAnalysis";
import ExecutiveSummary from "@/components/report/sections/ExecutiveSummary";
import FinalActionPlan from "@/components/report/sections/FinalActionPlan";
import KeyTakeaways from "@/components/report/sections/KeyTakeaways";
import PerformanceSEO from "@/components/report/sections/PerformanceSEO";
import SEOAuditFindings from "@/components/report/sections/SEOAuditFindings";
import { result } from "@/seo-audit-dashboard";

const Report = ({ reportData }: any) => {
	return (
		<div className='min-h-screen bg-gray-50'>
			<Header />

			<main className='max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:pt-32 sm:pb-12'>
				<ExecutiveSummary
					data={reportData.finalReport.LandingPageReport.ExecutiveSummary}
				/>
				<KeyTakeaways
					data={reportData.finalReport.LandingPageReport.KeyTakeaways}
				/>
				<DetailedAnalysis data={reportData.sectionAudit} />
				{/* <PerformanceSEO data={reportData.PerformanceSEO} /> */}
				<SEOAuditFindings data={reportData.seoAudit} />
				{/* <FinalActionPlan data={reportData.FinalActionPlan} /> */}
			</main>

			<Footer />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async ({
	req,
	params,
}) => {
	const { id } = params || {};
	if (!id) return { notFound: true };

	// const res = await fetch(`https://api.example.com/report/${id}`);
	// const reportData = await res.json();
	const reportData = result;

	return {
		props: {
			reportData,
		},
	};
};

export default Report;
