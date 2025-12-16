import React from "react";
import { useFormik } from "formik";
import "./App.css";
import Main from "./main";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const fields = [
  "Name",
  "Address",
  "mobile",
  "city",
  "district",
  "census",
  "feeder",
  "subdivision",
  "routecode",
  "billmonth",
  "billdate",
  "duedate",
  "fromdate",
  "todate",
  "consumerno",
  "meterno",
  "maxdemand",
  "feedercode",
  "meterrentcode",
  "unitcr",
  "unitpr",
  "unitc",
  "reactiveunitcr",
  "reactiveunitpr",
  "reactiveunitc",
  "importcr",
  "importpr",
  "importc",
  "exportcr",
  "exportpr",
  "exportc",
  "security",
  "hpkw",
  "fixedcharge",
  "energycharge",
  "mincharge",
  "reactivecharge",
  "toucharge",
  "fuelcharge",
  "eleduty",
  "meterrent",
  "fmc",
  "dpc",
  "tamt",
  "pbill",
  "discreb",
  "totalamt1",
  "arrears",
  "solarpr",
  "solarbc",
  "totalamt2",
  "govtrelief",
  "totalamt3",
  "totalpayment",
  "adjustment",
  "fpppa",
  "totalamt4",
  "theft",
  "litigation",
  "month1",
  "month2",
  "month3",
  "unitmonth1",
  "unitmonth2",
  "unitmonth3",
  "amountmonth1",
  "amountmonth2",
  "amountmonth3",
];

const validationSchema = Yup.object().shape(
  fields.reduce((acc, field) => {
    acc[field] = Yup.string().required("This field is required");
    return acc;
  }, {})
);

const SignupForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Name: "",
      Address: "",
      mobile: "",
      city: "",
      district: "",
      census: "",
      feeder: "",
      subdivision: "",
      routecode: "",
      billmonth: "",
      billdate: "",
      duedate: "",
      fromdate: "",
      todate: "",
      consumerno: "",
      meterno: "",
      maxdemand: "",
      feedercode: "",
      meterrentcode: "",
      unitcr: "",
      unitpr: "",
      unitc: "",
      reactiveunitcr: "",
      reactiveunitpr: "",
      reactiveunitc: "",
      importcr: "",
      importpr: "",
      importc: "",
      exportcr: "",
      exportpr: "",
      exportc: "",
      security: "",
      hpkw: "",
      fixedcharge: "",
      energycharge: "",
      mincharge: "",
      reactivecharge: "",
      toucharge: "",
      fuelcharge: "",
      eleduty: "",
      meterrent: "",
      fmc: "",
      dpc: "",
      tamt: "",
      pbill: "",
      discreb: "",
      totalamt1: "",
      arrears: "",
      solarpr: "",
      solarbc: "",
      totalamt2: "",
      govtrelief: "",
      totalamt3: "",
      totalpayment: "",
      adjustment: "",
      fpppa: "",
      totalamt4: "",
      theft: "",
      litigation: "",
      month1: "",
      month2: "",
      month3: "",
      unitmonth1: "",
      unitmonth2: "",
      unitmonth3: "",
      amountmonth1: "",
      amountmonth2: "",
      amountmonth3: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/main", { state: values });
    },
  });

  return (
    <div className="form-page">
      <h2>Enter Forms Details</h2>
      <form onSubmit={formik.handleSubmit} className="form-container">
        <div className="input-main1">
          <div className="b1-input">
            <label htmlFor="Name">Full Name :</label>
            <br />
            <input
              name="Name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.Name}
              className={
                formik.errors.Name && formik.touched.Name ? "input-error" : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.Name && formik.touched.Name && (
              <span className="error-message">{formik.errors.Name}</span>
            )}
            <br />
            <label htmlFor="Address">Address :</label>
            <br />
            <input
              name="Address"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.Address}
              className={
                formik.errors.Address && formik.touched.Address
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.Address && formik.touched.Address && (
              <span className="error-message">{formik.errors.Address}</span>
            )}
            <br />
            <label htmlFor="mobile">Mobile Number :</label>
            <br />
            <input
              name="mobile"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.mobile}
              className={
                formik.errors.mobile && formik.touched.mobile
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.mobile && formik.touched.mobile && (
              <span className="error-message">{formik.errors.mobile}</span>
            )}
            <br />
            <label htmlFor="city">City :</label>
            <br />
            <input
              name="city"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.city}
              className={
                formik.errors.city && formik.touched.city ? "input-error" : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.city && formik.touched.city && (
              <span className="error-message">{formik.errors.city}</span>
            )}
            <br />
            <label htmlFor="district">District :</label>
            <br />
            <input
              name="district"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.district}
              className={
                formik.errors.district && formik.touched.district
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.district && formik.touched.district && (
              <span className="error-message">{formik.errors.district}</span>
            )}
            <br />
            <label htmlFor="census">Census Code :</label>
            <br />
            <input
              name="census"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.census}
              className={
                formik.errors.census && formik.touched.census
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.census && formik.touched.census && (
              <span className="error-message">{formik.errors.census}</span>
            )}
            <br />
            <label htmlFor="feeder">Feeder Code :</label>
            <br />
            <input
              name="feeder"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.feeder}
              className={
                formik.errors.feeder && formik.touched.feeder
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.feeder && formik.touched.feeder && (
              <span className="error-message">{formik.errors.feeder}</span>
            )}{" "}
            <br />
            <label htmlFor="subdivision">Subdivision Name :</label>
            <br />
            <input
              name="subdivision"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.subdivision}
              className={
                formik.errors.subdivision && formik.touched.subdivision
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.subdivision && formik.touched.subdivision && (
              <span className="error-message">{formik.errors.subdivision}</span>
            )}
            <br />
            <label htmlFor="routecode">Route Code :</label>
            <br />
            <input
              name="routecode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.routecode}
              className={
                formik.errors.routecode && formik.touched.routecode
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.routecode && formik.touched.routecode && (
              <span className="error-message">{formik.errors.routecode}</span>
            )}
            <br />
            <label htmlFor="consumerno">Consumer No :</label>
            <br />
            <input
              name="consumerno"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.consumerno}
              className={
                formik.errors.consumerno && formik.touched.consumerno
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.consumerno && formik.touched.consumerno && (
              <span className="error-message">{formik.errors.consumerno}</span>
            )}
            <br />
            <label htmlFor="meterno">Meter No :</label>
            <br />
            <input
              name="meterno"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.meterno}
              className={
                formik.errors.meterno && formik.touched.meterno
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.meterno && formik.touched.meterno && (
              <span className="error-message">{formik.errors.meterno}</span>
            )}
            <br />
          </div>

          <div className="b2-input">
            <label htmlFor="billmonth">Bill Month :</label>
            <br />
            <input
              name="billmonth"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.billmonth}
              placeholder="e.g: Oct , 2025"
              className={
                formik.errors.billmonth && formik.touched.billmonth
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.billmonth && formik.touched.billmonth && (
              <span className="error-message">{formik.errors.billmonth}</span>
            )}
            <br />

            <label htmlFor="billdate">Bill Date :</label>
            <br />
            <input
              className={`init ${
                formik.errors.billdate && formik.touched.billdate
                  ? "input-error"
                  : ""
              }`}
              name="billdate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.billdate}
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.billdate && formik.touched.billdate && (
              <span className="error-message">{formik.errors.billdate}</span>
            )}
            <br />

            <label htmlFor="duedate">Due Date :</label>
            <br />
            <input
              className={`init ${
                formik.errors.duedate && formik.touched.duedate
                  ? "input-error"
                  : ""
              }`}
              name="duedate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.duedate}
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.duedate && formik.touched.duedate && (
              <span className="error-message">{formik.errors.duedate}</span>
            )}
            <br />

            <label htmlFor="fromdate">From Date :</label>
            <br />
            <input
              className={`init ${
                formik.errors.fromdate && formik.touched.fromdate
                  ? "input-error"
                  : ""
              }`}
              name="fromdate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.fromdate}
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.fromdate && formik.touched.fromdate && (
              <span className="error-message">{formik.errors.fromdate}</span>
            )}
            <br />
            <label htmlFor="todate">To Date :</label>
            <br />
            <input
              className={`init ${
                formik.errors.todate && formik.touched.todate
                  ? "input-error"
                  : ""
              }`}
              name="todate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.todate}
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.todate && formik.touched.todate && (
              <span className="error-message">{formik.errors.todate}</span>
            )}
            <br />
            <label htmlFor="maxdemand">Max Demand :</label>
            <br />
            <input
              name="maxdemand"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.maxdemand}
              className={
                formik.errors.maxdemand && formik.touched.maxdemand
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.maxdemand && formik.touched.maxdemand && (
              <span className="error-message">{formik.errors.maxdemand}</span>
            )}
            <br />
            <label htmlFor="feedercode">Feeder Code :</label>
            <br />
            <input
              name="feedercode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.feedercode}
              className={
                formik.errors.feedercode && formik.touched.feedercode
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.feedercode && formik.touched.feedercode && (
              <span className="error-message">{formik.errors.feedercode}</span>
            )}
            <br />
            <label htmlFor="meterrentcode">Meter Rent Code :</label>
            <br />
            <input
              name="meterrentcode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.meterrentcode}
              className={
                formik.errors.meterrentcode && formik.touched.meterrentcode
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.meterrentcode && formik.touched.meterrentcode && (
              <span className="error-message">
                {formik.errors.meterrentcode}
              </span>
            )}
            <br />

            <label htmlFor="unitcr">Unit (current reading):</label>
            <br />
            <input
              name="unitcr"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.unitcr}
              className={
                formik.errors.unitcr && formik.touched.unitcr
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.unitcr && formik.touched.unitcr && (
              <span className="error-message">{formik.errors.unitcr}</span>
            )}
            <br />
            <label htmlFor="unitpr">Unit (past reading):</label>
            <br />
            <input
              name="unitpr"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.unitpr}
              className={
                formik.errors.unitpr && formik.touched.unitpr
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.unitpr && formik.touched.unitpr && (
              <span className="error-message">{formik.errors.unitpr}</span>
            )}
            <br />
            <label htmlFor="unitc">Unit (consumption):</label>
            <br />
            <input
              name="unitc"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.unitc}
              className={
                formik.errors.unitc && formik.touched.unitc ? "input-error" : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.unitc && formik.touched.unitc && (
              <span className="error-message">{formik.errors.unitc}</span>
            )}
            <br />
          </div>

          <div className="b3-input">
            <label htmlFor="reactiveunitcr">
              Reactive Unit(current reading) :
            </label>
            <br />
            <input
              name="reactiveunitcr"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.reactiveunitcr}
              className={
                formik.errors.reactiveunitcr && formik.touched.reactiveunitcr
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.reactiveunitcr && formik.touched.reactiveunitcr && (
              <span className="error-message">
                {formik.errors.reactiveunitcr}
              </span>
            )}
            <br />
            <label htmlFor="reactiveunitpr">
              Reactive Unit(past reading) :
            </label>
            <br />
            <input
              name="reactiveunitpr"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.reactiveunitpr}
              className={
                formik.errors.reactiveunitpr && formik.touched.reactiveunitpr
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.reactiveunitpr && formik.touched.reactiveunitpr && (
              <span className="error-message">
                {formik.errors.reactiveunitpr}
              </span>
            )}
            <br />
            <label htmlFor="reactiveunitc">Reactive Unit(consumption) :</label>
            <br />
            <input
              name="reactiveunitc"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.reactiveunitc}
              className={
                formik.errors.reactiveunitc && formik.touched.reactiveunitc
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.reactiveunitc && formik.touched.reactiveunitc && (
              <span className="error-message">
                {formik.errors.reactiveunitc}
              </span>
            )}
            <br />

            <label htmlFor="importcr">Import(current reading) :</label>
            <br />
            <input
              name="importcr"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.importcr}
              className={
                formik.errors.importcr && formik.touched.importcr
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.importcr && formik.touched.importcr && (
              <span className="error-message">{formik.errors.importcr}</span>
            )}
            <br />
            <label htmlFor="importpr">Import(past reading) :</label>
            <br />
            <input
              name="importpr"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.importpr}
              className={
                formik.errors.importpr && formik.touched.importpr
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.importpr && formik.touched.importpr && (
              <span className="error-message">{formik.errors.importpr}</span>
            )}
            <br />
            <label htmlFor="importc">Import(consumption) :</label>
            <br />
            <input
              name="importc"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.importc}
              className={
                formik.errors.importc && formik.touched.importc
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.importc && formik.touched.importc && (
              <span className="error-message">{formik.errors.importc}</span>
            )}
            <br />

            <label htmlFor="exportcr">Export(current reading) :</label>
            <br />
            <input
              name="exportcr"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.exportcr}
              className={
                formik.errors.exportcr && formik.touched.exportcr
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.exportcr && formik.touched.exportcr && (
              <span className="error-message">{formik.errors.exportcr}</span>
            )}
            <br />
            <label htmlFor="exportpr">Export(past reading) :</label>
            <br />
            <input
              name="exportpr"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.exportpr}
              className={
                formik.errors.exportpr && formik.touched.exportpr
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.exportpr && formik.touched.exportpr && (
              <span className="error-message">{formik.errors.exportpr}</span>
            )}
            <br />
            <label htmlFor="exportc">Export(consumption) :</label>
            <br />
            <input
              name="exportc"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.exportc}
              className={
                formik.errors.exportc && formik.touched.exportc
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.exportc && formik.touched.exportc && (
              <span className="error-message">{formik.errors.exportc}</span>
            )}
            <br />

            <label htmlFor="security">Security Deposit :</label>
            <br />
            <input
              name="security"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.security}
              className={
                formik.errors.security && formik.touched.security
                  ? "input-error"
                  : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.security && formik.touched.security && (
              <span className="error-message">{formik.errors.security}</span>
            )}
            <br />
            <label htmlFor="hpkw">HP/KW :</label>
            <br />
            <input
              name="hpkw"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.hpkw}
              className={
                formik.errors.hpkw && formik.touched.hpkw ? "input-error" : ""
              }
              onBlur={formik.handleBlur}
            />
            <br />
            {formik.errors.hpkw && formik.touched.hpkw && (
              <span className="error-message">{formik.errors.hpkw}</span>
            )}
            <br />
          </div>
        </div>

        <div className="form-lastbox">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <h3>Bill Details</h3>
          </div>
          <div className="input-main2">
            <div className="b1-input">
              <label htmlFor="fixedcharge">Fixed Charge :</label>
              <br />
              <input
                name="fixedcharge"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fixedcharge}
                className={
                  formik.errors.fixedcharge && formik.touched.fixedcharge
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.fixedcharge && formik.touched.fixedcharge && (
                <span className="error-message">
                  {formik.errors.fixedcharge}
                </span>
              )}
              <br />
              <label htmlFor="energycharge">Energy Charge:</label>
              <br />
              <input
                name="energycharge"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.energycharge}
                className={
                  formik.errors.energycharge && formik.touched.energycharge
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.energycharge && formik.touched.energycharge && (
                <span className="error-message">
                  {formik.errors.energycharge}
                </span>
              )}
              <br />
              <label htmlFor="mincharge">Minimum Charge:</label>
              <br />
              <input
                name="mincharge"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.mincharge}
                className={
                  formik.errors.mincharge && formik.touched.mincharge
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.mincharge && formik.touched.mincharge && (
                <span className="error-message">{formik.errors.mincharge}</span>
              )}
              <br />

              <label htmlFor="reactivecharge">Reactive Charge:</label>
              <br />
              <input
                name="reactivecharge"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.reactivecharge}
                className={
                  formik.errors.reactivecharge && formik.touched.reactivecharge
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.reactivecharge &&
                formik.touched.reactivecharge && (
                  <span className="error-message">
                    {formik.errors.reactivecharge}
                  </span>
                )}
              <br />
              <label htmlFor="toucharge">TOU Charge:</label>
              <br />
              <input
                name="toucharge"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.toucharge}
                className={
                  formik.errors.toucharge && formik.touched.toucharge
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.toucharge && formik.touched.toucharge && (
                <span className="error-message">{formik.errors.toucharge}</span>
              )}
              <br />
              <label htmlFor="fuelcharge">Fuel Charge @2.3:</label>
              <br />
              <input
                name="fuelcharge"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fuelcharge}
                className={
                  formik.errors.fuelcharge && formik.touched.fuelcharge
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.fuelcharge && formik.touched.fuelcharge && (
                <span className="error-message">
                  {formik.errors.fuelcharge}
                </span>
              )}
              <br />

              <label htmlFor="eleduty">Electricity Duty @20:</label>
              <br />
              <input
                name="eleduty"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.eleduty}
                className={
                  formik.errors.eleduty && formik.touched.eleduty
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.eleduty && formik.touched.eleduty && (
                <span className="error-message">{formik.errors.eleduty}</span>
              )}
              <br />
              <label htmlFor="meterrent">Meter Rent:</label>
              <br />
              <input
                name="meterrent"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.meterrent}
                className={
                  formik.errors.meterrent && formik.touched.meterrent
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.meterrent && formik.touched.meterrent && (
                <span className="error-message">{formik.errors.meterrent}</span>
              )}
              <br />
              <label htmlFor="fmc">Fuse misc. Charge:</label>
              <br />
              <input
                name="fmc"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fmc}
                className={
                  formik.errors.fmc && formik.touched.fmc ? "input-error" : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.fmc && formik.touched.fmc && (
                <span className="error-message">{formik.errors.fmc}</span>
              )}
              <br />
            </div>
            <div className="b2-input">
              <label htmlFor="dpc">DPC :</label>
              <br />
              <input
                name="dpc"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.dpc}
                className={
                  formik.errors.dpc && formik.touched.dpc ? "input-error" : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.dpc && formik.touched.dpc && (
                <span className="error-message">{formik.errors.dpc}</span>
              )}
              <br />
              <label htmlFor="tamt">Total AMT :</label>
              <br />
              <input
                name="tamt"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.tamt}
                className={
                  formik.errors.tamt && formik.touched.tamt ? "input-error" : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.tamt && formik.touched.tamt && (
                <span className="error-message">{formik.errors.tamt}</span>
              )}
              <br />
              <label htmlFor="pbill">Provisional Bill :</label>
              <br />
              <input
                name="pbill"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.pbill}
                className={
                  formik.errors.pbill && formik.touched.pbill
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.pbill && formik.touched.pbill && (
                <span className="error-message">{formik.errors.pbill}</span>
              )}
              <br />
              <label htmlFor="discreb">Discount/Rebate :</label>
              <br />
              <input
                name="discreb"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.discreb}
                className={
                  formik.errors.discreb && formik.touched.discreb
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.discreb && formik.touched.discreb && (
                <span className="error-message">{formik.errors.discreb}</span>
              )}
              <br />
              <label htmlFor="totalamt1">Total amount (11+12-13):</label>
              <br />
              <input
                name="totalamt1"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.totalamt1}
                className={
                  formik.errors.totalamt1 && formik.touched.totalamt1
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.totalamt1 && formik.touched.totalamt1 && (
                <span className="error-message">{formik.errors.totalamt1}</span>
              )}
              <br />
              <label htmlFor="arrears">Arrears as on 01-10-2025:</label>
              <br />
              <input
                name="arrears"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.arrears}
                className={
                  formik.errors.arrears && formik.touched.arrears
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.arrears && formik.touched.arrears && (
                <span className="error-message">{formik.errors.arrears}</span>
              )}
              <br />
              <label htmlFor="solarpr">solar purchase rate:</label>
              <br />
              <input
                name="solarpr"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.solarpr}
                className={
                  formik.errors.solarpr && formik.touched.solarpr
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.solarpr && formik.touched.solarpr && (
                <span className="error-message">{formik.errors.solarpr}</span>
              )}
              <br />
              <label htmlFor="solarbc">solar banking charge:</label>
              <br />
              <input
                name="solarbc"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.solarbc}
                className={
                  formik.errors.solarbc && formik.touched.solarbc
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.solarbc && formik.touched.solarbc && (
                <span className="error-message">{formik.errors.solarbc}</span>
              )}
              <br />
              <label htmlFor="totalamt2">Total amount (14+15+16-17):</label>
              <br />
              <input
                name="totalamt2"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.totalamt2}
                className={
                  formik.errors.totalamt2 && formik.touched.totalamt2
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.totalamt2 && formik.touched.totalamt2 && (
                <span className="error-message">{formik.errors.totalamt2}</span>
              )}
              <br />
            </div>
            <div className="b3-input">
              <label htmlFor="govtrelief">Govt. Relief:</label>
              <br />
              <input
                name="govtrelief"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.govtrelief}
                className={
                  formik.errors.govtrelief && formik.touched.govtrelief
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.govtrelief && formik.touched.govtrelief && (
                <span className="error-message">
                  {formik.errors.govtrelief}
                </span>
              )}
              <br />
              <label htmlFor="totalamt3">Total amount (18-19):</label>
              <br />
              <input
                name="totalamt3"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.totalamt3}
                className={
                  formik.errors.totalamt3 && formik.touched.totalamt3
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.totalamt3 && formik.touched.totalamt3 && (
                <span className="error-message">{formik.errors.totalamt3}</span>
              )}
              <br />
              <label htmlFor="totalpayment">Total Payment:</label>
              <br />
              <input
                name="totalpayment"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.totalpayment}
                className={
                  formik.errors.totalpayment && formik.touched.totalpayment
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.totalpayment && formik.touched.totalpayment && (
                <span className="error-message">
                  {formik.errors.totalpayment}
                </span>
              )}
              <br />
              <label htmlFor="adjustment">Adjustment:</label>
              <br />
              <input
                name="adjustment"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.adjustment}
                className={
                  formik.errors.adjustment && formik.touched.adjustment
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.adjustment && formik.touched.adjustment && (
                <span className="error-message">
                  {formik.errors.adjustment}
                </span>
              )}
              <br />
              <label htmlFor="fpppa">Tariff/fpppa Adjustment:</label>
              <br />
              <input
                name="fpppa"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fpppa}
                className={
                  formik.errors.fpppa && formik.touched.fpppa
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.fpppa && formik.touched.fpppa && (
                <span className="error-message">{formik.errors.fpppa}</span>
              )}
              <br />
              <label htmlFor="totalamt4">Total Bill Amt (20-21+22+23):</label>
              <br />
              <input
                name="totalamt4"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.totalamt4}
                className={
                  formik.errors.totalamt4 && formik.touched.totalamt4
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.totalamt4 && formik.touched.totalamt4 && (
                <span className="error-message">{formik.errors.totalamt4}</span>
              )}
              <br />
              <label htmlFor="theft">Theft Arrears:</label>
              <br />
              <input
                name="theft"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.theft}
                className={
                  formik.errors.theft && formik.touched.theft
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.theft && formik.touched.theft && (
                <span className="error-message">{formik.errors.theft}</span>
              )}
              <br />
              <label htmlFor="litigation">Litigation Arrears:</label>
              <br />
              <input
                name="litigation"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.litigation}
                className={
                  formik.errors.litigation && formik.touched.litigation
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.litigation && formik.touched.litigation && (
                <span className="error-message">
                  {formik.errors.litigation}
                </span>
              )}
              <br />
            </div>
          </div>
        </div>

        <div className="form-lastbox">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <h3>Details Of Last Three Bill</h3>
          </div>

          <div className="input-main3">
            <div className="b1-input">
              <label htmlFor="month1">Month 1 :</label>
              <br />
              <input
                name="month1"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.month1}
                className={
                  formik.errors.month1 && formik.touched.month1
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.month1 && formik.touched.month1 && (
                <span className="error-message">{formik.errors.month1}</span>
              )}
              <br />
              <label htmlFor="month2">Month 2 :</label>
              <br />
              <input
                name="month2"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.month2}
                className={
                  formik.errors.month2 && formik.touched.month2
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.month2 && formik.touched.month2 && (
                <span className="error-message">{formik.errors.month2}</span>
              )}
              <br />
              <label htmlFor="month3">Month 3:</label>
              <br />
              <input
                name="month3"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.month3}
                className={
                  formik.errors.month3 && formik.touched.month3
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.month3 && formik.touched.month3 && (
                <span className="error-message">{formik.errors.month3}</span>
              )}
              <br />
            </div>

            <div className="b2-input">
              <label htmlFor="unitmonth1"> Unit of Month 1:</label>
              <br />
              <input
                name="unitmonth1"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.unitmonth1}
                className={
                  formik.errors.unitmonth1 && formik.touched.unitmonth1
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.unitmonth1 && formik.touched.unitmonth1 && (
                <span className="error-message">
                  {formik.errors.unitmonth1}
                </span>
              )}
              <br />
              <label htmlFor="unitmonth2">Unit of Month 2:</label>
              <br />
              <input
                name="unitmonth2"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.unitmonth2}
                className={
                  formik.errors.unitmonth2 && formik.touched.unitmonth2
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.unitmonth2 && formik.touched.unitmonth2 && (
                <span className="error-message">
                  {formik.errors.unitmonth2}
                </span>
              )}
              <br />
              <label htmlFor="unitmonth3">Unit of Month 3:</label>
              <br />
              <input
                name="unitmonth3"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.unitmonth3}
                className={
                  formik.errors.unitmonth3 && formik.touched.unitmonth3
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.unitmonth3 && formik.touched.unitmonth3 && (
                <span className="error-message">
                  {formik.errors.unitmonth3}
                </span>
              )}
              <br />
            </div>

            <div className="b3-input">
              <label htmlFor="amountmonth1">Amount of Month 1:</label>
              <br />
              <input
                name="amountmonth1"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.amountmonth1}
                className={
                  formik.errors.amountmonth1 && formik.touched.amountmonth1
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.amountmonth1 && formik.touched.amountmonth1 && (
                <span className="error-message">
                  {formik.errors.amountmonth1}
                </span>
              )}
              <br />
              <label htmlFor="amountmonth2">Amount of Month 2 :</label>
              <br />
              <input
                name="amountmonth2"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.amountmonth2}
                className={
                  formik.errors.amountmonth2 && formik.touched.amountmonth2
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.amountmonth2 && formik.touched.amountmonth2 && (
                <span className="error-message">
                  {formik.errors.amountmonth2}
                </span>
              )}
              <br />
              <label htmlFor="amountmonth3">Amount of Month 3:</label>
              <br />
              <input
                name="amountmonth3"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.amountmonth3}
                className={
                  formik.errors.amountmonth3 && formik.touched.amountmonth3
                    ? "input-error"
                    : ""
                }
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.amountmonth3 && formik.touched.amountmonth3 && (
                <span className="error-message">
                  {formik.errors.amountmonth3}
                </span>
              )}
              <br />
            </div>
          </div>
        </div>

        <div className="btn-box">
          <button
            style={{ backgroundColor: "red", borderRadius: 5, color: "white" }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
