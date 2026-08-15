export type FormFieldConfig = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  full?: boolean;

  // Used for fields that should only appear
  // when another field has a specific value.
  showWhen?: {
    field: string;
    value: string;
  };
};

export const businessEnquiryFields: FormFieldConfig[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
    placeholder: "Your full name",
  },
  {
    name: "organization",
    label: "Organization",
    type: "text",
    required: true,
    placeholder: "Department or company",
  },
  {
    name: "designation",
    label: "Designation",
    type: "text",
    placeholder: "Your role",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    required: true,
    placeholder: "+91 00000 00000",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "name@organisation.in",
  },
  {
    name: "message",
    label: "Requirement",
    type: "textarea",
    required: true,
    placeholder:
      "Describe the site, scope and the decision this work must support.",
    full: true,
  },
];

export const internshipCourses = [
  "GIS & Spatial Databases",
  "Remote Sensing & Image Analysis",
  "Drone Survey & Photogrammetry",
  "LiDAR Data Processing",
  "Hydraulic Modelling (HEC-RAS)",
  "3D Mapping & Digital Twin",
  "Other",
];

export const internshipFields: FormFieldConfig[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    required: true,
    placeholder: "Your full name",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    required: true,
    placeholder: "+91 00000 00000",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "name@example.com",
  },
  {
    name: "qualification",
    label: "Qualification",
    type: "text",
    required: true,
    placeholder: "B.E. Civil, 3rd year",
  },
  {
    name: "college",
    label: "College / Institution",
    type: "text",
    required: true,
    placeholder: "Institution name",
  },
  {
    name: "city",
    label: "City",
    type: "text",
    required: true,
    placeholder: "City",
  },
  {
    name: "course",
    label: "Interested Course",
    type: "select",
    required: true,
    options: internshipCourses,
    full: true,
  },
  {
    name: "otherCourse",
    label: "Other Course / Preference",
    type: "text",
    required: true,
    placeholder: "Please specify your preferred course or area of interest",
    full: true,

    // This field will only be displayed when
    // "Other" is selected in the Interested Course dropdown.
    showWhen: {
      field: "course",
      value: "Other",
    },
  },
  {
    name: "message",
    label: "Tell us about yourself",
    type: "textarea",
    required: true,
    placeholder:
      "Availability, area of interest or anything else we should know.",
    full: true,
  },
];