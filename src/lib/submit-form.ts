const ENDPOINT = import.meta.env["VITE_GOOGLE_APPS_SCRIPT_URL"] as string | undefined;

export type SubmissionResult = { ok: boolean; message: string };

/**
 * Posts a form payload to the configured Google Apps Script web app endpoint.
 * Set VITE_GOOGLE_APPS_SCRIPT_URL to the deployed script URL.
 */
export async function submitForm(
  formType: string,
  payload: Record<string, string>,
): Promise<SubmissionResult> {
  if (!ENDPOINT) {
    return {
      ok: false,
      message:
        "Form endpoint is not configured yet. Please email connect@absynergy.in or call us directly.",
    };
  }

  try {
    await fetch(ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        formType,
        submittedAt: new Date().toISOString(),
        ...payload,
      }),
    });
    return { ok: true, message: "Thank you. Our team will respond within one working day." };
  } catch {
    return {
      ok: false,
      message: "We could not send your message. Please try again or email connect@absynergy.in.",
    };
  }
}
