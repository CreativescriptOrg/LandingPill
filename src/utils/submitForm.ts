import axios from "axios";
import { ALL_LINKS } from "../../config";

const submitForm = async (formState: any) => {
  let data = JSON.stringify(formState);
  try {
    const res = await axios.post(
      `${ALL_LINKS.BASE_URL}/api/v1/page/storepagedata`,
      data,
      {
        maxBodyLength: Infinity,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res?.data) {
      return res.data
        ? res.data
        : {
            status: "error",
            message: "Something went wrong",
          };
    }
  } catch (error) {
    let message = (error as any).response?.data?.message;
    return {
      status: "failed",
      message: message ? message : "Something went wrong",
    };
  }
};

export const sendEmail = async (formState: any) => {
  let data = JSON.stringify({
    to: formState.email,
    subject: "Got It! Your Landing Page Is in the Lab 💊",
    message:
      "Hey,\n\nWe've received your landing page details and the Landing Pill team is already on it! 🛠️\n\nWe'll dive deep, analyze what's working (and what's not), and get back to you with actionable insights soon.\n\nSit tight—your landing page transformation is coming. 🚀\n\nTalk soon,\nTeam Landing Pill",
  });

  try {
    const res = await axios.post(
      "https://zka84ijxrc.execute-api.us-east-1.amazonaws.com/dev/gmailSend",
      data,
      {
        maxBodyLength: Infinity,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res?.data) {
      return res.data
        ? res.data
        : {
            status: "error",
            message: "Something went wrong",
          };
    }
  } catch (error) {
    let message = (error as any).response?.data?.message;
    return {
      status: "failed",
      message: message ? message : "Something went wrong",
    };
  }
};
function formatLink(userInput: any) {
  // Remove any leading/trailing whitespace
  let link = userInput.trim();

  // Check if the link starts with http:// or https:// and remove it
  if (link.startsWith("http://")) {
    link = link.substring(7);
  } else if (link.startsWith("https://")) {
    link = link.substring(8);
  }

  // Check if the link starts with www. and add it if not
  if (!link.startsWith("www.")) {
    link = "www." + link;
  }

  // Add https:// prefix
  link = "https://" + link;

  return link;
}
export const getHeroSectionAuditForm = async (formState: any) => {
  let data: any = JSON.stringify({
    ...formState,
    url: formatLink(formState?.url),
  });

  try {
    const res = await axios.post(
      `${ALL_LINKS.BASE_URL}/api/v1/page/getHeroSectionAudit`,
      data,
      {
        maxBodyLength: Infinity,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res?.data) {
      return res.data
        ? res.data
        : {
            status: "error",
            message: "Something went wrong",
          };
    }
  } catch (error) {
    let message = (error as any).response?.data?.message;
    return {
      status: "failed",
      message: message ? message : "Something went wrong",
    };
  }
};

export default submitForm;
