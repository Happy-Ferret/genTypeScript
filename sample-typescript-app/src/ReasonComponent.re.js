/* @flow strict */

// tslint:disable-next-line:no-var-requires
const ReasonComponentBS = require("./ReasonComponent.bs");
// tslint:disable-next-line:no-var-requires
const ReasonReact = require("reason-react/src/ReasonReact.js");

import type {Component as ReactComponent} from 'React';
// tslint:disable-next-line:interface-name
export interface Props {message?:string; children?:any};
export const component: React.ComponentClass<Props> = ReasonReact.wrapReasonForJs(
  ReasonComponentBS.component,
  (function _(jsProps: Props) {
     return ReasonComponentBS.make(jsProps.message, jsProps.children);
  }));

