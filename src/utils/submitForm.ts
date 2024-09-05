import axios from "axios";

const submitForm = async (formState: any) => {
  let data = JSON.stringify(formState);
  try {
    const res = await axios.post(
      "https://pill.estulife.com/api/v1/page/storepagedata",
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
    console.log(error);
  }
};

export default submitForm;
