const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbws1tVw0qlD7YUrm4CG3OByu-fy05MFg6uYdE4Fcu-gsrJR673aJZ8WTLtgnN-fb8ol/exec";

export type SubmissionResult = {
  ok: boolean;
  message: string;
};

export async function submitForm(
  formType: string,
  payload: Record<string, string>,
): Promise<SubmissionResult> {
  if (!ENDPOINT) {
    return {
      ok: false,
      message:
        "Form endpoint is not configured. Please email absynergy.nagpur@gmail.com.",
    };
  }

  try {
    const body = new URLSearchParams();

    body.append("formType", formType);
    body.append("submittedAt", new Date().toISOString());

    Object.entries(payload).forEach(([key, value]) => {
      body.append(key, value ?? "");
    });

    await fetch(ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: body.toString(),
    });

    return {
      ok: true,
      message:
        "Thank you. Our team will respond within one working day.",
    };
  } catch (error) {
    console.error("Google Apps Script submission error:", error);

    return {
      ok: false,
      message:
        "We could not send your message. Please try again or email absynergy.nagpur@gmail.com.",
    };
  }
}