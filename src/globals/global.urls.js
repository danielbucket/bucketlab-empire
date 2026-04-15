let API_ROOT = 'https://api.bucketlab.io';
if (import.meta.env.DEV) { API_ROOT = '/dev' };

export const API_URLS = {
  auth: {
    login: `${API_ROOT}/auth/login`,
    logout: `${API_ROOT}/auth/logout`,
    create: `${API_ROOT}/auth/create`,
    delete: `${API_ROOT}/auth/delete`
  },
  profiles: {
    login: `${API_ROOT}/auth/login`,
    logout: `${API_ROOT}/auth/logout`,
    create: `${API_ROOT}/auth/create`,
    deleteProfile: `${API_ROOT}/auth/delete`,
    getProfile: `${API_ROOT}/profiles/me`,
    updateProfile: `${API_ROOT}/profiles/update`
  },
  laboratory: {
    getResume: `${API_ROOT}/laboratory/resume`
  },
  messages: {
    getMessages: `${API_ROOT}/messages`,
    sendMessage: `${API_ROOT}/messages/send`
  },
  homelab: {
    status: `${API_ROOT}/homelab/status`
  }
};

export const PRIVATE_URLS = {
  laboratory: {
    root: '/laboratory',
    cubicle: '/laboratory/cubicle',
    profile: '/laboratory/profile',
    resume: '/laboratory/resume'
  },
  messages: {},
  cubicle: {}
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
  },
  resume: {
    root: '/resume'
  }
};