import React from 'react';
import { AlertTriangle, CheckCircle, Target, Lightbulb } from 'lucide-react';
import { ResponsiveImage } from '../../shared/ResponsiveImage';

export const FooterSection = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <ResponsiveImage 
        src="https://creativescript.s3.us-east-1.amazonaws.com/audit+images/section_8_footer.webp"
        alt="Footer Section Screenshot"
      />
      
      {/* Problems Identified */}
      <div className="bg-red-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-600" />
          Problems Identified
        </h3>
        
        <div className="space-y-6">
          {/* Repetitive Testimonials */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Repetitive Testimonials
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Another set of testimonials under the same headline ("What Our Clients Are Saying") could lead to user fatigue. If visitors have already encountered similar testimonials, they may skip this section.</li>
              <li>• Attention Insight typically shows diminishing returns when too many testimonials share a similar format and heading.</li>
            </ul>
          </div>

          {/* Footer Elements & Clarity */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Footer Elements & Clarity
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• While the company address is visible, typical footer links (e.g., Privacy Policy, Terms of Service, Contact) are missing, which can affect user trust and site credibility.</li>
              <li>• The brand logo is here, but there is no final CTA or other navigational cues to guide users at the end of the page.</li>
            </ul>
          </div>

          {/* Visual Hierarchy */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Visual Hierarchy
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• The large grey background with "What Our Clients Are Saying" plus the brand block below can feel like two separate sections fused together, potentially confusing users.</li>
              <li>• There is no clear delineation between the testimonial area and the official footer info.</li>
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
            <span><b>Official Address & Company Name:</b> Displaying the registered company address and name in the footer helps build legitimacy.</span>
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
          {/* Combine or Differentiate Testimonials */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Combine or Differentiate Testimonials</h4>
            <p className="text-sm text-gray-700">If multiple testimonial sections are essential, consider a different layout or label (e.g., "More Success Stories") and ensure each testimonial is concise and unique.</p>
          </div>

          {/* Enhance Footer Functionality */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Enhance Footer Functionality</h4>
            <p className="text-sm text-gray-700">Include standard footer links—Privacy Policy, Terms of Service, and a clear "Contact Us" link—for added trust.</p>
          </div>

          {/* Add a Final CTA */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Add a Final CTA</h4>
            <p className="text-sm text-gray-700">Provide a simple "Book A Discovery Call" or "Get in Touch" button in the footer for users who scroll to the end.</p>
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
          {/* Footer Redesign */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Footer Redesign</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Visually separate the testimonial block from the official footer. Use consistent brand styling but add a clear divider or background color shift.</li>
              <li>• Incorporate essential footer navigation so users have quick access to legal and contact information.</li>
            </ul>
          </div>

          {/* Testimonials & Headings */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Testimonials & Headings</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Rename the section heading to avoid repetition (e.g., "Client Stories" or "Real Results") and keep each testimonial short.</li>
              <li>• Ensure brand voice consistency in all testimonial sections to maintain a cohesive user experience.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};