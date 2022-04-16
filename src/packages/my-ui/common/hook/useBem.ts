import React from 'react';
/**
 * bem
 * block__element--modifier
 * block--modifier
 */

type ElementType = string | Record<string, boolean> | string[];

const prefix = 'my-ui';


const addModifier = (prefixClassName: string, modifier?: ElementType): string[] => {
  if (!modifier) {
    return [];
  }

  if (typeof modifier === 'string') {
    return [`${prefixClassName}--${modifier}`];
  }

  if (Array.isArray(modifier)) {
    return modifier.map(m => `${prefixClassName}--${m}`);
  }

  return Object.keys(modifier).filter(key => modifier[key]).map(m => `${prefixClassName}--${m}`);
};

export const useBem = (block: string) => {
  return React.useCallback((element?: ElementType, modifier?: ElementType) => {
    let classnames: string[] = [];

    if (element) {
      if (typeof element === 'string') {
        classnames = [
          ...classnames,
          `${prefix}-${block}__${element}`,
          ...addModifier(`${prefix}-${block}__${element}`, modifier)
        ];
      } else if (Array.isArray(element)) {
        classnames.push(...element.map(item => `${block}__${item}`));
      } else {
        Object.keys(element).forEach(key => {
          if (!!element[key]) {
            classnames.push(`${block}__${key}`);
          }
        });
      }
    }

    return classnames.join(' ');
  }, [block]);
};
