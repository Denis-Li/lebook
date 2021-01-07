import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'Yo'
    }

    activateEditMode() {
        this.setState( {
            editMode: true
        });
        // this.state.editMode = true;
        // this.forceUpdate();
    }

    render() {
        return(
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status} />
                    </div>
                }
    
            </div>
        )
    }
}



export default ProfileStatus;