
export const selectFilter = state => state.filter.query;
export const selectItems = state => state.contacts.items;
export const selectStatus = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
