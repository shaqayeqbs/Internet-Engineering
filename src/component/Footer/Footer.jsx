import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter
      color="blue"
      className="font-small pt-4  h-15 min-vh-25 bg-pink"
    >
      <MDBContainer className=" text-md-left mb-0 text">
        <MDBRow className="text-center text-md-left mt-3 ">
          <MDBCol lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-5 font-weight-bold">
              Company name
            </h6>
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3 ">
            <h6 className="text-uppercase mb-4 font-weight-bold ">Products</h6>
            <p>
              <a className="" href="#!">
                MDBootstrap
              </a>
            </p>
            <p>
              <a className="" href="#!">
                MDWordPress
              </a>
            </p>
            <p>
              <a className="" href="#!">
                BrandFlow
              </a>
            </p>
            <p>
              <a className="" href="#!">
                Bootstrap Angular
              </a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a className="" href="#!">
                Your Account
              </a>
            </p>
            <p>
              <a className="" href="#!">
                Become an Affiliate
              </a>
            </p>
            <p>
              <a className="" href="#!">
                Shipping Rates
              </a>
            </p>
            <p>
              <a className="" href="#!">
                Help
              </a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="text-center align-items-center h-25">
          <MDBCol className="text-center">
            <p className="text-center text-md-center grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPagePro;
