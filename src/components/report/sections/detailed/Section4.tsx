import React from 'react';
import { AlertTriangle, CheckCircle, Target, Lightbulb } from 'lucide-react';
import { ResponsiveImage } from '../../shared/ResponsiveImage';

export const Section4 = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <ResponsiveImage 
        src="https://creativescript.s3.us-east-1.amazonaws.com/audit+images/section_4+Partner+with+us.webp"
        alt="Video Content Analysis Screenshot"
      />
      
      {/* Problems Identified */}
      <div className="bg-red-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-600" />
          Problems Identified
        </h3>
        
        <div className="space-y-6">
          {/* Video Context & Engagement */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Video Context & Engagement
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• The embedded video ("Succeeding in Multicultural Teams") lacks a brief summary or key points near it, which could reduce clicks.</li>
              <li>• Heatmap data often shows users skipping videos unless enticed by a concise reason to watch.</li>
            </ul>
          </div>

          {/* Layout & Spacing */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Layout & Spacing
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• The section appears visually minimal but feels slightly unbalanced: a large empty space on the left or right (depending on screen size) might make the layout seem incomplete.</li>
              <li>• Clarity Score feedback suggests ensuring all crucial content is easily scannable and centered or well-aligned to avoid disjointed visuals.</li>
            </ul>
          </div>

          {/* CTA Utilization */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> CTA Utilization
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• While "Book A Discovery Call" is repeated here, it's placed after a large block of text, which could get lost if users skim.</li>
              <li>• Users may not connect the content about global talent strategy directly to a phone call without a clearer bridging statement.</li>
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
            <span><b>Multimedia Element:</b> Adding a video can increase user engagement and differentiate this section from purely text-based content.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">💪</span>
            <span><b>Direct Value Proposition:</b> Headline ("Partner with us to get the best out of your global talent strategy") is benefit-driven and relevant to HR/Talent leads.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">💪</span>
            <span><b>Clear CTA Copy:</b> "Book A Discovery Call" remains consistent with the overall conversion goal.</span>
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
          {/* Provide a Short Video Summary */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Provide a Short Video Summary</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Add 1–2 bullet points or a brief sentence explaining what users will learn (e.g., "Key insights on resolving cultural gaps quickly").</li>
            </ul>
          </div>

          {/* Balance the Layout */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Balance the Layout</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Center or structure the video and text in a two-column design with consistent spacing to avoid large empty areas.</li>
            </ul>
          </div>

          {/* Tie the CTA to the Video */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Tie the CTA to the Video</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• After mentioning the video's key takeaways, include a line like "Interested in applying these insights to your team? Book a Discovery Call."</li>
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
          {/* Video Teaser & Description */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Video Teaser & Description</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Place a short description beneath or alongside the video to encourage clicks.</li>
              <li>• Consider adding a caption or subtitle track for better accessibility and user engagement.</li>
            </ul>
          </div>

          {/* Enhanced Layout */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Enhanced Layout</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Use equal columns or a balanced grid system to showcase video and text side-by-side without awkward spacing.</li>
            </ul>
          </div>

          {/* CTA Integration */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">CTA Integration</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Position the CTA button closer to the video description, potentially in the same column, so users see an immediate follow-up action.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};