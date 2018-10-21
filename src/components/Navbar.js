import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
      <div class="container">
        <a class="navbar-brand" href="Dashboard.html">
          Project Task Tool
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span class="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
}
