import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button } from './Button/Button';
import { Component } from './Component/Component';
import { FrameIcon } from './FrameIcon';
import { FrameIcon2 } from './FrameIcon2';
import { GroupIcon } from './GroupIcon';
import classes from './LogIn.module.css';
import { Rectangle2Icon } from './Rectangle2Icon';
import { Rectangle2Icon2 } from './Rectangle2Icon2';

interface Props {
  className?: string;
}
/* @figmaId 1:9 */
export const LogIn: FC<Props> = memo(function LogIn(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.dASHBOARD}></div>
      <div className={classes.iCONS72}></div>
      <div className={classes.iCONS2}></div>
      <div className={classes.iCONS51}></div>
      <div className={classes.rectangle36}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.eCabinet}>eCabinet</div>
      <div className={classes.castroFinal1}></div>
      <div className={classes.welcomeToOurVirtualCabinetMeet}>
        <div className={classes.textBlock}>Welcome to our virtual cabinet meeting.</div>
        <div className={classes.textBlock2}>Connect and Collaborate from anywhere.</div>
      </div>
      <div className={classes.frame}>
        <FrameIcon className={classes.icon3} />
      </div>
      <div className={classes.group}>
        <GroupIcon className={classes.icon4} />
      </div>
      <Component
        className={classes.component}
        swap={{
          rectangle2: <Rectangle2Icon className={classes.icon} />,
        }}
      />
      <Component
        className={classes.component2}
        classes={{ rectangle2: classes.rectangle2 }}
        swap={{
          rectangle2: (
            <div className={classes.rectangle2}>
              <Rectangle2Icon2 className={classes.icon2} />
            </div>
          ),
        }}
        text={{
          janeExampleCom: <div className={classes.unnamed}>••••••••••••</div>,
        }}
      />
      <Button
        className={classes.button}
        classes={{ rectangle2: classes.rectangle22 }}
        text={{
          logIn: <div className={classes.next}>Continue</div>,
        }}
      />
      <div className={classes.password}>Password</div>
      <div className={classes.frame2}>
        <FrameIcon2 className={classes.icon5} />
      </div>
      <div className={classes.email}>Email</div>
      <div className={classes.line2}></div>
    </div>
  );
});
