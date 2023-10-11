declare module '*.module.scss';

declare type BadgeVariantTypes = 'basic' | 'clearable' | 'rounded'
declare type ColorSchemeType = 'light' | 'primary' | 'dark'

declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

declare interface IDataJob {
  "id": number,
  "company": string,
  "logo": string,
  "new": boolean,
  "featured": boolean,
  "position": string,
  "role": "Frontend" | "Fullstack" | "Backend" | string,
  "level": "Senior" | "Junior" | "Midweight" | string,
  "postedAt": string,
  "contract": "Full Time" | "Part Time" | "Contract" | string,
  "location": string,
  "languages": string[],
  "tools": string[],
}
