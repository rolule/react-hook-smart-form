import { FieldErrors } from "react-hook-form";
export declare type SubmitHandlerEventless<T> = (data: T) => unknown | Promise<unknown>;
export declare type SubmitErrorHandlerEventless<T> = (errors: FieldErrors<T>) => unknown | Promise<unknown>;
