import React from 'react';
import './App.css';
import PageSection from "./components/PageSection";
import {initialSectionsData} from "./mockData/initialData";
import monochromeTable from "./mockData/monochromeTable";
import colorTable from "./mockData/colorTable";
import ColorButtons from "./components/ColorButtons";
import fontsTable from "./mockData/fontsTable";
import {randomAll} from "./helpers/randomDataGenerator";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFont: "OpenSans",
            headerSize: 22,
            paragraphSize: 14,
            activeColor: "#f4511e",
            fontColor: "#808080",
            activeSection: null,
            sectionData: initialSectionsData,
        };
    }

    render() {
        const changeFont = (newFont) => {
            this.setState({currentFont: newFont})
        }

        const changeFontSize = (newSize, isHeader) => {
            isHeader ? this.setState({headerSize: newSize}) : this.setState({paragraphSize: newSize})
        }

        const changeColor = (color, themeElement) => {
            themeElement === "font" ? this.setState({fontColor: color}) : this.setState({activeColor: color})
        }

        const activateSection = async id => {
            await this.setState({activeSection: id});
        }

        const changeGrid = newGrid => {
            this.setState(prevState => ({
                sectionData: prevState.sectionData.map(
                    obj => (obj.id === this.state.activeSection ? Object.assign(obj, { grid: newGrid }) : obj)
                )
            }));
        }

        const changeOption = (option, isActive) => {

            let updateObj = {};
            updateObj[option] = isActive;

           this.setState(prevState => ({
                sectionData: prevState.sectionData.map(
                    obj => (obj.id === this.state.activeSection ? Object.assign(obj, updateObj) : obj)
                )
            }));
        }

        const randomContent = () => {
            let newState = randomAll(initialSectionsData,fontsTable,colorTable,monochromeTable);
            console.log("Aaaa");
            console.log(newState);
            this.setState(newState)
        }

        return (
            <div style={{display: "flex", flexDirection: "row", flexWrap: "nowrap"}}>
                <div style={{
                    width: "calc(100% - 350px)",
                    fontFamily: this.state.currentFont,
                    color: this.state.fontColor
                }}>
                    {this.state.sectionData.map((section, index) => (
                            <PageSection configData={section} contentSize={this.state.paragraphSize}
                                         headerSize={this.state.headerSize} activeColor={this.state.activeColor}
                                         selectFunction={activateSection}
                                         id={index} active={this.state.activeSection} key={index}/>
                        )
                    )}
                </div>
                <div style={{width: "349px", padding: "20px", borderLeft: "1px solid #cccccc", fontFamily: "Kalam"}}>
                    <img src={"/images/logo.jpg"}/>
                    <h4>General customisation:</h4>
                    <div>
                        <h5>Theme active color:</h5>
                        <ColorButtons colors={colorTable} changeFunction={changeColor}/>
                    </div>
                    <div>
                        <h5>Theme font:</h5>
                        <select onChange={(el) => {
                            changeFont(el.target.value)
                        }}>{fontsTable.map((font, index) => (<option value={font} key={index}>{font}</option>))}
                        </select>
                    </div>
                    <div>
                        <h5>Theme font color:</h5>
                        <ColorButtons colors={monochromeTable} changeFunction={changeColor} forFont={true}/>
                    </div>
                    <div>
                        <h5>Header size:</h5>
                        <input type={"number"} value={this.state.headerSize} onChange={(el) => {
                            changeFontSize(el.target.value, true)
                        }}/>
                    </div>
                    <div>
                        <h5>Text size:</h5>
                        <input type={"number"} value={this.state.paragraphSize} onChange={(el) => {
                            changeFontSize(el.target.value)
                        }}/>
                    </div>
                    <div style={{height: "1px", width: "100%", background: "#ccc", margin: "20px 0"}}>&nbsp;</div>

                    {this.state.activeSection != null &&
                    <div>
                        <h4>Section customisation:</h4>
                        <div>
                            <h5>Grid:</h5>
                            <input type={"number"} name={"grid"} value={this.state.sectionData[this.state.activeSection].grid} onChange={(el)=>{changeGrid(el.target.value)}}/>
                        </div>
                        <div>
                            <h5>Chose active content:</h5>
                            <p style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                                    <label style={{flexBasis: "33%"}}><input type="checkbox" value={"banner"} checked={this.state.sectionData[this.state.activeSection].banner} style={{cursor: "pointer"}} onChange={el=>{changeOption(el.target.value,el.target.checked)}}/>Banner</label>
                                    <label style={{flexBasis: "33%"}}><input type="checkbox" value={"heading"} checked={this.state.sectionData[this.state.activeSection].heading} style={{cursor: "pointer"}} onChange={el=>{changeOption(el.target.value,el.target.checked)}}/>Heading</label>
                                    <label style={{flexBasis: "33%"}}><input type="checkbox" value={"image"} checked={this.state.sectionData[this.state.activeSection].image} style={{cursor: "pointer"}} onChange={el=>{changeOption(el.target.value,el.target.checked)}}/>Image</label>
                                    <label style={{flexBasis: "33%"}}><input type="checkbox" value={"paragraph"} checked={this.state.sectionData[this.state.activeSection].paragraph} style={{cursor: "pointer"}} onChange={el=>{changeOption(el.target.value,el.target.checked)}}/>Paragraph</label>
                                    <label style={{flexBasis: "33%"}}><input type="checkbox" value={"button"} checked={this.state.sectionData[this.state.activeSection].button} style={{cursor: "pointer"}} onChange={el=>{changeOption(el.target.value,el.target.checked)}}/>Button</label>
                                    <label style={{flexBasis: "33%"}}><input type="checkbox" value={"link"} checked={this.state.sectionData[this.state.activeSection].link} style={{cursor: "pointer"}} onChange={el=>{changeOption(el.target.value,el.target.checked)}}/>Link</label>
                            </p>
                        </div>
                        <div style={{height: "1px", width: "100%", background: "#ccc", margin: "20px 0"}}>&nbsp;</div>
                    </div>}
                    <div style={{textAlign: "center"}}>
                        <button style={{textAlign: "center"}} onClick={() =>{randomContent()}}>Random all !!</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
