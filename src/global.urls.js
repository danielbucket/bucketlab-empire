let API_ROOT = 'https://api.bucketlab.io/v1';
if (import.meta.env.DEV) {
  API_ROOT = 'https://dev.bucketlab.io/v1';
};

export const API_URLS = {
  login: `${API_ROOT}/auth/login`,
  logout: `${API_ROOT}/auth/logout`,
  create: `${API_ROOT}/create`,
  profiles: {
    getProfileById: (id) => `${API_ROOT}/profiles/${id}`,
    getProfileByEmail: (email) => `${API_ROOT}/profiles/email/${email}`,
    updateProfile: (id) => `${API_ROOT}/profiles/${id}/update`,
    deleteProfile: (id) => `${API_ROOT}/profiles/${id}/delete`,
    createProfile: `${API_ROOT}/profiles/create`,
  },
  laboratory: {
    getLabById: (id) => `${API_ROOT}/laboratory/labs/${id}`,
    createLab: `${API_ROOT}/laboratory/labs/create`,
    updateLab: (id) => `${API_ROOT}/laboratory/labs/${id}/update`,
    deleteLab: (id) => `${API_ROOT}/laboratory/labs/${id}/delete`,
  },
  messages: {
    getMessages: `${API_ROOT}/messages`,
    sendMessage: `${API_ROOT}/messages/send`,
  },
};

export const PRIVATE_URLS = {
  portal: {
    root: '/portal',
    login: '/portal/login',
    createProfile: '/portal/create-profile',
  },
  laboratory: {
    root: '/laboratory',
    labs: '/laboratory/labs',
  },
  messages: {
    root: '/messages',
  },
  cubicle: {
    root: '/cubicle',
    profile: '/cubicle/profile',
    settings: '/cubicle/settings',
    messages: '/cubicle/messages',
    watchlist: '/cubicle/watchlist',
    projects: '/cubicle/projects',
  }
};

export const PUBLIC_URLS = {
  about: {
    root: '/about'
  },
  contact: {
    root: '/contact'
  },
  mythtaT: {
    root: '/mythtaT100'
  },
  portal: {
    root: '/portal',
    login: '/portal/login',
    createProfile: '/portal/create-profile',
  },
  projects: {
    root: '/projects'
  }
};