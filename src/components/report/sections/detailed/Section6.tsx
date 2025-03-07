import React from 'react';
import { AlertTriangle, CheckCircle, Target, Lightbulb } from 'lucide-react';
import { ResponsiveImage } from '../../shared/ResponsiveImage';

export const Section6 = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <ResponsiveImage 
        src="https://creativescript.s3.us-east-1.amazonaws.com/audit+images/section_6_schedule_a_free_consultation.webp"
        alt="Contact Form Screenshot"
      />
      
      {/* Problems Identified */}
      <div className="bg-red-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-600" />
          Problems Identified
        </h3>
        
        <div className="space-y-6">
          {/* Form Clarity & Consistency */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Form Clarity & Consistency
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• The header says "SCHEDULE A FREE CONSULTATION," whereas the rest of the site references "Book A Discovery Call." Inconsistent CTAs can confuse users.</li>
              <li>• Attention Insight often shows that mismatched messaging lowers user trust and can reduce form submissions.</li>
            </ul>
          </div>

          {/* Background Image & Contrast */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Background Image & Contrast
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• The background image is somewhat dark, but the text and form fields may still blend into the image in certain screen sizes.</li>
              <li>• Clarity Score principles suggest using a clearer overlay or higher-contrast text for better readability.</li>
            </ul>
          </div>

          {/* Lack of Supporting Details */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Lack of Supporting Details
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• There's no mention of what the consultation entails (duration, topics covered, next steps), which can reduce form completion rates.</li>
              <li>• Users may hesitate to enter personal info if they aren't sure what they're signing up for.</li>
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
            <span><b>Direct CTA with a Short Form:</b> Only two fields (Full Name, Work Email), which typically improves conversion by minimizing effort.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">💪</span>
            <span><b>Above-the-Fold Potential:</b> A prominent form can capture immediate user interest if they decide to engage quickly.</span>
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
          {/* Unify CTA Messaging */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Unify CTA Messaging</h4>
            <p className="text-sm text-gray-700">Rename "Schedule a Free Consultation" to "Book a Discovery Call," or vice versa, to maintain consistency and reinforce brand identity.</p>
          </div>

          {/* Enhance Form Visibility */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Enhance Form Visibility</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Use a slightly darker overlay behind the form fields or ensure fields have a solid white background with a clear boundary.</li>
              <li>• Increase the font size and contrast for the headline to ensure it stands out from the background image.</li>
            </ul>
          </div>

          {/* Add Brief Consultation Details */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Add Brief Consultation Details</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Mention key benefits or what happens during the consultation (e.g., "15-min call to discuss your cross-cultural needs").</li>
              <li>• This helps users understand value and increases likelihood of form submission.</li>
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
          {/* Form & CTA Consistency */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Form & CTA Consistency</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Update button copy to match the overall site (e.g., "Book Now" or "Book a Discovery Call").</li>
              <li>• Keep the form easy to fill by limiting fields; if more info is needed, prompt it later.</li>
            </ul>
          </div>

          {/* Background & Contrast */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Background & Contrast</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Either darken the background image or add a semi-opaque overlay so text and form fields remain highly legible.</li>
              <li>• Confirm the color ratio meets WCAG guidelines.</li>
            </ul>
          </div>

          {/* Reassurance Elements */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Reassurance Elements</h4>
            <p className="text-sm text-gray-700">A simple note like "We respect your privacy" or "We'll get back to you within 24 hours" can further boost confidence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};