import { PropsWithChildren } from "react";
import { SubmitErrorHandler, SubmitHandler, UseFormReturn } from "react-hook-form";
import { SubmitErrorHandlerEventless, SubmitHandlerEventless } from "./lib";
declare type SmartFormProps<T, C> = {
    form: UseFormReturn<T, C>;
    onValid?: SubmitHandlerEventless<T>;
    onValidEvent?: SubmitHandler<T>;
    onInvalid?: SubmitErrorHandlerEventless<T>;
    onInvalidEvent?: SubmitErrorHandler<T>;
} & PropsWithChildren;
export declare const SmartForm: <T, C>({ form, onValid, onValidEvent, onInvalid, onInvalidEvent, children, ...formProps }: SmartFormProps<T, C>) => JSX.Element;
export {};
