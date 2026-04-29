
import Image1 from "../assets/images/illustrations/automation.svg"
import Image2 from "../assets/images/illustrations/digital.svg"
import Image3 from "../assets/images/illustrations/dev.svg"
import Image4 from "../assets/images/illustrations/consultancy.svg"

export const cards = [
  {
    id: "automation",
    headingLines: "1] Intelligent Automation",
    description:
      "You can automate repetitive tasks, uncover actionable insights, and make smarter decisions by integrating AI into your existing systems, without  changing what already works.",
    moreClass: "",
    flexType: "flex-col",
    shape: Image1
  },
  {
    id: "digitization",
    headingLines: "2] Digital Transformation",
    description:
      "You can replace manual workflows like spreadsheets, paperwork, emails,  and disconnected tools with structured digital systems, designed around  how your business actually operates.",
    moreClass: "",
    flexType: "flex-col",
    shape: Image2
  },
  {
    id: "software",
    headingLines: "3] End-to-End Software Product Development",
    description:
      "You can turn your idea into a fully functional software system, from  design to launch, covering web and mobile development, backend,  infrastructures and deployment",
    moreClass: "",
    flexType: "flex-col",
    shape: Image3
  },
  {
    id: "consultancy",
    headingLines: "4] Consultancy",
    description:
      "You can automate repetitive tasks, uncover actionable insights, and make smarter decisions by integrating AI into your existing systems, without  changing what already works.",
    moreClass: "col-span-2",
    flexType: "flex-row gap-10 items-start",
    image_class: "w-150",
    shape: Image4
  },
];
