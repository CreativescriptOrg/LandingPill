import React from 'react';
import { AlertTriangle, CheckCircle, Target, Lightbulb } from 'lucide-react';
import { ResponsiveImage } from '../../shared/ResponsiveImage';

export const Section5 = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <ResponsiveImage 
        src="https://creativescript.s3.us-east-1.amazonaws.com/audit+images/section_5_our_services.webp"
        alt="Services Layout Screenshot"
      />
      
      {/* Problems Identified */}
      <div className="bg-red-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-600" />
          Problems Identified
        </h3>
        
        <div className="space-y-6">
          {/* Services Layout & Clarity */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Services Layout & Clarity
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Four distinct service blocks with images and brief copy can feel visually crowded on smaller screens.</li>
              <li>• Clarity Score data typically indicates users prefer more white space or at least consistent image sizing to ease scanning.</li>
            </ul>
          </div>

          {/* Repetitive Trust Logos */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Repetitive Trust Logos
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• "Organisations That Trust Us" repeats a second time on the page, which could dilute the impact.</li>
              <li>• Users may experience "logo fatigue" if the same or similar logos appear multiple times without new context.</li>
            </ul>
          </div>

          {/* Missing Direct CTA */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Missing Direct CTA
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• No immediate prompt to learn more or schedule a call under each service description.</li>
              <li>• Potential leads might have to scroll back or forward to find the "Book A Discovery Call" button, risking drop-off.</li>
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
            <span><b>Clear Service Offerings:</b> Each service (Face-to-Face Workshops, Virtual Live Learning, etc.) has a concise description, giving visitors a quick overview of solutions.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">💪</span>
            <span><b>Strong Headline:</b> "OUR SERVICES" is straightforward and easily noticeable.</span>
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
          {/* Enhance Readability */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Enhance Readability & Responsiveness</h4>
            <p className="text-sm text-gray-700">Optimize spacing and possibly move to a more vertical or two-column layout on mobile to prevent crowding.</p>
          </div>

          {/* Consolidate Trust Logos */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Consolidate or Contextualize Trust Logos</h4>
            <p className="text-sm text-gray-700">Either remove this second logo bar or provide a context (e.g., "Additional Clients" or "More Trusted Partners") so it doesn't feel repetitive.</p>
          </div>

          {/* Add CTAs */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Add a CTA for Each Service</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• A small "Learn More" or "Book a Call" link below each service could capture interest immediately.</li>
              <li>• Alternatively, include a single "Book A Discovery Call" button directly under "Our Services" to guide next steps.</li>
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
          {/* Responsive Design */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Responsive Design</h4>
            <p className="text-sm text-gray-700">Ensure images scale uniformly and text wraps neatly. Test on devices to confirm a clean layout.</p>
          </div>

          {/* Reducing Redundancy */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Reducing Redundancy</h4>
            <p className="text-sm text-gray-700">If repeating trust logos is essential, clarify the difference (e.g., "Industry Highlights" vs. "Enterprise Clients").</p>
          </div>

          {/* CTA Placement */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">CTA Placement</h4>
            <p className="text-sm text-gray-700">Insert a "Book A Discovery Call" button near the service offerings so interested users can act without scrolling elsewhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
};