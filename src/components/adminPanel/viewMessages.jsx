

const Messages = () => {
  return (
    <div className="text-gray-400  lg:-ml-[10rem] relative">
      <ImageOne />
      <div className="mx-[8rem]">
       <div className="grid grid-cols-3 gap-4 mx-4">
        <div className="px-6 py-6">
           <div className="text-md text-bold text-gray-600">sender name</div>
           <div className="text-sm font-mono text-gray-600">sender email</div>
           <div className="shadow-sm">
                message sent from the sender
            </div>
        </div >
        <div className="px-6 py-6">
           <div className="text-md text-bold text-gray-600">sender name</div>
           <div className="text-sm font-mono text-gray-600">sender email</div>
           <div className="shadow-sm">
            message sent from the sender
           </div>
        </div>
        <div className="px-6 py-6">
           <div className="text-md text-bold text-gray-600">sender name</div>
           <div className="text-sm font-mono text-gray-600">sender email</div>
           <div className="shadow-sm">
           message sent from the sender
           </div>
        </div>
        <div className="px-6 py-6">
           <div className="text-md text-bold text-gray-600">sender name</div>
           <div className="text-sm font-mono text-gray-600">sender email</div>
           <div className="shadow-sm">
           message sent from the sender
           </div>
        </div>
       </div>
      </div>
      <ImageTwo />
    </div>
  );
};

export default Messages;
