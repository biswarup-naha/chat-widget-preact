const Widget = ({ onClick }) => (
    <div class="widget" onClick={onClick}>
    </div>
);

const Dialog = ({ onClose }) => (
    <div class="chatbox" onClick={onClose}>
        <p>This is the chat box.</p>
    </div>
);


import { h, Component } from 'preact';

class WidgetWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { showDialog: false };

        this.toggleDialog = this.toggleDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }

    toggleDialog() {
        this.setState(prev => ({ showDialog: !prev.showDialog }));
    }

    closeDialog() {
        this.setState({ showDialog: false });
    }

    render(_, { showDialog }) {
        return (
            <div>
                {showDialog && <Dialog onClose={this.closeDialog} />}
                <Widget onClick={this.toggleDialog} />
            </div>
        );
    }
}

export default WidgetWrapper;
