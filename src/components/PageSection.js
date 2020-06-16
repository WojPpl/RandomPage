import React from 'react';
import {contentData} from "../mockData/initialData";
import {randomContent} from "../helpers/randomDataGenerator"

class PageSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            headerSize: this.props.headerSize,
            paragraphSize: this.props.contentSize,
            active: false
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({paragraphSize: parseInt(newProps.contentSize)});
        this.setState({headerSize: parseInt(newProps.headerSize)});
        newProps.active === newProps.id ? this.setState({active: true}) : this.setState({active: false})
    }

    render() {

        const generateContentArray = grid => {
            let contentArray = [];
            for (let i = 0; i < grid; i++) {
                contentArray.push("");
            }
            return contentArray;
        };

        const handleSelect = (id) => {
            this.props.selectFunction(id);
        }

        const boxStyle = {padding: "10px"};
        const containerStyle = {display: "flex", flexDirection: "row", flexWrap: "nowrap", cursor: "pointer"};

        return (
            <div style={this.state.active ? {...containerStyle, background: "rgba(0,0,0,0.03)"} : {...containerStyle}} onClick={()=>handleSelect(this.props.id)}>
                {generateContentArray(this.props.configData.grid).map((content, index) => {
                return (
                    <div style={this.props.configData.image || this.props.configData.banner || this.props.configData.button ? {...boxStyle, textAlign: "center"} : {...boxStyle}}>
                        {this.props.configData.banner && <img src={randomContent(contentData,'banner')} style={{minWidth: "100%", maxWidth: "100%", width: "100%"}}/>}
                        {this.props.configData.heading && <h4 style={{fontSize: this.state.headerSize}}>{randomContent(contentData,'header')}</h4>}
                        {this.props.configData.image && <img src={randomContent(contentData,'image')} style={{minWidth: "100%", maxWidth: "100%", width: "100%"}}/>}
                        {this.props.configData.paragraph && <p style={{fontSize: this.state.paragraphSize}}>{randomContent(contentData,'paragraph')}</p>}
                        {this.props.configData.button && <button style={{fontSize: this.state.paragraphSize, borderRadius: "5px", color: "white", background: this.props.activeColor, border: "none", padding: "5px 10px", cursor: "pointer"}}>{randomContent(contentData,'button')}</button>}
                        {this.props.configData.link && <a style={{fontSize: this.state.paragraphSize, color: this.props.activeColor, cursor: "pointer"}}>{randomContent(contentData,'link')}</a>}
                        {}
                    </div>
                )
                })}
            </div>
            )
    }
}

export default PageSection;