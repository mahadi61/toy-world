import AOS from "aos";
import "aos/dist/aos.css";
import useHeaderName from "../../hooks/useHeaderName";

AOS.init();

const Blog = () => {
  useHeaderName("Blog");

  return (
    <section>
      <div className="w-4/5 mx-auto ">
        <div
          className=" min-h-screen py-6"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h2 className="text-center text-4xl my-4">Blogs</h2>

          <div>
            <h1 className="text-3xl font-bold">
              1 .What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h1>
            <p className="mt-2">
              <span className="font-bold">Access token: </span>
              An access token is a credential that is used to access protected
              resources, such as APIs or services, on behalf of a user. It
              typically has a limited lifespan and contains information about
              the user and their permissions. When a user logs in or
              authenticates with a server, they are issued an access token,
              which they can include in their requests to gain access to the
              protected resources. The access token is usually sent in the
              authorization header of API requests as a bearer token.
            </p>
            <p className="my-2">
              <span className="font-bold">Refresh token:</span> A refresh token
              is a long-lived credential that is used to obtain a new access
              token when the current access token expires. It is usually issued
              alongside the access token during the authentication process. The
              refresh token is securely stored on the client-side (e.g.,
              browser, mobile app) and sent to the server to request a new
              access token whenever needed. Unlike access tokens, refresh tokens
              are typically not sent with each API request. Instead, they are
              exchanged for a new access token whenever the current access token
              expires.
            </p>
            <p>
              User authenticates with the server using their credentials. The
              server validates the credentials and issues an access token and a
              refresh token. The client stores the refresh token securely
              (HTTP-only cookie, local storage, or secure storage on mobile
              devices). The client includes the access token in API requests to
              access protected resources. If the access token expires, the
              client sends the refresh token to the server. The server verifies
              the refresh token and, if valid, issues a new access token. The
              client receives the new access token and continues accessing the
              protected resources. It is crucial to store tokens securely on the
              client-side to prevent unauthorized access. Best practices
              include: Storing the access token in memory or a short-lived
              storage mechanism.
            </p>
          </div>
        </div>
        <div
          className="min-h-screen py-6"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div>
            <h1 className="text-3xl mb-3 font-bold">
              2 .Compare SQL and NoSQL databases?
            </h1>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>SQL databases</th>
                    <th>NoSQL databases</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>
                      SQL databases use SQL (Structured Query Language) for data
                      manipulation and querying.
                    </td>
                    <td>
                      NoSQL databases use various data models such as key-value,
                      document, columnar, and graph.
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>
                      SQL databases are typically based on a relational model.
                    </td>
                    <td>
                      NoSQL databases provide high scalability and performance.
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>
                      Examples of SQL databases include MySQL, PostgreSQL,
                      Oracle, and SQL Server.
                    </td>
                    <td>
                      Examples of NoSQL databases include MongoDB, Cassandra,
                      Redis, and CouchDB.
                    </td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <td>SQL databases use a structured data model.</td>
                    <td>
                      NoSQL databases use a non-structured or flexible data
                      model.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          className="min-h-screen"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div>
            <h1 className="text-3xl font-bold">
              3 .What is express js? What is Nest JS?
            </h1>
            <p className="py-6">
              <span className="font-bold">Express.js: </span>
              Express.js is a minimalistic and flexible web application
              framework built for Node.js. It offers a straightforward and
              unopinionated approach to building web applications and APIs. With
              Express.js, developers can easily handle routes, middleware, and
              HTTP requests. It provides a set of robust features for creating
              web servers and handling various HTTP methods such as GET, POST,
              PUT, and DELETE. Express.js is renowned for its simplicity, making
              it a popular choice for developers who prefer a lightweight and
              customizable framework for their Node.js applications.
            </p>
            <p>
              <span className="font-bold">Nest.js:</span> Nest.js, on the other
              hand, is a progressive and opinionated framework for building
              efficient and scalable server-side applications. It is also built
              on top of Node.js and utilizes TypeScript as its primary language.
              Nest.js follows the modular architecture pattern and takes
              inspiration from Angular to provide a structured and organized
              development experience. It integrates well with other libraries
              and frameworks and offers a wide range of features such as
              dependency injection, middleware, routing, and more. Nest.js is
              designed to handle complex and enterprise-level applications,
              providing developers with a powerful toolset to build robust and
              maintainable server-side applications.
            </p>
          </div>
        </div>
        <div
          className="min-h-screen"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div>
            <h1 className="text-3xl font-bold">
              4 .What is MongoDB aggregate and how does it work?
            </h1>
            <p className="py-6">
              MongoDB's aggregate framework is a powerful feature that allows
              for advanced data processing and analysis. It operates on a
              collection of documents and follows a pipeline-based approach. In
              this framework, data is processed through a series of stages,
              where each stage performs a specific operation on the input data
              and passes the results to the next stage. The aggregate pipeline
              consists of multiple stages that can include operations like
              filtering, grouping, sorting, joining, and more. Each stage takes
              the input data and applies a particular transformation or
              computation to it. The output of one stage becomes the input for
              the next stage in the pipeline. Using the aggregate framework, you
              can perform complex operations on your data, such as grouping
              documents based on specific criteria, filtering out unwanted data,
              reshaping the data, computing statistics, and much more. By
              combining different stages in the pipeline, you can create
              sophisticated data aggregation pipelines to meet your specific
              requirements. At the end of the pipeline, the final stage returns
              the aggregated result. This can be a single document, a set of
              documents, or computed values based on the transformations
              performed in the pipeline. The aggregate framework offers a wide
              range of operators and expressions to handle various data
              aggregation tasks, providing developers with a flexible and
              efficient way to analyze and process data in MongoDB.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
