import { h, VNode } from 'preact';
import { useState } from 'preact/hooks';
import './style.css';

interface Props {
}

export default function App(props: Props): VNode {
    const [showDialog, setShowDialog] = useState(false);
    function toggleDialog() {
        setShowDialog(prev => !prev);
    }

    return (
        <div>
            {showDialog && <Dialog onClose={toggleDialog} />}
            <Widget onClick={toggleDialog} />
        </div>
    );
}


const Widget = ({ onClick }) => (
    <div class="widget" onClick={onClick}>
    </div>
);

const Dialog = ({ onClose }) => (
    <div class="chatbox" onClick={onClose}>
        <p>This is the chat box.</p>
    </div>
);