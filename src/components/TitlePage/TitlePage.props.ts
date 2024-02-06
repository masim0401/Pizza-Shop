import {HTMLAttributes, ReactNode} from 'react';

export interface TitlePageProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}