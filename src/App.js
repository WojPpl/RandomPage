import React from 'react';
import './App.css';
import PageSection from "./components/PageSection";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFont: "OpenSans",
            headerSize: 22,
            paragraphSize: 14,
            activeColor: "#fa9002",
            fontColor: "#71777b",
            activeSection: null,

        };
    }

    render() {
        const changeFont = (newFont) => {
            this.setState({currentFont: newFont})
        }

        const changeFontSize = (newSize, isHeader) => {
            isHeader ? this.setState({headerSize: newSize}) : this.setState({paragraphSize: newSize})
        }

        return (
            <div style={{display: "flex", flexDirection: "row", flexWrap: "nowrap"}}>
                <div style={{width: "calc(100% - 350px", fontFamily: this.state.currentFont, color: this.state.fontColor}}>
                    <PageSection grid={1} active={true} contentSize={this.state.paragraphSize} headerSize={this.state.headerSize}/>
                    <PageSection grid={4} contentSize={this.state.paragraphSize} headerSize={this.state.headerSize}/>
                    <PageSection grid={2} contentSize={this.state.paragraphSize} headerSize={this.state.headerSize}/>
                </div>
                <div style={{width: "349px", padding: "20px", borderLeft: "1px solid #cccccc", fontFamily: "Kalam"}}>
                    <img src={"/images/logo.jpg"}/>
                    <h4>General customisation:</h4>
                    <div>
                        <h5>Theme active color:</h5>
                    </div>
                    <div>
                        <h5>Theme font:</h5>
                        <select onChange={(el) => {
                            changeFont(el.target.value)
                        }}>
                            <option value={"OpenSans"}>Open sans</option>
                            <option value={"Kalam"}>Kalam</option>
                            <option value={"Lora"}>Lora</option>
                            <option value={"Montserrat"}>Monserrat</option>
                            <option value={"Museo"}>Museo</option>
                            <option value={"Dosis"}>Dosis</option>
                        </select>
                    </div>
                    <div>
                        <h5>Header size:</h5>
                        <input type={"number"}/>
                    </div>
                    <div>
                        <h5>Paragraph size:</h5>
                        <input type={"number"}/>
                    </div>
                    <div style={{height: "1px", width: "100%", background: "#ccc", margin: "20px 0"}}>&nbsp;</div>
                    <div>
                        <h5>Grid:</h5>
                        <input type={"number"}/>
                    </div>
                    <div>
                        <h5>Active content:</h5>
                        <p>
                            <label><input type="checkbox"/>Banner</label>
                            <label><input type="checkbox"/>Heading</label>
                            <label><input type="checkbox"/>Image</label>
                        </p>
                        <p>
                            <label><input type="checkbox"/>Paragraph</label>
                            <label><input type="checkbox"/>Button</label>
                            <label><input type="checkbox"/>Link</label>
                        </p>
                    </div>
                    <div style={{height: "1px", width: "100%", background: "#ccc", margin: "20px 0"}}>&nbsp;</div>
                    <div style={{textAlign: "center"}}>
                        <button style={{textAlign: "center"}}>Random all !!</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
