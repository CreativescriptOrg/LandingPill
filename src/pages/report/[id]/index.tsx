import { useEffect, useState } from "react";
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
import { Loading } from "@/components/report/shared/Loading";
import axios from "axios";
import { useRouter } from "next/router";

interface ReportData {
	report_status: string;
	payment_status: string;
	name: string;
	date: string;
	emailId: string;
	url: string;
	sectionAudit?: any;
	finalReport?: {
		LandingPageReport?: {
			ExecutiveSummary?: any;
			KeyTakeaways?: any;
		};
	};
	seoAudit?: any;
}

const Report = () => {
	const router = useRouter();
	const { id } = router.query;

	const [reportData, setReportData] = useState<ReportData | null>(null);
	const [loading, setLoading] = useState(true);
	const [generatingReport, setGeneratingReport] = useState(false);
	const [isPaymentDone, setIsPaymentDone] = useState(false);
	const [date, setDate] = useState("");

	const fetchReportData = async () => {
		try {
			const res = await axios.get(
				`https://pill.estulife.com/api/v1/page/getPaymentStatus?orderId=${id}`
			);
			let report = res.data.data;
			setReportData(report);
			setGeneratingReport(
				report?.report_status === "pending" &&
					report?.payment_status !== "pending"
			);
			setIsPaymentDone(report?.payment_status !== "pending");

			const date = new Date(report?.date || "");
			const formattedDate = `${date.getDate()} ${date.toLocaleString(
				"default",
				{
					month: "short",
				}
			)}, ${date.getFullYear()}`;

			setDate(formattedDate);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching report data:", error);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (id) {
			fetchReportData();
		}
	}, [id]);

	useEffect(() => {
		if (generatingReport) {
			const interval = setInterval(async () => {
				fetchReportData();
			}, 3000);

			return () => clearInterval(interval);
		}
	}, [reportData, id, generatingReport]);

	if (loading || generatingReport) {
		return <Loading />;
	}

	return (
		<>
			<div className='min-h-screen bg-gray-50'>
				{reportData && <Header name={reportData.name} date={date} />}

				<main className='max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:pt-32 sm:pb-12'>
					{!isPaymentDone ? (
						<>
							{reportData?.sectionAudit && (
								<DetailedAnalysis
									data={[reportData?.sectionAudit]}
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
									<RazorpayCheckout orderId={id} email={reportData?.emailId} />
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

export default Report;
