let API_URL = 'https://api.bucketlab.io';
if (import.meta.env.DEV) {
  API_URL = 'https://dev.bucketlab.io';
};

export const urls = {
  login: `${API_URL}/auth/login`,
  logout: `${API_URL}/auth/logout`,
  create: `${API_URL}/create`,
  profiles: {
    getProfileById: (id) => `${API_URL}/profiles/${id}`,
    getProfileByEmail: (email) => `${API_URL}/profiles/email/${email}`,
    updateProfile: (id) => `${API_URL}/profiles/${id}/update`,
    deleteProfile: (id) => `${API_URL}/profiles/${id}/delete`,
  },
  portal: {
    root: `${API_URL}/portal`,
    login: `${API_URL}/portal/login`,
    create: `${API_URL}/portal/create-profile`,
  },
  laboratory: {
    root: `${API_URL}/laboratory`,
    getLabs: `${API_URL}/laboratory/labs`,
    getLabById: (id) => `${API_URL}/laboratory/labs/${id}`,
    createLab: `${API_URL}/laboratory/labs/create`,
    updateLab: (id) => `${API_URL}/laboratory/labs/${id}/update`,
    deleteLab: (id) => `${API_URL}/laboratory/labs/${id}/delete`,
  },
  messages: {
    getMessages: `${API_URL}/messages`,
    sendMessage: `${API_URL}/messages/send`,
  },
};