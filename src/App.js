import React from 'react';
import './App.css';
import PageSection from "./components/PageSection";
import { initialSectionsData } from "./mockData/initialData";
import monochromeTable from "./mockData/monochromeTable";
import colorTable from "./mockData/colorTable";
import ColorButtons from "./components/ColorButtons";

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

        return (
            <div style={{display: "flex", flexDirection: "row", flexWrap: "nowrap"}}>
                <div style={{
                    width: "calc(100% - 350px)",
                    fontFamily: this.state.currentFont,
                    color: this.state.fontColor
                }}>
                    {this.state.sectionData.map((section, index) => (
                            <PageSection configData={section} contentSize={this.state.paragraphSize}
                                         headerSize={this.state.headerSize} activeColor={this.state.activeColor} selectFunction={activateSection}
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
                        }}>
                            <option value={"OpenSans"}>Open sans</option>
                            <option value={"Kalam"}>Kalam</option>
                            <option value={"Lora"}>Lora</option>
                            <option value={"Montserrat"}>Monserrat</option>
                            <option value={"Museo"}>Museo</option>
                            <option value={"Dosis"}>Dosis</option>
                            <option value={"Piedra"}>Piedra</option>
                            <option value={"Roboto"}>Roboto</option>
                            <option value={"Rubik"}>Rubik</option>
                            <option value={"Sacramento"}>Sacramento</option>
                            <option value={"Sriracha"}>Sriracha</option>
                            <option value={"Amatic SC"}>Amatic SC</option>
                            <option value={"Balsamiq Sans"}>Balsamiq Sans</option>
                            <option value={"Dancing Script"}>Dancing Script</option>
                            <option value={"Gloria Hallelujah"}>Gloria Hallelujah</option>
                            <option value={"Libre Baskerville"}>Libre Baskerville</option>
                            <option value={"Roboto Slab"}>Roboto Slab</option>
                            <option value={"Metal Mania"}>Metal Mania</option>
                            <option value={"Yanone Kaffeesatz"}>Yanone Kaffeesatz</option>
                        </select>
                    </div>
                    <div>
                        <h5>Theme font color:</h5>
                        <ColorButtons colors={monochromeTable} changeFunction={changeColor} forFont={true}/>
                    </div>
                    <div>
                        <h5>Header size:</h5>
                        <input type={"number"} value={this.state.headerSize} onChange={(el)=>{changeFontSize(el.target.value, true)}}/>
                    </div>
                    <div>
                        <h5>Text size:</h5>
                        <input type={"number"} value={this.state.paragraphSize} onChange={(el)=>{changeFontSize(el.target.value)}}/>
                    </div>
                    <div style={{height: "1px", width: "100%", background: "#ccc", margin: "20px 0"}}>&nbsp;</div>

                    <h4>Section customisation:</h4>
                    <div>
                        <h5>Grid:</h5>
                        <input type={"number"}/>
                    </div>
                    <div>
                        <h5>Chose active content:</h5>
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
