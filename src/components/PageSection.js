import React from 'react';
import {contentData} from "../mockData/initialData";
import randomContent from "../helpers/randomDataGenerator"

class PageSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            headerSize: this.props.headerSize,
            paragraphSize: this.props.contentSize,
            activeColor: "#fa9002",
            fontColor: "#71777b"

        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({paragraphSize: parseInt(newProps.contentSize)});
        this.setState({headerSize: parseInt(newProps.headerSize)});
    }

    render() {

        const generateContentArray = grid => {
            let contentArray = [];
            for (let i = 0; i < grid; i++) {
                contentArray.push(randomContent('paragraph'));
            }
            return contentArray;
        };

        const boxStyle = {padding: "10px"}

        return (
            <div style={{minHeight: "33.33vh", display: "flex", flexDirection: "row", flexWrap: "nowrap"}}>
                {generateContentArray(this.props.configData.grid).map((content, index) => {
                return (
                    <div style={this.props.configData.image || this.props.configData.banner || this.props.configData.button ? {...boxStyle, textAlign: "center"} : {...boxStyle}}>
                        {this.props.configData.banner && <img src={randomContent(contentData,'banner')} style={{minWidth: "100%", maxWidth: "100%", width: "100%"}}/>}
                        {this.props.configData.heading && <h4 style={{fontSize: this.state.headerSize}}>{randomContent(contentData,'header')}</h4>}
                        {this.props.configData.image && <img src={randomContent(contentData,'image')} style={{minWidth: "100%", maxWidth: "100%", width: "100%"}}/>}
                        {this.props.configData.paragraph && <p style={{fontSize: this.state.paragraphSize}}>{randomContent(contentData,'paragraph')}</p>}
                        {this.props.configData.button && <button style={{fontSize: this.state.paragraphSize, borderRadius: "5px", color: "white", background: this.props.activeColor, border: "none", padding: "5px 10px", cursor: "pointer"}}>{randomContent(contentData,'button')}</button>}
                        {this.props.configData.link && <a style={{fontSize: this.state.paragraphSize, color: this.props.activeColor, cursor: "pointer"}}>{randomContent(contentData,'link')}</a>}
                    </div>
                )
                })}
            </div>
            )
    }
}

export default PageSection;