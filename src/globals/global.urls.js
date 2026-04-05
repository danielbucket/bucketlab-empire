let API_ROOT = 'https://api.bucketlab.io';
if (import.meta.env.DEV) { API_ROOT = '/dev' };

export const API_URLS = {
  profiles: {
    login: `${API_ROOT}/auth/login`,
    logout: `${API_ROOT}/auth/logout`,
    create: `${API_ROOT}/auth/create`,
    deleteProfile: `${API_ROOT}/auth/delete`,
    getProfile: `${API_ROOT}/profiles/me`,
    updateProfile: `${API_ROOT}/profiles/update`
  },
  laboratory: {
    getLabById: (id) => `${API_ROOT}/laboratory/labs/${id}`,
    createLab: `${API_ROOT}/laboratory/labs/create`,
    updateLab: (id) => `${API_ROOT}/laboratory/labs/${id}/update`,
    deleteLab: (id) => `${API_ROOT}/laboratory/labs/${id}/delete`
  },
  messages: {
    getMessages: `${API_ROOT}/messages`,
    sendMessage: `${API_ROOT}/messages/send`
  },
};

export const PRIVATE_URLS = {
  laboratory: {
    root: '/laboratory',
    cubicle: '/laboratory/cubicle',
    profile: '/laboratory/profile',
    // labs: '/laboratory/labs',
  },
  messages: {
    // root: '/messages',
  },
  cubicle: {
    // root: '/cubicle',
    // profile: '/cubicle/profile',
    // settings: '/cubicle/settings',
    // messages: '/cubicle/messages',
    // watchlist: '/cubicle/watchlist',
    // projects: '/cubicle/projects',
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