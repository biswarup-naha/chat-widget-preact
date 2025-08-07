import { h, VNode } from 'preact';
import {} from 'preact'

import './style.css';
import WidgetWrapper from './chat';

interface Props {
    color?: string;
}

export default function App(props: Props): VNode {
    
    return (
        <WidgetWrapper />
    );
}


