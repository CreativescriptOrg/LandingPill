import { GetServerSideProps } from "next";
import { Footer } from "@/components/report/layout/Footer";
import { Header } from "@/components/report/layout/Header";
import DetailedAnalysis from "@/components/report/sections/DetailedAnalysis";
import ExecutiveSummary from "@/components/report/sections/ExecutiveSummary";
import FinalActionPlan from "@/components/report/sections/FinalActionPlan";
import KeyTakeaways from "@/components/report/sections/KeyTakeaways";
import PerformanceSEO from "@/components/report/sections/PerformanceSEO";
import SEOAuditFindings from "@/components/report/sections/SEOAuditFindings";
import RazorpayCheckout from "@/components/Payment/RazorpayCheckout";
import { ResponsiveImage } from "@/components/report/shared/ResponsiveImage";

const Report = ({ reportData, id, email }: any) => {
	const isPaymentDone = reportData?.payment_status !== "pending";
	const date = new Date(reportData?.date);
	const formattedDate = `${date.getDate()} ${date.toLocaleString("default", {
		month: "short",
	})}, ${date.getFullYear()}`;

	return (
		<>
			<div className='min-h-screen bg-gray-50'>
				<Header name={reportData.name} date={formattedDate} />

				<main className='max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:pt-32 sm:pb-12'>
					{!isPaymentDone ? (
						<>
							{reportData?.sectionAudit && (
								<DetailedAnalysis
									data={[JSON.parse(reportData?.sectionAudit)]}
									isPaymentDone={false}
									url={reportData?.url}
								/>
							)}
							<div className='razorpay_container'>
								<div className='razorpay_backdrop'></div>
								<ResponsiveImage
									src={"/razorpay_bg.png"}
									alt='Hero Section Screenshot'
								/>
								<div className='razorpay_btn'>
									<RazorpayCheckout orderId={id} email={email} />
								</div>
							</div>
						</>
					) : (
						<>
							{reportData?.finalReport?.LandingPageReport?.ExecutiveSummary && (
								<ExecutiveSummary
									data={
										reportData.finalReport.LandingPageReport.ExecutiveSummary
									}
								/>
							)}
							{reportData?.finalReport?.LandingPageReport?.KeyTakeaways && (
								<KeyTakeaways
									data={reportData.finalReport.LandingPageReport.KeyTakeaways}
								/>
							)}
							{reportData?.sectionAudit && (
								<DetailedAnalysis
									data={reportData?.sectionAudit}
									isPaymentDone
								/>
							)}

							{/* <PerformanceSEO data={reportData.PerformanceSEO} /> */}
							{reportData?.seoAudit && (
								<SEOAuditFindings data={reportData.seoAudit} />
							)}
							{/* <FinalActionPlan data={reportData.FinalActionPlan} /> */}
						</>
					)}
				</main>

				<Footer />
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({
	req,
	params,
}) => {
	const { id } = params || {};
	if (!id) return { notFound: true };

	const res = await fetch(
		`https://pill.estulife.com/api/v1/page/getPaymentStatus?orderId=${id}`
	);
	const reportData = await res.json();

	return {
		props: {
			reportData: reportData.data,
			id: id,
			email: reportData.data.emailId,
		},
	};
};

export default Report;
