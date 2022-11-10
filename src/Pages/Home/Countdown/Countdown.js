import React from "react";

const Countdown = () => {
  return (
    <div className="mb-20">
      <div>
        <h1 className="text-4xl mb-7 font-bold text-center">
          We are providing the best health care services since
        </h1>
      </div>
      <>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max lg:ml-96 lg:p-20 md:p-10 md:ml-48">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 30 }}></span>
            </span>
            sec
          </div>
        </div>
      </>
    </div>
  );
};

export default Countdown;
