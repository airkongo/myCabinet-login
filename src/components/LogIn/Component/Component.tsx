import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component.module.css';
import { Rectangle2Icon } from './Rectangle2Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    rectangle2?: string;
  };
  swap?: {
    rectangle2?: ReactNode;
  };
  text?: {
    janeExampleCom?: ReactNode;
  };
}
/* @figmaId 1:2 */
export const Component: FC<Props> = memo(function Component(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle2 || ''} ${classes.rectangle2}`}>
        {props.swap?.rectangle2 || <Rectangle2Icon className={classes.icon} />}
      </div>
      {props.text?.janeExampleCom != null ? (
        props.text?.janeExampleCom
      ) : (
        <div className={classes.janeExampleCom}>jane@example.com</div>
      )}
    </div>
  );
});
