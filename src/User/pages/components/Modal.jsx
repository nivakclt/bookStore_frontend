import axiosInstance from "../../../api/axiosInstance";

const Modal = ({ isOpen, onClose,images=[] }) => {
    console.log(images)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg mx-4">
        <div className="flex items-center justify-between mb-4">
        </div>

        <div>
            {
            images.length>0 ? 
            
            <div className="flex gap-3 overflow-auto">
            {
                images.map((item, index) => (
  <img
    key={index}
    src={`${axiosInstance.defaults.baseURL}/uploads/${item}`}
    width="200"
    alt="bookimg"
  />
))
            }
            </div>
            :
            <h1 className="text-center text-red">No Images Available</h1>
    
            }

        </div>
        <div className="flex justify-end">
          <button
           onClick ={onClose}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            &times
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
