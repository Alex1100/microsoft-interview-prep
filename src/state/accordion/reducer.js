export const SET_SELECTED_SECTION = "SET_SELECTED_SECTION";

const initialState = {
  selectedSection: 0,
  sections: [
    {
      title: "Section 1",
      content: `
        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
        Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
        condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi.
        Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit
        eu ante scelerisque vulputate.
      `
    },
    {
      title: "Section 2",
      content: `
        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
        Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
        condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi.
        Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit
        eu ante scelerisque vulputate.
      `
    },
    {
      title: "Section 3",
      content: `
        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
        Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
        condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi.
        Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit
        eu ante scelerisque vulputate.
      `
    },
    {
      title: "Section 4",
      content: `
        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
        Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
        condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi.
        Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit
        eu ante scelerisque vulputate.
      `
    }
  ],
};

export const accordionReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SELECTED_SECTION:
      return {
        ...state,
        ...action.payload,
      };
    default: return state
  }
}
