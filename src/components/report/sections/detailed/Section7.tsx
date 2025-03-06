import React from 'react';
import { AlertTriangle, CheckCircle, Target, Lightbulb } from 'lucide-react';
import { ResponsiveImage } from '../../shared/ResponsiveImage';

export const Section7 = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <ResponsiveImage 
        src="https://creativescript.s3.us-east-1.amazonaws.com/audit+images/section_7_what_out_clients_say.webp"
        alt="Client Feedback Section Screenshot"
      />
      
      {/* Problems Identified */}
      <div className="bg-red-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-600" />
          Problems Identified
        </h3>
        
        <div className="space-y-6">
          {/* Testimonial Layout & Readability */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Testimonial Layout & Readability
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• The format mirrors a previous testimonial section, risking repetition and user "testimonial fatigue."</li>
              <li>• Attention Insight data often shows that large text blocks can deter readers, especially if they feel the content is repetitive.</li>
            </ul>
          </div>

          {/* CTA Bar & Hierarchy */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> CTA Bar & Hierarchy
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• The bright orange bar at the bottom with "Book A Discovery Call" competes visually with the testimonial cards.</li>
              <li>• Users may not realize the CTA relates to the testimonial content above because they are separated by a large color block.</li>
            </ul>
          </div>

          {/* Consistency in Messaging */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Consistency in Messaging
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Headline "What our clients are saying" matches a previous heading style, which could reduce perceived uniqueness of these new stories.</li>
              <li>• Keeping each testimonial title consistent ("Director Talent Management," "Chief Human Resources Officer") is good, but ensuring the brand's voice remains uniform across the site is key.</li>
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
            <span><b>Relevant, Impactful Testimonials:</b> Highlighting concrete outcomes (greater collaboration, mandated training for leadership) can strongly resonate with HR/Talent professionals.</span>
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
          {/* Vary Testimonial Presentation */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Vary Testimonial Presentation</h4>
            <p className="text-sm text-gray-700">Use a slightly different layout or heading from the previous testimonial section to maintain user interest.</p>
          </div>

          {/* Streamline the CTA Bar */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Streamline the CTA Bar</h4>
            <p className="text-sm text-gray-700">Connect the testimonial content directly to the CTA, possibly with a shorter text bridging them (e.g., "Ready for similar results?").</p>
          </div>

          {/* Ensure Concise Copy */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Ensure Concise Copy</h4>
            <p className="text-sm text-gray-700">Keep testimonial paragraphs scannable with brief highlights or bolded key phrases to draw the eye.</p>
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
          {/* Testimonial Card Refinement */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Testimonial Card Refinement</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Shorten each testimonial to 2–3 lines or provide a "read more" option if length is needed.</li>
              <li>• Consider adding subtle design elements (icons or brand colors) for variety from the earlier testimonial section.</li>
            </ul>
          </div>

          {/* CTA Integration */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">CTA Integration</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Add a bridging sentence just above the orange bar, tying the testimonials' success to the user's potential results.</li>
              <li>• Maintain the bright color but ensure consistent brand fonts and style so the CTA feels like a natural progression, not a separate banner.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};