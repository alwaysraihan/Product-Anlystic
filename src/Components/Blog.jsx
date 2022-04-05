import React from "react";

const Blog = () => {
  return (
    <div className="my-16 px-5 md:px-[20%]">
      {/* Question-1 */}
      <h1 className="text-4xl mb-3">What is context api ?</h1>
      <p className="text-xl">
        The context api is a react structure that enables us to share data all
        over the component have on the application. Basically context api used,
        when a data needs to be accesible by many components. Context api makes
        easier do transfer and share data to other component. In the
        prop-drilling structure we pass props all levels of our application. But
        cnotext api sloved the prop-diiling system of all over the component.
        Using context api we can share any data easily.
      </p>
      {/* Question-2  */}
      <h1 className="text-4xl mt-5 mb-3">What is semantic tag ?</h1>
      <p className="text-xl">
        A semantic tag is meaningful for the browser and it describes what is in
        our content. Semantic tags help search engines better optimize And
        semantic tags also help screen readers. Semantic tags represent what
        information is on the web page. Semantic tags clearly describe the
        content and make it accessible to the blind. The overall semantic HTML
        tag has many advantages and it provides clear information about the web
        page
      </p>
    </div>
  );
};

export default Blog;
