import React from "react";

function ProjectSection() {
  return (
    <section
      className="services-area page-section scroll-to-page"
      id="projects"
    >
      <div className="custom-container">
        <div className="services-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-stream" /> Projects
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              My <span>Projects</span>
            </h1>
          </div>
          <div className="services-items">
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-code" />
              <h2>Consultants Management</h2>
              <p>
                An application built on One-app microfrontend paradigm that
                serves consultant to manage card memmbers bookings, events,
                trips, relationship managers, worklists etc. An application
                built on One-app microfrontend paradigm that serves consultant
                to manage card memmbers bookings, events, trips, relationship
                managers, worklists etc.
              </p>
              <p>
                <span className="color-primary">Skills:</span> react js ·
                Redux.js · HTML5 · React.js · TypeScript · Redux Thunk · React
                Testing Library · JavaScript · Node.js · React Hooks · Hapi ·
                REST APIs · Docker Products · Responsive Web Design · Micro
                Frontend · Redis · Jest
              </p>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-code" />
              <h2>Super Dashboard for Monitoring/Managing Websites</h2>
              <p>
                A role and site based dashboard used to manage and monitor
                multiple coupon sites, and blog sites, built on MERN stack.
              </p>
              <p>
                <span className="color-primary">Skills:</span> Express.js ·
                react js · Redux.js · TanStack Query · Amazon S3 · HTML5 ·
                React.js · Amazon Web Services (AWS) · AWS CodePipeline · Redux
                Thunk · MongoDB · JavaScript · Node.js · React Hooks · mongoose
                · REST APIs · Responsive Web Design · Amazon EC2
              </p>
              <span className="projects">126 Projects</span>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-code" />
              <h2>Real Time Chat Application Development</h2>
              <p>
                A distributed server built with node js, socket io, redis, and
                docker to connect multiple users in separate rooms for real time
                chat and can handle upto millions of user.
              </p>
              <p>
                <span className="color-primary">Skills:</span> Express.js ·
                Amazon S3 · Amazon Web Services (AWS) · MongoDB · JavaScript ·
                Node.js · Socket.io · mongoose · REST APIs · Docker Products ·
                Redis · Amazon EC2
              </p>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-code" />
              <h2>Gym Management Dashboard</h2>
              <p>
                A dashboard to manage multiple branches, employees, trainers,
                coaches, personal trainings, plans, memberships, invoices,
                massagers, therapies, users, coupons, biometric attendance etc,
                built on React, Node, Express js, pg db.
              </p>
              <p>
                <span className="color-primary">Skills:</span> Express.js ·
                react js · Redux.js · TanStack Query · Amazon S3 · HTML5 ·
                React.js · Amazon Web Services (AWS) · pg · Redux Thunk ·
                JavaScript · Node.js · React Hooks · RTK · REST APIs ·
                Responsive Web Design · Amazon EC2
              </p>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-code" />
              <h2>Coupon and Deals Site</h2>
              <p>
                A site that provides coupon and deals for end users and
                providing cashback on each purchase from this site leveraging
                the features of Nextjs.
              </p>
              <p>
                <span className="color-primary">Skills:</span> React js ·
                Redux.js · Amazon S3 · HTML5 · React.js · Amazon Web Services
                (AWS) · Redux Thunk · MongoDB · Next.js · JavaScript · React
                Hooks · mongoose · REST APIs · Responsive Web Design · Amazon
                EC2
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
