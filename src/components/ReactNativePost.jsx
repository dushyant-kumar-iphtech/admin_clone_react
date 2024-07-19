import React from "react";

const ReactNativePost = () => {
  return (
    <div className="w-full shadow-md pt-3 pb-4 rounded-sm bg-white">
      <p className="ml-5 text-xl text-gray-500 mb-0">
        TOP 5 REACT NATIVE STARTER KITS
      </p>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-2">
        <div className="pt-2 pl-2 md:pl-4 pr-2">
          <img
            src="https://flatlogic.github.io/react-material-admin-full/static/media/rnsHero.bde845e7.png"
            alt=""
          />
        </div>
        <div className="px-2">
          <p className="text-xs text-gray-400">Nastassia Ovchinnikova</p>
          <p className="text-md text-gray-500">
            React Native allows us to create a boilerplate that have been
            crafted for both platforms. The ability to create an app both for
            Android and iOS...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReactNativePost;
