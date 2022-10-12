/// <reference types="next" />
/// <reference types="next/types/global"/>

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export = content;
}

declare module '*.png' {
  const content: string;
  export = content;
}
declare module '*.jpeg' {
  const content: string;
  export = content;
}
declare module '*.jpg' {
  const content: string;
  export = content;
}
declare module '*.webp' {
  const content: string;
  export = content;
}
