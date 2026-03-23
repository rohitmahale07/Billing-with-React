import React from "react";
import { useLocation } from 'react-router-dom';
import './main.css';
import dgvcl from './dgvcl.png';
import QR from './DGVCL_qrcode.png';
import PMY from './imagespmy.jpeg'
import  { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
// import Name from "./App.jsx";



function Main() {
   const location = useLocation();
   const data = location.state || {};

   const pdfRef = useRef();

   const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) =>{
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF ('p', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2

        pdf.addImage(imgData, 'PNG', imgX, 0, imgWidth * ratio, imgHeight * ratio);
        pdf.save("downloaded-page.pdf")

    });
   };


    return (
        <div className="main-div" >
          
           <div className="bill-container" ref={pdfRef}>
            <div className="header">
                <div className="d1">
                    <img src={dgvcl} alt="logo" className="logo" />
                </div>
                <div className="d2">
                    <div className="d2-sub1">
                        <div style={{margin:0}}>
                        <h3>Dakshin Gujrat Vij Company Limited</h3>
                        <p>Reg. Office: Urja Sadan, Nana Varachha Road, SURAT - 395006</p>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-between', margin:3}}>
                        <p>CIN: U89876J54M446</p>
                        <p>GST No: U89876J54M446</p>
                        <p>website: <a href="https://www.dgvcl.com" >dgvcl.com</a></p>
                        </div>
                    </div>
                    <div className="d2-sub2">
                        <div className="sub2-1">
                        <h3>Electricity Consumption Bill</h3>
                        </div>
                        <div className="sub2-2">
                        <p>Helpline No: 1800-233-3003</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-body">
                <div className="up3table">
                <div className="body1">
                <table >
                    <tr>{data.Name}</tr>
                    <tr>Add: {data.Address}</tr>
                    <tr>Mobile: {data.mobile}</tr>
                    <tr>{data.city}</tr>
                    <tr>{data.district}</tr>
                    <tr>Census Code: {data.census}</tr>
                    <tr>Feeder Code/Name: {data.feeder}</tr>
                </table>
                </div>
                <div className="body2">
                    <table className="tablemain" cellPadding={3}>
                        <tbody>
                            <tr>
                                <td className="table1">Subdivision Name</td>
                                <td className="table1">{data.subdivision}</td>
                            </tr>
                            <tr>
                                <td className="table1">Mobile No</td>
                                <td className="table1">{data.mobile}</td>
                            </tr>
                            <tr>
                                <td className="table1">Route Code</td>
                                <td className="table1">{data.routecode}</td>
                            </tr>
                            <tr>
                                <td className="table1">Bill Month</td>
                                <td className="table1">{data.billmonth}</td>
                            </tr>
                            <tr>
                                <td className="table1">Bill Date</td>
                                <td className="table1">{data.billdate}</td>
                            </tr>
                            <tr>
                                <td className="table1">Due Date</td>
                                <td className="table1">{data.duedate}</td>
                            </tr>
                            <tr>
                                <td colspan={2} className="table">Duration of Meter Reading</td>
                                
                            </tr>
                            <tr>
                                <td colspan={2} className="table">From Date {data.fromdate} to Date {data.todate}</td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="body3">
                   <div>
                    <img src={QR} alt="qr code" className="qr" />
                    <p>Scan QR To Pay</p>
                 </div>
                </div>
                </div>
                
                <div className="down-div">
                   <table className="dt1">
                        <tbody>
                            <tr>
                                <td className="table" colspan={2}>Consumer No:</td>
                                <td className="table">{data.consumerno}</td>
                                <td className="table" colSpan={2}>Bill No</td>
                                <td className="table" ></td>
                                <td className="table" >Ind Type</td>
                                <td className="table" >Security Deposit</td>
                                <td className="table" >seasonal days</td>
                            </tr>
                            <tr>
                                <td className="table" colSpan={2}>Meter No:</td>
                                <td className="table">{data.meterno}</td>
                                <td className="table" colSpan={2}>Tarrif</td>
                                <td className="table">NRGP</td>
                                <td className="table"></td>
                                <td className="table">{data.security}</td>
                                <td className="table"></td>
                            </tr>
                            <tr>
                                <td className="table">Phase</td>
                                <td className="table">MF</td>
                                <td className="table">Meter Status</td>
                                <td className="table">Max Demand</td>
                                <td className="table">Feeder Code</td>
                                <td className="table">Meter Rent Code</td>
                                <td className="table">HP/KW</td>
                                <td className="table">Lock Ind</td>
                                <td className="table">Lock Days</td>
                            </tr>
                            <tr>
                                <td className="table">S</td>
                                <td className="table">1</td>
                                <td className="table"></td>
                                <td className="table">{data.maxdemand}</td>
                                <td className="table">{data.feedercode}</td>
                                <td className="table">{data.meterrent}</td>
                                <td className="table">{data.hpkw}</td>
                                <td className="table"></td>
                                <td className="table"></td>
                            </tr>
                            <tr>
                                <td className="table" colSpan={2}></td>
                                <td className="table">Unit</td>
                                <td className="table">Reactive Unit</td>
                                <td className="table">Peak Unit</td>
                                <td className="table">Off Peak Unit</td>
                                <td className="table">Sr. No.</td>
                                <td className="table">Bill Details</td>
                                <td className="table">Rs. / Ps.</td>
                            </tr>
                            <tr>
                                <td className="table" colSpan={2}>Current Reading</td>
                                <td className="table">{data.unitcr}</td>
                                <td className="table">{data.reactiveunitcr}</td>
                                <td className="table"></td>
                                <td className="table"></td>
                                <td className="table">1</td>
                                <td className="table1">Fixed Charge</td>
                                <td className="table2">{data.fixedcharge}</td>
                            </tr>
                            <tr>
                                <td className="table" colSpan={2}>Past Reading</td>
                                <td className="table">{data.unitpr}</td>
                                <td className="table">{data.reactiveunitpr}</td>
                                <td className="table"></td>
                                <td className="table"></td>
                                <td className="table">2</td>
                                <td className="table1">Energy Charge</td>
                                <td className="table2">{data.energycharge}</td>
                            </tr>
                            <tr>
                                <td className="table" colSpan={2}>Consumption</td>
                                <td className="table">{data.unitc}</td>
                                <td className="table">{data.reactiveunitc}</td>
                                <td className="table"></td>
                                <td className="table"></td>
                                <td className="table">3</td>
                                <td className="table1">Minimum Charge</td>
                                <td className="table2">{data.mincharge}</td>
                            </tr>
                            <tr>
                                <td className="table" colSpan={2}>Bi-directional meter</td>
                                <td className="table">Import</td>
                                <td className="table">Export</td>
                                <td className="table">Import-TOD</td>
                                <td className="table">Export-TOD</td>
                                <td className="table">4</td>
                                <td className="table1">Reactive Charge</td>
                                <td className="table2">{data.reactivecharge}</td>
                            </tr>
                            <tr>
                                <td className="table" colSpan={2}>Current Reading</td>
                                <td className="table">{data.importcr}</td>
                                <td className="table">{data.exportcr}</td>
                                <td className="table"></td>
                                <td className="table"></td>
                                <td className="table">5</td>
                                <td className="table1">TOU Charge</td>
                                <td className="table2">{data.toucharge}</td>
                            </tr>
                            <tr>
                                <td className="table" colSpan={2}>Past Reading</td>
                                <td className="table">{data.importpr}</td>
                                <td className="table">{data.exportpr}</td>
                                <td className="table"></td>
                                <td className="table"></td>
                                <td className="table">6</td>
                                <td className="table1">Fuel Charge @2.3</td>
                                <td className="table2">{data.fuelcharge}</td>
                            </tr>
                            <tr>
                                <td className="table" colSpan={2}>Consumption</td>
                                <td className="table">{data.importc}</td>
                                <td className="table">{data.exportc}</td>
                                <td className="table"></td>
                                <td className="table"></td>
                                <td className="table">7</td>
                                <td className="table1">Electricity Duty @20</td>
                                <td className="table2">{data.eleduty}</td>
                            </tr>
                            <tr>
                                <td className="table" colSpan={2}></td>
                                <td className="table">Night Unit</td>
                                <td className="table">Solar Gen Unit</td>
                                <td className="table"></td>
                                <td className="table"></td>
                                <td className="table">8</td>
                                <td className="table1">Meter Rent</td>
                                <td className="table2">{data.meterrent}</td>
                            </tr>
                            <tr>
                                <td className="table" colSpan={2}>Current Reading</td>
                                <td className="table">0</td>
                                <td className="table"></td>
                                <td className="table" colSpan={2}>Max Demand</td>
                                <td className="table">9</td>
                                <td className="table1">Fuse misc. Charge</td>
                                <td className="table2">{data.fmc}</td>
                            </tr>
                             <tr>
                                <td className="table" colSpan={2}>Past Reading</td>
                                <td className="table">0</td>
                                <td className="table">0</td>
                                <td className="table">off peak max dem</td>
                                <td className="table">0</td>
                                <td className="table">10</td>
                                <td className="table1">DPC</td>
                                <td className="table2">{data.dpc}</td>
                            </tr>
                             <tr>
                                <td className="table" colSpan={2}>Consumption</td>
                                <td className="table"></td>
                                <td className="table"></td>
                                <td className="table">Night max dem</td>
                                <td className="table">0</td>
                                <td className="table">11</td>
                                <td className="table1">Total AMT </td>
                                <td className="table2">{data.tamt}</td>
                            </tr>
                             <tr>
                                <td className="table" colSpan={2}>Ujala</td>
                                <td className="table">Installment</td>
                                <td className="table">Amount</td>
                                <td className="table">temporary end date</td>
                                <td className="table"></td>
                                <td className="table">12</td>
                                <td className="table1">Provisional Bill</td>
                                <td className="table2">{data.pbill}</td>
                            </tr>
                             <tr>
                                <td className="table" colSpan={2}>Bulb</td>
                                <td className="table"></td>
                                <td className="table"></td>
                                <td className="table">ED exemption date</td>
                                <td className="table"></td>
                                <td className="table">13</td>
                                <td className="table1">Discount/Rebate</td>
                                <td className="table2">{data.discreb}</td>
                            </tr>
                             <tr>
                                <td className="table"  colSpan={2}>Tube Light</td>
                                <td className="table" ></td>
                                <td className="table" ></td>
                                <td className="table" >Recoverable Deposit</td>
                                <td className="table" ></td>
                                <td className="table" >14</td>
                                <td className="table1" >Total amount (11+12-13)</td>
                                <td className="table2" >{data.totalamt1}</td>
                            </tr>
                             <tr>
                                <td className="table" colSpan={2}>Fan</td>
                                <td className="table"></td>
                                <td className="table"></td>
                                <td className="table"></td>
                                <td className="table"></td>
                                <td className="table" rowSpan={2}>15</td>
                                <td className="table1" rowSpan={2}>Arrears as on 01-10-2025</td>
                                <td className="table2" rowSpan={2}>{data.arrears}</td>
                            </tr>
                             <tr>
                                <td className="table" colSpan={2}>Total</td>
                                <td className="table"></td>
                                <td className="table"></td>
                                <td className="table">Solar Scheme</td>
                                <td className="table"></td>
                            </tr>
                             <tr>
                                <td className="table" colSpan={2}>Total consumption</td>
                                <td className="table">85</td>
                                <td className="table" colSpan={2}>Total Company Charge</td>
                                <td className="table">640.25</td>
                                <td className="table">16</td>
                                <td className="table1">solar purchase rate</td>
                                <td className="table2">{data.solarpr}</td>
                            </tr>
                             <tr>
                                <td className="table" colSpan={2}>Average</td>
                                <td className="table">30</td>
                                <td className="table" colSpan={2}>Average Max Demand</td>
                                <td className="table">0</td>
                                <td className="table">17</td>
                                <td className="table1">solar banking charge</td>
                                <td className="table2">{data.solarbc}</td>
                            </tr>
                             <tr>
                                <td className="table" colSpan={2}>Advance Interest</td>
                                <td className="table">0.00</td>
                                <td className="table" colSpan={2}>Advance Interest Date</td>
                                <td className="table"></td>
                                <td className="table">18</td>
                                <td className="table1">Total amount (14+15+16-17)</td>
                                <td className="table2">{data.totalamt2}</td>
                            </tr>
                             <tr>
                                <td className="table" colSpan={6} rowSpan={8}><img src={PMY} alt="pmy" className="logo"/></td>
                               
                                <td className="table">19</td>
                                <td className="table1">Govt. Relief</td>
                                <td className="table2">{data.govtrelief}</td>
                            </tr>
                             <tr>
                                
                               
                                <td className="table">20</td>
                                <td className="table1">Total amount (18-19)</td>
                                <td className="table2">{data.totalamt3}</td>
                            </tr>
                             <tr>
                                
                               
                                <td className="table">21</td>
                                <td className="table1">Total Payment</td>
                                <td className="table2">{data.totalpayment}</td>
                            </tr>
                             <tr>
                              
                               
                                <td className="table">22</td>
                                <td className="table1">Adjustment</td>
                                <td className="table2">{data.adjustment}</td>
                            </tr>
                             <tr>
                                
                              
                                <td className="table">23</td>
                                <td className="table1">Tariff/fpppa Adjustment</td>
                                <td className="table2">{data.fpppa}</td>
                            </tr>
                             <tr>
                              
                               
                                <td className="table">24</td>
                                <td className="table1">Total Bill Amt (20-21+22+23)</td>
                                <td className="table2">{data.totalamt4}</td>
                            </tr>
                             <tr>
                              
                              
                                <td className="table" colSpan={2}>Theft Arrears</td>
                                <td className="table">Litigation Arrears</td>
                            </tr>
                             <tr>
                                
                                
                                <td className="table" colSpan={2}>{data.theft}</td>
                                <td className="table">{data.litigation}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="down-div">
                    <table className="dt2" cellPadding={0}>
                        <thead><tr><td colSpan={4}>Details Of Last Three Bills</td></tr></thead>
                        <tbody>
                            <tr>
                                <td className="table">Month</td>
                                <td className="table">{data.month1}</td>
                                <td className="table">{data.month2}</td>
                                <td className="table">{data.month3}</td>
                            </tr>
                            <tr>
                                <td className="table">Unit</td>
                                <td className="table">{data.unitmonth1}</td>
                                <td className="table">{data.unitmonth2}</td>
                                <td className="table">{data.unitmonth3}</td>
                            </tr>
                            <tr>
                                <td className="table">Amount</td>
                                <td className="table">{data.amountmonth1}</td>
                                <td className="table">{data.amountmonth2}</td>
                                <td className="table">{data.amountmonth3}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="box3">
                        {/* <img src={PMY} alt="pmy" className="logo-la" /> */}
                        <p> notice: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                           text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                           </p>
                    </div>
                </div>
              <div style={{fontSize:12}}>
                <p>This is a system generated by statement, so no signature is required. for further details please contact our nearest subdivision.</p>
              </div>

           </div>
           </div>

           <button className="download" onClick={downloadPDF}>Download PDF</button>
        </div>
    );
}

export default Main;