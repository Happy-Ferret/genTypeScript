/* Typescript file generated */
import * as React from "react";
// tslint:disable-next-line:no-var-requires
const MyBanner = require("./MyBanner");
// tslint:disable-next-line:no-var-requires
const MyBannerReBS = require("./MyBannerRe.bs");
// tslint:disable-next-line:no-var-requires
const ReasonReact = require("reason-react/src/ReasonReact.js");

// tslint:disable-next-line:interface-over-type-literal
export type Props = {show:boolean; message:string; children?:any};
export const MyBannerRe: React.ComponentClass<Props> = ReasonReact.wrapReasonForJs(
  MyBannerReBS.component,
  (function _(jsProps: Props) {
     return MyBannerReBS.make(jsProps.show, jsProps.message, jsProps.children);
  }));
export function checkJsWrapperType(props: Props) {
      return <MyBanner {...props}/>;
    }
