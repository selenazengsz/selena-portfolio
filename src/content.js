// ============================================================================
// Pixel Folder — Selena Zeng's portfolio content.
// ============================================================================

export const content = {
  hero: {
    stamp: "USER GROWTH / OPERATIONS / ANALYTICS",
    name: "Selena Zeng",
    introLine1: "USC Economics and Data Science student working at the intersection of user growth and operations.",
    introLine2: "I turn customer insights, lifecycle marketing, and data into actionable growth strategies.",
  },

  workSection: {
    eyebrow: "HOME / SELECTED WORK",
    title: "Growth work, filed by impact",
    description: "From segmentation to customer research and feedback loops — starting with users and scaling with data.",
  },

  projects: [
    {
      title: "Lifecycle Marketing & CRM Campaigns",
      description: "Segmented users by purchase frequency and configured prepaid products, offers, eligibility, and campaign rules.",
      image: "",
      category: "Lifecycle Marketing",
      tags: ["Segmentation", "CRM Operations"],
      year: "2026",
      link: "",
      detail: "Supported initiatives designed to improve retention, purchase frequency, and customer lifetime value by managing campaign logic, promotional mechanics, and digital offer configuration.",
      folderIcon: "/folder-icons/red-rabbit-folder.png",
    },
    {
      title: "Conversion Funnel Research",
      description: "Interviewed 100+ users who opened the Luckin app but abandoned their purchase before checkout.",
      image: "",
      category: "Customer Insights",
      tags: ["User Interviews", "Conversion Funnel"],
      year: "2026",
      link: "",
      detail: "Designed structured interviews, identified friction points across the conversion journey, and translated qualitative findings into actionable product and user experience recommendations.",
      folderIcon: "/folder-icons/blue-folder.png",
    },
    {
      title: "Customer Feedback Survey & NPS Analysis",
      description: "Built an end-to-end survey program for three behavior-based customer cohorts on the Luckin Coffee app.",
      image: "",
      category: "Voice of Customer",
      tags: ["Survey Operations", "NPS Analysis"],
      year: "2026",
      link: "",
      detail: "Translated business questions into cohort-specific surveys, coordinated targeted outreach and incentives, and cleaned thousands of responses using completion-time, response-pattern, and duplicate checks. I then compared satisfaction and recommendation patterns across customer and product segments, turning the findings into prioritized recommendations for product, UX, and lifecycle teams. Confidential operational and performance details have been anonymized.",
      folderIcon: "/folder-icons/green-folder.png",
      caseStudy: {
        eyebrow: "LUCKIN COFFEE / VOICE OF CUSTOMER",
        title: "Customer Feedback Survey & NPS Analysis",
        subtitle: "An end-to-end feedback system connecting behavioral cohorts, survey operations, response validation, and decision-ready insight.",
        confidentiality: "Portfolio-safe version: public brand and product information is retained, while employee identities, respondent-level data, internal systems, exact cohort rules, sample sizes, and performance metrics are omitted or generalized.",
        snapshot: [
          { value: "03", label: "Behavior-based cohorts" },
          { value: "1,000s", label: "Responses reviewed" },
          { value: "04", label: "Quality-control layers" },
          { value: "07", label: "Experience dimensions" },
        ],
        overview: "The business needed to understand why some customers became inactive, what brought others back, and where high-intent users encountered friction before completing an order. I translated these questions into three cohort-specific surveys and built the operational and analytical workflow around them.",
        role: [
          "Converted business questions into cohort-specific research objectives",
          "Designed and configured questionnaires across the customer journey",
          "Supported audience selection, targeted messaging, and incentive delivery",
          "Built repeatable response-cleaning and NPS analysis templates",
          "Synthesized quantitative and open-text findings for cross-functional teams",
        ],
        workflow: [
          { step: "01", title: "Frame", text: "Define the decision, audience, and learning objective." },
          { step: "02", title: "Design", text: "Build cohort-specific questions and response logic." },
          { step: "03", title: "Launch", text: "Coordinate targeting, SMS outreach, and incentives." },
          { step: "04", title: "Validate", text: "Screen timing, patterns, duplicates, and eligibility." },
          { step: "05", title: "Analyze", text: "Compare NPS, satisfaction, segments, and verbatims." },
          { step: "06", title: "Activate", text: "Translate findings into product and lifecycle actions." },
        ],
        cohorts: [
          { name: "Inactive customers", goal: "Understand disengagement and unmet needs", accent: "pink" },
          { name: "Reactivated customers", goal: "Identify the triggers that brought customers back", accent: "yellow" },
          { name: "High-intent non-purchasers", goal: "Locate friction before order completion", accent: "green" },
        ],
        qualityChecks: [
          { name: "Completion time", note: "Flagged unusually fast or slow submissions" },
          { name: "Response pattern", note: "Checked repetitive and low-variance answers" },
          { name: "Duplicate signals", note: "Reviewed repeated IDs and network-level signals" },
          { name: "Audience validity", note: "Matched responses to eligible survey records" },
        ],
        experienceDimensions: [
          "Taste & product experience",
          "Value perception",
          "New-product satisfaction",
          "Packaging & appearance",
          "Ordering journey",
          "Customization options",
          "Store & service experience",
        ],
        npsGroups: [
          { label: "Detractors", score: "0–6", width: 50, color: "pink" },
          { label: "Passives", score: "7–8", width: 22, color: "yellow" },
          { label: "Promoters", score: "9–10", width: 28, color: "green" },
        ],
        insightTiers: [
          { label: "Price & value", tier: "HIGH SIGNAL", width: 96 },
          { label: "Store proximity", tier: "HIGH SIGNAL", width: 88 },
          { label: "Taste & variety", tier: "HIGH SIGNAL", width: 82 },
          { label: "Fulfillment speed", tier: "MID SIGNAL", width: 58 },
          { label: "Ingredients & quality", tier: "EMERGING", width: 34 },
          { label: "Brand, service & packaging", tier: "EMERGING", width: 26 },
        ],
        insights: [
          "Different behavioral cohorts required different questions; a single generic survey would have obscured the customer journey context.",
          "Value, convenience, and product experience formed the clearest decision themes, while service and brand cues added useful qualitative context.",
          "Combining NPS with experience dimensions made the results more actionable than reporting a recommendation score alone.",
          "A reusable validation workflow improved confidence in the findings and made future survey waves easier to process consistently.",
        ],
        outcome: "The project established a repeatable voice-of-customer workflow: from business question to validated dataset, segmented analysis, and prioritized recommendations. It enabled product, UX, and lifecycle teams to discuss customer friction using a shared evidence base.",
      },
    },
  ],

  aboutSection: {
    eyebrow: "ABOUT / EXPERIENCE",
    title: "The person behind the numbers",
  },

  about: {
    name: "Selena Zeng",
    profileImage: "/about/profile.jpg",
    profileAlt: "Portrait of Selena Zeng holding white tulips outdoors",
    postcardImage: "/about/stamp-paper.jpg",
    greeting: "HELLO, I'M SELENA",
    body: "I study Economics and Data Science at the University of Southern California and expect to graduate in December 2026. I am curious about why users act, where they drop off, and how better segmentation, communication, and experiences can create lasting value. My background spans user growth, business analytics, and consulting. I also independently operate two RedNote accounts that have earned 7,000+ likes.",
  },

  skills: ["User Growth", "CRM & Lifecycle Marketing", "Customer Research", "SQL / Power BI", "Data Storytelling"],

  experiences: [
    {
      role: "User Growth Operations Intern",
      period: "2026 — PRESENT",
      meta: "Luckin Coffee · Beijing, China",
      description: "Execute CRM and lifecycle campaigns, conduct customer research with 100+ users, manage feedback operations, and coordinate weekly launches across marketing, product, design, and operations.",
      visual: "CRM",
    },
    {
      role: "Business Analyst Intern",
      period: "SUMMER 2024",
      meta: "Xylem Inc. · Pittsburgh, PA",
      description: "Analyzed a $15M customer portfolio in Power BI to improve sales efficiency by 10%, and used Excel and SAP analysis to help reduce excess inventory by 30%.",
      visual: "BI",
    },
    {
      role: "Consulting Intern — Government & Public Services",
      period: "WINTER 2024",
      meta: "Deloitte · Beijing, China",
      description: "Synthesized 15+ expert and partner reports into executive briefs, reducing senior stakeholder review time by approximately 35% and helping multiple teams align on trends and risks.",
      visual: "CONS",
    },
    {
      role: "B.S. Economics and Data Science",
      period: "2022 — 2026",
      meta: "University of Southern California · GPA 3.7",
      description: "Combine economic reasoning, analytics, and business judgment through projects using SQL, Python, Tableau, Power BI, predictive modeling, and data storytelling.",
      visual: "USC",
    },
  ],

  contact: {
    titleLine1: "Let's",
    titleLine2: "connect",
    lead: "I am seeking full-time opportunities in user growth, CRM, business operations, or growth analytics after graduating in December 2026.",
    phoneHref: "tel:4125515992",
    phoneText: "412-551-5992",
    emailHref: "mailto:yue.zeng@outlook.com",
    emailText: "yue.zeng@outlook.com",
  },
};
