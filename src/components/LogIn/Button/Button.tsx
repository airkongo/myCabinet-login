import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle2?: string;
    root?: string;
  };
  text?: {
    logIn?: ReactNode;
  };
}
/* @figmaId 1:5 */
export const Button: FC<Props> = memo(function Button(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle2 || ''} ${classes.rectangle2}`}></div>
      {props.text?.logIn != null ? props.text?.logIn : <div className={classes.logIn}>log in</div>}
    </div>
  );
});
