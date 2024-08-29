const AUDIT_GUIDE = [
	{
		key: "User-Friendly Check",
		id: "user-friendly-check",
		title: "Why User-Friendly Check?",
		description: `Usability testing is key for landing pages because it finds 75-80% of problems and helps fix issues that stop users from taking action, boosting both conversions and user satisfaction.
			<br/><br/>	
			<strong>User-Friendly Check</strong>
			Ensure your landing page is user-friendly and effective by following these simple principles. We’ll help you break down complex ideas into easy-to-understand steps with relatable examples, so you can make your page more engaging and efficient for visitors. Let’s get started.`,
		data: [
			{
				point: "Keep Visitors in the Loop",
				title: "Keep Visitors in the Loop - Visibility of System Status",
				emoji: "😊",
				subtitle:
					"“I need to make sure visitors always know what’s happening on my page.”",
				content: `<strong>Example:</strong>If a visitor submits a form, they should see a confirmation message or loading indicator right away. This reassures them that their action was successful and keeps them engaged.`,
				resources: [
					{
						title: "",
						link: "https://www.linkedin.com/advice/0/how-can-you-apply-heuristic-visibility-system-zdjec#:~:text=The%20first%20and%20most%20obvious,icons%2C%20sounds%2C%20or%20animations",
					},
					{
						title: "",
						link: "https://bootcamp.uxdesign.cc/visibility-of-system-status-common-examples-7aab5e18b291",
					},
				],
			},
			{
				point: "Speak Their Language",
				title: "Speak Their Language - Match Between System and the Real World",
				emoji: "💬",
				subtitle:
					"“I should speak my customers' language and make my page feel familiar to them.”",
				content: `<strong>Example:</strong>Use simple, everyday language in your headlines and buttons that your target audience would naturally use. Avoid technical jargon and instead focus on clear, relatable messaging that makes visitors feel at ease.`,
				resources: [
					{
						title: "",
						link: "https://techskillbrew.medium.com/heuristic-evaluation-h2-match-between-system-and-the-real-world-with-examples-961ceea385a0",
					},
				],
			},
			{
				point: "Visitors Change Their Mind",
				title: "Visitors Change Their Mind - User Control and Freedom",
				emoji: "😌",
				subtitle: `“I need to give visitors an easy way to undo actions or navigate back if they make a mistake.”`,
				content: `<strong>Example:</strong>If a visitor accidentally adds an item to their cart, they should easily find a “Remove” button. If they start filling out a form but decide not to complete it, a simple “Cancel” or “Back” option should be available.`,
				resources: [
					{
						title: "",
						link: "https://www.linkedin.com/advice/0/how-do-you-communicate-educate-users-control#:~:text=For%20example%2C%20if%20the%20user%20is%20editing%20a%20document%2C%20allow,to%20exit%20the%20editing%20mode",
					},
					{
						title: "",
						link: "https://techskillbrew.medium.com/heuristic-evaluation-h3-user-control-and-freedom-7489e6756f1e",
					},
				],
			},
			{
				point: "Stay Consistent",
				title: "Stay Consistent - Consistency and Standards",
				emoji: "👍",
				subtitle:
					"“My page should look and work the same throughout so visitors don’t get confused.”",
				content: `<strong>Example:</strong>If your CTA buttons are blue and say “Get Started” on one part of the page, keep them consistent throughout. Don’t change the color or wording in different sections, as this can confuse visitors.`,
				resources: [
					{
						title: "",
						link: "https://techskillbrew.medium.com/heuristic-evaluation-h4-consistency-and-standards-c3b6cc1a48a6",
					},
					{
						title: "",
						link: "https://www.interaction-design.org/literature/topics/consistency-and-standards?srsltid=AfmBOorfWPgA20SA0NTen97mZj9qt-0PT-_68PDHYtOhGdwnCWIBeXX9",
					},
				],
			},
			{
				point: "Prevent Mistakes",
				title: "Prevent Mistakes - Error Prevention",
				emoji: "😬",
				subtitle:
					"“I want to help visitors avoid mistakes before they happen.”",
				content: `
					<strong>Example:</strong>When visitors are filling out a form, use clear labels and provide examples so they know exactly what’s expected. You could also use drop-down menus or checkboxes to minimize the chance of incorrect entries.`,
				resources: [
					{
						title: "",
						link: "https://www.linkedin.com/advice/0/how-can-you-apply-recognize-diagnose-recover-from-kynke",
					},
					{
						title: "",
						link: "https://medium.com/uxd-critical-software/usability-heuristics-in-critical-systems-5-error-prevention-aeff67511a0f",
					},
				],
			},
			{
				point: "Recognition Rather than Recall",
				title: "Recognition Rather than Recall - Make Options Easy to Find",
				emoji: "🔍",
				subtitle: `“I should make it easy for visitors to find what they need without having to remember anything.”`,
				content: `
					<strong>Example:</strong>Instead of hiding important information in a dropdown menu, display key options like “Pricing” or “Features” directly on the page. This way, visitors can quickly see their choices without having to dig around or remember where something is located.`,
				resources: [
					{
						title: "",
						link: "https://www.linkedin.com/advice/0/what-some-examples-recognition-rather-than#:~:text=2-,1%20Icons%20and%20labels,can%20take%20on%20a%20post",
					},
					{
						title: "",
						link: "https://medium.com/uxd-critical-software/usability-heuristics-in-critical-systems-6-recognition-rather-than-recall-3d0164be35b6",
					},
				],
			},
			{
				point: "Make It Easy for Everyone",
				title: "Make It Easy for Everyone - Flexibility and Efficiency of Use",
				emoji: "🙌",
				subtitle:
					"I want my page to work well for both new and returning visitors.",
				content: `
					<strong>Example:</strong>Include shortcuts or advanced options for experienced users, like auto filling forms for returning visitors. This saves them time and makes your page more user-friendly for everyone.`,
				resources: [
					{
						title: "",
						link: "https://medium.com/uxd-critical-software/usability-heuristics-in-critical-systems-7-flexibility-and-efficiency-of-use-230541b58851",
					},
					{
						title: "",
						link: "https://uxplanet.org/heuristics-7-flexibility-and-efficiency-of-use-simplified-by-the-examples-f2d76966e8a5",
					},
				],
			},
			{
				point: "Keep It Clean and Simple",
				title: "Keep It Clean and Simple - Aesthetic and Minimalist Design",
				emoji: "✨",
				subtitle:
					"“My page should be clean and focused, without any unnecessary clutter.”",
				content: `
					<strong>Example:</strong>Remove any extra text, images, or buttons that don’t directly support your main goal (like getting sign-ups or sales). A simpler design makes it easier for visitors to understand what they need to do.`,
				resources: [
					{
						title: "",
						link: "https://www.linkedin.com/advice/1/what-benefits-challenges-using-aesthetic-minimalist",
					},
					{
						title: "",
						link: "https://medium.com/@marco.mondini/aesthetic-and-minimalist-design-d63e7ff8e930",
					},
				],
			},
			{
				point: "Help Visitors Fix Mistakes",
				title:
					"Help Visitors Fix Mistakes - Help Users Recognize, Diagnose, and Recover from Errors",
				emoji: "🛠️",
				subtitle:
					"“If something goes wrong, I need to clearly explain the issue and how to fix it.”",
				content: `
					<strong>Example:</strong>If a visitor enters an incorrect email address, show a clear message like “Please enter a valid email address” near the input field. Offer guidance on what they need to correct without using technical terms or error codes.`,
				resources: [
					{
						title: "",
						link: "https://www.linkedin.com/advice/0/how-can-you-apply-recognize-diagnose-recover-from-kynke",
					},
					{
						title: "",
						link: "https://app.uxcel.com/lessons/usability-heuristics-553/help-users-recognize-diagnose-and-recover-from-errors-6349",
					},
				],
			},
			{
				point: "Provide Extra Help When Needed",
				title: "Provide Extra Help When Needed - Help and Documentation",
				emoji: "💡",
				subtitle: `“Even though my page should be easy to use, I want to provide help for those who need it.”`,
				content: `
					<strong>Example:</strong>Include a “Help” link or a FAQ section that visitors can access if they have questions. Make sure this help is written in plain language and directly addresses common issues or questions.`,
				resources: [
					{
						title: "",
						link: "https://www.nngroup.com/articles/help-and-documentation/",
					},
					{
						title: "",
						link: "https://bootcamp.uxdesign.cc/evaluating-airbnbs-design-using-10-usability-heuristics-21c8e672d9fc",
					},
				],
			},
		],
	},
	{
		key: "Are Your Words Working?",
		id: "are-your-words-working",
		title: "Why focus on copywriting?",
		description: `Strong words clearly explain what your brand offers in terms of your users and why it matters. It’s crucial for capturing attention and driving customer actions.
			<br/><br/>
			<strong>Are Your Words Working?</strong>
			<br/><br/>
			Your words or copywriting helps in carefully framing and structuring information in respect with your users to highlight how your product aligns with what they want and users are influenced towards your product.<br/><br/>Here is how you can check and refine your landing page copy by following these steps. Let’s say you’re a founder creating a landing page for an online course on productivity hacks aimed at busy professionals.`,
		data: [
			{
				point: "Value Proposition",
				title: "Value Proposition: What’s the Big Idea?",
				emoji: "🌟",
				subtitle: "Highlight what makes your product valuable.",
				content: `Your headline should clearly communicate the main benefit of your course. It should grab attention why your productivity course is a must-have and make it clear why your product is a must have.
					<br/><br/>
					<strong>Example:</strong>
					“For the above example the copy must highlight why your productivity course is a must-have. So below is the headline example for the same.”
					<br/><br/>
					<strong>Simple Headline:</strong> “Our course offers productivity tips for busy professionals.”
					<br/><br/>
					<strong>Explanation:</strong>
					Highlight specific benefits or results your course delivers.
					<br/><br/>
					<strong>Improved Example:</strong>
					“Master Productivity Hacks and Transform Your Workday – Perfect for Busy Professionals!”`,
				resources: [
					{
						title: "",
						link: "https://blog.hubspot.com/marketing/write-value-proposition",
					},
				],
			},
			{
				point: "Audience Relevance",
				title: "Audience Relevance: Are You Speaking Their Language?",
				emoji: "🔍",
				subtitle: "Make sure your message matches your users’ needs.",
				content: `Make sure your copy addresses the specific needs and pain points of your users. It should speak directly to their challenges and offer solutions.
					<br/><br/>
					<strong>Example:</strong>
					“For the above example the copy must highlight the pain points of busy professionals.”
					<br/><br/>
					<strong>Simple Paragraph:</strong> “Our productivity course covers a range of techniques for improving efficiency.”
					<br/><br/>
					<strong>Explanation:</strong>
					Tailor the message to address common issues faced by busy professionals, like managing time and reducing stress.
					<br/><br/>
					<strong>Improved Example:</strong>
					“Struggling to keep up with your workload? Our course offers actionable strategies to streamline your tasks and reclaim your time!”`,
				resources: [
					{
						title: "",
						link: "https://www.linkedin.com/pulse/how-speak-your-audiences-language-joey-van-kuilenburg/",
					},
				],
			},
			{
				point: "Clarity and Simplicity",
				title: "Clarity and Simplicity: Keep It Short and Sweet",
				emoji: "🚀",
				subtitle: "Make your call-to-action clear and simple.",
				content: `Your call-to-action (CTA) and content of other sections should be straightforward and easy to act on. Avoid jargon and make it clear what users should do next.
					<br/><br/>
					<strong>Example:</strong>
					“For the above example the CTA must be easy to understand for busy professionals.”
					<br/><br/>
					<strong>Simple Copy:</strong> CTA: “Click here to learn more about how our productivity course can help.”
					<br/><br/>
					<strong>Explanation:</strong>
					Simplify the CTA to make it more direct and compelling.
					<br/><br/>
					<strong>Improved Example:</strong>
					“Enroll Now to Boost Your Productivity!”`,
				resources: [
					{
						title: "",
						link: "https://abmatic.ai/blog/importance-of-simplicity-on-landing-page",
					},
				],
			},
			{
				point: "Engagement",
				title: "Engagement: Hook ‘Em Right Away",
				emoji: "🎯",
				subtitle: "Grab attention with a strong start.",
				content: `The opening sentence should captivate your users and make them eager to learn more about the product.
					<br/><br/>
					<strong>Example:</strong>
					The opening sentence must captivate busy professionals and make them eager to learn more about the course.
					<br/><br/>
					<strong>Simple Copy:</strong> Sentence: “Welcome to our productivity course designed for busy professionals.”
					<br/><br/>
					<strong>Explanation:</strong>
					Create a dynamic introduction that highlights how the course will make a difference.
					<br/><br/>
					<strong>Improved Example:</strong>
					“Overwhelmed by your to-do list? Discover game-changing productivity hacks that fit into your busy schedule!”`,
				resources: [
					{
						title: "",
						link: "https://medium.com/@RomainWarion/17-landing-page-types-that-will-hook-your-visitors-a3f43f2f38f6",
					},
				],
			},
			{
				point: "Consistency",
				title: "Consistency: Stay True to Your Brand",
				emoji: "🔗",
				subtitle: "Keep your tone and style consistent.",
				content: `Ensure the tone and style of your copy align with your brand’s voice and the expectations of your users.
					<br/><br/>
					<strong>Example:</strong>
					“The tone of landing page must meet expectation of busy professionals.”
					<br/><br/>
					<strong>Simple Copy:</strong> “Our team is dedicated to providing the best productivity solutions for professionals.”
					<br/><br/>
					<strong>Explanation:</strong>
					Match the tone to a professional yet approachable style that resonates with busy individuals.
					<br/><br/>
					<strong>Improved Example:</strong>
					“We’re here to help you streamline your workday with practical, no-nonsense productivity hacks!”`,
				resources: [
					{
						title: "",
						link: "https://www.linkedin.com/advice/1/how-can-you-maintain-consistent-brand-experience-ethvf",
					},
				],
			},
			{
				point: "Match Words with Pictures",
				title: "Match Words with Pictures: Visual Harmony",
				emoji: "📸",
				subtitle: "Use images that support your message.",
				content: `Use visuals that complement and enhance your text to create a cohesive and engaging experience. Images should reflect the benefits and mood of your product.
					<br/><br/>
					<strong>Example Copy:</strong>
					Visual: Image of a professional looking stressed and overwhelmed.
					<br/><br/>
					<strong>Explanation:</strong>
					Use images that depict professionals looking productive and stress-free. Place text next to or overlaying these images for better readability and impact.
					<br/><br/>
					<strong>Improved Example:</strong>
					Visual: Image of a professional looking confident and relaxed, with an overlay text saying, “Transform Your Productivity Today!”`,
				resources: [
					{
						title: "",
						link: "https://www.linkedin.com/advice/3/how-can-you-optimize-your-landing-pages-cozef",
					},
				],
			},
		],
	},
	{
		key: "Is the idea solid?",
		id: "is-the-idea-solid",
		title: "Why your idea should be solid?",
		description: `With 35% of startups failing due to no market need, validating your idea via your landing page is crucial. It confirms interest, saving you time and boosting your success chances.
			<br/><br/>
			<strong>Is the idea solid?</strong>
			<br/><br/>
			One reason that your landing page is not performing could be because your idea validation process missed your attention.Your idea or the problem that your idea is solving might not the problem faced by people. Hence validating the problem for which you want to work and put efforts is important.<br/><br/>Here is how you can get you idea validated and know the problem you are solving is actually there.<br/><br/><strong>Reminder:<strong> You will never be certain but that’s okay. You just have to be more certain than you previously were. You will get a mental gut feeling that yeah, I am more certain than I was the last time.`,
		data: [
			{
				point: "Nail Down Your Idea",
				title: "Nail Down Your Idea",
				emoji: "💡",
				subtitle: "Define what your product or service is all about.",
				content: `
					<ul>
						<li>
							<strong>What is your Your Idea?</strong>
							<br/>
							<strong>Example:</strong> Let’s say you’re offering an online course on productivity hacks. Your idea is to help busy professionals become more efficient in their work.
						</li>
						<li>
							<strong>What Are the Details?</strong>
							<br/>
							<strong>Example:</strong> The course includes video lessons, downloadable templates, and weekly live Q&A sessions.
						</li>
						<li>
							<strong>What Problem Does It Solve?</strong>
							<br/>
							<strong>Example:</strong> The course addresses the problem of time management, helping people who struggle to keep up with their workload.
						</li>
					</ul>
					<br/>
					<strong>Don’t think too much you know it just write it down.</strong>`,
				resources: [],
			},
			{
				point: "Know Your Audience",
				title: "Know Your Audience",
				emoji: "🎯",
				subtitle: "Identify who you’re creating this idea for.",
				content: `Find out the age, their work profile, place where they live and start with that.
					<br/><br/>
					<ul>
						<li>
							<strong>Demographics:</strong>
							<br/>
							<strong>Example:</strong> Your audience might be professionals aged 25-40, working in fast-paced environments like startups or corporate roles, mainly located in urban areas.
						</li>
						<li>
							<strong>Problem-Solvers:</strong>
							<br/>
							<strong>Example:</strong> These individuals often feel overwhelmed by their workload and are searching for ways to work smarter, not harder.
						</li>
						<li>
							<strong>Problem-Solvers:</strong>
							<ul>
								<li>
									<strong>Audience-Specific Copy:</strong>
									<br/>
									Busy professionals, reclaim your time and reduce stress with our expert productivity course.
								</li>
								<li>
									<strong>Testimonials or Case Studies:</strong>
									<br/>
									Include a testimonial from someone in a similar role, like "As a startup founder, this course helped me gain 10 extra hours a week!"
								</li>
							</ul>
						</li>
					</ul>`,
				resources: [],
			},
			{
				point: "Validate the Problem",
				title: "Validate the Problem",
				emoji: "✅",
				subtitle: `Check if your target audience actually faces the problem.`,
				hasSubpoints: true,
				subpoints: [
					{
						title: "Go Online",
						content: `
							<ul>
								<li>Search the internet.</li>
								<li>Go to community places, social media like reddit, twitter, facebook groups and see whether this problem is being talked about or not.</li>
								<li>Find instance and collect them. Screenshot the idea paste it together. Read the reviews, comments, idea and understand how your problem is precieved by people.</li>
								<li>Are they facing the problem you found out about or they don’t consider it a problem.</li>
								<li>Remember to have a fresh outlook and go about finding all that you can. It’s a sea of answers out there don’t forget your idea, problem and people stick to that and find answers.</li>
							</ul>
							<br/><br/>
							Time your process, select a target time let’s say an hour or two and find whatever you can.
							`,
						resources: [
							{
								title: "",
								link: "https://www.linkedin.com/advice/3/how-can-you-use-reddit-validate-your-startup-jlyve",
							},
							{
								title: "",
								link: "https://www.linkedin.com/pulse/what-you-need-know-validating-your-idea-facebook-jernej-dekleva-jay-/",
							},
						],
						contentAfterResources:
							"What if you cannot find anything valuable online. My friend its time to talk to your users.Building something is easy but talking to customers can be scary.<br/><br/><strpng>Remember</strong>: Validation is a pathway to get in touch with your future customers. Would you want to build something that people won’t want? No, right so go talk to them.",
					},
					{
						title: "Talking to your audience",
						content: `
							<ul>
								<li>Build two three questions to begin with. Always talk about your problem and not the solution.</li>
								<li>Go reach your network set up meets and talk to them learn about there problem.</li>
								<li>Connect people on linkedin, cold mails or how so ever you can find your customers easiest.</li>
								<li>Or talk to the people who have approached your landing page ever.</li>
							</ul>
							`,
					},
					{
						title: "Know the why? Going Deep",
						content: `
							<ul>
								<li>Ask why the problem bothers them.</li>
								<li>How do they fix that themselves.</li>
								<li>Understand how the problem affects them.</li>
							</ul>
							<br/><br/>
							<strong>Remember<strong>: people don’t always tell the truth they might agree with you just to please you. That’s the way it is.`,
					},
					{
						title: "How Many People?",
						content:
							"Keep a count that is easier for you based on the time you have at hand. You have to get yeses for your problem.",
						resources: [
							{
								title: "The Cold Email That Started $100 M /yr company",
								link: "https://marketingexamples.com/sales/jason-cohen#:~:text=February%202010.,of%20them%20the%20following%20email.",
							},
							{
								title:
									"How to Do Conversations. The MOM Test - Your guide to meaningful conversations",
								link: "https://www.linkedin.com/pulse/unlocking-customer-insights-mom-test-your-guide-meaningful-kumar/",
							},
						],
					},
				],
			},
		],
	},
	{
		key: "Talking to the right people",
		id: "talking-to-the-right-people",
		title: "Why Talking to the right people is important?",
		description: `Finding the right target audience for your landing page ensures it reaches those most likely to convert, maximizing your marketing efforts and avoiding wasted opportunities.
			<br/><br/>
			<strong>Talking to the Right People?</strong>
			<br/><br/>
			Finding the right target audience involves pinpointing who will benefit most from your product, understanding their needs, and tailoring your landing page to engage and convert them effectively.Here is how you can find the ideal target audience for you landing page.<br/><br/>Let’s say you’re a founder creating a landing page for an online course on productivity hacks aimed at busy professionals. Here’s how you would go through the steps to find your target audience and optimize your landing page.`,
		data: [
			{
				point: "Determine the Characteristics of Your Products or Services",
				title: "Determine the Characteristics of Your Products or Services",
				emoji: "🚀",
				subtitle:
					"Identify the problem your product solves and who benefits most from it.",
				content: `
					<ul>
						<li>
							<strong>What Problem Does It Solve?</strong>
							<br/>
							Your online course addresses the problem of busy professionals struggling to manage their time effectively and boost their productivity.
						</li>
						<li>
							<strong>Who Benefits the Most?</strong>
							<br/>
							The ideal customer is a busy professional who is overwhelmed with tasks and needs practical strategies to work more efficiently and manage time better.
						</li>
					</ul>
					<br/><br/>
					<strong>Example:</strong>
					<br/>
					<div><strong>Hightlight the Problem:</strong> Feeling overwhelmed by your to-do list? Struggling to keep up with work demands?</div>
					<div><strong>Show the Solution:</strong> Our productivity hacks course is designed to help busy professionals like you work smarter, not harder.</div>`,
			},
			{
				point: "Look at Competitors",
				title: "Look at Competitors",
				emoji: "🕵️‍♂️",
				subtitle:
					"See who your competitors are targeting and find gaps you can fill.",
				content: `
					<ul>
						<li>
							<strong>Who Are They Targeting?</strong>
							<br/>
							Competitors may be targeting a broader audience interested in general productivity tips or specific niches like remote workers.
						</li>
						<li>
							<strong>Find the Gaps</strong>
							<br/>
							Identify gaps in current offerings, such as a lack of practical, actionable advice specifically tailored for professionals in fast-paced industries.
						</li>
					</ul>
					<br/><br/>
					<strong>Example:</strong>
					<br/>
					<div><strong>Differentiate Your Offering:</strong> Our course offers step-by-step strategies tailored for busy professionals, focusing on actionable tips you can implement immediately.</div>`,
				resources: [
					{
						title: "",
						link: "https://www.linkedin.com/advice/3/how-can-you-identify-your-competitors-ij6nc",
					},
				],
			},
			{
				point: "Create Buyer Personas",
				title: "Create Buyer Personas",
				emoji: "🎯",
				subtitle:
					"Build a profile of your ideal customer and understand their needs.",
				content: `
					<ul>
						<li>
							<strong>Build a Persona:</strong>
							<br/>
							Let’s create a persona: 'Alex, a 35-year-old project manager, is juggling multiple tasks and feels overwhelmed by his workload. He needs effective strategies to improve his efficiency and manage his time better.'
						</li>
						<li>
							<strong>Understand Their Needs:</strong>
							<br/>
							Alex is a tech-savvy, results-driven professional who values practical, easy-to-apply techniques that fit into his busy schedule.
						</li>
					</ul>
					<br/><br/>
					<strong>Example:</strong>
					<br/>
					<div><strong>Tailor Content to Personas:</strong> 'Designed for professionals like Alex who want to streamline their workflow and boost productivity without spending extra hours working.'</div>`,
				resources: [
					{
						title: "",
						link: "https://www.adobe.com/express/learn/blog/buyer-persona",
					},
				],
			},
			{
				point: "Where Does Your Audience Hang Out?",
				title: "Where Does Your Audience Hang Out?",
				emoji: "📍",
				subtitle:
					"Identify the platforms and places where your target audience spends time.",
				content: `
					<ul>
						<li>
							<strong>Select the Right Platforms:</strong>
							<br/>
							Alex is active on LinkedIn, attends webinars related to professional development, and follows productivity blogs.
						</li>
						<li>
							<strong>Match Your Messaging:</strong>
							<br/>
							Use a professional, motivational tone and provide visuals that depict productivity in a work setting.
						</li>
					</ul>
					<br/><br/>
					<strong>Example:</strong>
					<br/>
					<div><strong>Consistency Across Channels:</strong> 'Join thousands of professionals on LinkedIn who are already enhancing their productivity with our course. Connect with us for updates and insights.'</div>`,
				resources: [
					{
						title: "",
						link: "https://blog.hubspot.com/marketing/social-media-target-audience",
					},
				],
			},
			{
				point: "Test and Refine",
				title: "Test and Refine",
				emoji: "🔄",
				subtitle:
					"Experiment with different ideas and adjust based on what works best.",
				content: `
					<ul>
						<li>
							<strong>Test Your Audience:</strong>
							<br/>
							Experiment with different headlines or course features to see what resonates most with Alex’s persona.
						</li>
						<li>
							<strong>Refine as Needed:</strong>
							<br/>
							If feedback indicates that busy professionals are particularly interested in time management techniques, adjust the landing page to emphasize this aspect more.
						</li>
					</ul>
					<br/><br/>
					<strong>Example:</strong>
					<br/>
					<div><strong>Iterate for Success:</strong> 'Discover our new module on time management techniques! Perfect for busy professionals looking to optimize their daily schedule.'</div>
					<br/><br/>
					Feel free to adjust the details to better fit your specific course and audience!`,
				resources: [
					{
						title: "",
						link: "https://www.linkedin.com/pulse/how-find-your-target-audience-7-ways-boshra-ubin/",
					},
				],
			},
		],
	},
	{
		key: "Define and Prioritize Problem?",
		id: "define-and-prioritize-problem",
		title: "Why defining and prioritizing problem is important?",
		description:
			"Prioritizing problems helps you focus on what needs fixing first, making your task easier and more organized.",
		data: [
			{
				point: "List All the Problems",
				title: "List All the Problems",
				emoji: "🚀",
				subtitle: "Writing down every issue you find.",
				content: `
					<ul>
						<li>
							Start by jotting down every single issue you found during your tests. Big or small, write them all down. This could be anything from confusing headlines to broken links.
						</li>
					</ul>`,
			},
			{
				point: "Spot Patterns and Group Issues",
				title: "Spot Patterns and Group Issues",
				emoji: "🔍",
				subtitle: "Find and group similar problems to identify common themes.",
				content: `
					<ul>
						<li>
							Find Similar Problems: Look through your list and see if any problems seem related. For example, if multiple issues are about unclear messaging or tough navigation, group those together.
						</li>
						<li>
							Common Themes: Organize these issues under simple headings like “Confusing Messaging,” “Navigation Problems,” or “Audience Mismatch.”
						</li>
					</ul>`,
			},
			{
				point: "Pick the Most Important Problems",
				title: "Pick the Most Important Problems",
				emoji: "🎯",
				subtitle:
					"Prioritize fixing the biggest issues and tackle easy fixes that quickly enhance your landing page.",
				content: `
					<ul>
						<li>
							<strong>Biggest Issues:</strong> Start with problems that could be scaring away potential customers. Fixing these will have the most impact on making your landing page work better.
						</li>
						<li>
							<strong>Quick Fixes:</strong> Identify the issues you can solve quickly. These are your “quick wins” that make a noticeable difference without much effort.
						</li>
					</ul>
					<br/><br/>
					By sorting and prioritizing, you’re making sure you tackle the most important issues first, making your landing page much more effective.`,
				resources: [
					{
						title: "",
						link: "https://www.linkedin.com/advice/0/what-best-way-prioritize-usability-issues-audit-udezc",
					},
					{
						title: "",
						link: "https://bootcamp.uxdesign.cc/how-to-prioritize-ux-research-findings-when-everything-feels-important-ac34d0d12e87",
					},
				],
			},
		],
	},
];

export default AUDIT_GUIDE;
