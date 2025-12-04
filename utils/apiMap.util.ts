export interface apiConfig {
  httpMethod: string;
  endpoint: string;
  alias: string;
}

export interface ApiConfigMap {
    currentTransaction: apiConfig;
    fetchTransaction: apiConfig;
    createParticipant: apiConfig;
    addParticipant: apiConfig;
    updateParticipant: apiConfig;
    deleteParticipant: apiConfig;
    addReferral: apiConfig;
}
export const API_MAP: ApiConfigMap = {
currentTransaction: {
    alias: 'currentTransaction',
    endpoint: '/api/v1/transactions/participant/*',
    httpMethod: 'GET',
  },
  fetchTransaction: {
    alias: 'fetchTransaction',
    endpoint: '/api/v1/transactions/participant/*',
    httpMethod: 'GET',
  },
  createParticipant: {
    alias: 'createParticipant',
    endpoint: '/api/v1/transactions/*/create-participant',
    httpMethod: 'POST',
  },
    addParticipant: {
    alias: 'addParticipant',
    endpoint: '/api/v1/transactions/*/participant',
    httpMethod: 'POST',
  },
  updateParticipant: {
    alias: 'addParticipant',
    endpoint: '/api/v1/transactions/*/participant/*',
    httpMethod: 'PUT',
  },
  deleteParticipant: {
    alias: 'deleteParticipant',
    endpoint: '/api/v1/transactions/*/participant/*',
    httpMethod: 'DELETE',
  },
    addReferral: {
    alias: 'addReferral',
    endpoint: '/api/v1/agent/*/referral',
    httpMethod: 'POST',
  },
};