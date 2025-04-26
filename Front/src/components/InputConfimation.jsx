import { forwardRef } from "react";

function InputConfirmationComponent(props, ref) {
  return (
    <div className="my-3 flex justify-center">
      <input
        ref={ref}
        type="text"
        className="font-lora text-gray-600 w-3/4 h-10 border border-gray-400 bg-ivory outline-none bg-transparent px-2"
      />
    </div>
  );
}

export const InputConfirmation = forwardRef(InputConfirmationComponent);
