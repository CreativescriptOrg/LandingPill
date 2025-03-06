import React from 'react';
import { AlertTriangle, CheckCircle, Target, Lightbulb } from 'lucide-react';
import { ResponsiveImage } from '../../shared/ResponsiveImage';

export const Section2 = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <ResponsiveImage 
        src="https://creativescript.s3.us-east-1.amazonaws.com/audit+images/section_2+Organisations+That+Trust+US.webp"
        alt="Main Services Overview Screenshot"
      />
      
      {/* Problems Identified */}
      <div className="bg-red-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-600" />
          Problems Identified
        </h3>
        
        <div className="space-y-6">
          {/* Social Proof Visibility */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Social Proof Visibility
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• While displaying high-profile client logos (e.g., BCG, Michelin, eBay) is a strong trust factor, they're somewhat scattered and small.</li>
              <li>• Heatmap data often shows users skimming past logos if they're not clearly grouped or visually emphasized.</li>
            </ul>
          </div>

          {/* Information Density */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Information Density & Layout
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• The section has multiple benefit columns plus a large body of text, which can feel overwhelming.</li>
              <li>• Clarity Score insights suggest trimming or segmenting text for better scan-ability.</li>
            </ul>
          </div>

          {/* CTA Placement */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> CTA Placement & Emphasis
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• "Book A Discovery Call" button at the bottom can be overlooked due to the busy layout above.</li>
              <li>• Users might not scroll far if the content feels dense, reducing CTA visibility.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section Strengths */}
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
          <CheckCircle size={20} className="text-green-600" />
          Section Strengths
        </h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">💪</span>
            <span><b>Powerful Social Proof:</b> Featuring well-known organizations builds immediate credibility.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">💪</span>
            <span><b>Clear Value Propositions:</b> Columns highlight distinct benefits: extensive network, bespoke expertise, performance solutions, global strategy partnership.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">💪</span>
            <span><b>Strong Headline:</b> "Ready to transform your multicultural team's performance?" directly addresses the user's core need.</span>
          </li>
        </ul>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
          <Target size={20} className="text-blue-600" />
          Strategic Recommendations
        </h3>
        
        <div className="space-y-6">
          {/* Group & Emphasize Logos */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Group & Emphasize Logos</h4>
            <p className="text-sm text-gray-700">Present the client logos in a visually consistent row or grid, ensuring ample white space to spotlight brand names.</p>
          </div>

          {/* Streamline Copy */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Streamline Copy</h4>
            <p className="text-sm text-gray-700">Break the text into shorter paragraphs or use bullet points under "18+ years of expertise" to maintain clarity and avoid cognitive overload.</p>
          </div>

          {/* Highlight CTA */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Highlight the CTA</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Increase whitespace and visually separate the "Book A Discovery Call" button.</li>
              <li>• Possibly repeat the CTA midway through the section for users who don't scroll to the bottom.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Implementation Guidance */}
      <div className="bg-purple-lighter p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <Lightbulb size={20} className="text-primary" />
          Implementation Guidance
        </h3>
        
        <div className="space-y-6">
          {/* Logo & Text Layout */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Logo & Text Layout</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Use uniform sizing for logos and align them horizontally for quick scanning.</li>
              <li>• Condense copy into 2-3 concise bullet points describing the 18+ years of expertise.</li>
            </ul>
          </div>

          {/* CTA Visibility */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">CTA Visibility</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Add a small margin or an accent line above the CTA, so it stands out from the text blocks.</li>
              <li>• Consider a second CTA near the top or after the benefits columns to capture early conversions.</li>
            </ul>
          </div>

          {/* Performance Optimization */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Performance Optimization</h4>
            <p className="text-sm text-gray-700">Keep image file sizes for logos minimal, aligning with GTmetrix recommendations to reduce total page size.</p>
          </div>
        </div>
      </div>
    </div>
  );
};