export const props = {
  size: {
    type: String,
    default: 'normal',
    validator: (value) => {
      if (!['small', 'normal', 'large', ''].includes(value)) {
        return new Error('size expect small,normal,large');
      }
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  shape: {
    type: String,
    default: '',
    validator: (value) => {
      if (!['circle', 'round'].includes(value)) {
        return new Error('shape expect circle round');
      }
    },
  },
  ghost: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: '',
    validator: (value) => {
      if (!['danger', 'link', 'primary', 'dashed'].includes(value)) {
        return new Error('type expect danger,link,primary,dashed');
      }
    },
  },
};
