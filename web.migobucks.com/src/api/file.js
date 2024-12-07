import axios from 'axios';

const uploadApiUrl = ` https://94hjxzau34.execute-api.ap-south-1.amazonaws.com`;

const baseApiUrl = 'https://api.dev.migobucks.com';

export async function upload(formData) {
  const { data } = await axios.post(`${uploadApiUrl}/api/file`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
}

export const postSignedUrl = async (payload) => {
  try {
      
    const requestBody = {
      ContentType: payload.contentType,
      Resource: payload.resource,
      ResourceId: payload.resourceId,
      FileId: payload.uuid,
      UserId: payload.resourceId,
      Origin: 'MIGOBUCKS',
    };

    const { data } = await axios.post(
      `${baseApiUrl}/common/file-upload/signed-url`,
      requestBody
    );
    return data;
  } catch (err) {
    return null;
  }
};

export const putFile = async (url, payload, config) => {
  try {
    const { data } = await axios.put(url, payload, config);
    return data;
  } catch (err) {
    return null;
  }
};
