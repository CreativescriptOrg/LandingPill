import React from 'react';
import { AlertTriangle, CheckCircle, Target, Lightbulb } from 'lucide-react';

export const ChallengesSection = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="w-full h-64 bg-gray-100 rounded-lg"></div>

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
              <li>• Long paragraphs within each testimonial may deter quick scanning—users may only skim a sentence or two.</li>
              <li>• Attention Insight's heatmaps often show limited focus on lengthy text blocks if not broken up or highlighted with pull quotes.</li>
            </ul>
          </div>

          {/* Visual Consistency & Trust Indicators */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Visual Consistency & Trust Indicators
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• The testimonial cards have a basic, boxy design with minimal brand elements.</li>
              <li>• The grey background and simple heading ("What our clients are saying") might not fully leverage brand style or highlight the strong success stories.</li>
            </ul>
          </div>

          {/* Missing CTA Tie-In */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🔨</span> Missing CTA Tie-In
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• The testimonials are persuasive, but there's no immediate follow-up prompt.</li>
              <li>• Users might not realize they can take the next step (e.g., "Book A Discovery Call") right after reading these success stories.</li>
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
            <span><b>Specific, Real-Life Outcomes:</b> Testimonials cite practical benefits—solving misunderstandings, improved communication—making them relatable to HR/Talent audiences.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">💪</span>
            <span><b>Relevant Roles & Industries:</b> Showcasing leaders from a Global Technology Company and a Consumer Goods Conglomerate enhances credibility for diverse sectors.</span>
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
          {/* Break Up Testimonial Content */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Break Up Testimonial Content</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Use bold or italicized pull quotes to highlight impactful phrases (e.g., "Highly recommended for anyone working on offshoring projects").</li>
              <li>• Keep paragraphs short (2–3 lines) for easier scanning.</li>
            </ul>
          </div>

          {/* Improve Visual Design & Branding */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Improve Visual Design & Branding</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Add subtle brand colors or accent lines around the testimonial cards.</li>
              <li>• Use a more compelling section title (e.g., "Our Clients' Transformations").</li>
            </ul>
          </div>

          {/* Incorporate a Mini CTA */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 Incorporate a Mini CTA</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Conclude with a short sentence like "Ready for your own success story?" and a button or link to schedule a discovery call.</li>
              <li>• Ensures visitors can act immediately after reading.</li>
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
          {/* Testimonial Card Redesign */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Testimonial Card Redesign</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Highlight the person's name, title, and company in a bold, brand-aligned style.</li>
              <li>• Insert a short, attention-grabbing quote at the top, followed by a "read more" for longer testimonial text if space is constrained.</li>
            </ul>
          </div>

          {/* Seamless CTA Placement */}
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Seamless CTA Placement</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Embed a small "Book A Discovery Call" button below or between the testimonials.</li>
              <li>• Alternatively, place the CTA at the end of each testimonial card so success stories naturally lead to action.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};