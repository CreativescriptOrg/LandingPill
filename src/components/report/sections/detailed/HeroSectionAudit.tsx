import React from 'react';
import { AlertTriangle, CheckCircle, Target, Lightbulb } from 'lucide-react';
import { ResponsiveImage } from '../../shared/ResponsiveImage';

export const HeroSectionAudit = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <ResponsiveImage 
        src="https://creativescript.s3.us-east-1.amazonaws.com/audit+images/hero_section.webp"
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
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Text Overlay Contrast
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• The orange overlay on the background image can reduce clarity for the bullets and headline.</li>
              <li>• Attention Insight's Contrast Map indicates the text contrast falls below WCAG 2.2 recommendations, making it harder to read.</li>
            </ul>
          </div>

          {/* Headline Hierarchy */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Headline Hierarchy & Messaging
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• While the bullet points effectively highlight pain points, they can visually compete with the main brand promise.</li>
              <li>• Heatmap data shows user focus on the women's faces and the logo, which may cause them to miss a powerful, direct headline.</li>
            </ul>
          </div>

          {/* CTA Placement */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> CTA Placement & Visibility
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• There are two "Book A Discovery Call" CTAs (header and overlay), but neither stands out significantly.</li>
              <li>• The heatmap reveals primary hotspots on faces and the top-left logo, so the CTA may be overlooked.</li>
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
            <span><b>Human-Centric Imagery:</b> Conveys collaboration and warmth, reflecting the cross-cultural solutions offered.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">💪</span>
            <span><b>Immediate Pain Points:</b> Bulleted questions align closely with the target audience's challenges.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">💪</span>
            <span><b>Clear CTA Copy:</b> "Book A Discovery Call" is straightforward, matching the conversion goal.</span>
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
          {/* Optimize Contrast */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Optimize Contrast & Readability</h4>
            <p className="text-sm text-gray-700">Use a darker or more opaque overlay to ensure headlines and bullet points meet WCAG contrast ratios.</p>
          </div>

          {/* Refine Headline */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Refine Headline for Clear Benefit</h4>
            <p className="text-sm text-gray-700">Introduce a concise, bold statement (e.g., "Empower Your Global Teams") above the bullet points.</p>
          </div>

          {/* Increase CTA Prominence */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Increase CTA Prominence</h4>
            <p className="text-sm text-gray-700">Place a primary CTA in the hero area (centered or aligned with headline) and differentiate the header CTA in size or color.</p>
          </div>

          {/* Align CTA */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Align CTA with Heatmap Focal Points</h4>
            <p className="text-sm text-gray-700">Adjust layout so the user's natural visual path from the logo/imagery quickly leads to the main CTA.</p>
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
          {/* Overlay & Typography */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Overlay & Typography</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Test a slightly darker overlay shade or higher opacity.</li>
              <li>• Increase headline size (e.g., 30–36px) and simplify bullet text to highlight pain points.</li>
            </ul>
          </div>

          {/* CTA Styling */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">CTA Styling & Layout</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Consider one main hero CTA with a contrasting button color and place it directly under the main message.</li>
              <li>• Keep the header CTA but reduce its prominence so it doesn't compete.</li>
            </ul>
          </div>

          {/* Testing & Measurement */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Testing & Measurement</h4>
            <p className="text-sm text-gray-700">A/B test a revised hero layout against the current version. Monitor bounce rate, scroll depth, and conversion rate in Google Analytics.</p>
          </div>

          {/* Data Sources */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Data Sources</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Attention Insight Heatmap & Contrast Map (User gaze & contrast scores)</li>
              <li>• Clarity Score (67%)</li>
              <li>• Conversion Goal Metrics (Need to increase discovery call bookings)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};