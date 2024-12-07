import axios from "axios";

// const ojtApiUrl = "https://qzqvuzsu4g.execute-api.ap-south-1.amazonaws.com/dev";
const baseUrl="https://api.dev.migobucks.com"

export async function enroll(params) {
  const {
    firstName,
    lastName,
    contactNumber,
    email,
    courseTitle,
    meta,
    paymentDetails,
    startDate,
    duration,
    jobId,
    amount,
  } = params;
  const { data } = await axios.post(`${baseUrl}/brand/ojt/register`, {
    firstName,
    lastName,
    contactNumber,
    email,
    courseTitle,
    meta,
    paymentDetails,
    startDate,
    duration,
    jobId,
    amount,
  });

  return data;
}
