import "react-redux";

declare global {
  type Action<T extends any = any> = {
    type: string;
    payload?: T;
  };
}
