import React from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="my-20 container mx-auto">
      <Helmet>
        <title>Blogs | Life Care</title>
      </Helmet>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Difference between SQL and NoSQL
        </div>
        <div className="collapse-content">
          <p>
            When it comes to choosing a database the biggest decisions is
            picking a relational (SQL) or non-relational (NoSQL) data structure.
            While both the databases are viable options still there are certain
            key differences between the two that users must keep in mind when
            making a decision. The Main Differences:
            <br />
            Type – SQL databases are primarily called as Relational Databases
            (RDBMS); whereas NoSQL database are primarily called as
            non-relational or distributed database.
            <br />
            Language – SQL databases defines and manipulates data based
            structured query language (SQL). Seeing from a side this language is
            extremely powerful. SQL is one of the most versatile and widely-used
            options available which makes it a safe choice especially for great
            complex queries.
            <br />
            Scalability – In almost all situations SQL databases are vertically
            scalable. This means that you can increase the load on a single
            server by increasing things like RAM, CPU or SSD.
            <br />
            Structure – SQL databases are table-based on the other hand NoSQL
            databases are either key-value pairs, document-based, graph
            databases or wide-column stores.
            <br />
            Support – Great support is available for all SQL database from their
            vendors. Also a lot of independent consultations are there who can
            help you with SQL database for a very large scale deployments but
            for some NoSQL database you still have to rely on community support
            and only limited outside experts are available for setting up and
            deploying your large scale NoSQL deployments.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed. <br />
            Basically the identity provider(IdP) generates a JWT certifying user
            identity and Resource server decodes and verifies the authenticity
            of the token using secret salt / public key.
            <br />
            Just like any other authentication mechanism, JWT also has its own
            pros and cons. Must use HTTPS to secure the Authorization headers.
            Validate algorithm name explicitly. Do not completely rely on the
            algorithm mentioned in the header of JWT. There are a few known
            attacks based on the header like algo none attack, header stripping.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
            <br />
            JavaScript is normally used for any client-side activity for one web
            application. An activity can be addressing business validation or
            dynamic page display in some schedule time interval or basic Ajax
            call kind of task. Those are used for a maximum time for any web
            application. Whereas Node JS mainly used for accessing or running
            any operating system for non-blocking operation. An operation like
            creating or executing a shell script, or getting some specific
            hardware-related information on one call or installed certificate
            details in the system or a lot of define task is non-blocking on an
            operating system. <br />
            JavaScript running in any engine like Spider monkey (FireFox),
            JavaScript Core (Safari), V8 (Google Chrome). So JavaScript
            programming is very easy to write, and put any running environment
            means proper browser. Whereas Node JS only support the V8 engine,
            which googles chrome specific. But whether it supports the V8
            engine, written JavaScript code can able to run in any environment.
            So there has no browser-specific constraint on it.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module. How to scale your NodeJS
            application with Cluster Module? A single instance of Node.js runs
            in a single thread. If you have a multi-core system then you can
            utilize every core. Sometimes developer wants to launch a cluster of
            NodeJS process to take advantage of the multi-core system. The
            cluster module allows easy creation of child processes that all
            share the same server ports.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
