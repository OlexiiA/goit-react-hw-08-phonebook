export  const findeContactByName = (state) => {
    const normalized = state.contacts.filter.toLowerCase();

    return state.contacts.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(normalized);
    });
   }; 