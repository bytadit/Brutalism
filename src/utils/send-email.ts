import { FormData } from "./../app/contact/ContactForm";

export function sendEmail(data: FormData): Promise<void> {
    const apiEndpoint = "/api/email";
    return fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to send email");
        }
        return res.json(); // Parse response body as JSON (if needed)
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  }
