import { HTMLProps } from '@medly-components/utils';
import type { FC, ReactNode } from 'react';
export declare type BreadcrumbProps = Omit<HTMLProps<HTMLOListElement>, 'type'> & {
    /** You can pass any separator which you can use between the links */
    separator?: string | ReactNode;
};
export declare type BreadcrumbStaticProps = {
    Item: FC<HTMLProps<HTMLLIElement>>;
    Back: FC<HTMLProps<HTMLLIElement>>;
};
