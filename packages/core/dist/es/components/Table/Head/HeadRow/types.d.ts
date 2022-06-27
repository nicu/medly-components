import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { GridTemplateProps } from '../../types';
export declare type HeadRowProps = GridTemplateProps & HTMLProps<HTMLTableRowElement> & WithThemeProp & {
    showRowWithCardStyle?: boolean;
};
