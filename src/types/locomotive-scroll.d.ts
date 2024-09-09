declare module "locomotive-scroll" {
  interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    multiplier?: number;
    repeat?: boolean;
    class?: string;
    scrollbarContainer?: HTMLElement | null;
    scrollFromAnywhere?: boolean;
  }

  class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    update(): void;
    destroy(): void;
    on(event: string, callback: Function): void;
    off(event: string, callback: Function): void;
  }

  export default LocomotiveScroll;
}
