import { useMemo } from 'react';
import uuid from 'uuid/v4';
// import * as colors from './colors';

function createUniqueId(label) {
  const uniqueId = `${label}-${uuid()}`;
  return uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
}

// export const mapBsStyleToColor = (bsStyle, { shade = 'base', fallback = colors.coal } = {}) => {
//   let result = colors[bsStyle];

//   if (result && result[shade]) {
//     result = result[shade];
//   } else {
//     result = fallback;
//   }

//   return result;
// };

/**
 * @param {string} myObj.id If you already have a unique id that you want memoized.
 * @param {string} myObj.label Generate a unique id with the following label.
 */
export const useMemoizedId = ({ label, id }) => useMemo(() => id || createUniqueId(label), [label, id]);

export function deprecatedProp(validator, suggestion = '') {
  return function deprecated(props, propName, ...rest) {
    if (props[propName] != null) {
      console.warn(`${propName} is deprecated. ${suggestion}`);
    }
    return validator(props, propName, ...rest);
  };
}
