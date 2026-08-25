const GOOGLE_SHEET_API =
  "https://script.google.com/macros/s/AKfycbws1tVw0qlD7YUrm4CG3OByu-fy05MFg6uYdE4Fcu-gsrJR673aJZ8WTLtgnN-fb8ol/exec";

export type BusinessEnquiryData = {
  name: string;
  organization: string;
  designation?: string;
  phone: string;
  email: string;
  message: string;
};

export type InternshipApplicationData = {
  fullName: string;
  phone: string;
  email: string;
  qualification: string;
  college: string;
  city: string;
  course: string;
  otherCourse?: string;
  message: string;
};

export async function submitBusinessEnquiry(
  data: BusinessEnquiryData
) {
  return submitForm({
    formType: "business",
    ...data,
  });
}

export async function submitInternshipApplication(
  data: InternshipApplicationData
) {
  return submitForm({
    formType: "internship",
    ...data,
  });
}

async function submitForm(data: Record<string, unknown>) {
  if (!GOOGLE_SHEET_API) {
    throw new Error("Form endpoint is not configured.");
  }

  try {
    await fetch(GOOGLE_SHEET_API, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    return {
      success: true,
      message: "Form submitted successfully",
    };
  } catch (error) {
    console.error("Google Sheet submission error:", error);

    throw new Error(
      "Unable to submit the form. Please try again."
    );
  }
}