/** @format */

import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <div class="footer d-flex justify-content-evenly">
          <div class="row row-cols-auto">
            <div class="col-sm-4">
              <a
                href="https://github.com/martiiis"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github-square"></i>
              </a>
            </div>
            <div class="col-sm-4">
              <a
                href="https://blissful-feynman-45d3b3.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="far fa-id-card"></i>{" "}
              </a>
            </div>
            <div class="col-sm-4">
              <a
                href="https://www.linkedin.com/in/marta-pgomez"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-info">
          Designed and built by <strong> Marta Pineda</strong>
          <br />
          <a
            href="https://github.com/martiiis/weather_app_shecodes_react"
            target="_blank"
            class="git-link"
            rel="noreferrer"
          >
            GitHub -
          </a>
          <span> open source project.</span>
        </div>
      </footer>
    </div>
  );
}
