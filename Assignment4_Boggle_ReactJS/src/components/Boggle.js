import React from 'react';
import './Boggle.css';
import logo from './logo.png';

class Boggle extends React.Component {
   render() {
      return (
         <body>
    <div id="boggle-container">
        <img src={logo} className="logo" alt="logo" />
        <div id="board">
            <div className="row">
                <div className="boggle">
                    <span>T</span>
                </div> 
                <div className="boggle">
                    <span>A</span>
                </div> 
                <div className="boggle">
                    <span>O</span>
                </div> 
                <div className="boggle">
                    <span>C</span>
                </div> 
            </div> 
            <div className="row">
                <div className="boggle">
                    <span>L</span>
                </div> 
                <div className="boggle">
                    <span>I</span>
                </div> 
                <div class="boggle">
                    <span>S</span>
                </div> 
                <div className="boggle">
                    <span>M</span>
                </div> 
            </div> 
            <div className="row">
                <div className="boggle">
                    <span>U</span>
                </div> 
                <div className="boggle">
                    <span>N</span>
                </div> 
                <div className="boggle">
                    <span>B</span>
                </div> 
                <div className="boggle">
                    <span>I</span>
                </div> 
            </div> 
            <div className="row">
                <div className="boggle">
                    <span>B</span>
                </div> 
                <div className="boggle">
                    <span>O</span>
                </div> 
                <div className="boggle">
                    <span>G</span>
                </div> 
                <div className="boggle">
                    <span>D</span>
                </div> 
            </div> 
        </div>
        
        
        <div id="word-submit">
            <span><strong>Current Word:</strong>CIS4004</span>
            <button type="button">Submit Word</button>
        </div>        

        <table id="score-table">
            <thead>
                <tr>
                    <th>Word </th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>bid</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>coat</td>
                    <td>1</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>tail</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>coal</td>
                    <td>1</td>
                </tr>
            </tbody>
            <tfoot>
                <tr id="footer">
                    <td>Total </td>
                    <td>4</td>
                </tr>
            </tfoot>
        </table>
    </div>
</body>
      );
   }
}
export default Boggle;