import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <h2 style={{fontSize: this.props.fontsize}}>
                {this.props.content}
            </h2>
        )
    }
}

export default Header;
