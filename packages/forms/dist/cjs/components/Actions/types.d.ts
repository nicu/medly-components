import { Button } from '@medly-components/core';
import { GetComponentProps } from '@medly-components/utils';
export declare type ButtonProps = GetComponentProps<typeof Button> & {
    type: HTMLButtonElement['type'];
    label: string;
};
export declare type FormActionSchema = {
    /** Align action horizontally only if flexDirection is set to 'row' */
    alignItems?: 'left' | 'center' | 'right';
    /** Flex Direction of the actions */
    flexDirection?: 'row' | 'column';
    /** Array of the button props */
    actions: ButtonProps[];
};
export declare type ActionProps = {
    /** Form id */
    formId: string;
    /** Disable the actions */
    disabled?: boolean;
    /** Action label for default button */
    actionLabel?: string;
    /** Action Schema */
    actionSchema?: FormActionSchema;
    /** Loading */
    isLoading?: boolean;
};
