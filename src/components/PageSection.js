import React from 'react';
import Header from "./Header";
import {contentData} from "../mockData/initialData";

class PageSection extends React.Component {
    render() {
        const calculateGrid = grid => {
            return 100 / grid
        };

        const generateContentArray = grid => {
            let contentArray = [];
            for (let i = 0; i < grid; i++) {
                contentArray.push(contentData.paragraphText);
            }
            return contentArray;
        };

        const rowStyle = {height: "33.33vh", display: "flex", flexDirection: "row", flexWrap: "nowrap"};

        return (
            <div style={{height: "33.33vh", display: "flex", flexDirection: "row", flexWrap: "nowrap"}}>
                {generateContentArray(this.props.grid).map((content, index) => {
                return (
                    <div style={{padding: "10px", fontSize: this.props.contentSize}}>
                        <Header content={"Welcome to page"} fontSize={this.props.headerSize}/>
                        <p>{content}</p>
                    </div>
                )
                })}
            </div>
            )
    }
}

export default PageSection;