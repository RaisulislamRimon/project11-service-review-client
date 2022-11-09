import React from "react";

const AllReview = () => {
  return (
    <div className="my-10">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                review text message Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusantium aut voluptates iste dolor
                reiciendis vero vitae itaque adipisci molestiae excepturi.
                Veniam est laboriosam maxime, ullam consequuntur sunt voluptatem
                alias soluta.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReview;
