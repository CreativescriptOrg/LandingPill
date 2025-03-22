import React, { ReactNode } from "react";
import { AccordionSection } from "../shared/AccordionSection";
import {
  Layout,
  FilterIcon as FooterIcon,
  Target,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { ResponsiveImage } from "@/components/report/shared/ResponsiveImage";

const DetailedAnalysis = ({ data, isPaymentDone, url }: any) => {
  console.log(data);
  return (
    <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-h2 font-bold text-primary mb-4 sm:mb-6">
        Detailed Section Analysis
      </h2>

      {data.map((audit: any, index: React.Key | null | undefined) => {
        const auditReport = !isPaymentDone ? audit : audit.auditReport;

        return (
          <AccordionSection
            key={index}
            title={
              <div className="flex items-center gap-2">
                {/* Use appropriate icons based on section name */}
                <Layout className="text-primary" size={20} />
                <span>{auditReport.sectionName}</span>
              </div>
            }
            open={!isPaymentDone}
          >
            <div className="space-y-4 sm:space-y-6">
              <ResponsiveImage
                src={isPaymentDone ? audit.url : auditReport?.url}
                alt="Hero Section Screenshot"
              />
              {/* Problems Identified */}
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-red-600" />
                  Problems Identified
                </h3>

                <div className="space-y-6">
                  {/* Text Overlay Contrast */}
                  {auditReport.audit_results.problems_identified.map(
                    (
                      problem: {
                        [x: string]: ReactNode;
                        issue:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<any>;
                        solution:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<any>;
                      },
                      index: React.Key | null | undefined
                    ) => (
                      <div key={index} className="bg-white/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                          <span className="text-yellow-600">🔨</span>{" "}
                          {problem.issue}
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>{problem.details}</li>
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Section Strengths */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Section Strengths
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {auditReport.audit_results.current_strengths.map(
                    (
                      strength: {
                        [x: string]: ReactNode;
                        strength: string;
                      },
                      index: React.Key | null | undefined
                    ) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">💪</span>
                        <span>
                          <b>{strength.strength}:</b> {strength.details}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Strategic Recommendations */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <Target size={20} className="text-blue-600" />
                  Strategic Recommendations
                </h3>

                <div className="space-y-6">
                  {auditReport.audit_results.strategic_recommendations.map(
                    (
                      recommendation: {
                        [x: string]: ReactNode;
                        recommendation: string;
                      },
                      index: React.Key | null | undefined
                    ) => (
                      <div key={index} className="bg-white/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">
                          🎯 {recommendation.recommendation}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {recommendation.details}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </AccordionSection>
        );
      })}
    </section>
  );
};

export default DetailedAnalysis;
