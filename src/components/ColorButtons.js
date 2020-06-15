import React from 'react';

class ColorButtons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentId: false
        };
    }
    render() {
        const changeColor = color => {
            this.props.changeFunction(color, this.props.forFont ? "font" : "")
        }
        return (
                <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>{
                    this.props.colors.map((colorOur, index) => {
                        return (
                                <button onClick={() => {
                                    this.setState({currentId: index});
                                    changeColor(colorOur)
                                }}
                                        style={{
                                            background: colorOur,
                                            margin: '2px',
                                            height: "23px",
                                            width: "23px",
                                            cursor: "pointer"
                                        }}>
                                </button>
                        )
                    })
                }
                </div>
        )
    }
}

export default ColorButtons;