import axios from "axios";

const paymentApiUrl =
  "https://130zfgr6l6.execute-api.us-east-1.amazonaws.com/dev/payments";

export const creatPayment = async (payload) => {
  const { amount, currency, receipt, notes } = payload;
  const { data } = await axios.post(`${paymentApiUrl}/create`, {
    amount,
    currency,
    receipt,
    notes,
  });
  return data;
};
