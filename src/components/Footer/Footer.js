import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="pt-2">
      <footer>
        <h6>
          This application was made by Alejandro Trejo following{" "}
          <p>
            <a
              className="tutorial-link"
              href="https://www.youtube.com/watch?app=desktop&v=35QCQnohLg8"
            >
              this tutorial.
            </a>
          </p>
        </h6>
      </footer>
    </div>
  );
}

export default Footer;
