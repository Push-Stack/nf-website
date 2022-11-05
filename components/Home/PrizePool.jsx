import React from "react";

const PrizePool = () => {
  return (
    <div className="relative   bg-black text-white flex justify-around items-center">
      <div className="flex-none w-2/4 py-16 flex flex-col gap-4 ">
        <h1 className="text-3xl sm:text-5xl font-bold text-secondary tracking-wider">
          Win the Prize Pool
        </h1>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg sm:text-2xl max-w-sm">
            Show off your skills,earn tickets,
            <span className="block">and dominate the leader board</span>
          </h3>
          <h3 className=" text-lg sm:text-2xl text-secondary font-bold max-w-xs uppercase">
            Benefits of the Prize <span className="block">Pool:</span>
          </h3>
          <div className=" text-secondary text-lg sm:text-2xl  max-w-sm">
            <p>1. Skill based winners</p>
            <p>2. Fair chance for all gamers to win</p>
            <p>3. Leaderboard updates in real time</p>
          </div>
          <div className="uppercase flex flex-col gap-2 mt-3 text-xl sm:text-3xl tracking-wider font-bold">
            <p className="bg-secondary rounded text-black  p-2 ">
              1. The Prize Pool
            </p>
            <p>2. We host it</p>
            <p>3. You get paid</p>
          </div>
        </div>
      </div>
      <div className="flex-none">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        vitae, eum vero delectus dignissimos itaque! Culpa harum ad sint eaque
        rem dicta odit distinctio dolore perspiciatis minus laudantium nemo
        aliquid, architecto commodi?
      </div>
    </div>
  );
};

export default PrizePool;
